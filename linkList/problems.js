//______________linked list

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    // Push function => Add element at the last of the list
    push(data) {
        let newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            return
        }
        let currentNode = this.head
        while (currentNode.next != null) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
    // Pop function => remove element from last of the list
    pop() {
        if (this.head == null) {
            console.log("List is Empty");
            return
        }
        if (this.head.next == null) {
            this.head = null
            return
        }
        let secLastNode = this.head
        let lastNode = this.head.next
        while (lastNode.next != null) {
            lastNode = lastNode.next
            secLastNode = secLastNode.next
        }
        secLastNode.next = null
    }

    // unshift function => Add new elements at start of the list
    unshift(data) {
        let newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    // shift function => remove the first element of the list
    shift() {
        if (this.head == null) {
            console.log("List is empty");
            return
        }
        this.head = this.head.next
    }

    print() {
        if (this.head == null) {
            console.log("List is Empty");
            return
        }
        let node = this.head
        while (node) {
            console.log(node.data);
            node = node.next
        }
    }
}

let list = new LinkedList()
for (let i = 1; i <= 5; i++) {
    list.push(i)
}
for (let i = 1; i <= 2; i++) {
    list.pop(i)
}
list.unshift(5)
list.shift()
list.print()


