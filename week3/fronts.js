class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        let new_node = new Node(value);

        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront(value) {
        let frontNodeRemove = this.head
        this.head = frontNodeRemove.next
        frontNodeRemove.next = null
        return frontNodeRemove
    }

    front() {
        if(this.head === null) {
            return null
        }
        let curNode = this.head
        console.log(curNode.data)
        return this
    }

}

SLL1 = new SLL()
SLL1.addFront(18)
SLL1.addFront(5)
SLL1.addFront(73)
console.log(SLL1)
SLL1.removeFront()
console.log(SLL1)
SLL1.removeFront()
console.log(SLL1)
SLL1.front()
