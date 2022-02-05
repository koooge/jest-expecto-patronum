const matcher = require('./index');

expect.extend(matcher);

describe('.patoronum', () => {
  it.each([['patronum'], ['Patronum'], ['PATRONUM'], ['Patronum!'], ['patronum!!!!!!'], ['Patrroooonuuum']])(
    'Expecto Patronum!',
    o => {
      expect(o).patronum();
    },
  );

  it.each([[false], [true], [''], [2], [{}], [() => {}], [undefined], [null], [NaN]])(
    'not Expect Patronum',
    o => {
      expect(() => expect(o).patronum()).toThrow();
    },
  );
});
