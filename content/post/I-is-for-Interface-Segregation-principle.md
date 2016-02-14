+++
Categories = ["Development", "PHP", "SOLID", "OOP"]
Description = "How to use the Interface Segregation Principle in PHP. The fourth in a series on SOLID."
date = "2015-02-28T17:12:05Z"
title = "I is for Interface Segregation Principle"
draft = false
+++

This is the fourth article in a series the SOLID principles for software design. There are 5 principles, each corresponding to a letter in the word SOLID.

1. [S is for Single Responsibility Principle]({{< relref "0004-s-is-for-single-responsibility-principle.md" >}})
2. [O is for Open Closed Principle]({{< relref "o-is-for-open-closed-principle.md" >}})
3. [L is for Liskovs Substitution Principle]({{< relref "l-is-for-liskovs-substitution-principle.md" >}})
4. [I is for Interface Segregation Principle]({{< relref "I-is-for-Interface-Segregation-principle.md" >}})
5. [D is for Dependency Inversion Principle]({{< relref "D-is-for-Dependency-Inversion-Principle.md" >}})

These principles describe the key principles to follow to make maintainable Object Oriented Code.

I stands for Interface Segregation Principle.

The Interface Segregation Principle is the idea that "Many client specific interfaces are better than one general purpose interface".

So for each of your services, you should provide an interface for each of its clients. What I mean by service is a class or set of classes that provide a grouped suite of behaviors to the rest of the system, for example, you might have a service that is the shopping basket for your Plushie store. What I mean by client is a class that depends on this service to achieve a certain goal, which may be providing reporting information on this weeks purchases to decide which soft toys to get in stock next week, or it may be allowing someone to add items to their basket.

{{< figure src="/post/I-is-for-Interface-Segregation-principle/teddies.jpg" title="Plushie store" attr="Photo by Edward Terry" attrlink="https://flic.kr/p/nw5b84" >}}

Take for example the following purchasing system, and it's two clients that are dependent on the concrete class.

<pre class="code">
<code class="php">
/**
 * Make changes to the stored basket within the system
 */
class BasketPersistenceService
{

    /**
     * Add an plushie to the basket
     *
     * @param User $user
     * @param Plushie $plushie
     */
    public function addItemToBasket(User $user, Plushie $plushie)
    {
        // Do stuff
    }

    /**
     * Bill a users account for their current basket
     *
     * @param User $user
     */
    public function purchaseBasket(User $user)
    {
        // Do stuff
    }

    /**
     * Get the top most purchased plushies
     */
    public function getTopWeeklySellers()
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
 * Order new stock depending on the top purchases
 */
class StockManagementService
{

    /**
     * @var BasketPersistenceService
     */
    private $basketService;

    /**
     * The constructor
     *
     * @param BasketPersistenceService $basketService
     */
    public function __construct(BasketPersistenceService $basketService)
    {
        $this->basketService = $basketService;
    }

    public function reOrderPopularItems()
    {
        // Do stuff
        $topSellers = $this->basketService->getTopWeeklySellers();

        // Do more stuff
    }

    // More methods
}
</code>
</pre>
<pre class="code">
<code class="php">
/**
 * Service for making changes to the basket for a specific user
 *
 * If "Sarah" has logged in, this allows us to make changes to their basket
 */
class UserBasket
{

    /**
     * @var BasketPersistenceService
     */
    private $basketService;
    /**
     * @var User
     */
    private $user;

    /**
     * The constructor
     *
     * @param User $user
     * @param BasketPersistenceService $basketService
     */
    public function __construct(User $user, BasketPersistenceService $basketService)
    {
        $this->basketService = $basketService;
        $this->user = $user;
    }

    /**
     * Add a plushie to the current users basket
     *
     * @param Plushie $plushie
     */
    public function addPlushie(Plushie $plushie)
    {
        // Do stuff
        $this->basketService->addItemToBasket($this->user, $plushie);
        // Do more stuff
    }

    /**
     * Buy everything that's in the basket
     */
    public function purchaseBasket()
    {
        // Do stuff
        $this->basketService->purchaseBasket($this->user);
        // Do more stuff
    }

    // More methods
}
</code>
</pre>

Now assume we want to extend and enhance the reporting aspects of this system, to such an extent that the analytics methods such as *getTopWeeklySellers* deserve their own class, away from the purchasing methods such as *addItemToBasket* and *purchaseBasket*.

We now have to change the interface in two downstream clients, because we cannot guarantee that none of the analytics methods are being called, as opposed to just changing the classes that implement or use the functionality we are enhancing. This is a very small example, but you can imagine a more complicated service being the dependency of five or six different downstream classes, each which could potentially need to change.

Now consider the following design following the Interface Segregation Principle. Notice how we only have to change the classes that are actually impacted by the change: *BasketPersistenceService* and *StockManagementService*, rather than all of the classes that have the *BasketPersistenceService* injected as a constructor variable into them. This is because the client specific interfaces guarantee that the analytics methods are only being called in classes that require them.

<pre class="code">
<code class="php">
/**
 * Interface for the Stock Management Service to identity purchasing trends
 */
interface BasketAnalyticsService
{
    /**
     * Get the top most purchased plushies
     */
    public function getTopWeeklySellers();
}
</code>
</pre>
<pre class="code">
<code class="php">
/**
 * Interface for the Session Basket to allow users to purchase things
 */
interface PurchasingService
{

