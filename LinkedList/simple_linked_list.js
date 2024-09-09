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

    append(data) {
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

    insert(position, data) {
        if (position < 0 || position > this.length) {
            return false;
        }

        const node = new Node(data);

        if (position === 0) {
            node.next = this.head;
            this.head = node;
            if (this.length === 0) {
                this.tail = node;
            }
        } else if (position == this.length) {
            this.tail.next = node;
            this.tail = node;
        } else {
            let current = this.head;
            let previous = null;
            for (let i = 0; i < position; i++) {
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        this.length++;
        return true;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null;
        }

        let current = this.head;
        if (position === 0) {
            this.head = current.next;
            if (this.length === 1) {
                this.tail = null;
            }
        } else {
            let previous = null;
            for (let i = 0; i < position; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            if (position === this.length - 1) {
                this.tail = previous;
            }
        }
        this.length--;
        return current.data;
    }

    indexOf(data) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.data == data) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(data) {
        const index = this.indexOf(data);
        this.removeAt(index);

    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }
}

const list = new LinkedList();
list.insert(0, 0);
list.append(2);
list.append(4);
list.append(6);
list.append(8);
list.remove(4);
list.remove(6);

console.log(list.head);
console.log(list.tail);
console.log(list.length);

/*
Space Complexity:

The space complexity of the linked list program is O(n), where n is the number of nodes in the linked list.
This is because the program uses additional memory to store each node in the linked list, and the amount of memory used is directly proportional to the number of nodes in the list.

Time Complexity:

The time complexity of the append method is O(1), since it only requires a constant amount of time to add a new node to the end of the list.
The time complexity of the insert method is O(n), since it requires traversing the list to find the correct position to insert the new node.
The time complexity of the removeAt method is O(n), since it also requires traversing the list to find the node to remove.
The time complexity of the indexOf method is O(n), since it requires traversing the list to find the index of the given data.
The time complexity of the remove method is O(n), since it uses the indexOf and removeAt methods, both of which have a time complexity of O(n).
The time complexity of the isEmpty, size, and toString methods is O(1), since they only require a constant amount of time to perform their operations.
Overall, the linked list program has a space complexity of O(n) and a time complexity that depends on the specific operation being performed, ranging from O(1) to O(n).
*/