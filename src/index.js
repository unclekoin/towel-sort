
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let j of matrix[i]) {
                array.push(j);
            }
        } else {
            for (let n = matrix[i].length - 1; n >= 0; n--) {
                array.push(matrix[i][n])
            }
        }
        
    }
    return array;
}
