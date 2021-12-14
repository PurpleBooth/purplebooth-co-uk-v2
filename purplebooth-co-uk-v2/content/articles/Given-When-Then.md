---
date: "2015-03-18T15:30:54Z"
title: "Given When Then"
categories: ["BDD", "Cucumber", "Behat", "Testing"]
---

## How to write good behavioral tests

You're being given a tour of a code base. You get to the end and you ask if the code has any tests, and your friend proudly says "Oh yes, we have lots of tests" and opens a folder filled with feature files. "Brilliant", you say smiling, but your heart begins to sink when you look at the contents of the files.

There are no Givens. The tests need to be run in a specific order, the scenario step lines are long and use unusual wording for the steps.

What's more when you look into the step definitions there's hundreds and hundreds of functions, no objects, and one big mess.

This is not an uncommon situation.

Writing tests is a vital part of BDD, but frequently it's done in a way that can make life hard. However there are a number of simple principles that you can follow in order to make things easier for yourself.

Lets start from the beginning though, what is BDD? BDD is Behavior Driven Development.

BDD means you develop your system by defining a behavior you want it to have in a feature file. You then write code until that test passes. Then you stop coding or write another test.

This is similar to [TDD](https://en.wikipedia.org/wiki/Test-driven_development), in that you write tests, then write code. But with one key difference: BDD makes it clear what you're supposed to be testing: Behavior.

Testing Behavior means that you test the apparent actions of the system from a users perspective. For a website you're testing that a user can log in, can look at a product, can search, and so on. You don't test implementation details such as what a value in a database is, or if a method was called.

Have a look at this example where I'm testing implementation details rather than behavior:

<pre class="code">
<code class="gherkin">
Scenario: A book can be rated
    Given There is a book called "Black Lagoon"
    When I leave a 5 star rating on the book "Black Lagoon"
    Then the "rating" table should have 1 "5" star rating
</code>
</pre>

Now imagine I change the database table that the users are stored in from ratings to reviews. All my tests will break, even if my code is correct.

If your tests are tied to your implementation then you're going have all your tests break the moment you change that implementation. What we care about is the behavior, not how we have implemented it. To put it another way: We care that we _can_ create a rating, not _how_ we create a rating.

<pre class="code">
<code class="gherkin">
Scenario: A book can be rated
    Given There is a book called "Black Lagoon"
    When I leave a 5 star rating on the book "Black Lagoon"
    Then book "Black Lagoon" should have the rating "5"
</code>
</pre>

Now look at this example, changing the name of the users table wouldn't break the test (unless we break the behavior of course).

This sounds easy, but actually sometimes it can be quite hard. Imagine you're writing a bit of code that reads from a queue and writes to a database as part of a larger system. You want to write a BDD test for that behavior, but it doesn't have any obvious user output. A common error would be to query the database in order to check the database has the correct value in.

Don't do it. You're testing an implementation detail. Test the behavior.

Make the request through your application, rather than looking in the database. If the code that's reading from the queue and inserting into the database doesn't make any change to the behavior of your application, it doesn't need to exist.

Not testing Behavior in BDD is a sure fire way to make maintaining tests a chore rather than a benefit. Nobody wants to fix all the tests every time they make a change to the implementation.

So now we know what we're testing, lets talk about the anatomy of a behavioral test.

Most behavioral testing frameworks have standardized around the [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin) language. Gherkin is defined in text files which are called "features". These features have multiple scenarios.

Each of these scenarios has multiple lines with a starting keyword, of Given, When and Then. Each of these lines triggers a bit of code to be executed. We call the code that is executed the step definition.

This is an [example from the Behat manual](http://docs.behat.org/en/v2.5/guides/1.gherkin.html):

<pre class="code">
<code class="gherkin">
Feature: Some terse yet descriptive text of what is desired
  In order to realize a named business value
  As an explicit system actor
  I want to gain some beneficial outcome which furthers the goal

  Additional text...

  Scenario: Some determinable business situation
    Given some precondition
    And some other precondition
    When some action by the actor
    And some other action
    And yet another action
    Then some testable outcome is achieved
    And something else we can check happens too

  Scenario: A different situation
    ...
</code>
</pre>

### Given

Given is your context, what you're assuming in order for this test to run. By saying Given you're saying that the system is in this state, before you performed an action.

Take for example these two scenarios without any Givens.

<pre class="code">
<code class="gherkin">
Scenario: Create Book
    When I create the book "Black Lagoon"
    Then book "Black Lagoon" should exist

Scenario: Remove Book
    When I delete the on the book "Black Lagoon"
    Then there should be no book titled "Black Lagoon"
</code>
</pre>

Now imagine that you change the second scenario to run first, or simply run it alone. It'll break!

Not using Givens means you can't run features out of order. This means they are dependent on each other. Dependent tests break each other.

Now, while in my example your tests are in the same file. Imagine you have hundreds of features. Imagine how hard it will be to find the test that's changed that's breaking another test.

A common trap some people fall into here is using Fixtures instead of Givens. This is a mistake because Fixtures lead to brittle tests.

A fixture means that you won't know what the context of this test is. A vital part of knowing why a specific behavior is going to happen is the context that it happens in.

Take for example this test without Givens but using fixtures.

<pre class="code">
<code class="gherkin">
Scenario: Remove Book
    Given I load the fixtures
    # This might be done with a pre-scenario hook or script
    When I delete the on the book "Black Lagoon"
    Then there should be no book titled "Black Lagoon"
</code>
</pre>

What happens if someone removes the book from the fixtures, and breaks the delete functionality. We might have a situation where the functionality is broken but we don't know until it's too late, because this test will pass regardless. The context that there is a book is important to the test.

Now take for example this test which isn't using fixtures, but rather using Givens.

<pre class="code">
<code class="gherkin">
Scenario: Remove Book
    Given there is a book "Black Lagoon"
    When I delete the on the book "Black Lagoon"
    Then there should be no book titled "Black Lagoon"
</code>
</pre>

Much clearer, and we don't risk the functionality being broken and us not noticing.

This situation can be exacerbated with multiple tests sharing a single fixture, we no longer can be sure which tests depend on which fixture. This means that when adding new data, or modify existing data, you might accidentally break an unrelated test.

Use Givens to prevent brittle tests that frequently break due to changes in tests that aren't related to your own.

### When

Whens are the next component of a feature file. Whens are actions that you're performing. An example of a when would be "When I visit the home page" or "When I search for houses".

A key component of a good when step is that it's fairly high level.

Take for example these low level steps. Which is the important step here?

<pre class="code">
<code class="gherkin">
Scenario: Remove Book
    Given there is a book "Black Lagoon"
    When I click on the "login" link
    And I fill in the "username" field with "admin"
    And I fill in the "password" field with "admin"
    And I click on the "Book List"
    And I fill in the "search" field with "Black Lagoon"
    And I click on "Search"
    And I click on "Black Lagoon"
    And I click on "Delete"
    And I click on "Confirm"
    When I delete the on the book "Black Lagoon"
    Then there should be no book titled "Black Lagoon"
</code>
</pre>

Now look at this example which is much more brief. It's clear what the action we're performing is:

<pre class="code">
<code class="gherkin">
Scenario: Remove Book
    Given there is a book "Black Lagoon"
    When I delete the on the book "Black Lagoon"
    Then there should be no book titled "Black Lagoon"
</code>
</pre>

### Then

Then is the final component. A then is an assertion you're making about the system. They might test results of a "When" step, or they might make their own queries to the system to check things.

Much like the when steps, these shouldn't be too low level.

However there is another thing you want to avoid, and that is using tables. While they allow you to enter large amounts of data, can have a negative effect on readability.

Take the following example. What is this step doing? What does this data mean?

<pre class="code">
<code class="gherkin">
Scenario: Publish Book
    Given there is a book "Black Lagoon"
    When publish the book "Black Lagoon"
    Then book "Black Lagoon" should exist with the details:
        | Visible      | true                       |
        | Reviewable   | true                       |
        | Ratable      | true                       |
        | Description  | Scary stories about a lake |
        | Publish Date | 2015-03-18T13:55:06Z       |
        | Release Date | 2015-03-20T23:00:49Z       |
        | Tags         | Scary, Lake, Monster       |
        | Category     | Horror                     |
        | Spoilers     | true                       |
</code>
</pre>

Now look at this example, much clearer. You can see what the data means, which is often more important than what the data actually is.

<pre class="code">
<code class="gherkin">
Scenario: Publish Book
    Given there is a book "Black Lagoon"
    When publish the book "Black Lagoon"
    Then book "Black Lagoon" should have a published date
</code>
</pre>

### Step definitions

Lets talk about step definitions. Step definitions are controllers for your step logic. Try to apply the same design principles you would to MVC controllers: try to keep them down to as few lines as possible.

There are a few ways to achieve this though. Firstly you're an Object Oriented programmer: Use objects and apply the [SOLID]({{< ref "post/0004-s-is-for-single-responsibility-principle.md" >}}) principles to your step definitions.

Take for example this [Behat](http://behat.org/en/v2.5/) step definition.

<pre class="code">
<code class="php">
/**
 * @When I publish the book :title
 */
public function publishBook($title)
{
    $bookPage = $this->load('/books', 'get')
    $bookList = $this->bookHtmlToArray($bookPage);
    $bookId = null;

    foreach($bookList['books'] as $book) {
        if($book['title'] == $title) {
            $bookId = $book['id'];
            break;
        }
    }

    if($bookId == null) {
        throw new \Exception("Could not find book $title");
    }

    $this->load('/publish', 'post', ['bookId' => $bookId]);
}
</code>
</pre>

And the same step definition refactored to use some entity objects. Notice how we're now comparing two Books, rather than fairly arbitrary strings.

<pre class="code">
<code class="php">
/**
 * @When I publish the book :title
 */
public function publishBook($title)
{
    $expectedBook = new ComparisonBook();
    $expectedBook->setTitle($title);

    $bookHtml  = $this->client->load('/books', 'get')
    $bookArray = $this->parser->bookHtmlToArray($bookPage);
    $toPublish = null;

    foreach($bookList['books'] as $bookArray) {
        $comparisonBook = new ActualBook();
        $comparisonBook->fromArray($bookArray)

        if($expectedBook->equals($comparisonBook)) {
            $toPublish = $comparisonBook
            break;
        }
    }

    if($toPublish == null) {
        throw new \Exception(
            "Could not find book {$toPublish->getTitle()}"
        );
    }

    $this->client->load(
        '/publish',
        'post',
        ['bookId' => $toPublish->getId()]
    );
}
</code>
</pre>

Secondly take advantage of [transformers](http://docs.behat.org/en/v2.5/guides/2.definitions.html#step-argument-transformations) so your steps don't contain lots of repeated code to transform a table or string into the applicable object. This can remove a lot of repeated code.

Transformations are [available in Cucumber too](https://docs.cucumber.io/cucumber/cucumber-expressions/#custom-parameter-types).

<pre class="code">
<code class="php">
/**
 * @Transform :book
 */
public function createBook($book)
{
    $expectedBook = new ComparisonBook();
    $expectedBook->setTitle($book);

    return $expectedBook;
}


/**
 * @When I publish the book :book
 */
public function publishBook(ComparisonBook $book)
{
    $bookHtml  = $this->client->load('/books', 'get')
    $bookArray = $this->parser->bookHtmlToArray($bookPage);
    $toPublish = null;

    foreach($bookList['books'] as $bookArray) {
        $comparisonBook = new ActualBook();
        $comparisonBook->fromArray($bookArray)

        if($expectedBook->equals($comparisonBook)) {
            $toPublish = $comparisonBook
            break;
        }
    }

    if($toPublish == null) {
        throw new \Exception(
            "Could not find book {$toPublish->getTitle()}"
        );
    }

    $this->client->load(
        '/publish',
        'post',
        ['bookId' => $toPublish->getId()]
    );
}
</code>
</pre>

Finally use the [page object](https://martinfowler.com/bliki/PageObject.html) design pattern. The page object design pattern gives you an object that represents a single page in your system with methods on to make assertions or perform actions with. This means that you can reduce and centralize low level code that does things like parse web pages, or make API requests.

Typically the object has all the actions that are available from that page, and offers ways to access the data in the page. When you access another page from that page, the method you call will return a new page object, with the actions on for that new page.

<pre class="code">
<code class="php">
/**
 * @Transform :book
 */
public function createBook($book)
{
    $expectedBook = new ComparisonBook();
    $expectedBook->setTitle($book);

    return $expectedBook;
}


/**
 * @When I publish the book :book
 */
public function publishBook(ComparisonBook $book)
{
    $bookPage = $this->bookListPage->getBookPage($book);
    $bookPage->publish();
}
</code>
</pre>

This allows you to have much higher reuse between steps. On top of that your code is much more readable, and writing new steps will be much quicker.

### Summary

Here's a run down of those tips:

- Test behavior not implementation
- Use Givens
- Don't use fixtures
- Step should be fairly high level
- Textual descriptions can be clearer than tables
- Use [SOLID]({{< ref "post/0004-s-is-for-single-responsibility-principle.md" >}}) in your step definitions
- Keep your step definitions to a minimum number of lines
- Use [data transformations](http://docs.behat.org/en/v2.5/guides/2.definitions.html#step-argument-transformations) (or in [cucumber](https://docs.cucumber.io/cucumber/cucumber-expressions/#custom-parameter-types))
- Use the [page object pattern](https://martinfowler.com/bliki/PageObject.html)

Maintaining a full suite of tests doesn't have to be a chore so long as you follow those simple steps. You'll soon find that your test suite become much more of an asset.
