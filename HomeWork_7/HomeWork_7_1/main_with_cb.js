var a = +prompt('Введите первое число'),
    b = +prompt('Введите второе число'),
    c = prompt('Ведите оператор');
function add(a, b) {
    return a + b;
};
function sub(a, b) {
    return a - b;
};
function div(a, b) {
    return a / b;
};
function mult(a, b) {
    return a * b;
};
function ost(a, b) {
    return a % b;
};
function show(cb, a, b) {
    var result = cb(a, b);
    document.write("Ваш результат: " + a + " " + c + " " + b + " = " + result)
}
switch (c) {
    case '+': {
        show(add, a, b);
        break;
    }
    case '-': {
        show(sub, a, b);
        break;
    }
    case '/': {
        show(div, a, b);
        break;
    }
    case '*': {
        show(mult, a, b);
        break;
    }
    case '%': {
        show(ost, a, b);
        break;
    }
}