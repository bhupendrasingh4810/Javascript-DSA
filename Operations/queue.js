// |---|---|---|---|---|---|---|---|---|---|
// |---|---|---|---|---|---|---|---|---|---|
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(data) {
        this.items[this.rear] = data;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        const result = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return result;
    }

    getFront() {
        if (this.isEmpty()) return "Queue Empty";
        return this.items[this.front];
    }

    isEmpty() {
        return this.rear == this.front;
    }

    size() {
        return this.rear - this.front;
    }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();

console.log(q.items);