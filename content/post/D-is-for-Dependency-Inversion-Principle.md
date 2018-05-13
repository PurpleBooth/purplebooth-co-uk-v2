+++
Categories = ["OOP", "Development", "PHP", "SOLID", "OOP"]
Description = "How to use the Dependency Inversion Principle in PHP. The fifth in a series on SOLID"
date = "2015-03-01T09:27:00Z"
title = "D is for Dependency Inversion Principle"

+++

This is the fifth article in a series the SOLID principles for software design. There are 5 principles, each corresponding to a letter in the word SOLID.

1. [S is for Single Responsibility Principle]({{< relref "0004-s-is-for-single-responsibility-principle.md" >}})
2. [O is for Open Closed Principle]({{< relref "o-is-for-open-closed-principle.md" >}})
3. [L is for Liskovs Substitution Principle]({{< relref "l-is-for-liskovs-substitution-principle.md" >}})
4. [I is for Interface Segregation Principle]({{< relref "I-is-for-Interface-Segregation-principle.md" >}})
5. [D is for Dependency Inversion Principle]({{< relref "D-is-for-Dependency-Inversion-Principle.md" >}})

These principles describe the key principles to follow to make maintainable Object Oriented Code.

D stands for Dependency Inversion Principle.

The Dependency Inversion Principle is
<blockquote>
A. High-level modules should not depend on low-level modules. Both should depend on abstractions.

B. Abstractions should not depend on details. Details should depend on abstractions.
</blockquote>

What this means is that your service classes should implement and depend on interfaces, rather than concrete classes. So each of your collaborating classes, that is the classes in your member variables, need to be defined as an interface, and every concrete service should implement an interface. This is to help you decouple your low level class choices from your high level implementation.

Just to clarify, by services I mean classes that exist within your system that depend on lower level classes, and implement business logic. In the example below the Pagination class is a service that has a number of low level dependencies. If you're not working with a class that is depended on, or has dependencies on, lower or higher levels, that class isn't effected by this principle, but these are rare.

{{< figure src="/post/D-is-for-Dependency-Inversion-Principle/service-diagram.png" title="Services & Lower and Higher classes" >}}

Imagine for a minute we have a caching layer. In this caching layer we have a number of methods, for getting and setting cache values. We use this caching layer in another class, one that calculates the number of pages that a search result has.

<pre class="code">
<code class="php">
/**
 * Client for an in memory cache service
 */
class MemoryCache
{

    /**
     * Get a value from the cache, or null if it's not present
     *
     * @param string $key
     * @return mixed
     */
    public function get($key)
    {
        // Do stuff

    }

    /**
     * Set a value into the cache
     *
     * @param string $key
     * @param mixed $value
     */
    public function set($key, $value)
    {
        // Do stuff
    }

    // More methods
}
</code>
</pre>
<pre class="code">
<code class="php">
/**
 * Paginates search results
 */
class SearchPagination
{

    /**
     * Prefix to cache key
     */
    const CACHE_KEY = 'search';

    /**
     * Get a page of search results.
     *
     * Try the cache first, if not calculate them
     *
     * @param integer $pageNumber
     * @return SearchResult
     */
    public function getPage($pageNumber)
    {
        // Do stuff
        $result = (new MemoryCache())
            ->get(self::CACHE_KEY . $pageNumber);

        if (!$result !== null) {
            // Do pagination stuff
            (new MemoryCache())
                ->set(self::CACHE_KEY . $pageNumber, $result);
        }

        return $result;
    }

    // More methods
}
</code>
</pre>

You can see that if we need to change the caching layer we need to modify our currently working *SearchPagination* class. If we modify a class that is working, we you can break it. What we need is to make these two classes depend on a common interface, so if need be we can swap out the low level class with a different concrete implementation.

