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
}

//implement new functions here
function setHiddenFields(){
  answer.value = Math.floor(Math.random()*9999);
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

  var feedback = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for(var i = 0; i < 4; i++){
    if(answer.value.charAt(i) == input.charAt(i)) {
      feedback += '<span class="glyphicon glyphicon-ok"></span>';
    }
    else if (answer.value.indexOf(input.charAt(i))) {
      feedback += '<span class="glyphicon glyphicon-transfer"></span>';
    }
    else {
      feedback += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  feedback += '</div></div>';
  document.getElementById('results').innerHTML = feedback;

}
