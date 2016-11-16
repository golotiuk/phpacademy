var a = [];
var person = {};
// function error(pers) {
//     if (pers == null)
//     alert('не корректное значение')
// }
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
        // error(person);
        a.push(person);
        repeater = confirm("Добавить нового человека?");
    } while (repeater);
}
function say() {
    var list = a.map(function(pers) {
        return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages.join(', ')
    });
    document.write(list.join('<hr>'));
}
ask();
say();