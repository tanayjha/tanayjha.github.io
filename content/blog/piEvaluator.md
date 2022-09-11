---
title: "Evaluating million digits of Pi"
date: 2022-08-16T00:24:13+05:30
draft: false
showToc: true
ShowReadingTime: true
---

I recently got inspired from a book I am reading, Fermat's Last Theorem by Simon Singh, and decided to see what it takes to evaulate Pi to a large number of decimal places. I though that a million would be a good starting point, so a day later, here we are.

Now obviously, there is a lot of material out there on this as this seems to be a topic of great interest for a lot of people. I definitely find this fascinating but I also believe that there is no significance or meaning attached to the digits of pi. It is just a random string of numbers. However, I think this is true in mathematics as well as life that the things you have the most fun in doing eventually turns out to be those which you didn't do for some material gain.

So, the first challenge was to figure out a formula for Pi which can help with this calculation. Now there are many obscure formulas for approximating Pi out there. [This](https://en.wikipedia.org/wiki/Approximations_of_%CF%80) wikipedia page gives a good summary. Now, I had heard about the Ramanujan's formula for approximating Pi and also heard about how it converges very quickly and hence is being used in the recent development in this area to calculate more and more digits, so I wanted to try that one. However, I had to also keep in mind that I needed to code it (selected C# as the language, since I am already working on C# for one of my work related projects) and googling around a bit revealed that I would be better off using a formula that used a simple infinite series which can be coded relatively easily. 

I found [this](https://www.cygnus-software.com/misc/pidigits.htm) blog which points to Machin's formula which uses arctans to define Pi. This is the formula:

**PI/4 = atan(1) = 4 * atan(1/5) - atan(1/239)**

where atan(x) is tan<sup>-1</sup>x which has the following taylor's expansion: atan(x) = x - x^3/3 + x^5/5 - x^7/7 + x^9/9..

Now I have no clue how Machin found this formula for Pi. If you have a look at Ramanujan's formula you will be even more flabbergasted as that one makes no sense at all. At least the above formula has a easy way to verify that it [actually works](https://en.wikipedia.org/wiki/Approximations_of_%CF%80#Machin-like_formula).

Based on the above blog post, I decided to use Machin's formula and write down an implementation of it. Now the blog mentions an InfPrec class which will do very precise decimal calculations (precise to 10^6 decimal places if we want to calculate a million digits) but doesn't mention how to code it. So this was the main challenge. For refernce, the double class in C++ has 15 digits of precision and long double has 21 digits. So they don't even come close in fitting the bill.

Since I planned to use C#, one thing I could leverage was the [BigInteger class](https://docs.microsoft.com/en-us/dotnet/api/system.numerics.biginteger?view=net-6.0). This significantly reduces the amount of code needed as well as removes the low level complexity of doing the long multiplcation and divisions by hand. Obviously this can also be done with careful coding and most of you probably would have done it in your undergrad courses. It is a highly recommended excercise if you want to practice some implementation problem. 
One thing to note is that we have the BigInteger class but no BigDecimal class, so we have to deal with integers only. They could be very big integers (in our case containing a million digits) but they have to be integers nonetheless. 

So the first question that we have to answer is that how do we represent a rational number, say p/q as an integer. For example if you have a decimal number 0.25. Can we represent it using only integers? Yes we can. We can represent it as 25/100. Similarly all rational numbers p/q can be represented as a/10^k where a is a natural number. Now since we know in our calculations of pi to a million decimal places, we need a million decimal digits at max, so we can keep k to be a million. Once we standardise the base, we can just forget about it and only deal in terms of the natural number a. Whenever required, we can divide by 10^k to get back the original decimal number. This is the crux of the InfPrec class.

Here is the code for the above approach:
