/*
Part 2: Thinking Methodically
When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
For the tasks below, use the following data to test your work:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Use callback functions alongside Array methods to accomplish the following:
Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age.
*/

const array = [
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
];

function sortByAge(array) {
  return array.sort((a, b) => Number(a.age) - Number(b.age));
}

function ageFilter(array) {
  return array.filter((person) => Number(person.age) <= 50);
}

function arrayModifier(array) {
  return array.map((person) => {
    const newPerson = {
      ...person,
      job: person.occupation,
      age: (Number(person.age) + 1).toString(),
    };
    delete newPerson.occupation;
    return newPerson;
  });
}

function sumOfAges(array) {
  return array.reduce((acc, person) => acc + Number(person.age), 0);
}

function averageAge(array) {
  return sumOfAges(array) / array.length;
}

module.exports = {
  sortByAge,
  ageFilter,
  arrayModifier,
  sumOfAges,
  averageAge,
};
