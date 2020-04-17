console.log('this is in mathModule:');
function add(a, b) {
  console.log(a + '+' + b + '=');
  return a + b;
};
function mul(a, b) {
  console.log(a + '+' + b + '=');
  return a * b;
};
exports.add = add;
exports.mul = mul;