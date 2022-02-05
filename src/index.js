
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr = [];

  for (i = 0; i< matrix.length; i++){
    for (j = 0; j < matrix[i].length; j++){

     i%2 === 0 ? arr.push(matrix[i][j])  : arr.push(matrix[i][matrix[i].length - j -1])

    }
  }

  return arr;
}
