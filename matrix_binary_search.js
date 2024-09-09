function binarySearchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return null;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midElement = matrix[Math.floor(mid / cols)][mid % cols];
        console.log(mid, mid % cols, Math.floor(mid / cols), matrix[Math.floor(mid / cols)][mid % cols])

        if (midElement === target) {
            return [Math.floor(mid / cols), mid % cols];
        } else if (midElement < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return null;
}

// Example usage:
const matrix = [
    [1,  4,  7, 11, 15],
    [2,  5,  8, 12, 19],
    [3,  6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 5;

const result = binarySearchMatrix(matrix, target);
console.log(`Element ${target} found at position: ${result}`);