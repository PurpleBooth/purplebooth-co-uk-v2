+++
categories = ["DevOps"]
date = "2015-06-14T12:03:15+01:00"
description = "Previously I showed you how to get a docker container up and running. Now I'll show you how to build your own container with your own code in, and run that."
keywords = ["Docker", "NodeJS", "Express", "NPM"]
title = "Creating docker containers is easy"

+++
 There is a lot of complex sounding terms when it comes to docker, but I'm going to show you how to cut through that and get an application you've just written up and running in a docker container without much effort. Imagine you're going to revolutionise the GaaS industry (greetings as a service), and you've developed the following MVP using express and NPM.

Your server.js looks like this:
<pre class="code">
<code class="javascript">
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello World!\n");
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
</code>
</pre>

Your package.json looks like this:
<pre class="code">
<code class="javascript">
{
  "name": "dockerdemo",
  "version": "0.1.0",
  "description": "Docker demo app. You gotta have something to deploy!",
  "main": "server.js",
  "dependencies": {
    "express": "^4.12.4"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Billie Thompson <billie@purplebooth.co.uk>",
  "license": "MIT"
}

</code>
</pre>

And when you run it looks like this:
<pre class="code">
<code class="shell">
$ npm install && npm start &
$ curl localhost:3000
Hello World!
</code>
</pre>

Now this is all well and good but how are you going to get this code into a container that you can deploy to your infrastructure?
 
 
 First step is to create a [Dockerfile](https://docs.docker.com/reference/builder/).  This is a plain text file with some instructions and environment detail about our application. Our Dockerfile for this application would look like this:

<pre class="code">
<code class="docker">
FROM node:0.10-onbuild

RUN mkdir /server
ADD . /server
WORKDIR /server
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000
</code>
</pre>

Lets break this down line by line.

<pre class="code">
<code class="docker">
FROM node:0.10-onbuild
</code>
</pre>

The first line of a docker file is the "FROM" statement. This is a existing container that we're building on. I'm building on the [node:0.10-onbuild container](https://registry.hub.docker.com/_/node/), which is the official node container. 

This container has everything installed, such as npm and node, that is required to run a node application. There are lower level containers too, such as a [CentOS container](https://registry.hub.docker.com/_/centos/), or a [Ubuntu container](https://registry.hub.docker.com/_/ubuntu/). These might be more suitable if you're doing something lower level, but most of the time it's a good idea to reuse other peoples work setting up the applications and libraries you need, rather than rolling your own.

<pre class="code">
<code class="docker">
RUN mkdir /server
ADD . /server
</code>
</pre>

The next line tells docker to run the mkdir command to create a directory, and the command following that ADD's the "." repository to the image. This means that the folder /server in the container will contain everything that is in the same directory as the Dockerfile. You can exclude files using a [.dockerignore](https://docs.docker.com/reference/builder/#the-dockerignore-file). 

The thing to note about docker is that it is build on top of [AUFS](https://en.wikipedia.org/wiki/Aufs) - a layered file system, each change like this creates a new layer in the filesystem. This is good because it means that once you have the previous layers, you only need to add the new layer on top. This means that for every container that uses the node:0.10-onbuild container, we can share all the previous layers, while only adding a tiny custom layer to make a fully fledged container.

<pre class="code">
<code class="docker">
WORKDIR /server
RUN npm install
</code>
</pre>

WORKDIR changes the current working directory, same as cd does in bash, then we run an NPM install like we would on a developers machine.

<pre class="code">
<code class="docker">
ENTRYPOINT npm start
</code>
</pre>

After that we specify the entrypoint. This is the command that will be ran when we run this container, in our case we'll use it to start our express application.

<pre class="code">
<code class="docker">
EXPOSE 3000
</code>
</pre>

Expose is a special command in docker, if we were to [--link this container with another one](https://docs.docker.com/userguide/dockerlinks/ ), this would ensure an environment variable with the name "name_PORT_port_protocol" was set on the container this container was being linked to.

So that's the docker file itself. But how do we make that into something we can run in docker?

To turn this text file into a docker container we need to build it.

<pre class="code">
<code class="shell">
$ docker build -t purplebooth/dockerdemo:0.1.0 .
Sending build context to Docker daemon 8.192 kB
Sending build context to Docker daemon 
Step 0 : FROM node:0.10-onbuild
# Executing 3 build triggers
Trigger 0, COPY package.json /usr/src/app/
Step 0 : COPY package.json /usr/src/app/
 ---> Using cache
Trigger 1, RUN npm install
Step 0 : RUN npm install
 ---> Using cache
Trigger 2, COPY . /usr/src/app
Step 0 : COPY . /usr/src/app
 ---> 1c7cfad45c83
Removing intermediate container a4f0063ea346
Step 1 : EXPOSE 3000
 ---> Running in 8dc83310c7f0
 ---> 8d009637a909
Removing intermediate container 8dc83310c7f0
Step 2 : RUN mkdir /server
 ---> Running in dabe23fa6f55
 ---> c4bfa8cdd4c9
Removing intermediate container dabe23fa6f55
Step 3 : ADD . /server
 ---> 346b9ab3d304
Removing intermediate container b9ef24568263
Step 4 : WORKDIR /server
 ---> Running in c01590c12b01
 ---> a9e24d62db37
Removing intermediate container c01590c12b01
Step 5 : RUN npm install
 ---> Running in 9ddc49c3fbb8
npm WARN package.json dockerdemo@0.1.0 No repository field.
npm WARN package.json dockerdemo@0.1.0 No README data
express@4.12.4 node_modules/express
├── merge-descriptors@1.0.0
├── utils-merge@1.0.0
├── cookie-signature@1.0.6
├── methods@1.1.1
├── fresh@0.2.4
├── cookie@0.1.2
├── escape-html@1.0.1
├── range-parser@1.0.2
├── finalhandler@0.3.6
├── content-type@1.0.1
├── vary@1.0.0
├── parseurl@1.3.0
├── serve-static@1.9.3
├── content-disposition@0.5.0
├── path-to-regexp@0.1.3
├── depd@1.0.1
├── qs@2.4.2
├── on-finished@2.2.1 (ee-first@1.1.0)
├── debug@2.2.0 (ms@0.7.1)
├── etag@1.6.0 (crc@3.2.1)
├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
├── send@0.12.3 (destroy@1.0.3, ms@0.7.1, mime@1.3.4)
├── type-is@1.6.3 (media-typer@0.3.0, mime-types@2.1.1)
└── accepts@1.2.9 (negotiator@0.5.3, mime-types@2.1.1)
 ---> c492e79f29ca
Removing intermediate container 9ddc49c3fbb8
Step 6 : ENTRYPOINT npm start
 ---> Running in e4ad3aecd386
 ---> 925594502efd
Removing intermediate container e4ad3aecd386
Successfully built 925594502efd
</code>
</pre>

There's only really one switch here, and that's the "-t" flag. The "-t" flag tags the container we are building with a name and a version. 

This means that we can now run it

<pre class="code">
<code class="shell">
$ docker run -p 3001:3000 purplebooth/dockerdemo:0.1.0 &
$ curl $(boot2docker ip):3001 
Hello World!
</code>
</pre>

Now it's all well and good having this on your local machine, but we need this to be pushed out to where everyone can access it. We do this by pushing a tag to a repository.

You can [run your own](https://registry.hub.docker.com/_/registry/), or you can use the [official docker one](https://registry.hub.docker.com/). I'm going to use the official one.

The first step is to login.

<pre class="code">
<code class="shell">
$ docker login
</code>
</pre>

Once you've done that you can create your repository on the site, and push from your local machine the tag you have just created.

<pre class="code">
<code class="shell">
$ docker push purplebooth/dockerdemo
The push refers to a repository [purplebooth/dockerdemo] (len: 1)
925594502efd: Image already exists 
c492e79f29ca: Image successfully pushed 
a9e24d62db37: Image successfully pushed 
346b9ab3d304: Image successfully pushed 
c4bfa8cdd4c9: Image successfully pushed 
8d009637a909: Image successfully pushed 
1c7cfad45c83: Image successfully pushed 
506ac1b876d1: Image successfully pushed 
182c05d5ec57: Image successfully pushed 
00363a668b4c: Image successfully pushed 
cccccafed114: Image successfully pushed 
42036a7197e1: Image successfully pushed 
6ccbbffacc4d: Image successfully pushed 
ca3fb8ba8bf9: Image successfully pushed 
193eb1810e24: Image successfully pushed 
73a4c0982b27: Image successfully pushed 
9bd8130837c5: Image successfully pushed 
c69aee172ec1: Image successfully pushed 
17e468a56a40: Image successfully pushed 
15ac36dafb19: Image successfully pushed 
272a9ceee931: Image successfully pushed 
1f7b395e1580: Image successfully pushed 
25963d635584: Image successfully pushed 
f5224fc54ad2: Image successfully pushed 
61b3964dfa70: Image successfully pushed 
Digest: sha256:a5ff62af772ce82c4b05aadd93e80571db8d89f6172487614e6f165da2953827
</code>
</pre>

Now anyone in the world can run your application with a simple docker run command.

<pre class="code">
<code class="shell">
$ docker run -p 3001:3000 purplebooth/dockerdemo:0.1.0 &
$ curl $(boot2docker ip):3001 
Hello World!
</code>
</pre>

Neat, eh?

You can see the code from these examples on [GitHub](https://github.com/PurpleBooth/dockerfile).