const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.patronum', 'received', '') +
  '\n\n' +
  'Expected value to not be odd received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.patronum', 'received', '') +
  '\n\n' +
  'Expected value to be odd received:\n' +
  `  ${utils.printReceived(received)}`;

const toPatronum = (expected) => {
  const pass = /^p+a+t+r+o+n+u+m+!*$/i.test(expected);

  if (pass) return {pass: true, message: () => 'patronum'};
  return {pass: false, message: () => 'not patronum'};
};

module.exports = {
  toPatronum,
  patronum: toPatronum,
};
