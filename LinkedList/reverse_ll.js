class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) this.head = node;
        else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    reverse(node) {
        let current = node;
        let prev = null;
        let next;

        while (current != null) {
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;
        }
        return prev;
    }

    // Using Floyd's Cycle Finding Algorithm
    detectCycle(node) {
        let slow = node;
        let fast = node;

        while (slow !== null && fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) return true;
        }

        return false;
    }

    // Using Hashing
    detectLoop(head) {
        while (head !== null) {

            // If this node is already traversed it means there is a cycle (Because you are encountering the node for the second time).
            if (head.flag === 1) return true;

            // If we are seeing the node for the first time, mark its flag as 1
            head.flag = 1;
            head = head.next;
        }
        return false;
    }

    // Iterative merge T -> O(m+n), S -> O(1)
    concatList(l1, l2) {
        let newList = new Node(0);
        let current = newList;

        while(l1 != null && l2 != null) {
            if (l1.value < l2.value) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;

        return newList.next;
    }

    removeDuplicateFromSorted(node) {
        let current = node;

        while(current != null && current.next != null) {
            if (current.value == current.next.value) {
                current.next = current.next.next;
            } else current = current.next;
        }
        return node;
    }
}

const ll = new LinkedList();

const l1 = new LinkedList();

const l2 = new LinkedList();

ll.insert(1);
ll.insert(1);
ll.insert(2);
ll.insert(2);
ll.insert(2);
ll.insert(3);
ll.insert(3);
ll.insert(4);
// ll.head.next.next.next = ll.head;

// console.log(ll.head);
// console.log(ll.reverse(ll.head));
// setTimeout(() => {
//     console.log(ll.findMiddle(ll.head));
// }, 1000);
// console.log(ll.detectCycle(ll.head));

l1.insert(2);
l1.insert(5);
// l1.insert(8);

l2.insert(3);
l2.insert(6);
// l2.insert(9);

// console.log(ll.concatList(l1.head, l2.head));

console.log(ll.removeDuplicateFromSorted(ll.head));