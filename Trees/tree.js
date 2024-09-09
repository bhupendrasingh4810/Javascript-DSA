class TreeNode {
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
        const node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (value == current.value) return undefined;

            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }

    // Maximum Depth of Binary Tree

    maxDepth(node) {
        if (node == null) return 0;

        let lDepth = this.maxDepth(node.left);
        let rDepth = this.maxDepth(node.right);

        return Math.max(lDepth, rDepth) + 1;
    }

    // Diameter of Binary Tree

    maxDiameter(node) {
        let diameter = 0;

        function height(node) {
            if (node == null) return 0;

            let lHeight = height(node.left);
            let rHeight = height(node.right);

            diameter = Math.max(diameter, lHeight + rHeight);

            return Math.max(lHeight, rHeight) + 1;
        }
        height(node);
        return diameter;
    }

    //Lowest Common Ancestor of a Binary Search Tree

    findLowestCommonAncestor(root, p, q) {
        if (!root) return null;

        if (p > root.value && q > root.value) {
            return this.findLowestCommonAncestor(root.right, p, q);
        }

        if (p < root.value && q < root.value) {
            return this.findLowestCommonAncestor(root.left, p, q);
        }

        return root;
    }

    // Balanced Binary Tree

    isBalanced(node) {
        function checkHeight(node) {
            if (node === null) return 0;

            // Check the height of the left and right subtrees
            let leftHeight = checkHeight(node.left);
            if (leftHeight === -1) return -1; // Not balanced

            let rightHeight = checkHeight(node.right);
            if (rightHeight === -1) return -1; // Not balanced

            // If the current node is not balanced, return -1
            if (Math.abs(leftHeight - rightHeight) > 1) return -1;

            // Return the height of the current node
            return Math.max(leftHeight, rightHeight) + 1;
        }

        // The tree is balanced if checkHeight doesn't return -1
        return checkHeight(node) !== -1;
    }

    kthSmallest(k) {
        let count = 0;
        let result = null;

        function inOrderTraversal(node) {
            if (!node || result !== null) return;

            inOrderTraversal(node.left);

            count++;
            if (count == k) {
                result = node.value;
                return;
            }

            inOrderTraversal(node.right);
        }

        inOrderTraversal(this.root);
        return result;
    }

    levelOrderTraversal() {
        if (!this.root) return [];

        let result = [];
        let queue = [this.root];

        while (queue.length > 0) {
            let levelSize = queue.length;
            let currentLevel = [];

            for (let i = 0; i < levelSize; i++) {
                let currentNode = queue.shift();
                currentLevel.push(currentNode.value);

                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }

            result.push(currentLevel);
        }
        return result;
    }
}

const bt = new BinaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(4);
bt.insert(7);
bt.insert(2);
bt.insert(9);
bt.insert(13);
bt.insert(23);
bt.insert(27);

console.log(bt.root);
console.log(bt.maxDepth(bt.root));
console.log(bt.maxDiameter(bt.root));