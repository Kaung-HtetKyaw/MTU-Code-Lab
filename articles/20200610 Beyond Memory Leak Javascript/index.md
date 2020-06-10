---
premalink: beyond-memory-leak-javascript
image: https://miro.medium.com/max/3372/1*I0SgfNK2cbkF9ysDNSehKg.png
date: 2020-06-10T21:01:46
description: Memory leaks are like that pimple you have on your nose with prom night coming. You know that they exist and they’re not going anywhere, but you just pray they don’t flare up or that no one else notices when the time for magic comes.
tags: ["Javascript", "Memory Management"]
---

# Beyond Memory Leaks in Javascript

![Javscript Memory Management](https://miro.medium.com/max/3372/1*I0SgfNK2cbkF9ysDNSehKg.png)

> Memory leaks are like that pimple you have on your nose with prom night coming. You know that they exist and they’re not going anywhere, but you just pray they don’t flare up or that no one else notices when the time for magic comes.
> They’re uncomfortable. They’re nasty. They feel like a beacon announcing your nose to the world from a distance. And all you ever wanted was to impress ladies and gents alike with your smashing dance moves.
> (For the record, I had no pimples on prom night. And I danced like a champion.)

![Dancing](https://miro.medium.com/max/640/1*UtFX9ErVYjtj6YXFf7vAuQ.gif)
<br>
<br >
Every front-end developer, even those at [OutSystems](https://www.outsystems.com/?utm_source=medium&utm_medium=top_of_article&utm_content=Beyond%20Memory%20Leaks%20in%20JavaScript&utm_campaign=blog), has faced JavaScript memory leaks one time or another. In this regard,

1. There are three types of developers:
   The Savvy: Those who knew what they were dealing with and solved the issue.
   The Aware: Those who knew what they were dealing with but had no idea how to solve the issue.
   The Oblivious: Those who didn’t even realize there was a problem, to start with.

With this in mind, we have compiled a few guidelines to help those #3s leave the comfort of their oblivion and help #2s delve a little deeper. And, you never know, but those clever #1s may also enjoy, and hopefully endorse, some of these tips. We’re open for discussion, too. We’ve got treats for everyone!
TL; DR: If you want to know where to start regarding those dreadful JavaScript memory leaks, you’ve come to the right place.

## The Big Picture — JavaScript’s Memory Lifecycle

<br>
<br>
First things first, then. In JavaScript, memory is automatically allocated each time you create, for instance, an object, an array, a string, or a DOM element.

Memory leaks happen when your code needs to consume memory in your application, which should be released after a given task is completed… but isn’t. For some reason, the application neglects to release the memory, which keeps on being consumed without true need for it to happen.

This is when that pimple first manifests itself and when you should take measures to prevent it from flaring or spreading out.
The biggest problem with memory leaks is that they’re inherent code flaws, not errors with outputs that you can verify. They’re dubious, because they result from valid code that compiles, which makes the runaway, memory-leaking code seem intentional for the machine.

They’re definitely not features and are not easy to debug.
However, if your app is running slowly or even crashing unexpectedly, that’s the first clue that you may have a memory leak.

![A sawtooth pattern with these vertical drops coinciding with garbage collection may also indicate a memory leak.](https://miro.medium.com/max/1400/1*K3Tg3h5BHxghpqDItaVPgg.png)

Memory leaks can assume many shapes and forms, though. They’re masters of deception and disguise. They move in mysterious ways. But it’s OK, it’s alright: we’re here to help.

## Object Memory Graph and Retaining Paths

### Object Memory Graph

The [object memory graph](https://www.html5rocks.com/en/tutorials/memory/effectivemanagement/) in JavaScript is a collection of all objects and their references. The reference path from the most immediate context up to the top is called a **retaining path**.

You can represent memory leaks in this graph. What do you call those values that you no longer need, yet are still referenced in this graph? Want to guess this one?

They’re called memory leaks. That’s right.

The retaining path is what classified the object as memory. If paths are cut off, the object becomes available for garbage collection. So, all values that cannot be reached from the root node without a retaining path are garbage-collected.

You have a nifty graphic representation below for that. See that dashed, isolated, sad little object down there? That one will be swept away.

![figure](https://miro.medium.com/max/1400/1*TdWDj8PsWRuSbeBE6fe5KA.png)
