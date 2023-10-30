function calculate() {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let operator = document.getElementById('operator').value;
    let result;

    if(isNaN(input1) || isNaN(input2)){
        document.getElementById("result").innerHTML = 'Please enter valid number!';
        return;
    }

    switch(operator) {
        case 'add':
            result = parseFloat(input1) + parseFloat(input2);
            break;
        case 'sub':
            result = parseFloat(input1) - parseFloat(input2);
            break;
        case 'mul':
            result = parseFloat(input1) * parseFloat(input2);
            break;
        case 'div':
            result = parseFloat(input1) / parseFloat(input2);
            break;
        default:
            return;
    }
    document.getElementById("result").innerHTML = 'The result is: ' + result;
}

