var a = +prompt('Введите первое число'),
    b = prompt('Ведите оператор'),
    c = +prompt('Введите второе число'),
    d;
function res(){
    document.write(a + " " + b + " " + c + " = " + d);
}
switch (b) {
    case '+': {
        d = a + c;
        res();
        break;
    }
    case '-': {
        d = a - c;
        res();
        break;
    }
    case '*': {
        d = a * c;
        res();
        break;
    }
    case '/': {
        d = a / c;
        res();
        break;
    }
    case '%': {
        d = a % c;
        res();
        break;
    }
}