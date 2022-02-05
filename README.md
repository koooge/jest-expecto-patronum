# jest-expecto-patronum
Jest matcher expecto patronum!

## Installation
With npm:

```sh
npm install -D jest-expecto-patronum
```

## Usage

## .patronum()
Use `.patronum` when checking if a value is `patronum`.

```js
const matcher = require('jest-expecto-patronum');
expect.extend(matcher);

it('should be patronum', () => {
  const o = 'patronum';
  expect(o).patronum();
});
```
