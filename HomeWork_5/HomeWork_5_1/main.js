var h, V0, t, g=9.8;
V0 = prompt('Введите V0');
t = prompt('Введите t');
h = (V0*t)+(g*Math.pow(t,2))/2
document.write('Вы ввели:<br>V0 = '+V0+'<br>');
document.write('Вы ввели:<br>t = '+t+'<br><hr>');
document.write('Ваш результат:<br>h = '+h);