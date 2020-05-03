let board = document.getElementById('board');
let helperBoard = document.getElementById('helperBoard');
let clickedVal = '';
//helperBoardCol is used to keep a copy of helper board to change it's style
let helperBoardCol;
let erase = false;
for(let i=0, col; col=helperBoard.rows[0].cells[i]; i++) {
    col.addEventListener('click', (event) => {
        for(let j=0, field; field=helperBoard.rows[0].cells[j]; j++) {
            if(field.style.backgroundColor === 'lightgreen') {
                field.style.backgroundColor = 'white';
            }
        }
        col.style.backgroundColor = 'lightgreen';
        clickedVal = col.innerHTML;
        helperBoardCol = col;
    });
}