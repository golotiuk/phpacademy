var a = +prompt('Введите первое число'),
	b = +prompt('Введите второе число'),
	c, d;
for (; ;) {
	c = prompt('Ведите оператор');
	switch (c) {
		case '+': {
			d=a+b;
			document.write(a+" + "+b+" = "+d);
			break;
			}
		case '-': {
			d=a-b;
			document.write(a+" - "+b+" = "+d);
			break;
			}
			case '*': {
			d=a*b;
			document.write(a+" * "+b+" = "+d);
			break;
			}
			case '/': {
			d=a/b;
			document.write(a+" / "+b+" = "+d);
			break;
			}
			case '%': {
			d=a%b;
			document.write(a+" % "+b+" = "+d);
			break;
			}
	}
	break;
}
