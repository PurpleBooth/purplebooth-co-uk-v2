+++
Categories = ["Development", "Process", "Agile", "Pull Requests"]
Description = "Discussing creating information discovery opportunities in a development team"
date = "2015-03-15T10:58:34Z"
title = "Creating prompts to Learn"

+++

**Individuals and interactions** over Processes and tools. This is the first tenant of Agile software development. It means value individuals contributing domain knowledge and expertise to create high quality software, rather than attempting to enforce a "safe" way of working by restricting someone to a specific process.

[The agile manifesto](http://en.wikipedia.org/wiki/Agile_software_development#The_Agile_Manifesto) states this because a process is a barrier to change. If new knowledge is gained that a certain practice or technology that is intrenched in process has some negative effects, it can be harder to remove than if people are simply behaving this way because it is to the best of their knowledge the right way to do things.

This can be summarized like so: Beliefs Change, Doctrine is set in stone. If you base how you work in peoples beliefs, they will change as they grow or learn new things, if you base how you work autocratically through doctrine cast down from upon high, the process will not change as ideas about how to perform a task correctly change.

However this leaves us with a problem. Peoples beliefs are sometimes wrong. Even the winner of Time Magazine's Person of the Year award in 2006 can have the wrong beliefs.

{{< figure src="/post/opportunities-to-learn/Time_youcover01.jpg" title="You won Time Magazine's Person of the Year award in 2006" >}}

How do we ensure that everyone on a team is consistently developing the latest skills and beliefs about how to develop software?

The solution to this is given in the first agile Tenant. **Individuals and interactions** over Processes and tools. **Individuals and Interactions**.

One way to achieve this is by frequently making sure everyone goes to their **local user groups** and **[conferences](http://lanyrd.com/conferences/)**. This can be difficult though: conferences can be expensive, and people can be reluctant to attend user groups on their own time. How do we ensure that we're maintaining the best beliefs possible within our team.

We do this by talking to people, and sharing knowledge within or outside the team. This is key to creating a successful agile environment. But how can we create prompts within our software development process to encourage this?

The first way is the most obvious. Ape the local user group and **create your own monthly talks within a business**.

{{< figure src="/post/opportunities-to-learn/me-at-phpsw.jpg" title="Me speaking at PHPSW on CQRS" >}}

This is a fantastic way of transferring large blocks of information and putting forward complex ideas, concepts and ways of working. It can also be seen as a bit of a break from the norm, and a fun event for the team to decompress a little.

The technique has it's problems though, it can be hard to find speakers in small companies, and a tight deadline can mean the practices can fall beside the wayside. What's more a talk by a programmer on a new framework won't be of interest to a marketing person, so we can't gain cross business skills that could offer vital insight into how to build our products.

One technique that does give us the insight into other areas of the business is **BDD**, or **[Behavior Driven Development](http://en.wikipedia.org/wiki/Business-driven_development)**. Behavior driven development is the idea that before developing a feature, you should sit with the business, and define it's required behavior.

{{< figure src="/post/opportunities-to-learn/bdd.png" title="The Red-Green cycle of BDD" >}}

Sitting down with the representative for the feature being implemented can impart knowledge about the behavior that can allow the developer to not only write the correct thing, but negotiate changes in the detail of the behavior that may allow a user to have a better experience, or the developer to write a simpler system.

What's more, the knowledge doesn't evaporate once you've finished the feature. Each discussion is a mini-training session on how the business operates and why.

There are many tools to help you do BDD, however it's not really the tools that are important here. The important thing is the discussion. Do not get hung up on the tools!

**DDD** or **[Domain Driven Design](http://en.wikipedia.org/wiki/Domain-driven_design)** is another tool in the box of our communicative team. DDD is the idea that your software should be a model of the processes as the Domain Experts, stakeholders of the feature, see the system. The implementation should match the mental model and language of those experts.

This technique lowers the boundary to entry for discussions about the system, because even if you're non-technical, you can enter fairly technical discussions as the mental model of the operation of the system is the same as the implementation. Another benefit is that the discussions about language and modeling the system with domain experts are opportunities to explore the functionality of the system, and gain knowledge as to correct implementations and business need.

The last two examples have been focused on developing business skills. What about more developer centric learning.

One of the most well known of these is **[Peer Review](http://en.wikipedia.org/wiki/Code_review)**. Peer Review happens on two levels. The first is letting another developer read your code, before it's accepted as a finished feature. They can help you spot issues you hadn't anticipated, because you're too close to the code, and they can tell you about new software development tools and techniques.

One risk with this sort of Peer Review is that it becomes a box ticking exercise. You're not just looking for tests, correct formatting and good commit messages, you're looking to trigger a discussion about the correct way to develop software, and to grow as a person.

Peer review also comes in another form, the **Demo**. At the end of your sprint you should demonstrate your completed work to the business, and more importantly the people who requested that work be done. Not only does this offer an opportunity to double check that the functionality is completed correctly, but it can trigger discussions about future functionality, or prioritization of the work that is to be completed next.

The next technique I want to discuss with you is **Pair Programming**. There are a number of different ways to implement this: my personal favorite is [Ping Pong pair programming](http://c2.com/cgi/wiki?PairProgrammingPingPongPattern).

Ping Pong pair programming is where one developer writes a test, and then the other writes code until that test is passing, and writes the next test, and so on and so forth until an entire feature is complete. While one developer is writing code, the other developer is considering and thinking about the architecture of the system. We call the developer who is thinking about the architecture the Navigator, and the person who is writing the code at the time the Driver. The pair of developers typically share a computer to use this technique.

{{< figure src="/post/opportunities-to-learn/pingpong.png" title="Ping Pong Pair Programming" >}}

This allows both developers to discuss both individual development techniques, but also broader architectural ideas in the system. This offers both developers the opportunity to grow and learn new things.

Who you pair with can even be tactical, such as an old salt being paired with a newbie, in order to rapidly bring the newbie up to speed on the system, or two senior developers being paired together to tackle a particularly complicated problem. A little warning though, there is relatively little benefit from pairing two low skill developers together.

The final discussion prompter I want to talk about is the **[Stand-up](http://www.mountaingoatsoftware.com/agile/scrum/daily-scrum)**. The stand-up is a quick, punchy update every morning on what you're working on to the rest of the team. In these you state what you worked on yesterday, what you're working on today, and any blockers you might be experiencing. It's fairly well known that this is a good way of keeping the team apprised of what you're doing, but what's less well known is that it's often an opportunity to indicate to other team members that after the stand-up is complete, you have some additional knowledge in an area they are working that on you can impart to them.

These are just a small sample of possible conversation prompting techniques you can use within your team in order to ensure that all developers are constantly growing and learning new things, and they won't even notice it's happening.

These prompts may seem small, but they allow a team to be constantly improving itself and maximizing the knowledge everyone shares within the system. Sharing knowledge can allow a team additional insights due to the broader overview of a system, that may not have been apparent before, and information on the latest techniques and tools to employ to develop a modern system, so after a while you grow into an awesome team that delivers fast and reliably.
