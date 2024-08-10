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
    else if(Array.isArray(entry)){ // if bucket slot is array
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
        else {this.#bucket[index]=[entry,{[key]:value}];
            this.size++}
    }

}

get(key){
   
    if(!this.has(key)){
        console.error(`No entry with key '${key}' found`);
       return null;
    }
    const index= this.#hash(key);
    const bucket=this.#bucket[index];
    if(!Array.isArray(bucket)){
        return bucket[key];
    }else{
    for(let entry of bucket){
        if(Object.keys(entry).includes(key)) return entry[key];
    }  
    }
}

has(key){
const bucket=this.#bucket.flat();
for(let entry of bucket){
    if(entry!==null && Object.keys(entry).includes(key)) {
        return true;
    }
}
return false;
}

remove(key){
if(!this.has(key)) return false;
const index= this.#hash(key);
const bucket=this.#bucket[index];
if(!Array.isArray(bucket)){
    this.#bucket[index]=null;
    this.size--;
    return true;  
}else{
   for(let entry of bucket){
        if(Object.keys(entry).includes(key)) {
            this.#bucket[index].splice(bucket.indexOf(entry),1);
            this.size--;
            return true;
        }
    }  
}

}

length(){
    return this.size;
}

clear(){
    console.log('before clear',this.#bucket);
    this.#bucket.fill(null);
    console.log('after clear',this.#bucket);
}

}

export default HashMap;