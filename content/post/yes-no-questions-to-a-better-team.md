+++

date = "2015-04-19T16:35:56+01:00"
title = "14 Yes/No Questions to measure your team"
categories = ["The Joel Test", "Management"]

+++

Someone reminded me recently of [The Joel Test](http://www.joelonsoftware.com/articles/fog0000000043.html), which is 12 yes or no questions to rate a software development team's ability to perform.

They're looking a little tired and old now, I thought I'd attempt an update, so here's 14 yes or no questions to testing how well your team is able to perform.

Like the originals, these are hardly scientific, and fairly opinionated.

1. [Are you providing a pleasant work environment?](#yesno1)
2. [Are you developing vertical slices of functionality?](#yesno2)
3. [Are you creating opportunities for team members to develop?](#yesno3)
4. [Are you following an agile methodology?](#yesno4)
5. [Are you using a DVCS?](#yesno5)
6. [Are you testing behaviors?](#yesno6)
7. [Are you continuously deploying?](#yesno7)
8. [Are your applications small?](#yesno8)
9. [Are you following a coding standard?](#yesno9)
10. [Are you using your logs?](#yesno10)
11. [Are you testing with real users?](#yesno11)
12. [Are you testing real life scenarios?](#yesno12)
13. [Are your teams cross functional?](#yesno13)
14. [Are you working day to day with an empowered, enthusiastic representative from product?](#yesno14)

Ideally you'd want to fulfill all 14 of these. If you're only fulfilling 13 or 12, that's still pretty good. With only 1 or 2, you're probably going to have big problems.

### <a name="yesno1"></a> 1. Are you providing a pleasant work environment?

First and foremost if you're not working in an environment that is suitable to for the team to spend long periods of time in, then you're not going to get very good code.

At a very basic level this means physical things. Is the office too hot or too cold, too noisy, too little space, or is there screen glare at certain times of the day that make it hard to work. But it's not just physical things.

There is also psychological stresses. If team members are discriminated against, for any reason, or fear being shouted at or fired day to day, they aren't going to be completely focused on the development of a high quality product. This can sometimes be hard to detect, but they're just as important as physical stresses.

### <a name="yesno2"></a> 2. Are you developing vertical slices of functionality?

Vertical slices of functionality are where you develop from the front-end, to the back end, all the work required to complete a single feature, within a single team.

This means that when you finish a piece of work, you have a measurable benefit to the customer, and you've delivered something that they can actually use.

This is important because without a vertical slice, you might be developing things, but you'll never really know if they'll ever be used. Firstly you could end up throwing away work if the other part of the feature isn't completed.

Furthermore, you might end up reworking the parts you did complete because they didn't quite work with the new components.

### <a name="yesno3"></a> 3. Are you creating opportunities for team members to develop?

We all have gaps in our knowledge. You do, so do your team mates. The only thing that is universal, is ignorance. All good teams should be managing this.

There are number of different ways to address this. One to one techniques, self driven, and team based. Different people learn best in different ways.

Pair programming is an effective one to one technique. This is where two developers sit together and develop a single feature, sharing a computer. During this time the developers share tips and tricks and fill in gaps in each other knowledge.

Peer reviews of completed features is another one to one technique. This is where a second developer reviews any work done by a developer, to ensure that good techniques are followed, an accidental mistakes get into the code base. This allows knowledge transfer by two developers.

Now one to one techniques aren't always ideal. Some people don't learn best in a one to one situations, and you need a less direct approach.

More passive approaches can be used to allow people to self teach. However in order to do this people need to know that their is a problem.

Thankfully there are lots of tools available to do identify problem. Tools that count the dependencies between classes, the following of SOLID rules, length of functions and lots of others, give you an opportunity to show where problems lie within the code without having to directly teach someone. The person can then go away on their own and learn why these things have been flagged as issues, and self correct in the future.

Finally there are group teaching techniques, for things that you don't want to impart directly over and over again. These can be really obvious things like a short talk per sprint by different members of the team, or it can be taking the team to a conference where they can learn more about what's going on in the community. These are opportunities to set the culture of the team, and impart vital information en-mass.

The key thing to take away is that their are multiple opportunities to learn, to suit people of all learning styles.

### <a name="yesno4"></a> 4. Are you following an agile methodology?

Almost everyone should be following an agile methodology.

An elephant in the room with software development is that part of software development is discovering what we actually need to build. On top of that we often don't have enough money to just build everything we want, so we need to make sure we are building the right thing.

If you're not managing your project using an agile methodology, you're going to open yourself open to all these issues, and many others.

### <a name="yesno5"></a> 5. Are you using a DVCS?

It is no longer enough to be using a version control system. You need to be using decentralized version control.

The benefits of using the version control system that has a local repository allows you to make your commits meaningful by altering previous commits, and allows more reliable merging, rebasing and branching.

Using centralized version control is going to hamper your ability to keep velocity up, by wasting vital time on these non-productive tasks.

### <a name="yesno6"></a> 6. Are you testing behaviors?

It's not enough to simply be testing. You need to be testing behaviors. Testing without testing behaviors mean you are testing a specific implementation and you'll constantly be rewriting your tests.

This is achievable on the unit level and on the feature level, and there are even specialized tools that can help you do it.

### <a name="yesno7"></a> 7. Are you continuously deploying?

Deployments are hard, but the more often you do it the lower risk each deployment, because each deployment will bring smaller changes.

Each release is brings risks. These risks build with each new feature that is added to a release. The only solution is to reduce the number of features you're releasing each time.

We still need to release the same features, so we'll need to release more often, to avoid a big release.

### <a name="yesno8"></a> 8. Are your applications small?

Large applications can be easy to accidentally create. One new feature here, one new feature there. Suddenly you have a behemoth.

Large applications are hard to reason about. They're so big you can't possibly know all the dependencies a bit of code has. On top of that, this makes it impossible to effectively refactor.

A large numbers of dependencies, means more places for a problem to come from.

Smaller applications have none of these problems, and what's more you can have a green field application every time you start a new suite of features.

### <a name="yesno9"></a> 9. Are you following a coding standard?

This might seem like a minor thing, but following a coding standard means that there is no cognitive overhead when someone starts work on an existing bit of code.

Everyone puts a bit of personality into their code, they have preferred styles, or variable name schemes. This is bad because it means people get proprietary about parts of code that they wrote, and you have to translate the code into "your" preferred style. This can all read to reformatting wars and overhead in switching between the two.

Following a coding standard with comments, and a clear style means you avoid all of these problems.

### <a name="yesno10"></a> 10. Are you using your logs?

First and foremost, without logs on production and other remote servers, and a way to access them, you can't fix problems.

Further more, logs are a source of business data, you can track how many times someone has logged on or purchased something, and learn about a users behavior with your application.

Unless you're utilizing this information, you're going to miss out on lots of vital information, and you're going to struggle to fix bugs.

### <a name="yesno11"></a> 11. Are you testing with real users?

You're making your application to be used by someone. Get them to use the application or mock-ups of the application.

If you're not checking if your application is useful to your target audience, you don't know if you're wasting your time or not. It can also help you discover vital information that can lead to new features that can make your application truly exceptional.

### <a name="yesno12"></a> 12. Are you testing real life scenarios?

An extension to testing with real users for your features, is also testing the system in real scenarios that will happen when your users use your application.

Can your application handle the estimated number people that will be using it, or will it break. What happens when the database goes down for 5 min. What happens when you load your site in the most popular browser of your users, what about the second most, and so on and so forth.

If you're not testing the application as it is going to be used in real life, you have no idea if it's going to work as intended.

### <a name="yesno13"></a> 13. Are your teams cross functional?

A cross functional team has 1 member of each discipline required to complete a single feature. Cross functional teams are the only way to complete an entire feature without waiting for another team to complete their work. Blocking other teams work is frustrating and can cause some work to be rushed and other work to be delayed.

What's more is that cross functional teams can show the feature that they completed. They can demonstrate it, and they can be proud of it.

There are other benefits too, you might find your team members have hidden talents, such as a passion for front-end code from a team member who is nominally a ops specialist. You might also discover it kindles new interests and passions in existing team members.

Non-cross functional teams cause an over the wall mentality, knowledge silos and friction between teams. All of are very problematic to the smooth operation of a business.

### <a name="yesno14"></a> 14. Are you working day to day with an empowered, enthusiastic representative from product?

Talking face to face is the best way to get information. If you don't have a representative who cares about the thing you are building, is available to talk about it, and make decisions about it you're not going to be able to make progress without constantly waiting for their input.

Having them on site and on your side means that they can constantly re-prioratise tasks that are important to them. This means the truly valuable things are built first, and the less important things wait until later, rather than your best guess at what might be important.

It also means you're not managing expectations all the time. The product owner is aware of the reality of the situation, and is comitted and involved.
