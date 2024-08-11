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
                if(entry.includes(key)) { //the key already exists in the array
                    console.error(`The key ${key} already exists in the set`);
                    return;
                 }
                else {
                    this.#bucket[index].push(key);
                    this.size++;
                }
        }else{   //if the bucket slot contains just a number/string
            if(entry===key) { //if the same key is already there
                console.error(`The key ${key} already exists in the set`);
                return;  
            }
            else {this.#bucket[index]=[entry,key];
                this.size++}
        }
    }
}

export default HashSet;