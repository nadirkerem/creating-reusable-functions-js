/*
Part 3: Thinking Critically
It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
For this section, develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
*/

function incrementAge(object) {
  (object.age = object.age ? (Number(object.age) + 1).toString() : '0'),
    (object.updated_at = new Date());
}

function incrementAgeCopy(object) {
  return {
    ...object,
    age: object.age ? (Number(object.age) + 1).toString() : '0',
    updated_at: new Date(),
  };
}

module.exports = { incrementAge, incrementAgeCopy };
