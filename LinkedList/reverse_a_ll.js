class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    reverse(list) {
        let previous = null;
        let current = list.head;
        let i = 0;
        while (current) {
            console.log(i);
            i++;
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        list.head = previous;
    }
}

const list = new LinkedList();
list.push(1); // Node { data: 1, next: null }
list.push(2); // Node { data: 1, next: Node { data: 2, next: null } }
list.push(3);
list.push(4);

console.log(JSON.stringify(list));

list.reverse(list);

console.log(JSON.stringify(list));