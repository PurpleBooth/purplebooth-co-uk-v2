---
categories: ["Development", "PHP", "SOLID", "OOP"]
date: "2015-02-24T19:46:10Z"
draft: false
title: "O is for Open Closed Principle"
description: "How to use Open Closed Principle in PHP. The second in a series on SOLID."
---

This is the second article in a series the SOLID principles for software design. There are 5 principles, each corresponding to a letter in the word SOLID.

1.  [S is for Single Responsibility Principle](/blog/2015/1/23/s-is-for-single-responsibility-principle)
2.  [O is for Open Closed Principle](/blog/2015/1/24/o-is-for-open-closed-principle)
3.  [L is for Liskovs Substitution Principle](/blog/2015/1/25/l-is-for-liskovs-substitution-principle)
4.  [I is for Interface Segregation Principle](/blog/2015/1/28/i-is-for-interface-segregation-principle)
5.  [D is for Dependency Inversion Principle](/blog/2015/2/1/d-is-for-dependency-inversion-principle)

These principles describe the key principles to follow to make maintainable Object Oriented Code.

O is the second letter in SOLID.

O stands for the Open Closed Principle, it means "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification".

In practical terms, this means that any new functionality should be implementable by only adding new code, and not by changing existing code that we know works.

Take for example this _LineItem_ that offers special discount for some _User_ types of the system:

```php
/**
 * Line item in the basket
 */
class LineItem
{
    /**
     * @var integer
     */
    private $price;

    /**
     * The constructor
     *
     * @param integer $price
     */
    public function __construct($price)
    {
        $this->price = $price;
    }

    /**
     * Get the users price for an item
     *
     * @param User $user
     * @return integer
     */
    public function getUsersPrice(User $user)
    {
        switch ($user->getType()) {
            case 'special':
                return $this->price / 2;
            case 'regular':
                return $this->price;
            case 'disliked':
                return $this->price * 2;
        }
    }

}
```

```php
/**
 * A user of the system
 */
class User
{
    /**
     * @var string
     */
    private $type;

    /**
     * Get the user type
     *
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * The constructor
     *
     * @param string $type
     */
    public function __construct($type)
    {
        $this->type = $type;
    }
}
```

This violates the open closed principle because we need to modify existing code in order to add additional _User_ _LineItem_ price calculations.

This is bad because we have some code that we know works, in the _LineItem_, however every time we get a new requirement in for different _User_ types, we need to edit it. Every time we edit a working class, we risk breaking it.

However it is possible to write code that only needs us to write new classes to extend it (that is open to extension), and doesn't require us to change the existing working code (closed to modification).

```php
/**
 * Line item in the basket
 */
class LineItem
{
    /**
     * @var integer
     */
    private $price;

    /**
     * The constructor
     *
     * @param integer $price
     */
    public function __construct($price)
    {
        $this->price = $price;
    }

    /**
     * Get the users price for an item
     *
     * @param User $user
     * @return integer
     */
    public function getUsersPrice(User $user)
    {
        return $user->getPrice($this->price);
    }

}
```

```php
/**
 * A user of the system
 */
abstract class User
{
    /**
     * Get the price for this user
     *
     * @param integer $price
     * @return integer
     */
    abstract public function getPrice($price);
}
```

```php
/**
 * A special favourite customer
 */
class Special extends User
{
    /**
     * Get the price for this user
     *
     * @param integer $price
     * @return integer
     */
    public function getPrice($price)
    {
        return $price / 2;
    }
}
```

```php
/**
 * A customer we like the best
 */
class Regular extends User
{
    /**
     * Get the price for this user
     *
     * @param integer $price
     * @return integer
     */
    public function getPrice($price)
    {
        return $price;
    }
}
```

```php
/**
 * A customer we don't like much
 */
class Disliked extends User
{
    /**
     * Get the price for this user
     *
     * @param integer $price
     * @return integer
     */
    public function getPrice($price)
    {
        return $price * 2;
    }
}
```

You can see here that we can add additional types, simply by adding another class, we don't need to change any existing classes. We're open to extension of the functionality, closed to needing to modify the original class.

If you're looking for an easy way to spot instances where you're not taking full advantage of the Open Closed Principle: look at your if statements. Use this thought experiment: [Think about how you would remove each of your selection statements using polymorphism](https://www.refactoring.com/catalog/replaceConditionalWithPolymorphism.html), it should be possible to remove nearly every single one!

However, there are some instances that it is undesirable to open our code up to extension. The key instance of these is member variables.

If we were to make our class fully open, we should make all our member variables public. However this causes us dependency problems, by being fully open we cannot prevent a misbehaving piece of code from disrupting all the other modules operation. By making member variables private, and explicitly creating the extension points in the form of methods, we control the access to those variables, and can regulate the content, and how they are managed.

This has an additional benefit, by explicitly creating the extension points we give our fellow developers key information as to how some code is to be used, and we can even take advantage of the compiler to enforce this usage. In the following example we're taking advantage of making the extension point to delayDispatch explicitly only take _Disliked_ users, to prevent any users that are not mean to us from having their _LineItem_ delayed.

```php
/**
 * Line item in the basket
 */
class LineItem
{
    /**
     * @var integer
     */
    private $price;

    /**
     * The constructor
     *
     * @param integer $price
     */
    public function __construct($price)
    {
        $this->price = $price;
    }

    /**
     * Get the users price for an item
     *
     * @param User $user
     * @return integer
     */
    public function getUsersPrice(User $user)
    {
        return $user->getPrice($this->price);
    }

    public function delayDispatch(Disliked $user) {
        //...
    }
}
```

So you can see the Open Closed Principle is key to good usage of polymorphism. It helps us think about where we're willing to let new functionality be added to our system, and enforce where we are not. It's a powerful design tool that can allow the compiler to prevent errors before they happen, and teach other developers how to use the system.

Plus it makes you IDE work like, super good, and anything that makes my IDE work better is a plus in my book.
