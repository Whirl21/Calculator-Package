const multiply = (...args) => {
  return args.reduce((e, f) => {
    return e * f;
  });
};
module.exports = multiply;
