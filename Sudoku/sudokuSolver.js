function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board.rows[row].cells[i].innerHTML.trim() == k || board.rows[i].cells[col].innerHTML.trim() == k || board.rows[m].cells[n].innerHTML.trim() == k) {
          return false;
        }
    }
    return true;
}


function sudokuSolver(data) {
  for (let i=0, row; row=data.rows[i]; i++) {
    for (let j=0, col; col=row.cells[j]; j++) {
      if (col.innerHTML.trim() === '') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            col.innerHTML = k;
          if (sudokuSolver(data)) {
           return true;
          } else {
           col.innerHTML = '';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}