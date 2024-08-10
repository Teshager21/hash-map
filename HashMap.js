class HashMap{
    constuctor(){

    }

#bucket=[];
#bucket_size=16;

#hash(key){ 
    let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
   }

   return hashCode%this.#bucket_size;
}

set(key,value){
    this.#bucket[this.#hash(key)]={key,value};
    console.log(`hash for ${key} is ${this.#hash(key)}`);
    console.log(this.#bucket)
}

}

const hash= new HashMap;
hash.set('Mosh',25);
hash.set('Bill',24);
hash.set('Fani',56);
console.log(hash);