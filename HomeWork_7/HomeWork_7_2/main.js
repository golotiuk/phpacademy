var a = [];
var person = {};
function lg() {
    var language = [];
    var lg;
    do {
        lg = prompt('Введите язык програмирования');
        language.push(lg);
        repeater = confirm("Добавить еще язык?");
    } while(repeater);
}
function ask() {
    do {
        person = {
            name: prompt("Введите свое имя:"),
            sname: prompt("Введите свою фмилию:"),
            age: +prompt("Введите свой возраст:"),
            language: lg()
        };
        a.push(person);
        repeater = confirm("Добавить нового человека?");
    } while (repeater);
}
function say() {
    for (var i = 0; i < a.length; i++) {
        for (field in a[i]) {
            document.write(field + ': ' + a[i][field] + '<br>');
        }
        document.write('<hr>')
    }
}
ask();
say();
console.log(a);