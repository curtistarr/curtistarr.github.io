---
title: Load-Bearing Code
date: 2026-05-02
summary: How to refactor without collapsing the building.
---

## How to Refactor Without Collapsing the Building

Every codebase has it. The function nobody touches. The service that’s been there since before anyone on the team joined. The module that, when you hover over it in a PR, someone senior will quietly say: *“leave that one alone.”*

### This is load-bearing code.

Like a structural wall in a house, it’s not well-designed or pretty. It’s just… holding things up. It predates the current architecture, the current team, the current company name. It works, which is the most dangerous thing it could do - because working means it never gets rewritten, and never getting rewritten means it accumulates weight.

The problem isn’t that it exists. Legacy code is inevitable. The problem is when it becomes invisible - when the knowledge of *why* it works the way it does lives only in someone’s head, or worse, nowhere at all.

You can usually spot it by feel. It has no tests, or tests that are clearly afraid of it. The function signatures are a little too broad. There’s a comment somewhere that says `// don't change the order of these calls`. Touching it produces a specific anxiety that ordinary refactoring doesn’t.

### So what do you do with it?

The answer isn’t “rewrite it” - that instinct has killed more projects than the original code ever would have. The answer is to start making it visible, incrementally, without heroics.

**Name it honestly.** If a module is load-bearing, the people who come after you deserve to know that before they start confidently refactoring it at 4pm on a Friday. A comment at the top of the file costs nothing. *“This service handles X and Y. It has implicit dependencies on call order - see below.”* That’s not an admission of failure, it’s an act of respect for future teammates.

**Write characterisation tests.** Not tests that describe what the code *should* do - tests that describe what it *actually does*, right now. The goal isn’t coverage metrics, it’s a safety net. If you change something and three characterisation tests break, you know you’ve moved something structural. [Michael Feathers](https://michaelfeathers.silvrback.com/characterization-testing) called this approach working with legacy code rather than against it, and it holds up.

**Map the blast radius.** Before touching anything, understand what depends on it. Trace the callers. Check for any configuration or ordering assumptions buried in the code. You’re not looking to fix anything yet - you’re just drawing a map. The map itself is valuable, even if you never change a line.

**Change it at the edges first.** If work does need to happen, resist the urge to go straight to the core logic. Can you add a seam - an interface, a wrapper, an abstraction layer - that lets you test and modify behaviour without touching the original? Often you can get 80% of what you need that way, with a fraction of the risk.

**Leave a trail.** Whatever you learn, write it down somewhere your team will actually find it - a README, a wiki page, an ADR. The knowledge that accumulates around load-bearing code is often more valuable than the code itself. Don’t let it live in your head.

Load-bearing code doesn’t have to stay scary. It just needs to be treated with the respect you’d give anything structural - you don’t knock down a wall without knowing what it’s holding up first.

---

I’ve faced code like this a few times in my career, and the approaches above helped me and my teams feel confident working with it.

Fittingly, the idea for this article is itself a bit load-bearing - it’s been sitting untouched in my notes since [WWDC 2023](https://x.com/curtistarr/status/1665778153610944516), working fine, waiting for someone to finally do something with it.
