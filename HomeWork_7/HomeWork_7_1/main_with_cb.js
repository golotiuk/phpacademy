var a = +prompt('Введите первое число'),
    b = prompt('Ведите оператор'),
    c = +prompt('Введите второе число');
function add(a, c) {
    return a + c;
}
function sub(a, c) {
    return a - c;
}
function div(a, c) {
    return a / c;
}
function mult(a, c) {
    return a * c;
}
function ost(a, c) {
    return a % c;
}
function show(cb, a, c) {
    var result = cb(a, c);
    document.write("Ваш результат: " + a + " " + b + " " + c + " = " + result)
}
switch (b) {
    case '+': {
        show(add, a, c);
        break;
    }
    case '-': {
        show(sub, a, c);
        break;
    }
    case '/': {
        show(div, a, c);
        break;
    }
    case '*': {
        show(mult, a, c);
        break;
    }
    case '%': {
        show(ost, a, c);
        break;
    }
}