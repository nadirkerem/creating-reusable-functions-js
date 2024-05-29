const {
  summation,
  average,
  longestStringFinder,
  stringsLongerThan,
  everyNumberUpToN,
} = require('./part1');

describe('summation', () => {
  test('returns the sum of an array of numbers', () => {
    expect(summation([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe('average', () => {
  test('returns the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});

describe('longestStringFinder', () => {
  test('returns the longest string in an array of strings', () => {
    expect(longestStringFinder(['say', 'hello', 'in', 'the', 'morning'])).toBe(
      'morning'
    );
  });
});

describe('stringsLongerThan', () => {
  test('returns an array of strings longer than the given number', () => {
    expect(
      stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)
    ).toEqual(['hello', 'morning']);
  });
});

describe('everyNumberUpToN', () => {
  test('prints every number between 1 and n without using loops', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    everyNumberUpToN(5);
    expect(spy).toHaveBeenCalledTimes(5);
    expect(spy).toHaveBeenNthCalledWith(1, 1);
    expect(spy).toHaveBeenNthCalledWith(2, 2);
    expect(spy).toHaveBeenNthCalledWith(3, 3);
    expect(spy).toHaveBeenNthCalledWith(4, 4);
    expect(spy).toHaveBeenNthCalledWith(5, 5);
  });
});
