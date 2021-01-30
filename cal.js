

function cal(command, a, b) {
    if (command == 'add') {
        return (a + b);
    }
    else if (command == 'divide') {
        return a / b;
    }
    else if (command == 'multiply') {
        return a * b;
    }
    else if (command == 'remainder') {
        return a % b;
    }
    else {
        throw Error('unknown command');
    }
}

console.log(cal('add', 2, 3));