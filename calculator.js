let calculation = localStorage.getItem('js-calculation') || '';

function checkDoubleOperator() {
  const operators = ['+', '-', '*', '/'];

  const calcTrimmed = calculation.trimEnd();
  const lastChar = trimmedCalc[calcTrimmed.length - 1];

  if (operators.includes(value.trim()) && operators.includes(lastChar)) {
    return;
  }
}


function updateCalculation(value) {
  checkDoubleOperator();
  
  calculation += value;
  document.querySelector('.js-result')
    .innerHTML = calculation
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('js-calculation', calculation);
}