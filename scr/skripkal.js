let result = document.getElementById('result');

function appendChar(char) {
  result.value += char;
}

function clearResult() {
  result.value = '';
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
