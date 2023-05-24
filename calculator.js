// listen to user keyboard input
const OPERATORS = ['+','-','*','/']

window.addEventListener('keypress', e => {
  if ( e.key.match(/[0-9]/) ) {
    console.log(e)
  } else if ( OPERATORS.includes(e.key) ) {
    console.log(e)
  }
})

window.addEventListener('keydown', e => {
  if (e.key === 'Backspace') {
    console.log(e)
  } else if (e.key === 'Enter') {
    console.log(e)
  }
})

// listen to user mouse input (same as keyboard)
const buttons = document.querySelectorAll('.calculator button');
buttons.forEach( button => {
  button.addEventListener('click', e => {
    console.log(e.target.id)
  })
})

// create str variable operator
// create str variable num1
// create str variable num2
// if user input is a number: 
  // if there's no operator, concat it to the num1 variable
  // if there is an operator, concat it to the num2 variable
// if user input is a valid operator: store it in operator variable
// create function operate() that defines the operator, uses the function
  // for that operator and displays the result