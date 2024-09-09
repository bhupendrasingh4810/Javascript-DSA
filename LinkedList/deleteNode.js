class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode; 
        }
        this.length++;
    }

    deleteNode (value) {
        let current = this.head;
        let prevNode = null;

        if (current.value === value) {
            this.head = null;
            this.tail = null;
        }

        while(current !== null && current.value !== value) {
            prevNode = current;
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);

ll.deleteNode(1);
console.log(ll.head);