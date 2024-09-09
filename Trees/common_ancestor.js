class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(node, newNode) {

        if (!this.root) this.root = node;

        let current = this.root;

        if (value < current.value) {
            if (!current.left) current.left = node;
            current = current.left;
        } else {
            if (!current.right) current.right = node;
            current = current.right;
        }
    }
}

const tree = new Tree();

tree.insert(4);
tree.insert(3);
tree.insert(2);
tree.insert(1);

console.log(tree.root);