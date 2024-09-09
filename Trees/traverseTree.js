class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // BFS
    bfs() {
        let visited = [];
        let queue = [];
        let current = this.root;

        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            // console.log(current);
            visited.push(current.value);
            console.log(visited);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        };
        return visited;
    }

    // DFS -> Pre-Order || Time Complexity -> O(V+E) || Space Complexity -> O(V)
    preOrder() {
        let visited = [];

        let traverse = (node) => {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }

    // DFS Post-Order || Time Complexity -> O(V+E) || Space Complexity -> O(V)
    postOrder() {
        let visited = [];

        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }

        traverse(this.root);
        return visited;
    }

    // DFS -> In-Order || Time Complexity -> O(V+E) || Space Complexity -> O(V)
    inOrder() {
        let visited = [];

        let traverse = (node) => {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }
}

const tree = new BinaryTree();

tree.insert(20);
tree.insert(14);
tree.insert(57);
tree.insert(9);
tree.insert(19);
tree.insert(31);
tree.insert(62);
tree.insert(3);
tree.insert(11);
tree.insert(72);

// tree.insert(16);
// tree.insert(12);
// tree.insert(37);
// tree.insert(10);
// tree.insert(14);
// tree.insert(21);
// tree.insert(89);
// tree.insert(7);
// tree.insert(11);
// tree.insert(13);
// tree.insert(15);
// tree.insert(23);
// tree.insert(76);
// tree.insert(98);
// tree.insert(4);
// tree.insert(61);
// tree.insert(87);
// tree.insert(99);

// console.log(tree.root);
console.log(tree.bfs());
// console.log(tree.preOrder());
// console.log(tree.postOrder());
// console.log(tree.inOrder());