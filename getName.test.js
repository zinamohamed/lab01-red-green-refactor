const getName = require('./getName.js');

describe('get name from object', () => {
  it('takes in an object and returns name value', () => {
    const zina = { 
      name: 'Zina', 
      age: 23, 
      weight: '120 lbs' 
    };

    const name = getName(zina);

    expect(name).toEqual('Zina');
  });
});
