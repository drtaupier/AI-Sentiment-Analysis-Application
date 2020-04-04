import {checkForName} from './nameChecker'
const form = document.getElementById('form');

export function handleSubmit(e){
  e.preventDefault();
  const formText = document.getElementById('name').value
  console.log(formText);
  checkForName(formText);
  
  console.log("::: Form Submitted :::")
  fetch('http://localhost:8080/test')
  .then(res => res.json())
  .then(function(res) {
    document.getElementById('results').innerHTML = res.message
  })
}
form.addEventListener('submit', handleSubmit, false);
