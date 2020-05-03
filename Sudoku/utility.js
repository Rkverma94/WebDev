const sumOf9Terms = 45;
function clearBoard(board) {
    for(let i=0, row; row=board.rows[i]; i++) {
        for(let j=0, col; col=row.cells[j]; j++) {
            if(col.style.backgroundColor === 'white') {
                col.innerHTML = '';
            }
        }
    }
}

function checkGame(board, row, col) {
    //check each row, col and inner 3x3 grids for all values from 1 to 9 
    if(checkRow(board, row)) {
        if(checkCol(board, col)) {
            if(checkInnerBox(board, row, col)) {
                return true;
            }
        }
    }
    return false;
}

function checkRow(board, row) {
    let sum=0;
    for(let i=0; i<9; i++) {
        sum += parseInt(board.rows[row].cells[i].innerHTML);
    }
    if(sum == sumOf9Terms) return true;
    else    return false;
}

function checkCol(board, col) {
    let sum=0;
    for(let i=0; i<9; i++) {
        sum += parseInt(board.rows[i].cells[col].innerHTML);
    }
    if(sum == sumOf9Terms) return true;
    else    return false;
}

function checkInnerBox(board, row, col) {
    let sum=0;
    const startRow = 3*Math.floor(row/3);
    const startCol = 3*Math.floor(col/3);
    for(let i=startRow; i<startRow+3; i++) {
        for(let j=startCol; j<startCol+3; j++) {
            sum += parseInt(board.rows[i].cells[j].innerHTML);
        }
    }
    if(sum == sumOf9Terms) return true;
    else    return false; 
}