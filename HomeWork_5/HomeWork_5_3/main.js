var a = +prompt('Введите первое число'),
	b = +prompt('Введите второе число'),
	c = prompt('Ведите оператор'),
	d;
switch (c) {
	case '+': {
        d = a + b;
        document.write(a + " + " + b + " = " + d);
        break;
    }
	case '-': {
        d = a - b;
        document.write(a + " - " + b + " = " + d);
        break;
    }
	case '*': {
        d = a * b;
        document.write( a + " * " + b + " = " + d);
        break;
    }
	case '/': {
        d = a / b;
        document.write( a + " / " + b + " = " + d);
        break;
    }
	case '%': {
        d = a % b;
        document.write( a + " % " + b + " = " + d);
        break;
    }
}
