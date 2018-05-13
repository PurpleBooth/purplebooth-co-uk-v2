+++
Categories = ["OOP", "Development", "PHP", "SOLID", "OOP"]
date = "2015-02-23T19:17:37Z"
draft = false
title = "S is for Single Responsibility Principle"
Description = "How to use the Single Responsibility Principle in PHP. The first in a series on SOLID."
+++

This is the first article in a series the SOLID principles for software design. There are 5 principles, each corresponding to a letter in the word SOLID.

1. [S is for Single Responsibility Principle]({{< relref "0004-s-is-for-single-responsibility-principle.md" >}})
2. [O is for Open Closed Principle]({{< relref "o-is-for-open-closed-principle.md" >}})
3. [L is for Liskovs Substitution Principle]({{< relref "l-is-for-liskovs-substitution-principle.md" >}})
4. [I is for Interface Segregation Principle]({{< relref "I-is-for-Interface-Segregation-principle.md" >}})
5. [D is for Dependency Inversion Principle]({{< relref "D-is-for-Dependency-Inversion-Principle.md" >}})

These principles describe the key principles to follow to make maintainable Object Oriented Code.

S is the first letter in SOLID.

It stands for The Single Responsibility Principle, and means "A Class Should Have One Reason To Change".

It was first described by Tom DeMarco in 1979. He called it Cohesion, like in the phrase "High Cohesion, Low Coupling". These days we call it the Single Responsibility Principle, as popularized by  Robert C. Martin (Uncle Bob).

This principle is based around the idea that each responsibility that a class has, is a requirement. Requirements change. Isolating the change to a single class reduces the risk of breaking anything else when you add a new feature.

Take for example this class

<pre class="code">
<code class="php">

/**
 * Shopping basket.
 *
 * Represents the shopping basket, and sends order complete emails
 *
 * @package PurpleBooth\Example
 */
class Basket
{

    /**
     * @var EmailSender
     */
    private $emailSender;

    /**
     * @var string
     */
    private $subject = 'Your order has been completed';

    /**
     * @var array
     */
    private $orderItems = [];

    /**
     * The constructor
     *
     * @param EmailSender $emailSender Sends emails with a template
     */
    public function __construct(EmailSender $emailSender)
    {
        $this->emailSender = $emailSender;
    }

    /**
     * Add an item to a basket
     *
     * @param Item $item The item to add
     */
    public function addItemToBasket(Item $item)
    {
        $this->orderItems[] = $item;
    }

    /**
     * Send an order complete email
     */
    public function onComplete(Basket $basket)
    {
        $this->emailSender->send(
            'orderComplete',
            $this->subject,
            $basket
        );
    }

    /**
     * Complete the order
     *
     * Send an order complete email and when the items have
     * been purchased and clear the order items
     */
    public function orderComplete()
    {
        $this->orderItems = [];
        $this->emailSender->send(
            'orderComplete',
            $this->subject,
            $basket
        );
    }
}
</code>
</pre>

This class violates the Single Responsibility Principle because it's got two things that can cause the object to change.

1. The object can change because we have added an item
2. The object can change when we send an email

A give away code smell for this problem is injecting dependencies that are only used by some of the methods in this object. If your constructor has lots of dependencies, and they're not being used in every method. So you're not following the Single Responsibility Principle, so double check if there isn't some refactoring you can do in that class.

 Another key indicator is, if when attempting to describe what the object does, you use the word **and**. In this case: "The object represents the basket **and** sends emails when the order is complete". If you can describe your method without using the word **and** (or also, or any other joining word), you're following the Single Responsibility Principle.

Not following this rule (also known as high coupling), is going to cause you problems because now you're going to need to bring an *EmailSender* where ever you initialize your *Basket*, and what's worse, the *EmailSender* has wound its way into the order complete logic, and it's now impossible to use this class anywhere where we would want to complete an order without sending an email.

The correct way to implement this is to split each responsibility into a class. In this example this means we end up with a *Basket* and *BasketCompleteEmailListener*. We will run the *BasketCompleteEmailListener* with the [Observer pattern](http://en.wikipedia.org/wiki/Observer_pattern). This way we can still send the email when the order is complete, but we can also complete an order without sending an email.

<pre class="code">
<code class="php">

/**
 * Shopping basket.
 *
 * Represents the shopping basket
 *
 * @package PurpleBooth\Example
 */
class Basket
{
    /**
     * @var array
     */
    private $orderItems = [];

    /**
     * Add an item to a basket
     *
     * @param Item $item The item to add
     */
    public function addItemToBasket(Item $item)
    {
        $this->orderItems[] = $item;
    }

    /**
     * Completes an order
     */
    public function orderComplete()
    {
        $this->orderItems = [];
    }
}

</code>
</pre>
<pre class="code">
<code class="php">

/**
 * Listens for Basket Completion and sends an email
 *
 * @package PurpleBooth\Example
 */
class BasketCompleteEmailListener
{

    /**
     * @var EmailSender
     */
    private $emailSender;

    /**
     * @var string
     */
    private $subject = 'Your order has been completed';

    /**
     * The constructor
     *
     * @param EmailSender $emailSender Sends emails with a template
     */
    public function __construct(EmailSender $emailSender)
    {
        $this->emailSender = $emailSender;
    }

    /**
     * Send an order complete email
     */
    public function onComplete(Basket $basket)
    {
        $this->emailSender->send(
            'orderComplete',
            $this->subject,
            $basket
        );
    }
}
</code>
</pre>

Once separated like this it's clear to see: responsibilities mean requirements. The requirement to send an email, or keep track of the basket in this example. Uncoupling these responsibilities means, if we get a change in requirements to not send an email sometimes, that's perfectly achievable without changing the basket logic, so a single change, rather than both email and basket logic.

Multiple changes mean more rewriting code, and if you're as lazy as I am, that's something you want to avoid.
