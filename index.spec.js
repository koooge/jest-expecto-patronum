const matcher = require('./index');

expect.extend(matcher);

describe('.patoronum', () => {
  it('Expecto Patronum!', () => {
    const o = 'patronum';
    expect(o).patronum();
  });

  it.each([[false], [true], [''], [2], [{}], [() => {}], [undefined], [null], [NaN]])(
    'not Expect Patronum',
    o => {
      expect(() => expect(o).patronum()).toThrow();
    },
  );
});
