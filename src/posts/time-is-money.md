---
title: Time Is Money
date: 2026-04-28
summary: How a simple boolean condition can save you hours of compute.
---

## How a simple boolean condition can save you hours of compute

![](https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Photo by [Emile Perron](https://unsplash.com/@emilep) on [Unsplash](https://unsplash.com/)

When I first started as a developer, I was working on a large SAAS application. One day, a technical architect (TA) with an eye for detail left a comment on one of my PRs. It pointed out an issue in a straightforward `if` condition, similar to this:

```java
if (externalService.isActive() && isFeatureEnabled) {  
    ...  
}
```

At the time I couldn’t see anything wrong with it.

But the TA left a comment along the lines of:

> Move the heavy operation to the right-hand side of the expression so it won’t be executed if the boolean is false.

I thought this was nitpicking. The call to the external service was quick — around 20ms. But that’s still dramatically longer than evaluationg a simple in-memory boolean. If the feature flag is disabled, this condition will always be false, and those 20ms are wasted every time it’s hit.

Now imagine this code path is executed 100,000 times a day. That adds up to around 33 minutes of compute time wasted daily. Over a month? That’s over 16 and a half hours — time your infrastructure is bring for no value.

This tiny inefficiency can be avoided by simply reordering the condition to take advantage of [short-circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation):

```java
if (isFeatureEnabled && externalService.isActive()) {  
    ...  
}
```

In Java (and many other languages), `&&` is a short-circuit operator. If the first condition is false, the second isn’t evaluated at all. By placing the cheapest, most likely-to-fail check first, you avoid unnecessary work.

It’s a habit I’ve internalised ever since. Now I instinctively consider the cost and likelihood of conditions when writing boolean expressions — and it always reminds me that **time is money**.

---

Thanks for reading! I hope this gave you a new appreciation for the humble `if` statement — and how even tiny decisions can have real impact at scale.
