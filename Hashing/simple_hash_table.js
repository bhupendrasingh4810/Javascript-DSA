class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        console.log(key);
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        console.log(hash % this.size);
        return hash % this.size;
    }

    put(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        let index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        if (!this.table[index]) {
            return false;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                if (this.table[index].length === 0) {
                    this.table[index] = undefined;
                }
                return true;
            }
        }
        return false;
    }
}

let table = new HashTable(5);
table.put("apple", 2);
// table.put("banana", 3);
// table.put("cherry", 4);
// console.log(table.get("apple")); // Output: 2
// table.remove("banana");
// console.log(table.get("banana")); // Output: undefined