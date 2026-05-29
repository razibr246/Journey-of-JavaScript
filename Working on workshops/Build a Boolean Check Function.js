function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(booWho(true));        // true
console.log(booWho(false));       // true
console.log(booWho([1, 2, 3]));   // false
console.log(booWho([].slice));    // false
console.log(booWho({ a: 1 }));    // false
console.log(booWho(1));           // false
console.log(booWho(NaN));         // false
console.log(booWho("a"));         // false
console.log(booWho("true"));      // false
console.log(booWho("false"));     // false
