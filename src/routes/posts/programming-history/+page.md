---
title: The History of Programming Languages
date: '2023-08-18'
description: 'The history of many major programming languages through the years.'
good: true
---

The word computer was in use from the early 17th century. Originally, a computer was a job, a person who performed calculations.

The first programmable [computer](https://en.wikipedia.org/wiki/Computer?useskin=vector#firstHeading) was invented by [Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage) in 1822, called the [Difference Engine](https://en.wikipedia.org/wiki/Difference_engine?useskin=vector). Which was designed to tabulate [polynomial](https://en.wikipedia.org/wiki/Polynomial) functions. Charles would go on to design many more computers before his death in 1871, sadly he was never able to complete construction of his machines due to conflicts with his chief engineer and inadequate funding.

One of these was the '[Babbage's Analytical Engine](https://en.wikipedia.org/wiki/Analytical_engine?useskin=vector)'. First described in 1837 as the successor to the [Difference Engine](https://en.wikipedia.org/wiki/Difference_engine?useskin=vector). The design used an arithmetic logic unit, if/else, loops, and integrated memory. Making it the first design for a general-purpose, Turing complete, computer.

[Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace?useskin=vector) is often credited as the first computer programmer. She worked closely with [Charles](https://en.wikipedia.org/wiki/Charles_Babbage) and was the first to recognize that the machine had applications outside of calculation. She wrote the first published computer program, for use to compute [Bernoulli numbers](https://en.wikipedia.org/wiki/Bernoulli_number).

Another influential figure in this field was [Alan Turing](https://en.wikipedia.org/w/index.php?title=Alan_Turing&useskin=vector). Known for his decryption of the cipher used in the [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine?useskin=vector), helping the Allies to defeat the Axis powers, and win World War 2. He also wrote [Turing's proof](https://en.wikipedia.org/wiki/Turing%27s_proof?useskin=vector), proving that there are some mathematical problems that can never be solved with computers. He came up with the concept of a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine?useskin=vector), the [Turing test](https://en.wikipedia.org/wiki/Turing_test?useskin=vector) (a way of testing the ability of a computer to exhibit intelligent behavior), and more.

However, it wasn't until the mid-20th century that the first true programming languages were developed. The first one we will be looking at is Fortran.

By the way, this list won't include binary or anything because that's what's a computer language, not a programming language.

## Fortran

Fortran was originally developed by [IBM](https://en.wikipedia.org/wiki/IBM 'IBM') in the 1950s, made as a more practical alternative to assembly. Fortran got its name from 'formula translation', and dominated scientific computing. It is popular for high performance computing, and has been in use for decades in areas such as weather, fluid dynamics, geophysics, and more.

The [Fortran syntax](https://ourcodingclub.github.io/tutorials/fortran-intro/#basics) seems very alien compared to modern, dynamic languages like Python and R. You have to explicitly start and end the program, and optionally give it a name. Then you (usually) write implicit none, as without it, by default, all variables starting with i, j, k, l, n, and m are assumed to be integers and the others 'real' arguments.

Variables are typically declared at the top of the program, with `INTEGER`, for whole numbers, `REAL`, for non integer numbers, and `LOGICAL` for boolean values. You declare strings with the character keyword, but have to define the length in characters. Although, it's worth noting that modern Fortran also supports concise and flexible variable declarations.

The syntax for if statements is quite similar to that of VBA, as you have to write `THEN`, and `END IF`. Fortran uses `READ`, to get input from the keyboard, and `WRITE` to print to the screen. It's mainly designed for mathematical operations, and has many built-in functions for this, like `+, -, *, /` and `SQRT()`, as well as an extensive library of functions, and routines for more complex calculations. This is one of its main strengths in scientific computing.

Fortran is known for its '[array](<https://en.wikipedia.org/wiki/Array_(data_structure)?useskin=vector>) operations', or the ability to perform operations on entire arrays at once, without needing to use a loop. These are highly efficient and useful for scientific computing and working with large data sets. Another popular feature is its native [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing?useskin=vector) capabilities. Parallel computing, which is a method of computing tasks by breaking them down into smaller chunks that can be processed simultaneously on different units, significantly improves performance.

Fortran 2003 and later introduced modern programming features such as [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming?useskin=vector), based on the concepts of objects that can contain data and code. Modern Fortran also has good [interoperability](https://en.wikipedia.org/wiki/Fortran?useskin=vector#:~:text=Interoperability%20with%20the%20C%20programming%20language) with other programming languages. Making it easier to integrate Fortran code with [C](<https://en.wikipedia.org/wiki/C_(programming_language)?useskin=vector>), [C++](https://en.wikipedia.org/wiki/C%2B%2B?useskin=vector), and others.

Fortran's influence in the history of programming has been substantial, indirectly inspiring the development of later languages such as [BASIC](https://en.wikipedia.org/wiki/BASIC) & [C](<https://en.wikipedia.org/wiki/C_(programming_language)?useskin=vector>). It is being updated to this day, with the latest stable release (at time of recording) being in 2018. It's used by almost 1% of developers, according to the 2023 Stack Overflow Developer Survey. And due to its use in scientific computing and legacy systems, it's not going anywhere.

## COBOL

In the late 1950s, programming was obscenely expensive. A survey found that with a data processing instillation, the programming alone cost $800,000 on average. Someone **HAD** to do something. It was getting out of hand. Luckily, it also found that—thank God—if a business-oriented language were used, it would be much cheaper and faster. Hooray!

On the 8th of April 1959, [Mary Hawes](https://en.wikipedia.org/wiki/Mary_Hawes), called a meeting, to organize a formal disussion on 'common business languages'. The group asked the [Department of Defence](https://en.wikipedia.org/wiki/United_States_Department_of_Defense) to sponsor the creation of what would become [COBOL](https://en.wikipedia.org/wiki/COBOL?useskin=vector), they agreed.

Grace Hopper is often referred to as 'The Mother of COBOL', and for good reason. She served as a technical consultant to the committee that decided on the creation of COBOL. COBOL was even based on her language, FLOW-MATIC, extending it with ideas from the IBM equivalent, [COMORAN](https://en.wikipedia.org/wiki/COMTRAN 'COMTRAN'). Not only did FLOW-MATIC shape the development of COBOL, it was also the **first** English-like data processing language, whatever that means.

### Syntax

A COBOL program is structured into four essential [divisions](https://www.tutorialspoint.com/cobol/cobol_program_structure.htm#:~:text=Divisions), each serving a specific purpose in organizing the code.

The first and only mandatory division is the `IDENTIFICATION DIVISION`, used by the compiler and readers to identify the program. You **must** set a `PROGRAM-ID`, providing a name for your COBOL program.

The next division is the `ENVIRONMENT DIVISION`, where you specify information about the system on which the program was compiled and the system on which it will be executed. Additionally, it allows you todefine external data sets and files used by the program. This provides the necessary context for the program's environment.

After that, the `DATA DIVISION`, arguably one of the most crucial sections of a COBOL program. In this division, you describe the data structures used by the program, including the layout and characteristics of data files, working storage variables, and records. COBOL's strength lies in its ability to handle vast amounts of data, making the `DATA DIVISION` integral to handling large-scale business processes.

Finally, we have the `PROCEDURE DIVISION`, which contains the actual logic of the COBOL program. Here, you'll write the logic for the program, such as calculations, input/output operations, and if/else statements. You can use statements, including `DISPLAY` to print output to the screen, or `IF`, `ELSE`, and `END-IF` to make decisions.

COBOL is, to this day, a very commonly used language, with 0.66% of respondents to the Developer Survey, saying they used it. With the sheer quantity of COBOL legacy code still in use, it doesn't look like COBOL is going anywhere, anytime soon.

## BASIC

> BASIC, or 'Beginners' All-purpose Symbolic Instruction Code', is a family of general-purpose, high-level programming languages designed for ease of use.
> <cite> — Wikipedia</cite>

It was created in 1963, by Thomas Kurtz and John Kemeny, at Dartmouth College, with the goal of enabling non-scientific students to use computers. At the time, nearly all computers needed custom software, which only professionals tended to learn.

Existing languages were “too tricky”, for example, Fortran had an “almost impossible-to-memorize convention for specifying a loop”. Kemeny and Kurtz agreed that it was very important for students outside STEM fields to be able to write code. Their vision was for every student to be able to access a computer, and any staff should be able to use a computer in the classroom.

Another problem with existing computing was a lack of “immediate feedback”. Computers used [batch processing](https://en.wikipedia.org/wiki/Batch_processing?useskin=vector), where programs are run in batches at scheduled times. This meant that people had to wait a long time to see the output and if their code contained any bugs. Luckily, John **McCarthy** had the solution: time-sharing!

The concept of time-sharing is claimed to have been authored by Robert Dodds in 1949, but the term wasn't used until 1958, by Bob Bemer. Time-sharing is where a machine divides its processing time between all the users, making it behave more like everyone having a slower computer to themselves. This meant that small scripts could run in just a few seconds, a massive step up from batch processing.

The first version of BASIC was written by Kemeny. It was heavily inspired by FORTRAN II, many commands were similar or identical to Fortran. However, the syntax was changed wherever they thought it could be improved. For example, the “impossible to memorize” loop was changed to be easier to remember. This, and many more changes, helped make BASIC much easier whilst still resembling Fortran.

The project was given a $300k grant by the National Science Foundation. The money went towards, buying a computer for processing and a real-time processor to handle the teleprinters used for input and output. A dozen undergrads worked on it for about a year. Writing the DTSS system and the compiler, the first version was officially released in May 1964.

The usage at Dartmouth increased rapidly, with the CPU needing to be replaced twice. By 1970 there were hundreds of people connected to said computers, some remotely. The designers, wanting more people to adopt the language, made it completely free. They put a lot of effort into promoting the language, and BASIC would go on to be hugely popular and inspire [Visual Basic](<https://en.wikipedia.org/wiki/Visual_Basic_(classic)?useskin=vector>).

### Syntax

This is the syntax for QBASIC.

Usually, a script will start with `CLS`, or clear screen. This will simply remove all other text from the command prompt, leaving you with a blank slate, for your script to execute. And scripts are stopped with the `END` command.

```vb
CLS
...
END
```

Line numbers (usually going up in 10s), are optional. In BASIC, you can print to the screen with `PRINT`, you concatenate strings with a `;`

```vb
PRINT "Hello World"
PRINT "Hello ";name;" nice to meet you!"
```

You add comments with the `REM`, or remark command.

```vb
REM This program is SUPER cool
```

You get input with `INPUT`, and store the result as a second parameter.

```vb
INPUT "Your name: ", name
```

In BASIC, there are numerous variable types, but the two main ones are numbers and strings. You declare a string with `name$`, and a number with `name%`.

```vb
10 INPUT "Number 1: ", num1%
20 INPUT "Number 2: ", num2%
30 sum% = num1% + num2%
40 PRINT "Number 1 + Number 2 = "; sum%
```

```vb
10 INPUT "First name: ", firstName$
20 INPUT "Second name: ", secondName$
30 fullName$ = firstName$ + " " + secondName$
40 PRINT "Full name: "; fullName$
```

The `GOTO` command works as you would expect. Just going to that line and continuing on from there. For example, we could make an infinite loop by writing this:

```vb
10 PRINT ":3"
20 GOTO 10
```

You can also jump to a line by using its label. You can label a line, and `GOTO` it like such:

```vb
hi:
PRINT "Hiiiiiii :3"

GOTO hi
```

This would also run in an infinite loop. You could alternatively use the `GOSUB` command, which works more like a function.

```vb
10 sayHello:
20 REM Example sub
30 PRINT "nrrp purr meow :3"
40 RETURN
50 GOSUB sayHello
```

After line `30` has been run, it will return to the line after the `GOSUB`, meaning that this wouldn't run in a loop. That was the basic BASIC syntax.

## C

C might be _the_ most well known and influential programming language ever, and so much of the software we use every day was written (primarily) in C. Some you might recognize are: the Linux kernel, Git, FFmpeg, OpenSSL, VLC media player, Unix, Python, GCC, Doom, Vim, Quake 1-3, Bash, GIMP, OpenGL, APACHE, PHP, SQLite, PostgreSQL, MySQL, and Nginx.

C is a general-purpose programming language created by Dennis Ritchie in the 1970s, at Bell Labs, and is generally considered the first true high level programming language (meaning that it is closer to human language than machine code).

### B & Unix

C was originally a successor to the programming language B, which was also developed at Bell Labs, by Ken Thompson.

Thompson developed B in the late 1960s. It was designed for writing system software for the Multics operating system, however it was quite limited. Dennis Richie saw the potential for improvement, so, in 1972, he started work on a new language. He called it C. It was designed to be more efficient and versatile than its predecessor. With new features like data-types, and structured programming.

Due to this, C became the language of choice for developing the new Unix operating system, that was also being developed at Bell Labs. This made Unix highly portable, as C code could be adapted to various computer architectures.

### The C programming language (book)

It's often referred to as the “K&R C” book, after its two authors, Dennis Ritchie and Brian Kernighan. The book teaches the C fundamentals, syntax, and best practices. Despite being published in 1978, it's still widely used and respected in the programming community, and considered a must-read for someone wanting to start C.

### Features

C is known for its **low level** control. Meaning that it is able to manipulate hardware and memory directly. Due to this, C is sometimes referred to as a “high-level assembly language”, It **doesn't have a garbage collector**, meaning that it's up to the programmer to manage memory allocation and deallocation. This can be very **powerful**, and is partly responsible for C's famous **fast** speeds, but can lead to errors and **memory** leaks if done wrong.

It is also very **efficient**, C code runs quickly with minimal resources. One of its main features, and part of the reason it was chosen to be used for use in Unix, was its **portability**, along with its **simplicity** and **efficiency**. This means that C code can compile to executables for many operating systems and pieces of hardware.

The **standard library** in C is a collection of functions and macros that you can use in C programs without having to reinvent the wheel, saving time and effort. `stdio.h`, or standard input/output (.h is one of the file extensions used by C programs) provides functions like `printf()` to print, and `scanf()` to get input. `stdlib.h` contains functions for memory management like `malloc()` (or memory allocate), and `free()`. As well as many more, such as `string.h` for string manipulation, `math.h` for mathematical functions, and `time.h`, for dealing with time.

### Syntax

You can declare variables with their data types like this:

```c
int age = 69; // int, or integer is for whole numbers (2 or 4 bytes)
float pi = 3.14; // float, or floating point is for decimal numbers (4 bytes)
double e = 2.71828182845; // like a float but with 8 bytes
char grade = 'A'; // a single character/number (1 byte)
```

And use `if`, `else`, and `else-if`, for branching.

```c
int a = 1;
int b = 3;

if (a > b) {
    printf("a > b");
} else if (a == b) {
    printf("a == b");
} else {
    printf("a < b"); // this would execute
}
```

C has `for`, `while`, and `do-while` loops.

```c
int i = 0;
while (i <= 10) {
    printf("%d", i); // %d means integer variable
    i++;
} // prints the numbers 0-10
```

Arrays can be used to store multiple values in a single variable. All the elements in the array must be of the same data type.

```c
int numbers[] = {1, 2, 3, 4, 5}; //example array

// you can get a specific element in an array with its index
printf("%d", numbers[1]); // prints 2
// you can also edit it
numbers[3] = 19; // {1, 2, 3, 19, 5}
```

C does not have a string type, instead you create a char array.

```c
char string[] = "Hello World!!!\0" // double quotes instead of single which is usually used for char types
```

You could print out the string like this:

```c
char string[] = "Hello World!!!\0"; // the \0 marks the end of a string

/* prints hello world
   the %s means a string variable */
printf("%s", string);
```

Input is handled with the `scanf()` function.

```c
int num;

printf("Please type a number: \n"); // \n = new line
scanf("%d", &num); // saves the input in the num variable
```

The `main()` function executes when the script is run, and imports are put at the top.

```c
#include <stdio.h> // all examples with printf() or scanf() require this

int main() {
    // code here
}
```

There is soooo much more to the C syntax, but those are the absolute basics.

C has gone on to influence many other languages, such as C++, C#, Obj-C, Go, Java, JS, Julia, Perl, PHP, Python, Rust, Nim, and Zig, and sees heavy use in operating systems, drivers, and apps. According to Stack Overflow 19.34% of developers still use it in 2023, however, usage has declined since C++ is often a better choice.

## C++

C++ is a high level, general purpose programming language, created by Bjarne Stroustrup, and first released in 1985. It is a superset of C, meaning that any valid C code is also valid C++ code. It has become more and more capable over time, with modern C++ supporting object-oriented programming, a stronger type system, better exception handling, inheritance, polymorphism, namespaces, and more.

The Name C++ comes from a feature in C where if you wrote `var++` it would increment it by one. This represents how C++ has incremented on Cs features.

### History

The development of C++ started in 1979, when Bjarne began work on 'C with Classes'. When he started working at Bell Labs, he had the problem of analysing the Unix kernel, and set out to enhance C with new features. He took insperation from another language, Simula, which had many features that were very useful for making software, but was too slow.

Initially, he added features to the existing C compiler, like classes, strong typing, inlining, and default arguments. But in 1982 he developed a new compiler called Cfront which compiled C++ to C.

C++ gained popularity in the '90s and is widely used for game dev, systems programming, and more. According to Stack Overflow, 22.42% of devs use it, just above C.

## Bash

Bash (or the _Bourne Again Shell_) is a Unix shell written by Brian Fox for the GNU Project. It was made as an open source replacement for the Bourne shell, hence the name. It was first released in 1989 is the default shell in most Linux distros, and was one of the first programs Linus Torvalds ported to Linux.

The bash programming language can be extremely powerful, and is mainly used for automating tasks. The best part about Bash is that any command you can run in your terminal can also be run in a bash script, so the power of Bash is largely dependent on what packages you have installed.

### Syntax

You can run commands just like you would from your terminal.

```bash
echo "Hello World!" # prints hello world
```

You can set variables to a set value, or save the output of a command to use later.

```bash
name="Josh"
age=100

current_date=$(date) # saves the current date
```

There are also if, and else if statements.

```bash
if [ "$age" -ge 18 ]; then # -ge means greater than or equal
    echo "You are an adult."
else
    echo "You are not an adult."
fi # fi is used to end an if block
```

For loops can be used like this:

```bash
for i in {1..5}; do
    echo "$i"
done
```

Bash even lets you define functions.

```bash
greet() {
    echo "Hello $1!"
}

greet "Josh" # Hello Josh!
```

You can get input with `read`.

```bash
read -p "What is your name? " name
echo "Hello, $name"
```

Or anything else you can do from your terminal.

```bash
# converts all .wav files in a folder to .mp3 with ffmpeg
for file in *.wav; do
  if [ -f "$file" ]; then
    # Extract the file name without the extension
    filename="${file%.wav}"
    # Convert to mp3 using ffmpeg
    ffmpeg -i "$file" -q:a 0 "${filename}.mp3"
    echo "Converted $file to ${filename}.mp3"
  fi
done
```

According to stack overflow, 32% of devs use Bash or another shell.

## Python

Python is a high-level, general-purpose programming language. It's design philosophy emphasizes code readability and an extensive use of indentation.

Python is the 3rd most used programming language, with almost half of respondents saying they use it.

## Lua

Lua is a lightweight, high-level programming language primarily designed for embedding in applications due to its small size and ease of use. It has been used in various software applications, including Photoshop Lightroom, World of Warcraft, Angry Birds, Roblox, and Neovim.

It was created in the early 1900s by a team of developers in Rio. Lua is very popular in the gaming industry due to its simplicity and speed.

## Progress

1. ~~Fortran (1957)~~

2. ~~COBOL (1959)~~

3. ~~BASIC (1964)~~

4. ~~C (1972)~~

5. ~~C++ (1983)~~

6. ~~Bash (1989)~~

7. Python (1991)

8. Lua (1993)

9. R (1993)

10. Ruby (1995)

11. Java (1995)

12. PHP (1995)

13. JavaScript (1995)

14. C# (2000)

15. Swift (2014)

16. Rust (2010)

17. Go (2009)

## Sources

- [The History of Computers](https://www.bricsys.com/en-gb/blog/who-invented-computers) - Bricsys

- [Computer](https://en.wikipedia.org/wiki/Computer) – Wikipedia

- [Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage) – Wikipedia

- [Difference Engine](https://en.wikipedia.org/wiki/Difference_engine) – Wikipedia

- [Polynomial](https://en.wikipedia.org/wiki/Polynomial) – Wikipedia

- [Fortran](https://en.wikipedia.org/wiki/Fortran) – Wikipedia

- [Introduction to Fortran](https://ourcodingclub.github.io/tutorials/fortran-intro/) – Our Coding Club

- [Implicit None Statement in Fortran](https://www.bottomscience.com/implicit-none-statement-how-to-use-it-fortran/) – Bottom Science

- [Introduction to COBOL](https://www.mainframestechhelp.com/tutorials/cobol/introduction.htm) – Mainframes Tech Help

- [Beginner's Guide to COBOL Made Easy](https://scribe.rip/modern-mainframe/beginners-guide-cobol-made-easy-introduction-ecf2f611ac76) – Scribe

- [COBOL Tutorial](https://www.tutorialspoint.com/cobol/index.htm) – TutorialsPoint

- [COBOL](https://en.wikipedia.org/wiki/COBOL?useskin=vector#History_and_specification) – Wikipedia

- [Parallel computing](https://en.wikipedia.org/wiki/Parallel_computing?useskin=vector) – Wikipedia

- [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming?useskin=vector) – Wikipedia

- [COBOL Docs](https://www.ibm.com/docs/en/cobol-zos) – IBM

- [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_engine?useskin=vector) – Wikipedia

- [Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace?useskin=vector) – Wikipedia

- [Bernoulli numbers](https://en.wikipedia.org/wiki/Bernoulli_number) – Wikipedia

- [Turing Test](https://en.wikipedia.org/wiki/Turing_test?useskin=vector) – Wikipedia

- [Turing Machine](https://en.wikipedia.org/wiki/Turing_machine?useskin=vector) – Wikipedia

- [Alan Turing](https://en.wikipedia.org/w/index.php?title=Alan_Turing&useskin=vector) – Wikipedia

- [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine?useskin=vector) – Wikipedia

- [Turing's proof](https://en.wikipedia.org/wiki/Turing%27s_proof?useskin=vector) – Wikipedia

- [Turing test](https://en.wikipedia.org/wiki/Turing_test?useskin=vector) – Wikipedia

- [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper?useskin=vector) – Wikipedia

- [Computer (occupation)](https://en.wikipedia.org/w/index.php?title=Computer_%28occupation%29&useskin=vector) – Wikipedia

- [BASIC](https://en.wikipedia.org/wiki/BASIC?useskin=vector) – Wikipedia

- [Batch processing](https://en.wikipedia.org/wiki/Batch_processing?useskin=vector) – Wikipedia

- [Time sharing](https://en.wikipedia.org/wiki/Time-sharing?useskin=vector) – Wikipedia

- [Developer Survey](https://survey.stackoverflow.co/2023/#most-popular-technologies-language) – Stack Overflow

- [Programming in BASIC](https://lateblt.tripod.com/basic.htm) – Lateblt @ Tripod.com

- [Pascal](<https://en.wikipedia.org/wiki/Pascal_(programming_language)?useskin=vector>) – Wikipedia

- [C](https://en.wikipedia.org/w/index.php?title=C_%28programming_language%29&useskin=vector) – Wikipedia

- [C in 100s](https://www.youtube.com/watch?v=U3aXWizDbQ4) – [Fireship](https://www.youtube.com/@Fireship)

- [Programs written in C](https://www.quora.com/What-are-some-known-programs-written-in-C-1) (plus fact-checking on Wikipedia)

- [Most famous programs written in C](https://www.reddit.com/r/C_Programming/comments/43c42c/most_famous_programs_written_in_c/) (plus fact-checking on Wikipedia)

- [C tutorial (w3schools)](https://www.w3schools.com/c/)

- [Online C compiler](https://www.programiz.com/c-programming/online-compiler/) (for checking if my scripts were valid)

- [C++](https://en.wikipedia.org/wiki/C%2B%2B) - Wikipedia

- [Bash](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)?useskin=vector>) - Wikipedia

- [About lua](https://www.lua.org/about.html)

- [Lua (wikipedia)](<https://en.wikipedia.org/wiki/Lua_(programming_language)?useskin=vector>)
