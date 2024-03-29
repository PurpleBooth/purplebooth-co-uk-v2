---
date: "2015-03-10T04:51:03Z"
title: "CRC Models"
categories: ["OOP", "CRC"]
description: " Yesterday I had fun breaking down a complex system into simpler classes using CRC Models. CRC Models are Class Responsibility Collaborator models, and it allows you to identify classes that aren’t quite doing what they should be. Typically a key instance of when this practice is useful is if a system is consistently described as confusing, or people keep questioning if thing X should really live there. These phrases are symptomatic of a poor object class name/responsibility/collaborator match. "
---

Yesterday I had fun breaking down a complex system into simpler classes using CRC Models. CRC Models are Class Responsibility Collaborator models, and it allows you to identify classes that aren't quite doing what they should be.

Typically a key instance of when this practice is useful is if a system is consistently described as confusing, or people keep questioning if thing X should really live there. These phrases are symptomatic of a poor object class name/responsibility/collaborator match. Which this technique will help you identify.

CRC Modeling works like this, you follow 4 simple steps and at each stage fill in a different area of your model.

1.  Find Classes
2.  Find Responsibilities
3.  Define Collaborators
4.  Discuss - and make changes

<img src="/post/crc-models/1.png" alt="CRC Model" width="1400" height="1090" />

Firstly, you put the class along the top, for each of the classes in your system.

<img src="/post/crc-models/2.png" width="1364" height="1058" alt="Class name first" />

Secondly you write down all the responsibilities that that class has. These can be fairly low level, and it's important not to miss anything.

<img src="/post/crc-models/3.png" width="1364" alt="Responsibilities second" height="1066" />

Then you define what this class depends upon.

<img src="/post/crc-models/4.png" alt="Collaborators third" width="1364" height="1064" />

And finally you discuss if these classes are following the SOLID principles. Most importantly the Single Responsibility Principle, and draw new classes from the discussion. Key points to look out for in this is:

- Are all the roles related to the name of the class, or do they belong elsewhere
- Are all the collaborators related to all the roles of the class, or are these multiple responsibilities
- Are there too many roles in this class, and do we need to decompose it into smaller collaborator models
- Are there roles that are duplicated within the system and we could delete some code

This can lead to you deciding that a single class is actually fulfilling multiple, rather than a single, responsibility. Take this example.

We originally started out with an error handler, who's sole responsibility was to ensure that exceptions got turned into HTTP status codes (500, 400, 404, etc). Later we realized that we needed to log these errors, so a logger got added in. Because this was the only place that there was a logger in the system, we made that public and injected this class a whole bunch of places, and then we realized these logs need dates in a special format, and we needed that special format in a whole bunch of places within the system, and the same thing happened again.

<img src="/post/crc-models/ex-1-1.png" width="1382" height="1088" alt="Poorly designed Error Logger" />
<img src="/post/crc-models/ex-1-2.png" width="1370" height="1062" alt="Collaborator that doesn't require most of the roles of the class" />

When we look at the CRC model, we can clearly see that this class is doing things which aren't related to it's key role, and more importantly move them to more relevant classes. It'll also appear as a collaborator in classes that have no need to turn errors into HTTP status codes.

We can tidy up our original example like this:
<img src="/post/crc-models/ex-2-1.png" alt="Date Formatter" width="1370" height="1062" />
<img src="/post/crc-models/ex-2-2.png" alt="Error Handler" width="1372" height="1070" />
<img src="/post/crc-models/ex-2-3.png" alt="Response Logger" width="1364" height="1058" />
<img src="/post/crc-models/ex-2-4.png" width="1366" height="1064" alt="Email Worker" />

This gives us a much clearer path to refactor our code along.

This technique is most powerful if you're not quite sure how you should change your system. By looking at these CRC models it's easy to quickly pull out new classes based on the roles that the original class was fulfilling. Making a complex system, much simpler, and highlighting the problem classes within your model that could be causing confusion.
