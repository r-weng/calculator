let calculation = localStorage.getItem('js-calculation') || '';
const operators = ['+', '-', '.', '*', '/'];

function saveCalculation() {
  localStorage.setItem('js-calculation', calculation);
}

function checkDoubleOperator(value) {
  const calcTrimmed = calculation.trimEnd();
  const lastChar = calcTrimmed[calcTrimmed.length - 1];
  return operators.includes(value.trim()) && operators.includes(lastChar);
}

function updateCalculation(value) {
  if (calculation.trim() === '' && (operators.includes(value.trim()))) {
    return;
  }

  if (checkDoubleOperator(value)) {
    return;
  }

  calculation += value;
  document.querySelector('.js-result')
    .innerHTML = calculation;
  saveCalculation();
}

function evalCalculation() {
  calculation = eval(calculation).toString();
  document.querySelector('.js-result')
    .innerHTML += ` = ${calculation}`;
  saveCalculation();
}

function deletePrevious() {
  const calcTrimmed = calculation.trimEnd();
  const lastChar = calcTrimmed[calcTrimmed.length - 1];

  if (lastChar === '.') {
    calculation = calculation.slice(0, -1);
  } else if (operators.includes(lastChar)) {
    calculation = calculation.slice(0, -3);
  } else {
    calculation = calculation.slice(0, -1);
  }

  document.querySelector('.js-result')
    .innerHTML = calculation;
  saveCalculation();
}

function handleKeydown(event) {
  if (operators.includes(event.key) || (event.key >= '0' && event.key <= '9')) {
    updateCalculation(event.key);
  } else if (event.key === 'Enter') {
    evalCalculation();
  } else if (event.key === 'Backspace') {
    deletePrevious();
  }
}

document.addEventListener('keydown', handleKeydown);