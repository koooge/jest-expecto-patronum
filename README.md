# jest-expecto-patronum
Jest matcher Expecto Patronum!

## Installation
With npm:

```sh
npm install -D jest-expecto-patronum
```

## Usage

### .patronum()
Use `.patronum` when checking if a value is `patronum`.

```js
const patronum = require('jest-expecto-patronum');
expect.extend(patronum);

it('should be patronum', () => {
  const o = 'patronum';
  expect(o).patronum();
});
```
