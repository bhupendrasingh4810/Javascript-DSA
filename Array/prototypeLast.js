Array.prototype.last = function () {
    var arr = arguments[0]
    if (!arr) return -1
    return arr[arr.length - 1]
};

console.log(Array.prototype.last([null,{},3]));