+++
Categories = ["Development", "Process", "Agile", "Pair Programming", "Extreme Programming"]
Description = "What is pair programming, how to do it, and how to fix it when things go wrong."
date = "2018-05-26T09:23:52+00:00"
title = "Pair Programming: A Practical Guide"
+++

Let's talk about pair programming. Pair programming is an Extreme Programming technique; one of the 12 practices from [Kent Beck & Cynthia Andres's Extreme Programming Explained](https://www.goodreads.com/book/show/67833.Extreme_Programming_Explained). However it's older than that, having [studies on it (Nick V. Flor, Edin L. Hitchins, 1991)](https://books.google.co.uk/books?id=KT_bpSSJBgcC&pg=PA36&redir_esc=y#v=onepage&q&f=false) that go back to the early 90s.

Pair programming is in the most basic sense the act of two or more people sharing a computer, writing some code at the same time. It creates close relationships with other developers, helps pairing developers learn, and creates feelings of shared ownership within a team. These social bonds allow a team to trust each other, and operate at the best of their ability.

It also [produces code with about 15% less bugs (Laurie Williams, 2000)](https://collaboration.csc.ncsu.edu/laurie/Papers/dissertation.pdf) in it. For me, however, this is the least of it's qualities.

## Roles

There are as many ways to have someone pair program on something as there are ways to have two people working at the same computer. However my most positive experiences with pair programming have identified the participants in one of two roles: Driver or Navigator.

**The Driver** is responsible for literally typing the code. They have control of the keyboard, and mouse, and they focus on the close in detail of syntax and typing.

**The Navigator** directs and explains. They hold the vision of what to do on a wider scale, think about overall design, and help highlight minor missed things.

These roles are not fixed forever, and change depending on the dynamics of a pair.

## What's my role?

### High Skill/Low Skill

When you're in a pair with one high skill person and one low skill person I recommend

* High skill person navigates
* Low skill person drives

This means the person without experience gets to be hands on, and the experienced person has to explain their actions, ensuring all the details are shared.

### Learning Test Driven Development

When you're new to Test Driven Development practice ping pong pair programming. This follows the structure

1.  Write test
2.  Swap roles
3.  Implement code to make test pass
4.  Jump back to 1.

This structures the session around the test being first, and keeps the roles switching fast, ensuring everyone stays engaged.

### Learning Pair Programming

When you're new to pair programming but not new to test driven development

1.  Write code till you need a break (or 45 minutes have passed)
2.  Take a break
3.  Swap roles
4.  Jump back to 1.

This gives you a bit of structure to follow learning to pair, simplifying it, and encourages frequent breaks. This will feel restrictive as you become more experienced so feel free to move away from it once you're feeling confident and happy.

These aren't prescriptive rules, but can help guide you when your pair is new. After a while you'll be able to feel when is the right time to swap, but always remember to be kind. Watch out for your pair and if they have been in a role for a long time, offer to swap.

## Troubleshooting

When you pair program you put yourself into a state of being able to be questioned at any point, and having to focus and explain your approach to a problem, which can feel tiring, frustrating, and disengaging. To help make this a productive experience there's a few tips that are great for when you're starting out with a new pairing.

### Take breaks more often than you think you need to

You're going to feel tired. This was one of my biggest stumbling blocks towards enjoying pair programming. I really wanted it to work but I just felt so drained by the end of work that I nearly gave up.

Being vulnerable, like you are in a pair, puts you under mental strain and until you have learned enough empathy for your pair that you can intuit when you need to break, you need to force yourself to break frequently. As time goes on you learn the rhythms of your pair and your own patterns, and this will become easier.

There is a technique called the "Pomodoro Technique" I like to recommend if you're experiencing this strain.

This works like this,

1.  Set a timer for 25min
2.  Program till the timer is up
3.  Put a checkmark on a piece of paper.
4.  If there are less than 4 checkmarks take a 5 min break, otherwise take a 15-30 min break.
5.  Erase your checkmarks
6.  Jump back to step 1.

This will force you to take a lot of breaks, regardless of how you feel. After a while you can discuss with your pair if 25 min is too short and you want to work for longer, or if you want to throw away the timer all together.

It's also important to get some mental space between you and your work in these moments. Don't sit at the computer.

If you're an extrovert maybe ping-pong would be good for your longer breaks, if you're an introvert a bit of alone time getting something to drink and going for a little exercise are good fits.

### Break out when spiking

If you find you're constantly needing to search for answers on the internet, and you are finding it frustrating you can't chase down the information how you would like, separate for a moment then come back.

1.  Agree a short period of time to search for
2.  Split up and do your research
3.  Come back together and share what you've learned
4.  Decide on an approach
5.  Pair again

A word of warning. You need to make sure neither of you work on the code during this time. The code is a shared thing and while research will be needed the work should be completed together.

### Break and Swap when it's quiet

Silence is a bad sign in pair programming. If one of your pair is not talking then they're disengaged. This can be because your driver is off on their own, or that your navigator isn't directing. This happens because someone is unhappy.

1.  Take a longer break (if you normally take 5 min, then take 15 min)
2.  When you come back confirm how long you're going to work before breaking again or swapping roles
3.  Swap roles
4.  Continue coding

This both gives the pair some time to check their email or whatever else was distracting them, recover some mental strength and get in a happier space, and if it was the driver off on a tangent, force them to explain what they are doing.

### Make it easier to pair

If you're running a team and you're struggling to keep your pairs in pairs you want to make it easier to pair by changing your desks to pairing stations. If it's easier to pair than work alone, they're discouraged from working alone.

A pairing station is a single machine with two monitors, two keyboards, and two mice. It's still the size of 2 desks, meaning your pair can be comfortable without bumping legs. This can be a desktop that powers two monitors, or a developer can bring their laptop and plugs into both. Either works.

## Pairing Is a Learned Skill

What I want you to take away from this is that pair programming is something you need to practice to be good at. It increases interaction within a team and can be hard at first, but using the techniques already described you will get there in the end.

Keep at it, don't get discouraged, keep learning.