    /**
     * Add an plushie to the basket
     *
     * @param User $user
     * @param Plushie $plushie
     */
    public function addItemToBasket(User $user, Plushie $plushie);

    /**
     * Bill a users account for their current basket
     *
     * @param User $user
     */
    public function purchaseBasket(User $user);
}
</code>
</pre>
<pre class="code">
<code class="php">
/**
 * Make changes to the stored basket within the system
 */
class BasketPersistenceService implements PurchasingService, BasketAnalyticsService
{

    /**
     * Add an plushie to the basket
     *
     * @param User $user
     * @param Plushie $plushie
     */
    public function addItemToBasket(User $user, Plushie $plushie)
    {
        // Do stuff
    }

    /**
     * Bill a users account for their current basket
     *
     * @param User $user
     */
    public function purchaseBasket(User $user)
    {
        // Do stuff
    }

    /**
     * Get the top most purchased plushies
     */
    public function getTopWeeklySellers()
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
 * Order new stock depending on the top purchases
 */
class StockManagementService
{

    /**
     * @var BasketAnalyticsService
     */
    private $basketService;

    /**
     * The constructor
     *
     * @param BasketAnalyticsService $basketService
     */
    public function __construct(BasketAnalyticsService $basketService)
    {
        $this->basketService = $basketService;
    }

    public function reOrderPopularItems()
    {
        // Do stuff
        $topSellers = $this->basketService->getTopWeeklySellers();

        // Do more stuff
    }

    // More methods
}
</code>
</pre>
<pre class="code">
<code class="php">
/**
 * Service for making changes to the basket for a specific user
 *
 * If "Sarah" has logged in, this allows us to make changes to their basket
 */
class UserBasket
{

    /**
     * @var PurchasingService
     */
    private $basketService;
    /**
     * @var User
     */
    private $user;

    /**
     * The constructor
     *
     * @param User $user
     * @param PurchasingService $basketService
     */
    public function __construct(User $user, PurchasingService $basketService)
    {
        $this->basketService = $basketService;
        $this->user = $user;
    }

    /**
     * Add a plushie to the current users basket
     *
     * @param Plushie $plushie
     */
    public function addPlushie(Plushie $plushie)
    {
        // Do stuff
        $this->basketService->addItemToBasket($this->user, $plushie);
        // Do more stuff
    }

    /**
     * Buy everything that's in the basket
     */
    public function purchaseBasket()
    {
        // Do stuff
        $this->basketService->purchaseBasket($this->user);
        // Do more stuff
    }

    // More methods
}
</code>
</pre>


Now there are two common questions people have about this Principle.

The first one is simple, how do I deal with the situation where multiple clients want the same method? Easy, add it to multiple client interfaces. If you need to change the service, you'll still need this method available to prevent you from having to change the class that has the dependency on your service.

The second common question is trickier. Sometimes we use third party code, and as such we have no client interface available to us. So what can we do to prevent changing interfaces having an impact on classes that depend on that third party code?

{{< figure src="/post/I-is-for-Interface-Segregation-principle/wrappers.jpg" title="A proliferation of wrappers" >}}

A common solution to this is to write a wrapper. This is a bad choice because you're violating the first of the SOLID principles: The Single Responsibility Principle. You now have a third party library that has a specific behavior, and you have your own code, that is supposed to present the same behavior. You have one behavior, twice within your system, rather than a single time. What's worse, is that the wrapper won't even be as functional as the original code, and you'll need to maintain it too!

So how do we deal with the problem of third party interfaces changing, meaning we need to refactor potentially lots of code. That's simple, use a dependency management tool ([composer](https://getcomposer.org/) probably if you're a PHP-iean). This way we have essentially fixed the interface to a specific version, you don't limit the ability of your system to take full advantage of the functionality in the third party library, and you're not forced to add code that provides no new behavior.

A simple idea. Frequently misunderstood. However, with a little insight it can lower the coupling between your services and classes that depend on them, allowing you to quickly make radical changes to how your services are implemented, in a way that has limited impact on classes that have dependencies on them. This means simpler and faster refactoring, and there's nothing I love more than a refactoring session that is done in half an hour rather than half a day.

The next item in our tour of SOLID is the [Dependency Inversion Principle](/post/D-is-for-Dependency-Inversion-Principle).
