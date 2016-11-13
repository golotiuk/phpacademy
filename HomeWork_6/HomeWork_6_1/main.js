var a = [];
var person = {};
function ask() {
    do {
        person = {
            name: prompt("Введите свое имя:"),
            sname: prompt("Введите свою фмилию:"),
            age: +prompt("Введите свой возраст:")
        };
        a.push(person);
        repeater = confirm("Пройти заполнение еще раз?");
    } while (repeater);
}
function say() {
    for (var i = 0; i < a.length; i++) {
        for (field in a[i]) {
            document.write(a[i][field] + '<br>');
        }
        document.write('<hr>')
    }
}
ask();
say();