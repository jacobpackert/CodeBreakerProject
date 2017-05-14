// jshint esversion: 6
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
  let randomNumber = Math.random()*9999;
  answer = Math.floor(randomNumber);
  while (answer.length < 4){
    answer = answer.toString;
    answer = "0" + answer;
  }
  attempt = 0;
}