It is this idea that is behind the usage of Dependency Injection Containers such as the [Symfony Component](http://symfony.com/doc/current/components/dependency_injection/introduction.html), [ZF2's](http://framework.zend.com/manual/current/en/modules/zend.di.introduction.html), or [Pimple](http://pimple.sensiolabs.org/). If we are going to decouple our low level classes from our high level classes, we cannot simply have the high level classes creating new instances of the low level classes inside them. We must create new instances of those classes somewhere else, and inject them, frequently using one of those libraries.

Lets change this class to follow the Dependency Inversion Principle. We will change our constructor to depend on an interface, and we shall move the initialization of the caching class out of the service.

The key things to notice now are that if we need to change the way we do caching, we no longer have to change any of the code inside our *SearchPagination* class.

<pre class="code">
<code class="php">
/**
 * KeyValueCache interface.
 */
interface KeyValueCache
{
    /**
     * Get a value from the cache, or null if it's not present
     *
     * @param string $key
     * @return mixed
     */
    public function get($key);

    /**
     * Set a value into the cache
     *
     * @param string $key
     * @param mixed $value
     */
    public function set($key, $value);
}
</code>
</pre>
<pre class="code">
<code class="php">
/**
 * Client for an in memory cache service
 */
class MemoryCache implements KeyValueCache
{

    /**
     * Get a value from the cache, or null if it's not present
     *
     * @param string $key
     * @return mixed
     */
    public function get($key)
    {
        // Do stuff

    }

    /**
     * Set a value into the cache
     *
     * @param string $key
     * @param mixed $value
     */
    public function set($key, $value)
    {
        // Do stuff
    }

    // More methods
}
</code>
</pre>
<pre class="code">
<code class="php">
/**
 * Paginates search results
 */
class SearchPagination
{

    /**
     * Prefix to cache key
     */
    const CACHE_KEY = 'search';

    /**
     * @var KeyValueCache
     */
    private $cache;

    /**
     * The constructor
     *
     * @param KeyValueCache $cache
     */
    public function __construct(KeyValueCache $cache)
    {
        $this->cache = $cache;
    }

    /**
     * Get a page of search results.
     *
     * Try the cache first, if not calculate them
     *
     * @param integer $pageNumber
     * @return SearchResultInterface
     */
    public function getPage($pageNumber)
    {
        // Do stuff
        $result = $this->cache
            ->get(self::CACHE_KEY . $pageNumber);

        if (!$result !== null) {
            // Do pagination stuff
            $this->cache
                ->set(self::CACHE_KEY . $pageNumber, $result);
        }

        return $result;
    }

    // More methods
}
</code>
</pre>
<pre class="code">
<code class="php">
// In a dependency injection container somewhere
$cache = new MemoryCache();
$service = new SearchPagination($cache);
</code>
</pre>

One of the most compelling reasons to do this is that in different situations we need to swap out our low level classes for a different implementation. Imagine the scenario that you have a payment provider, provided by a third party, you can swap out the client for that provider with one that gives you fake responses development environments, so your developers don't end up getting their credit card out to test something.

Developing using [TDD (Test Driven Development)](http://en.wikipedia.org/wiki/Test-driven_development) with [mocks](http://en.wikipedia.org/wiki/Mock_object) can really help if you're struggling to use this principle. You just write your classes from the high level, and mock out each of your low level services. The methods you define in your mocks become the interface you implement in your low level classes.

An added benefit of this approach is you end up with low level classes with really nice interfaces. As you define your mocks, you simply define the easiest interface to use with the class your implementing. Meaning when you implement your low level class, it has the perfect interface for the high level class.

If we've said that we want to inject our low level dependencies, rather than creating new instances of them inside the class, how do we deal with the situation where we want to create entities, (classes that represent a thing in our domain, like an *AuthenticatedUser* or a *SearchResult*). One example of this would be when we're getting a value from our Cache layer. We certainly don't want our low level classes being responsible for creating those new instances, as this tightly couples us to a concrete implementation.

The solution to this is [factory classes](http://en.wikipedia.org/wiki/Factory_method_pattern). We make our low level class include a dependency on a factory class, the factory class creates the correct instance. This way we can swap out that factory if we need to, and we keep the coupling between the two classes low.

Creating all these interfaces can be a little daunting at first. However once you've got the hang of it, you'll start seeing how flexible it makes your code, and how simple it makes testing. What's more, you now know why Dependency Injection Containers got so popular, rather than just knowing that they are good!
