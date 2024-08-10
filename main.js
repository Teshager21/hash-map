import HashMap from "./HashMap.js";
const hash= new HashMap;
hash.set('Mosh',25);
hash.set('Bill',24);
hash.set('Fani',56);
hash.set('Sara',55);
console.log('======================================');
hash.set('Mosh',100);
 console.log(hash);
console.log(hash.length())
// console.log('getting',hash.clear());
// console.log('getting',hash.remove('Mosh'));
console.log(hash.keys())
console.log(hash)