/*
Part 1: Thinking Functionally
When coding, it is important to approach your work using small, manageable blocks of code. Some functions may become dozens or hundreds of lines long, but keeping things small and simple will help you scale and maintain your code.
This section will have you build a few simple functions to accomplish arbitrary tasks. When building functions, remember that there are many ways to accomplish a task in programming. Sometimes, the shortest route is the best, and sometimes it is not.
Take the following example, which contains five functions that accomplish the same task. If you were looking at this code for the first time, which would make the most sense to you?
While there is rarely a “correct” answer in programming, it is important to keep your audience (other programmers) in mind. Write functions with descriptive names, and clear inputs and outputs.
With that in mind, write functions that accomplish the following:
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/

function summation(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, curr) => acc + curr, 0);
}

function average(arrayOfNumbers) {
  return summation(arrayOfNumbers) / arrayOfNumbers.length;
}

function longestStringFinder(arrayOfStrings) {
  let longestString = arrayOfStrings[0];
  arrayOfStrings.forEach((string) => {
    if (string.length > longestString.length) longestString = string;
  });
  return longestString;
}

function stringsLongerThan(arrayOfStrings, number) {
  const filteredStrings = [];
  arrayOfStrings.forEach((string) => {
    if (string.length === number) filteredStrings.push(string);
  });
  return filteredStrings;
}

let number = 1;

function everyNumberUpToN(n) {
  if (number === n) return console.log(number);
  console.log(number);
  number++;
  everyNumberUpToN(n++);
}
