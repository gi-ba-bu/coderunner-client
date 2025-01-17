/**
* @jest-environment jsdom
*/
const fs = require("fs");
const html = fs.readFileSync(require.resolve('../index.html'), 'utf8');
const { getGiphs } = require("../static/js/api");


beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
})

afterEach(() => {
  fetch.mockClear();
})

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve( (res) => { gifs = res.body  }),
  })
);
  
test('it makes a request to the giphy Api', async () => {
    const fakeEvent = {
    preventDefault: jest.fn(),
    target: {
     searchTerm: {value: 'hello'}
      }
     }

    const giphysent = await getGiphs(fakeEvent);
    expect(fetch).toHaveBeenCalledTimes(1);
});
