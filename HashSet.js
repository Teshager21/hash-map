class HashSet{
    constuctor(){
        this.size=0
    
        }
    
    #bucket_size=16;
    #bucket=Array(this.#bucket_size).fill(null);
    size=0;
    #load_factor=0.75;
    #hash(key){ 
        let hashCode = 0;
          
       const primeNumber = 31;
       for (let i = 0; i < key.length; i++) {
         hashCode = primeNumber * hashCode + key.charCodeAt(i);
       }
    
       return hashCode%this.#bucket_size;
    }
    set(key){
        if(this.has(key)) {
            console.error(`The key ${key} already exists in the set`);
            return;  
        }
        if(this.size >= 0.75*this.#bucket_size){
           console.log("BUCKET SIZE EXCEEDED!");
           this.reallocateBucket();
        }
        const index=this.#hash(key);
        let entry= this.#bucket[index];
        if(!entry){  //if there no items on the bucket slot
            this.#bucket[index]=key;
            this.size++;
            console.log(this.#bucket)
        }
        else if(Array.isArray(entry)){ // if bucket slot is array
                    this.#bucket[index].push(key);
                    this.size++;
        }else{   //if the bucket slot contains just a number/string
                this.#bucket[index]=[entry,key];
                this.size++
        }
    }

has(key){
    const bucket=this.#bucket.flat();
    return (bucket.includes(key))? true:false;
    }
remove(key){
    if(!this.has(key)) return false;
    const index= this.#hash(key);
    const bucket=this.#bucket[index];
    if(!Array.isArray(bucket)){ 
        this.#bucket[index]=null;
        this.size--;
        console.log(this.#bucket)
        return true;  
    }
    if(Array.isArray(bucket) && bucket.includes(key)) { // if the bucket slot contains an array of keys
        this.#bucket[index].splice(bucket.indexOf(key),1);
        this.size--;
        return true;
    }

    }
length(){
    return this.size;
}

clear(){
    this.#bucket.fill(null);
    this.size=0;
}

keys(){
    const keys=[];
    this.#bucket.flat().map((entry)=>{
    if(entry!==null) keys.push(entry);
    });
    return keys.flat();
}

}

export default HashSet;