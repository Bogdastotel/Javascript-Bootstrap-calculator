var currentDisplay = document.getElementById('current');
var previousDisplay = document.getElementById('previous');
var readyToReset = false;

function appendNumber(event) {

    if (readyToReset == true) {
        clearAll();
        readyToReset = false;
    }
  
    if (event.target.value === '.' && currentDisplay.innerHTML.includes('.')) return

    if (currentDisplay.innerHTML != '0') {

        currentDisplay.innerHTML += event.target.value;

    }
    else if (currentDisplay.innerHTML[0] == '.') {
        currentDisplay.innerHTML = '0' + currentDisplay.innerHTML;
    }
    else {
        currentDisplay.innerHTML = event.target.value;
    }
}

function clearAll() {
    currentDisplay.innerHTML = '';
    previousDisplay.innerHTML = '';

}

function deleteOne() {
    currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, -1);
    if (currentDisplay.innerHTML.length == 0) {
        currentDisplay.innerHTML = '';
    }
}

function operand(event) {



    if (previousDisplay.innerHTML != '' && currentDisplay.innerHTML != '') {
        let prev = previousDisplay.innerHTML.charAt(previousDisplay.innerHTML.length - 1);
        if (prev == '+') {
            previousDisplay.innerHTML = parseFloat(previousDisplay.innerHTML) + parseFloat(currentDisplay.innerHTML) + ' ' + event.target.value;
            currentDisplay.innerHTML = '';
        }
        else if (prev == '-') {
            previousDisplay.innerHTML = parseFloat(previousDisplay.innerHTML) - parseFloat(currentDisplay.innerHTML) + ' ' + event.target.value;
            currentDisplay.innerHTML = '';
        }
        else if (prev == '*') {
            previousDisplay.innerHTML = parseFloat(previousDisplay.innerHTML) * parseFloat(currentDisplay.innerHTML) + ' ' + event.target.value;
            currentDisplay.innerHTML = '';
        }
        else if (prev == '/') {
            previousDisplay.innerHTML = parseFloat(previousDisplay.innerHTML) / parseFloat(currentDisplay.innerHTML) + ' ' + event.target.value;
            currentDisplay.innerHTML = '';
        }

    }
    else if (event.target.value == '-' && currentDisplay.innerHTML == '') {
        currentDisplay.innerHTML = event.target.value;
    }

    else {
        previousDisplay.innerHTML = currentDisplay.innerHTML + ' ' + event.target.value;
        currentDisplay.innerHTML = '';
    }
}

function calculate() {
    // let op = previousDisplay.innerHTML + currentDisplay.innerHTML;
    // let regex1 = /^\d+(\.\d{1,})?\s*([-+*\./])\s*?\d+(\.\d{1,})?\s*$/;
    // let result = op.match(regex1);
    // console.log(op);
    // let sign = result[2];
    // let result1 = result[0].split(sign);
    // console.log(result);
    // console.log(result1);
    // let final;

    // switch (sign) {
    //     case '+': final = parseFloat(result1[0]) + parseFloat(result1[1])
    //         break;
    //     case '-': final = parseFloat(result1[0]) - parseFloat(result1[1])
    //         break;
    //     case '*': final = parseFloat(result1[0]) * parseFloat(result1[1])
    //         break;
    //     case '/': final = parseFloat(result1[0]) / parseFloat(result1[1])
    //         break;
    // }

    // currentDisplay.innerText = final;
    // previousDisplay.innerText = '';

    let op = previousDisplay.innerHTML.slice(0, previousDisplay.innerHTML.length - 2);


    let prev = previousDisplay.innerHTML.charAt(previousDisplay.innerHTML.length - 1);
    if (prev == '+') {
        currentDisplay.innerHTML = parseFloat(op) + parseFloat(currentDisplay.innerHTML);
        previousDisplay.innerHTML = '';

    }
    else if (prev == '-') {
        currentDisplay.innerHTML = parseFloat(op) - parseFloat(currentDisplay.innerHTML);
        previousDisplay.innerHTML = '';

    }
    else if (prev == '*') {
        currentDisplay.innerHTML = parseFloat(op) * parseFloat(currentDisplay.innerHTML);
        previousDisplay.innerHTML = '';

    }
    else if (prev == '/') {
        currentDisplay.innerHTML = parseFloat(op) / parseFloat(currentDisplay.innerHTML);
        previousDisplay.innerHTML = '';


    }
    
    readyToReset = true;
}
