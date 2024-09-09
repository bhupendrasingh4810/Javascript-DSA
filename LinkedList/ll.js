class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const node = new Node(data);
        if (!this.head) this.head = node;
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    insertAtBeg(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    insertAtPos(data, pos) { 
        if (pos < 0) return;
        const node = new Node(data);
        if (pos === 0) {
            this.insertAtBeg(data)
            return
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        while (current && index < pos) {
            previous = current;
            current = current.next;
            index++;
        }
        node.next = current;
        previous.next = node;
    }

    delete(data) {
        if(!this.head) return;
        if(this.head.data == data) {
            this.head = this.head.next;
        }

        let current = this.head;
        let previous = null;

        while(current && current.data != data) {
            previous = current;
            current = current.next;
        }
        if(current == null) return;
        previous.next = current.next;
    }

    find(data){
        let current = this.head;
        while(current) {
            if(current.data === data) {
                console.log(current);
                return;
            }
            current = current.next;
        }
        return null;
    }

    display(){
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    llSize() {
        if(!this.head) {
            console.log('Linked list size is 0');
            return;
        }
        let current = this.head;
        let index = 0;

        while(current.next) {
            current = current.next;
            index++;
        }
        console.log(`Linked list size is ${index}`);
    }
}

const ll = new LinkedList()
ll.insert(1)
ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insertAtPos(5, 2)

ll.display()

ll.llSize();