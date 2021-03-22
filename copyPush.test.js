const copyAndPush = require('./copyPush.js');

describe('copyAndPush test', () => {
  it('takes an array and returns a new array with a new number pushed to the end', () => {
    const array = ['Spring', 'Summer', 'Winter'];

    const copyPushArray = copyAndPush(array, 'Fall');

    expect(copyPushArray).toEqual(['Spring', 'Summer', 'Winter', 'Fall']);
  });
});
