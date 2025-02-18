function foo(a, b) {
  if (a === null && b === null) {
    throw new Error('Both parameters cannot be null');
  } else if (a === null) {
    return b;
  } else if (b === null) {
    return a; 
  } else {
    return a + b; 
  }
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // throws an error