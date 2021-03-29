const fetchQuotes = require('./fetchQuotes.js');

describe('fetchQuotes function', () => {
  it('return one futurama information object', async() => {
    const characters = await fetchQuotes();
    expect(characters[0]).toEqual({
      character: expect.any(String),
      quote: expect.any(String),
      image: expect.any(String),
    });
  });
});
