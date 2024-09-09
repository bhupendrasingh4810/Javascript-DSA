class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(item) {
        this.items[this.count] = item;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        delete this.items[this.count - 1];
        this.count--;

    }

    peek() {
        if (this.isEmpty()) return "Stack Empty";
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count == 0;
    }

    size() {
        return this.count;
    }
}

const stack = new Stack();

stack.push(8);
stack.push(3);
stack.push(7);
stack.push(6);
stack.push(9);

console.log(stack.items);

stack.pop();

console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());
