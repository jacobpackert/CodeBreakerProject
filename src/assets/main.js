// jshint esversion: 6
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
let setHiddenFields = function(){
  answer = Math.floor(Math.random*9999);
  while (answer.length < 4){
    answer = answer.toString;
    answer = "0" + answer;
  };
};
