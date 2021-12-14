---
date: "2015-04-10T12:27:13+01:00"
title: "Cyclomatic Complexity"
categories: ["Complexity", "OOP", "Programming"]
description: "Imagine you’re having a great day at the office, you’ve got a brand new feature the customer is dying to have, and you’ve completed it in record time. You’re all ready to get it merged and peer reviewed. So you commit it, and push it to your build pipeline, where it’s analyzed. The build fails. Your analytics tool tells you complexity is too high! You’re given a numeric complexity value for your code, and a lower complexity value that you need to get your code’s complexity under."
---

Imagine you're having a great day at the office, you've got a brand new feature the customer is dying to have, and you've completed it in record time. You're all ready to get it merged and peer reviewed.

So you commit it, and push it to your build pipeline, where it's analyzed. The build fails. Your analytics tool tells you complexity is too high!

You're given a numeric complexity value for your code, and a lower complexity value that you need to get your code's complexity under. But what does that exactly does this value mean? And why does high complexity mean you probably need to refactor your code?

Complexity in software development is Cyclomatic Complexity. Cyclomatic Complexity was first described way back in [1976 by Thomas McCabe](https://books.google.ro/books?id=vtNWAAAAMAAJ&pg=PA3&hl=ro), and is in it's essence a numeric value that is the total number of paths an execution through a piece of code could take. The higher this number, the higher the number of routes through a piece of code, and the more behaviors your class will exhibit that you'll need to test for (and opportunities your code has to choose the wrong path).

### How to we work out the number?

Take for example this simple method.

<pre class="code">
<code class="ruby">
def hello
    puts "hello, world!";
end
</code>
</pre>

We can represent this using a graph. Using a node to represent the start and the end of the code, and a node for every decision made within the graph. In our example there are none, making the complexity simple to work out.

{{< figure src="/post/cyclomatic-complexity/simple.png" title="A decision graph of our simple method" >}}

Now we've built our graph, we apply this formula defined by McCabe that counts the number of routes through the code.

> M = E − N + 2P

What do these letters mean though?

- E = The number of edges of the graph. _Edges are the lines in the graph_
- N = The number of nodes of the graph. _One of the circles is a node_
- P = The number of connected components. _Number of interchangeable components, like classes, we're analysing_

So in this example

- E = 1 _There's 1 line in the graph_
- N = 2 _There's 2 nodes in the graph, Start and End_
- P = 1 _There's a single component we are analyzing, our simple hello world function_

So our formula breaks down like this

1.  1 = 1 - 2 + (2 \* 1)
2.  1 = 1 - 2 + 2
3.  1 = -1 + 2
4.  1 = 1

So this method has a complexity of 1. There is 1 route through the code.

Okay, but what if we start making our method more complex? Lets add in an if statement in there.

<pre class="code">
<code class="ruby">
def hello(name=nil)
    if name.nil?
        puts "hello, world!"; # A
    else
        puts "hello, "+name+"!"; # B
    end
end
</code>
</pre>

We can represent this with a graph like this

{{< figure src="/post/cyclomatic-complexity/less-simple.png" title="A more complicated method with an if statement in it" >}}

So lets take our formula again

> M = E − N + 2P

- E = 4 _There's 4 edges in the graph_
- N = 4 _There's 4 nodes in the graph, Start and End and our if name selection_
- P = 1 _There's a single component we are analyzing, our simple hello world function_

So our formula breaks down like this

1.  2 = 4 - 4 + (2 \* 1)
2.  2 = 4 - 4 + 2
3.  2 = 0 + 2
4.  2 = 2

There are 2 routes through the code.

Programs don't just need selection though, they need iteration too! Also known as: Loops. How do we calculate the complexity of this function with a loop in the method?

Here's our updated example with a small loop in it

<pre class="code">
<code class="ruby">
def hello(loops, name=nil)

    loops.times do # A1
        puts "hello,"; # B
    end # A2

    if name.nil?
        puts "hello, world!"; # C
    else
        puts "hello, "+name+"!"; # D
    end
end
</code>
</pre>

Now representing loops is a little bit more complicated than if statements

{{< figure src="/post/cyclomatic-complexity/loopy.png" title="Representing loops in complexity" >}}

You'll notice that for the loop there are 3 nodes. A1 is the path to the loop, B is the code in the loop, and A2 is the code from the loop till the next statement.

So lets apply our formula again.

> M = E − N + 2P

- E = 8
- N = 7
- P = 1

Which means the complexity is

1.  3 = 8 - 7 + (2 \* 1)
2.  3 = 8 - 7 + 2
3.  3 = 1 + 2
4.  3 = 3

There are 3 paths through the code.

### But why is this number important?

This number is important because there are [3 main types of bugs](http://misko.hevery.com/2008/11/17/unified-theory-of-bugs/) in software:

1.  Logical _If 2 > 3 when it should be if 3 > 4_
2.  Wiring _I injected the queue object when I should have injected the db object_
3.  Rendering _I put the wrong text in this button_

Logical is the most common, Wiring the second most common and Rendering the least common. Logical is also the hardest to identify and resolve, Wiring the second most, and Rendering the least.

The complexity number indicates the number of opportunities there are to create a logical error. The lower the complexity, the higher the probability we haven't got a bug in our code.

This is also part of why SOLID encourages you to never have to go back and change a class. Assuming you're adding new functionality to a class, every time you modify it, you're increasing the complexity of the class, which increases the difficulty of testing it, and increases the likelihood you've made a mistake in the logic.

That's what complexity means, and reducing it in your classes and methods will reduct the amount of bugs in your code. Despite it being created a long time ago, it's still an incredibly useful metric.
