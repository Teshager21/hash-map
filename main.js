import HashMap from "./HashMap.js";
import HashSet from "./HashSet.js";
// const test= new HashMap;
// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')
// console.log(test.entries())
// console.log(test)

// test.set('moon', 'silver');

// console.log('set', test.set('lion','orange'));
// console.log(test.entries());
// console.log(test.has('lion'));
// console.log(test.length());
// console.log(test.remove('jacket'));
// console.log(test.entries());
// console.log(test.keys());
// console.log(test.values());

const set= new HashSet();
set.set("John");
set.set("Josh");
set.set('Mosh');
set.set("Bill")

console.log(set.has("John"));
console.log(set.has("Josh"));
// console.log(set);
// console.log(set.remove("John"))
console.log(set.clear())
console.log(set.length());