class HashMap{
    constuctor(){
    this.size=0

    }

#bucket_size=16;
#bucket=Array(this.#bucket_size).fill(null);
size=0;


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
        this.#bucket[index]={[key]:value};
        this.size++;
    }
    else if(Array.isArray(entry)){
        let found=true;
        for(let pair of entry){
            found= true;
            if(Object.keys(pair).includes(key)) {
                this.#bucket[index][entry.indexOf(pair)]={[key]:value};
                break;
             }
          found=false;
        }
        if (!found){
            this.#bucket[index].push({[key]:value});
            this.size++;
        }
    }else{
        if(Object.keys(entry).includes(key)) entry={key,value};
        else this.#bucket[index]=[entry,{[key]:value}]
    }
   
    // console.log(`hash for ${key} is ${index}`);
    // console.log(this.#bucket)
}

get(key){
    const index= this.#hash(key);
    const bucket=this.#bucket[index];
    if(!bucket){
        console.error(`No entry with key '${key}' found`);
       return null;
    }
    if(!Array.isArray(bucket)){
        return bucket[key];
    }else{
    for(let entry of bucket){
        if(Object.keys(entry).includes(key)) {
            return entry[key];
        }
    }
        
    }
}

has(key){
for(let entry of this.#bucket.flat()){
    if(entry!==null && Object.keys(entry).includes(key)) {
        return true;
    }
}
return false;
}

}

const hash= new HashMap;
hash.set('Mosh',25);
hash.set('Bill',24);
hash.set('Fani',56);
hash.set('Sara',55);
console.log('======================================');
hash.set('Mosh',100);
// console.log(hash);
// console.log(hash.size)
console.log('getting',hash.has('bill'));