const {
  sortByAge,
  ageFilter,
  arrayModifier,
  sumOfAges,
  averageAge,
} = require('./part2');

describe('sortByAge', () => {
  test('sorts the array by age', () => {
    expect(
      sortByAge([
        { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
        { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
        { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
        { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
        { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
      ])
    ).toEqual([
      { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
      { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
      { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
      { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
      { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
    ]);
  });
});

describe('ageFilter', () => {
  test('filters the array to remove entries with an age greater than 50', () => {
    expect(
      ageFilter([
        { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
        { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
        { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
        { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
        { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
      ])
    ).toEqual([
      { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
      { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
      { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    ]);
  });
});

describe('arrayModifier', () => {
  test('maps the array to change the occupation key to job and increment every age by 1', () => {
    expect(
      arrayModifier([
        { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
        { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
        { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
        { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
        { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
      ])
    ).toEqual([
      { id: '42', name: 'Bruce', job: 'Knight', age: '42' },
      { id: '48', name: 'Barry', job: 'Runner', age: '26' },
      { id: '57', name: 'Bob', job: 'Fry Cook', age: '20' },
      { id: '63', name: 'Blaine', job: 'Quiz Master', age: '59' },
      { id: '7', name: 'Bilbo', job: 'None', age: '112' },
    ]);
  });
});

describe('sumOfAges', () => {
  test('returns the sum of the ages', () => {
    expect(
      sumOfAges([
        { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
        { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
        { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
        { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
        { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
      ])
    ).toBe(254);
  });
});

describe('averageAge', () => {
  test('returns the average age', () => {
    expect(
      averageAge([
        { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
        { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
        { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
        { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
        { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
      ])
    ).toBe(50.8);
  });
});
