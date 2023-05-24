// listen to user keyboard input
const OPERATORS = ['+','-','*','/']

window.addEventListener('keypress', e => {
  if ( e.key.match(/[0-9]/) ) {
    userInputNumber( e.key )
    console.log({num1, operator, num2})
  } else if ( OPERATORS.includes(e.key) ) {
    userInputOperator( e.key )
    console.log({num1, operator, num2})
  }
})

window.addEventListener('keydown', e => {
  if (e.key === 'Backspace') {
    userInputBackspace()
    console.log({num1, operator, num2})
  } else if (e.key === 'Enter') {
    console.log(e)
  } else if (e.key === 'c'){
    clear();
    console.log({num1, operator, num2})
  }
})

// listen to user mouse input (same as keyboard)
const buttons = document.querySelectorAll('.calculator button');
buttons.forEach( button => {
  button.addEventListener('click', e => {
    console.log(e.target.id)
  })
})

let operator = '';
let num1 = '';
let num2 = '';

function userInputNumber( numStr ){
  if( !operator ){  
    num1 += numStr; // concat to num1
  } else {
    num2 += numStr; // concat to num2
  }
}

function userInputOperator( str ) {
  if ( !num1 ) num1 = '0';
  operator = str;
}

function userInputBackspace(){

  if( num1 && !operator){
    num1 = erase( num1 )
  } else if ( operator && !num2 ){
    operator = erase( operator )
    if( num1 === '0' ) num1 = ''
  } else if( num2 ){
    num2 = erase( num2 )
  }

  function erase( str ){
    let array = str.split('');
    array[ array.length - 1 ] = '';
    return array.join('')
  }
}

function clear(){
  operator = '';
  num1 = '';
  num2 = '';
}

// create function operate() that defines the operator, uses the function
  // for that operator and displays the result