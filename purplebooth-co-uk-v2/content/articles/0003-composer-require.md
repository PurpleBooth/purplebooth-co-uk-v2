---
categories: ["Tips", "Development", "PHP", "Composer", "Tips"]
date: "2015-02-22T21:19:37Z"
draft: false
title: "Composer Require"
description: "How to use the require command in composer to edit your dependencies"
---

Few people know this, but you don't have to edit the `composer.json` file to update or add to your required packages.

<pre class="code">
<code class="bash">
$ php composer.phar require vendor/package1:dev-master
$ php composer.phar require --dev vendor/package2:~1.1.0
</code>
</pre>

This first example adds a normal dependency, and the latter a dev dependency. It'll run an update on that single package too, if it's already in there.
