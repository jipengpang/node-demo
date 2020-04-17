console.log('Hello Node');
var a = 111;
var b = 222;
console.log(a + b);
module.exports = {
  a: 10,
  b: 30,
  name: '孙悟空',
  sayHello: function() {
    console.log('我是' + this.name );
  }
};