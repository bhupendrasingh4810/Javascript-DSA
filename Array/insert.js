class Insert {
    constructor() {
        this.arr = [];
    }

    isEmpty() {
        return this.arr.length ? true : false;
    }

    insertAtEnd(value) {
        this.arr[this.arr.length] = value;
    }

    insertAtBeg(value) {
        if (this.isEmpty()) {
            this.arr[0] = value;
        } else {
            let temp = value;
            for (let i = 0; i <= this.arr.length; i++) {
                arr[i] = temp;
                temp = this.arr[i + 1];
            }
        }
    } 
}

const insert = new Insert();

insert.insertAtEnd(2);
insert.insertAtEnd(3);

console.log(insert.arr);