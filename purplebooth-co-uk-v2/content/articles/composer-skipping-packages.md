---
date: "2015-03-27T16:02:17Z"
title: "Skipping Packages with Composer"
categories: ["PHP", "Composer"]
description: "Just a quick note, if you find your project doesn’t work with a specific release of a package that you’re pulling in with composer, maybe due to a bug, maybe due to an accidental backwards compatibility break, you don’t need to lock composer to a specific version. You can tell composer to skip a single version, or range of versions. This allows you to avoid the situation where you can no longer pull in bug fixes or performance enhancements."
---

Just a quick note, if you find your project doesn't work with a specific release of a package that you're pulling in with [composer](https://getcomposer.org), maybe due to a bug, maybe due to an accidental backwards compatibility break, you don't need to lock composer to a specific version. You can tell composer to skip a single version, or range of versions. This allows you to avoid the situation where you can no longer pull in bug fixes or performance enhancements.

We can do this using the and operator, and the not conditional.

The and operator for packages in composer is a space " ", or a comma ",", and the not conditional is "!=VERSION".

In this example we're going to combine the not version conditional with the [semver](https://semver.io) none backwards compatibility breaking change conditional, "^". In practice this means if we're starting at version 2.1.0, this conditional makes the range of versions available is 2.1.0 to anything lower than 3.0.0.

It's worth noting that the semver conditional is the preferred way of setting required package versions, and soon will be the default in composer.

<pre>
<code class="json">
{
    "require": {
        "doctrine/orm" : "^2.1.0 !=2.1.5"
    }
}
</code>
</pre>

You can also create more complicated package requirements by using the or operator. The or operator is "||". Using this you can combine two ranges to skip a large series of versions.

<pre>
<code class="json">
{
    "require": {
        "doctrine/orm" : "^2.1.0 <2.1.5 || ^2.4.0"
    }
}
</code>
</pre>

In this case we're saying we want versions from 2.1.0 to versions less than 2.1.5 or 2.4.0 to anything less than version 3.0.0

This will allow you to keep the advantages of being able to pull in additional fixes and upgrades, while allowing you to avoid broken releases.
