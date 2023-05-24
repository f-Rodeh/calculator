let operator = '';
let num1 = '';
let num2 = '';

const display = document.querySelector('.display');


// listen to user keyboard input
const OPERATORS = ['+','-','*','/']
const KEYDOWNS = ['Backspace', 'Enter', 'c', '=']

window.addEventListener('keypress', e => {
  if( isNumber( e.key ) || isOperator( e.key )){
    listen( e.key )
  }
})

window.addEventListener('keydown', e => {
  if( KEYDOWNS.includes( e.key ) ){
    listen( e.key )
  }
})

// listen to user mouse input (same as keyboard)
const buttons = document.querySelectorAll('.calculator button');
buttons.forEach( button => {
  button.addEventListener('click', e => {
    listen( e.target.id )
  })
})

function listen( key ){
  if ( isNumber( key ) ) {
    userInputNumber( key )
  } else if ( isOperator( key ) ) {
    userInputOperator( key )
  } 
  
  if ( key === 'Backspace') {
    userInputBackspace()
  } else if ( key === 'Enter' || key === '=' ) {
    operate()
  } else if ( key === 'c'){
    clear();
  }
  display.textContent = `${num1} ${operator} ${num2}`;
  console.log({num1, operator, num2})
}


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

function clear( result = ''){
  operator = '';
  num1 = result;
  num2 = '';
}

function isNumber( str ){
  return str.match(/[0-9]/) ? true : false;
}

function isOperator( str ){
  return OPERATORS.includes( str );
}

// create function operate() that defines the operator, uses the function
  // for that operator and displays the result
function operate(){
  let result = '';
  if (!(num1 && num2)) {
    console.log('not enough arguments')
    return;
  }
  switch (operator) {
    case '+':
      result = +num1 + +num2
      break;
    case '-':
      result = +num1 - +num2
      break;
    case '*':
      result = +num1 * +num2
      break;
    case '/':
      result = +num1 / +num2
      break;
  }
  clear( result );
}