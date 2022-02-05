const toPatronum = (expected) => {
  const pass = /^p+a+t+r+o+n+u+m+!*$/i.test(expected);

  if (pass) return {pass: true, message: () => 'patronum'};
  return {pass: false, message: () => 'not patronum'};
};

module.exports = {
  toPatronum,
  patronum: toPatronum,
};
