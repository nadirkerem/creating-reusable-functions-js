const { incrementAge, incrementAgeCopy } = require('./part3');

describe('incrementAge', () => {
  it('should increment the age field of the object', () => {
    const object = { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' };
    incrementAge(object);
    expect(object.age).toBe('42');
    expect(object.updated_at).toBeInstanceOf(Date);
  });

  it('should increment the age field of the copy of the object', () => {
    const object = { id: '42', name: 'Bruce', occupation: 'Knight' };
    const copy = incrementAgeCopy(object);
    expect(copy.age).toBe('0');
    expect(copy.updated_at).toBeInstanceOf(Date);
  });
});
