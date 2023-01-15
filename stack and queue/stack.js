// // // topmost element is peek or latest inserted element is peek
// stack is datastructure , datatype so we not use here let,var , const we use this insted of datatypes

class Stack{
    constructor(){
        this.items=[]   // this is array and name is items //this.items means stack.items ...this is stack here // stack array
          this.maxSize=6      // we define stack size here   
    }
    // add ele to the stack
    add(element){                    // add() use for add element in stack
        return this.items.push(element)
    }
    // remove element from the stack
       
    remove(){
        if(this.items.length>0){
            return this.items.pop()
        }
    }

    // view the last element
    peek(){
        return this.items[this.items.length-1]    //use to check length of array
    }

   // check if stack is empty

    isEmpty(){                         // this method of stack and it is in boolean
        return this.items.length == 0     // is items length is 0
    }

    // the size of the stack

    size(){                         // use for check size
        return this.items.length
    }

    // to do empty the stack
    clear(){
        return this.items = []         // for clear use empty []
    }

// is array is full
    isFull(){
        return this.items.length == stack.maxSize    // we take variable here stack  ex = let stack=stack
    }
}

let stack = new Stack();  // take new variable here and store init above stack
stack.add(1)   // call add function here
stack.add(2) 
stack.add(4) 
// stack.add(7) 
stack.add(9) 
stack.add(8) 
                                                 // console all function here with this stack function  //
console.log(stack.items);             // this is use for check comlete stack values
// console.log(stack.remove());          // remove here
//  console.log(stack.items)            // check again stack here after removing value
//  console.log(stack.peek())
//  console.log(stack.clear());
// console.log(stack.isEmpty())
console.log(stack.isFull());


