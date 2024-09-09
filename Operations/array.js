class ArrayOps {
    constructor() {
        this.arr = [];
    }

    insertAtEnd(data) {
        const n = this.arr.length;
        this.arr[n] = data;
    }

    insertAtBeg(data) {
        if (!this.arr.length) this.arr[0] = data;
        for (let i = this.arr.length; i >= 0; i--) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[0] = data;
    }

    insertAtPos(data, pos) {
        if (!this.arr.length) this.arr[0] = data;
        for(let i = this.arr.length; i>=pos; i--) {
            this.arr[i] = this.arr[i-1];
        }
        this.arr[pos] = data;
    }

    deleteElement(data) {
        for (let i = 0; i <=this.arr.length; i++) {
            if (this.arr[i] == data) delete this.arr[i];
        }
    }

    searchElement(data) {
        if (this.arr[0] == data) return 0;
        let index = -1;
        for (let i = 0; i <=this.arr.length; i++) {
            if (this.arr[i] == data) index = i;
        }
        return index;
    }
}

const arr = new ArrayOps([]);

arr.insertAtEnd(1);
arr.insertAtEnd(2);
arr.insertAtBeg(3);
arr.insertAtBeg(4);
arr.insertAtPos(5, 3);
arr.insertAtPos(6, 2);
arr.deleteElement(5);

console.log(arr.arr);

console.log(arr.searchElement(1));