class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new TreeNode(value);
        if (!this.root) this.root = node;
        else this.insertNode(this.root, node);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if(!node.left) node.left = newNode; 
            else this.insertNode(node.left, newNode);
        } else {
            if(!node.right) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    inOrder() {
        const result = [];
        this.inOrderTraverse(this.root, result);
        return result;
    }

    inOrderTraverse(node, result) {
        if (node!== null) {
            this.inOrderTraverse(node.left, result);
            result.push(node.data);
            this.inOrderTraverse(node.right, result);
        }
    }

    preOrder() {
        const result = [];
        this.preOrderTraverse(this.root, result);
        return result;
    }

    preOrderTraverse(node, result) {
        if(node!== null) {
            result.push(node.data);
            this.preOrderTraverse(node.left, result);
            this.preOrderTraverse(node.right, result);
        }
    }

    postOrder() {
        const result = [];
        this.postOrderTraverse(this.root, result);
        return result;
    }

    postOrderTraverse(node, result) {
        if(node!== null) {
            this.postOrderTraverse(node.left, result);
            this.postOrderTraverse(node.right, result);
            result.push(node.data);
        }
    }

    search(data) {
        return searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (!node) return false;

        if(data < node.data) this.searchNode(node.left, data);
        else if (data > node.data) this.searchNode(node.right, data);
        else return true;
    }
}

const tree = new Tree();
 
tree.insert(10);
tree.insert(8);
tree.insert(14);
tree.insert(11);
tree.insert(18);
tree.insert(25);
tree.insert(37);
// tree.insert(19);
// tree.insert(22);

console.log(tree.root);
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());