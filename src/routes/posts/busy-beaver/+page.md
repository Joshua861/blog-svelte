---
title: 'The Busy Beaver Game'
date: 2023-08-19
description: 'In the busy beaver game, the aim is to find a program, that produces the most output possible, specifically to '
---

<script>
import Katex from 'svelte-katex'
</script>

Before delving into the concept of the busy beaver game, it's important to grasp the fundamentals of a Turing machine. A Turing machine serves as a mathematical representation of a device that manipulates symbols, often 1s and 0s, on an infinite tape divided into individual cells, each capable of holding a single symbol. The machine has a 'head' that can move left and right along the tape, reading and changing the symbol beneath it.

In the busy beaver game, the aim is to find a program, that produces the most output possible, specifically to write the most 1s on the tape possible. Excluding endlessly looping programs, because that would be boring, the program must eventually halt. There are different variations on the game, depending on how many states the machine can be in. For example, these are the rules for the 2-state game:

> 1. The machine can't have more than 2 states, not including the halting state.
> 2. The tape contains only 0s to start with, and the head usually starts at the left most cell on the tape.

An *n*th busy beaver is a Turing machine that wins the _n_-state busy beaver game, that writes the most 1s before halting. The winner of the 2 state game achieves 4 1s in 6 steps.

The game gets exponential the more states, with there being <Katex>(4n + 4)^{2n}</Katex> different Turing machines it could be. To run the machine, put it in the starting position, with the cells all blank, and iterating the function until it halts, then the number of 1s on the tape is the score. If the machine doesn't halt, then the score can't be counted.

The busy beaver function quantifies the max score you can get from a given busy beaver game. The busy beaver function grows faster than any other computable function, so that's cool.

## Sources

- [Turing Machines - LibreTexts](<https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Foundations_of_Computation_(Critchlow_and_Eck)/05%3A_Turing_Machines_and_Computability/5.01%3A_Turing_Machines>)
- [The Turing Machine - Wikipedia](https://en.wikipedia.org/wiki/Turing_machine?useskin=vector)
- [Busy Beaver - Wikipedia](https://en.wikipedia.org/wiki/Busy_beaver?useskin=vector)
