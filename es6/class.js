class A {
}

class B extends A {
}

console.log(B.__proto__ === A); // true
console.log(B.prototype.__proto__ === A.prototype); // true

(() => {
  console.log('Welcome to the Internet.');
})();

  console.log([1, 2, 3].map(x => x * x));
  console.log(0 == null);

function f(x, y) {
  return {x, y};
}

  console.log(f(1, 2)); // Object {x: 1, y: 2}


let obj = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

