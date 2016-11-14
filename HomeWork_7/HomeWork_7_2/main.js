var a = [];
var person = {};
function lg() {
    var lang_arr = [];
    var language;
    do {
        language = prompt('Введите язык програмирования');
        lang_arr.push(language);
        repeater = confirm("Добавить еще язык?");
    } while(repeater);
    return lang_arr;
}
function ask() {
    do {
        person = {
            name: prompt("Введите свое имя:"),
            sname: prompt("Введите свою фмилию:"),
            age: +prompt("Введите свой возраст:"),
            languages: lg()
        };
        a.push(person);
        repeater = confirm("Добавить нового человека?");
    } while (repeater);
}
function say() {
    for (var i = 0; i < a.length; i++) {
        for (field in a[i]) {
            if (typeof a[i][field] == 'object')
                document.write(field + ': ' + a[i][field].join(',  ') + '<br>');
            else
            document.write(field + ': ' + a[i][field] + '<br>');
        }
        document.write('<hr>');
    }
}
ask();
say();
console.log(a);