+++
categories = ["DevOps"]
date = "2015-05-31T16:04:03+01:00"
description = "A design pattern to manage docker using Ansible and SystemD"
keywords = ["Ansible", "Docker", "SystemD"]
title = "Managing Docker"

+++

Today I'm going to talk to you about a pattern for managing *[Docker](https://www.docker.com/)* with *[Ansible](http://www.ansible.com/)* and *[SystemD](https://wiki.freedesktop.org/www/Software/systemd/)*.

If you're not aware, Docker is a system for running *Linux Containers*. It's becoming increasingly popular, and is often touted as a good choice as a deployment tool. But what exactly is a *[Linux Container](https://en.wikipedia.org/wiki/LXC)*?

You can think of a container somewhere between a Operating System and a binary file. Like a binary file they run a single application, for example MySQL or Wordpress, but unlike a binary, they also contain all the additional files that are needed to run the application: be these libraries, or configuration files, or even other applications that make it possible for the application to run. This means in order to get a stable version of a bit of software up and running, you simply need a Linux machine with *Docker*, and to run the container.

This is really powerful for deploying applications. Suddenly we can simply create a container for our application and push that specific version onto a host.

Getting started with *Docker* is really easy if you have a Linux host or VM laying about. You install it with the simple install script they provide:

<pre class="code">
<code class="shell">
wget -qO- https://get.docker.com/ | sh
</code>
</pre>

Then you can get started running containers with it. Now as you won't have any containers in your system to start off with, you need to tell *Docker* to go get one for you. Thankfully many projects have provided official containers for their applications.

To retrieve one of these official containers you pull it, once pulled you can run it.

<pre class="code">
<code class="shell">
docker pull mysql
docker run --name mysql -e MYSQL_ROOT_PASSWORD=A-Password mysql
</code>
</pre>

You can create your own containers too, using a process I won't talk about now, but needless to say it's very simple and can be done from within another container, which, for example, could be running your CI server.

You'll notice that in this example I'm passing "-e" and then a parameter to the container when I run it, which sets an environment variable within the container. With *Linux Containers* we pass around parameters by setting environment variables. This is just one of a suite of 12 good practices for developing with containers, that you can read more about on [The Twelve-Factor App](http://12factor.net/).

This does leave us with a question though. How do we manage configuring and running these containers within our system. How do we ensure we can roll out a new version, and that the containers will be run on system startup? How to we manage provisioning within the system.

I've created a very simple demonstration of how you might achieve this.

The first problem, of how to we ensure that applications are running I've solved using SystemD. SystemD is the modern replacement for Init scripts, and allows you to [define a hierarchal "unit" file](https://coreos.com/docs/launching-containers/launching/getting-started-with-systemd/) that determines what pre-existing services a service needs to run, and how to run the service itself in a simple text file. Here's an example below for our MySQL container.

<pre class="code">
<code class="ini">
[Unit]
Description=MySQL Docker Container
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
ExecStartPre=-/usr/bin/docker kill mysql
ExecStartPre=-/usr/bin/docker rm mysql
ExecStartPre=/usr/bin/docker pull mysql
ExecStart=/usr/bin/docker run --name mysql -e MYSQL_ROOT_PASSWORD=A-Password mysql

[Install]
WantedBy=multi-user.target
</code>
</pre>

Here you can see in order to run this service we need to:

 * Stop (kill) any pre-existing running MySQL container
 * Then remove the image of that container that was running
 * We then update our version of MySQL to the latest version (you could specify a version of your choice here)

 Then you can see the familiar MySQL run command from the previous example to actually run the service.

 There's also a few other things to note in this file. The first things are After and Requires. Requires denotes that we need the Docker service to run this service (but doesn't specify if the service should already be running or not), and After says that this service needs not only to exist, but to be running by the time that this service starts.

The final WantedBy statement says to run this unit when running the Multi-user unit of execution (when the system has finished starting, and we have a multi-user environment).

These text files are placed in the *etc/systemd/system* directory, and are suffixed by *.service*. You can then make SystemD aware of them, and have it run them using the following commands.

<pre class="code">
<code class="shell">
sudo systemctl enable /etc/systemd/system/mysql.service
sudo systemctl start mysql
</code>
</pre>

To see any logs that are generated by this service we look in the journalctl.

<pre class="code">
<code class="shell">
sudo journalctl -u mysql
</code>
</pre>

This is all well and good, but we don't want to be creating random text files on individual hosts, we want this to be managed for us. This is where we bring *Ansible* in. Ansible is a configuration management tool.

With *Ansible* you have an inventory of machines, that you run a tasks on. These tasks are defined in yaml playbooks.

Before we can do any of that though, we need to have a machine to run it against. Here I've defined a vagrant file that runs our playbook with a single host on it.

If at this point you start getting confused as to the structure of the directory, or where the files go, here is it in a [GitHub repository](https://github.com/geerlingguy/ansible-vagrant-examples/), which may be easier to follow.

<pre class="code">
<code class="ruby">
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/vivid64"
  config.vm.network "private_network", ip: "192.168.34.10"

    config.vm.provider "virtualbox" do |v|
      v.memory = 2048
      v.cpus = 2
    end

    config.vm.define :docker do |docker|
    end

    # Ansible provisioner.
    config.vm.provision "ansible" do |ansible|
      ansible.groups = {
        "docker" => ["vagrant-docker-1"],
      }

      ansible.playbook = "provisioning/playbook.yml"
      ansible.sudo = true
    end
end
</code>
</pre>

I have then created a playbook that performs the steps that I previously described, but automatically when you run the playbook. I've even added an additional host running WordPress, so we can see MySQL doing something useful.

<pre class="code">
<code class="yaml">
---
- hosts: docker
  sudo: yes

  vars:
    mysql_password: "A-Password"

  tasks:
   - name: ensure we have wget
     apt: pkg=wget state=latest

   - name: install docker
     shell: wget -qO- https://get.docker.com/ | sh
     args:
       creates: /lib/systemd/system/docker.service

   - name: Create mysql service
     template: src=templates/mysql.service.j2 dest=/etc/systemd/system/mysql.service

   - name: Create wordpress service
     template: src=templates/wordpress.service.j2 dest=/etc/systemd/system/wordpress.service

   - name: Add mysql service
     shell: systemctl enable /etc/systemd/system/mysql.service

   - name: Add wordpress service
     shell: systemctl enable /etc/systemd/system/wordpress.service

   - name: ensure the mysql service is running
     service: name=mysql state=started enabled=yes

   - name: ensure the wordpress service is running
     service: name=wordpress state=started enabled=yes
</code>
</pre>

You'll notice that there is a  "vars" section here that now contains our MySQL password. This is because we can template files using Ansible. Here you can see the templates for MySQL and WordPress.

<pre class="code">
<code class="ini">
[Unit]
Description=MySQL Docker Container
After=docker.service
Requires=docker.service

[Service]
TimeoutStartSec=0
ExecStartPre=-/usr/bin/docker kill mysql
ExecStartPre=-/usr/bin/docker rm mysql
ExecStartPre=/usr/bin/docker pull mysql
ExecStart=/usr/bin/docker run --name mysql -e MYSQL_ROOT_PASSWORD={{ mysql_password }} mysql

[Install]
WantedBy=multi-user.target
</code>
</pre>

See the "mysql_password" that matches the variable we've set in the playbook. This will be populated before putting this file on our host.

<pre class="code">
<code class="ini">
[Unit]
Description=Wordpress Docker Container
After=mysql.service
Requires=docker.service mysql.service

[Service]
TimeoutStartSec=0
ExecStartPre=-/usr/bin/docker kill wordpress
ExecStartPre=-/usr/bin/docker rm wordpress
ExecStartPre=/usr/bin/docker pull wordpress
ExecStart=/usr/bin/docker run --name wordpress --link mysql:mysql -p 8080:80 wordpress

[Install]
WantedBy=multi-user.target
</code>
</pre>

You'll notice on the WordPress container, we're passing the "--link" parameter to make it aware of the MySQL container. Like the password we're passing into the MySQL container, this sets environment variables. This parameter sets all the environment variables from the linked container such as the root password so WordPress can connect, and it's connection details, like the port and the hostname.

Obviously this is a very simple example, but from here you can start doing more complicated things, such as breaking down the playbooks from a single file and reusing them in multiple places, and generating inventories that differ per environment, allowing you to use the same playbooks on Vagrant as on your real environment.

I'm pretty excited about docker. I think that containers massively simplify configuration management by allowing you to pre-prepare parts that will be the same in multiple places, and only enter into configuration management systems the parts that will change.

Hopefully this article has given you a good introduction into docker, and you'll think about using it for your next project.
