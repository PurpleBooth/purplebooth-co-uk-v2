---
categories: ["Development", "PHP", "SOLID", "OOP"]
date: "2015-02-25T21:06:24Z"
title: "L is for Liskovs Substitution Principle"
description: "How to use Liskovs Substitution Principle in PHP. The third in a series on SOLID."
draft: false
---

This is the third article in a series the SOLID principles for software design. There are 5 principles, each corresponding to a letter in the word SOLID.

1.  [S is for Single Responsibility Principle]({{< relref "0004-s-is-for-single-responsibility-principle.md" >}})
2.  [O is for Open Closed Principle]({{< relref "o-is-for-open-closed-principle.md" >}})
3.  [L is for Liskovs Substitution Principle]({{< relref "l-is-for-liskovs-substitution-principle.md" >}})
4.  [I is for Interface Segregation Principle]({{< relref "I-is-for-Interface-Segregation-principle.md" >}})
5.  [D is for Dependency Inversion Principle]({{< relref "D-is-for-Dependency-Inversion-Principle.md" >}})

These principles describe the key principles to follow to make maintainable Object Oriented Code.

L stands for Liskov's Substitution Principle or LSP (not that LSP)

{{< figure src="/Lumpy_Space.png" title="Like, Oh My Glob" >}}

Liskov's Substitution Principle states that "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program", and it's a specific violation of the Open Closed Principle when broken.

Take for example:

<pre class="code">
<code class="php">
/**
 * Writes log lines to MongoDB
 */
class MongoDBWriter extends  Writer {


    /**
     * @return true
     */
    public function connect()
    {
        return true;
    }
}
</code>
</pre>

<pre class="code">
<code class="php">
/**
 * Writes log lines in JSON to disk
 */
class JsonWriter extends Writer {


    /**
     * @return true
     */
    public function connect()
    {
        return array('success' => true);
    }
}
</code>
</pre>

<pre class="code">
<code class="php">
/**
 * Parent class for all log writers
 */
abstract class Writer {

    /**
     * @return true
     */
    abstract public function connect();

}
</code>
</pre>

Here you can see that we don't match the interface of the parent class in our _JsonWriter_. You can imagine what's going to happen when we try to check if the connection has been successfully made in a none strict manner. It'll always return true, because a none empty array is true in PHP.

Another common mistake is to have functions throw exceptions, where no exceptions were expected before. I think we've all had the situation where we've been using a dependency that unexpectedly threw a exception, causing our application to 500. We should catch and handle that error to make the interface the same across all subtypes of a type.

These are the simplest instance of violating the LSP. There is a more subtle violation of the LSP though. This is the incorrect use of inheritance.

<pre class="code">
<code class="php">
/**
 * Writes log lines to MongoDB
 */
class MongoDBWriter extends JsonWriter {

    /**
     * @return true
     */
    public function connect()
    {
        $this->log("\"json\"");

        return true;
    }
}
</code>
</pre>

<pre class="code">
<code class="php">
/**
 * Writes log lines in JSON to disk
 */
class JsonWriter extends Writer {

    /**
     * @return true
     */
    public function connect()
    {
        return true;
    }

    public function log($json) {
        error_log($json);
    }
}
</code>
</pre>

<pre class="code">
<code class="php">
/**
 * Parent class for all log writers
 */
abstract class Writer {

    /**
     * @return true
     */
    abstract public function connect();

}
</code>
</pre>

Take the above code. We have extended the _JsonWriter_ to form the _MongoDBWriter_ to utilise some of it's internal logic. However in doing so we've introduced a problem: we can no longer force a logger to be a _JsonWriter_ logger, without first assuming we might get a MongoDB writing logger instead.

This could have serious problems in a situation when we want to force a fallback logger to write only to the disk, and not to the network. What you're saying when you're extending a class, is that this class does this thing, but it does it in a less general way, more detail is specified about it's operation. If you can't make that assumption anymore your subtypes can no longer be assumed to be used the same way as the parent classes.

What's worse, when we make a change to the _JsonWriter_, we're also making a change to our MongoDBWriter. With this non-clear dependency it's highly likely we will impact the _MongoDBWriter_ with any change, as these classes, despite describing different behaviours, are now tightly coupled.

The tricky part of this rule is that it seems to be [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)ing up our code. We want to be able to share logic between our classes. However it's important to remember that OOP is really about modeling behaviours. A _MongoDBWriter_ is not a special kind of _JsonWriter_, so we shouldn't tell other components within the system that it is.

So how do I DRY up my code then? Take advantage of composition. Composition is where you move shared logic to a new class, and then set that class via a constructor or setter as a member variable in your existing class. Only if you know all classes of that type need the logic, should you use inheritance to prevent code duplication.

LSP is one of the simpler rules of SOLID, however it's one of the most effective at preventing bugs. Next up in the tour of SOLID is [I the "Interface segregation principle"]({{< relref "I-is-for-Interface-Segregation-principle.md" >}}).
