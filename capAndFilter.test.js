const capitalizeAndFilter = require('./capAndFilter.js');

describe('takes array capitalize all strings and filter out any that starts with the letter f', () => {
  it('capitalizes the words', () => {
    const arr = ['spring', 'summer', 'fall'];

    const name = capitalizeAndFilter(arr);

    expect(name).toEqual(['Spring', 'Summer']);
  });
});
