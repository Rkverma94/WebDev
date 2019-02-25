let user_score = 0;
let comp_score = 0;
const score_board_div = document.querySelector('.score_board');
const user_score_span = document.getElementById('user_score');
const comp_score_span = document.getElementById('computer_score');
const result = document.querySelector('.res');
const choice_div = document.querySelector('.choice');
const r_choice_div = document.querySelector('#r');
const p_choice_div = document.querySelector('#p');
const s_choice_div = document.querySelector('#s');

function wordGen(choice){
  let userCh,compCh;
  if(choice[0]==='r'){
    userCh='Rock';
  }
  else if(choice[0]==='p'){
    userCh='Paper';
  }
  else{
    userCh='Scissor';
  }
  if(choice[1]==='r'){
    compCh='Rock';
  }
  else if(choice[1]==='p'){
    compCh='Paper';
  }
  else{
    compCh='Scissor';
  }
  return {
    uChoice: userCh,
    cChoice: compCh
  }
}

function win(choice,t){
  user_score++;
  let wordgenChoice;
  user_score_span.innerHTML=user_score;
  wordgenChoice = wordGen(choice);
  let res = `User chose ${wordgenChoice['uChoice']} and Comp chose ${wordgenChoice['cChoice']}!!! User Won!!`;
  result.innerHTML=res;
  t.classList.add('win');
  score_board_div.classList.add('win');
  setTimeout(()=>{
    score_board_div.classList.remove('win');
    t.classList.remove('win');
  },500);
}
function lose(choice,t){
  comp_score++;
  let wordgenChoice;
  comp_score_span.innerHTML=comp_score;
  wordgenChoice = wordGen(choice);
  let res = `User chose ${wordgenChoice['uChoice']} and Comp chose ${wordgenChoice['cChoice']}!!! Comp won!!`;
  result.innerHTML=res;
  t.classList.add('lose');
  score_board_div.classList.add('lose');
  setTimeout(()=>{
    score_board_div.classList.remove('lose');
    t.classList.remove('lose');
  },500);
}
function draw(choice,t){
  let wordgenChoice;
  wordgenChoice = wordGen(choice);
  let res = `User chose ${wordgenChoice['uChoice']} and Comp chose ${wordgenChoice['cChoice']}!!! It's Draw!!`;
  result.innerHTML=res;
  t.classList.add('draw');
  score_board_div.classList.add('draw');
  setTimeout(()=>{
    score_board_div.classList.remove('draw');
    t.classList.remove('draw');
  },500);
}


function game(user_choice,t){
  const compChoice = ['r', 'p', 's'];
  comp_choice=compChoice[Math.floor(Math.random()*3)];
  const choice = user_choice+comp_choice;
  switch(choice){
    case 'rs':
    case 'pr':
    case 'sp':
      win(choice,t);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(choice,t);
      break;
    default:
        draw(choice,t);
        break;
  }
}

function main(){
  r_choice_div.addEventListener('click', ()=>{

    game('r',r_choice_div);

  });
  p_choice_div.addEventListener('click', ()=>{
    game('p',p_choice_div);
  });
  s_choice_div.addEventListener('click', ()=>{
    game('s',s_choice_div);
  });
}

main();
