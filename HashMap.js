class HashMap{
    constuctor(){

    }

#bucket_size=16;
#bucket=Array(this.#bucket_size).fill(null);


#hash(key){ 
    let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
   }

   return hashCode%this.#bucket_size;
}

set(key,value){
    const index=this.#hash(key);
    let entry= this.#bucket[index];
    if(!entry){
        this.#bucket[index]={key,value};
    }
    else if(Array.isArray(entry)){
        this.#bucket.push({key,value});
    }else{
        if(Object.keys(entry).includes(key)) entry={key,value};
        else this.#bucket[index]=[entry,{key,value}]
    }
   
    console.log(`hash for ${key} is ${index}`);
    console.log(this.#bucket)
}

}

const hash= new HashMap;
hash.set('Mosh',25);
hash.set('Bill',24);
hash.set('Fani',56);
hash.set('Sara',55);
console.log(hash);