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
        if (pos == 0) this.insertAtBeg(data);
        else {
            let current = this.head;
            let prev = null;
            let index = null;
            
            while(current.next && index !== pos) {
                prev = current;
                current = current.next;
                index++;
            }
            const node = new Node(data);
            node.next = current;
            prev.next = node;
        }
    }

    delete(data) {
        if(this.head.data == data) this.head = this.head.next;
        let current = this.head;
        let prev = null;

        while(current && current.data !== data) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }

    find(data) {
        if (this.head.data == data) return 0;
        else {
            let current = this.head;
            let index = 0;

            while(current.next && current.data !== data) {
                current = current.next;
                index++;
            }
            console.log(index);
        }
    }
}

const ll = new LinkedList();

ll.insert(1);
ll.insert(2);
ll.insertAtBeg(3);
ll.insertAtPos(4, 1);
// ll.delete(1);
// ll.delete(4);
ll.find(1);

console.log(ll.head);