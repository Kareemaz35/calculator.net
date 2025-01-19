const result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = '';
}

function deleteChar() {
    result.value = result.value.slice(0, -1);
}

function appendDecimal() {
    if (!result.value.includes('.')) {
        result.value += '.';
    }
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}