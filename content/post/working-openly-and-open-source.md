+++
categories = ["Open Source"]
date = "2015-08-16T20:57:50+01:00"
description = "Working openly and its benefits"
keywords = ["Open Source", "Working Openly", "Cathedral and the Bazaar"]
title = "Working Openly and Open Source"

+++

> “Who would have thought even five years ago (1991) that a world-class operating system could coalesce as if by magic out of part-time hacking by several thousand developers scattered all over the planet, connected only by the tenuous strands of the Internet?”
> — The Cathedral and the Bazaar by Eric Raymond

Since the early nineties we, as a society, have produced some fantastic software. Much of the most long lived, and high quality, is software being produced using open methods, these projects include Linux, Apache HTTPd, PHP, GTK+ and many more. There are so many instances of this you could say openly developed software is the most successful in the world.

Working openly is so successful even those pieces of software that are not open source are using components of openly developed software. Famously Microsoft used parts of the BSD network stack, and Cisco are well known to have been sued for not publishing components derived from GPL licensed code. There are many more instances of this that are less high profile, think of the last closed source project you worked on, how many open source libraries and tools did you use?

If open development is the key to code reuse, why is it then, that in business we’re so keen on locking away our code in private code stores. How frequently have you joined a team, only to discover that you need adding to 15 different code stores you didn’t know existed. What time saving wonders might those code stores have held for your last project had you have known they existed.

Now this is not the case in every company. Google develop Android in the open, and Facebook have a number of projects across a number of different platforms that are developed openly, not least of which are React and HHVM. Even famously closed source company Oracle have the Java Community Process that allows it to be developed in an open manner.

> Even not being able to Open Source your work does not preclude you from working openly

Even not being able to Open Source your work does not preclude you from working openly. Working openly is about reducing barriers to others contributing to, or using your projects. It’s about the cultural imperative to maintain the ease of use, and ability to reuse for a project.

Developing this openness is not easy though. The shift is partly technological, and partly cultural.

The technical challenge is to ensure that components you produce are technically reusable. Making sure that you’re producing libraries that are separate from your applications and packaged up correctly, so they can be dropped into other applications. This not only helps other people who want to use your project, but it also keeps a strong separation of concerns that allows you to forget about the internal workings of that reused project temporarily, making it easier to use.

The cultural challenge is to ensure reuse does happen. Maintaining the reusability of a project is hard: it takes time to package up software, manage versioning, and keep documentation up to date.

> It can be the greatest buzz ever knowing you have saved someone a week of coding

It can be the greatest buzz ever knowing you have saved someone a week of coding, but also the greatest feeling of waste knowing someone reimplemented something you already had ready to go. Without the culture of openness the effort that has been put into making libraries usable will soon slip.

Some of the places I have worked have had fairly successful cultures of openness, and some less so. Here are some strategies that I have seen work.

Strategy 1: Limiting the number of private repositories, and open sourcing repositories to free up more private ones. This works two fold, firstly developers get recognition outside of the company, secondly you’re motivated to keep code clean incase the public see it.

Strategy 2: Keeping the functionality of projects small. This works by only having small amounts of functionality in each repository, meaning you can reuse the specific components that work for you, and that you don’t need massive user guides that need to be maintained, and versioning is easy.

Strategy 3: Open sourcing anything outside your core business. If your core business is that you make washing machines, it won’t make any difference to that bottom line if you open source your neat date parsing library. The constant open sourcing of code is good advertising, and creates a culture of maintaining shareable code that isn’t being open sourced.

Now these are only a small sample of techniques, and like with all changes that attempt to garner cultural change, you milage may vary.

The difference in code quality and community spirit between companies I have worked at which develop software in an open manner is marked, and the companies I see go on to be the most successful are those that make the biggest impact in their markets. Simply because by making code culturally and technically reusable they enable more agility for themselves.

Without it I frequently see large sections of rework that could have been saved if someone had the ability to oversee the code from many of the different internal projects. Working Openly allows everyone to be that person.

> “When the rent from secret bits is higher than the return from open source, it makes economic sense to be closed-source. When the return from open source is higher than the rent from secret bits, it makes sense to go open source.”
> — The Cathedral and the Bazaar by Eric Raymond

To wrap up, a lot of the strategies I have come across for working openly do involve Open Source at some point. I do believe that open sourcing some of your software can improve the reusability of your other closed source projects, simply by sharing of the open culture.

You can also read this story on medium.

<script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@PurpleBooth/working-openly-and-open-source-dd044cdfbe73">Working Openly and Open Source</a>
