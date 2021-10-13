const subtract = (...args) => {
  return args.reduce((e, f) => {
    return e - f;
  });
};
module.exports = subtract;
