function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Handle both null values
  } else if (a === null || b === null) {
    return 0; // Handle either null value
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10