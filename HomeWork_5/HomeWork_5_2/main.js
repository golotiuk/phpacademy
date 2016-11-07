var years;
years=prompt('Введите ваш возраст');
	console.log(typeof(years));
if (isNaN(years)) {
		document.write('Не верное значение, перегрузите страницу для следующей попытки');
}
else {
	if (years>=0&&years<6||years>=6&&years<12||years>=12&&years<18) {
		document.write('Вы еще не совершеннолетний, употребление алкоголя запрещено!!!');
	}
	else if (years<=120){
		document.write('Вы совершеннолетний и вправе употреблять любые напитки.');
	}
	else {
		document.write('Люди столько не живут!');
	}
}
