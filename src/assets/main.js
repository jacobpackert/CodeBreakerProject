// jshint esversion: 6
let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer === '' || attempt === ''){
      setHiddenFields();
    }
    if(!validateInput(input.value)) {
      return false;
    } else {
      attempt.value++;
    }
    // getResults(input);

    if (getResults(input.value)){
      setMessage('You Win! :)');
    }
    else if (attempt.value >= 10) {
      setMessage('You Lose!');
    }
    else {
      setMessage("Incorrect, try again");
    }
}

//implement new functions here
function setHiddenFields(){
  answer.value = Math.floor(Math.random()*10000);
  answer.value = answer.value.toString();
  while (answer.value.length < 4){
    answer.value = "0" + answer.value;
  }
  attempt = 0;
}

function setMessage(message){
  document.getElementById('message').innerHTML = message;
}

function validateInput(input){
  if(input.toString().length == 4){
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input){

  let feedback = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  let correct = 0;
  for(i = 0; i < input.length; i++){
    // checking to see if a character has the exact same value as the same character in the answer
    if(answer.value.charAt(i) == input.charAt(i)) {
      feedback += '<span class="glyphicon glyphicon-ok"></span>';
      correct++;
    }
    // checking if a character in the input/user guess is even part of the actual answer
    else if (answer.value.indexOf(input.charAt(i)) > -1) {
      feedback += '<span class="glyphicon glyphicon-transfer"></span>';
    }
    // if the character is not in the right place or even a part of the string, then it is an error
    else {
      feedback += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  feedback += '</div></div>';
  document.getElementById('results').innerHTML = feedback;
if(correct == input.length){
  return true;
}
else {
  return false;
}
}
