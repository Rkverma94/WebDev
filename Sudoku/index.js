window.addEventListener('load', () => {
  for(let i=0, row; row=board.rows[i]; i++) {
    for(let j=0, col; col=row.cells[j]; j++) {
      //check for input
      //trim is used as innerHTML as some white space which it treats as text nodes
      if(col.innerHTML.trim() !== "") {
        col.style.backgroundColor = 'gray';
        col.style.pointerEvents = 'none';
      } else {
        col.style.backgroundColor = 'white';
        col.style.pointerEvents = 'all';
      }
      
      col.addEventListener('click', function() {
        //if input is there then show a message saying that input already exists
        if(erase) {
          col.innerHTML = '';
          erase = false;
        } else {
          col.innerHTML = clickedVal;
          helperBoardCol.style.backgroundColor = 'white';
          clickedVal = '';
        }
      });
    }
  }
});

function solveSudoku() {
  sudokuSolver(board);
}


function clearGame() {
  clearBoard(board);
}
function checkSudoku() {
  if(check()) {
    alert('Solved!!!');
    clearBoard(board);
  } else {
    alert('It is Wrong');
    clearBoard(board);
  }
}

function check() {
  for(let i=0, row; row=board.rows[i]; i++) {
    for(let j=0, col; col=row.cells[j]; j++) {
      if(!checkGame(board, i, j)) {
        return false;
      }
    }
  }
  return true;
}