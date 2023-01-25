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

    display() {
        let runner = this.head
        let myList = " "
        while (runner !== null) {
            if(runner.next !== null){
                myList += `${runner.data}, `
            }else {
                myList += runner.data
            }
            runner = runner.next
        }
        return myList
    }

}

SLL1 = new SLL()
SLL1.addFront('cherries')
SLL1.addFront('pickles')
SLL1.addFront('peaches')
// console.log(SLL1)
// SLL1.display()
// console.log(SLL1)
// SLL1.removeFront()
// console.log(SLL1)
// SLL1.front()
console.log(SLL1.display())