import HashMap from "./HashMap.js";
const test= new HashMap;
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
// console.log(hash.length())
// console.log('getting',hash.clear());
// console.log('getting',hash.remove('Mosh'));
// console.log(hash.keys());
// console.log(hash.values());
console.log(test.entries())
console.log(test)

test.set('moon', 'silver')