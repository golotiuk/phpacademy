var a = +prompt('Введите количество элементов массива');
var b = new Array(a);
for (var i = 0; i < a; i++)
    b[i] =Math.floor(Math.random()*100);
document.write('Наш рандомный массив:<br><br>' + b.join(' | ') + '<hr width="400px" align="left"><br><br>');
for (var i = 0; i < (b.length / 2); i++, a--) {
    var c = b[i];
    b[i] = b[a - 1];
    b[a - 1] = c;
}
document.write('Наш зеркальный массив:<br><br>' + b.join(' | '));