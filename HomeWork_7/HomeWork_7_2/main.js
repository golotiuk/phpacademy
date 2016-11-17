var a = [];
var person = {};
function error(pers) {
    if (pers === "") {
        console.log(typeof pers);
        alert('не корректное значение');
        return ask();
    }
    else
        console.log(typeof pers);
    return pers
}
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
            name: error(prompt("Введите свое имя:")),
            sname: error( prompt("Введите свою фамилию:")),
            age: +prompt("Введите свой возраст:"),
            languages: lg()
        };
        // error();
        a.push(person);
        repeater = confirm("Добавить нового человека?");
    } while (repeater);
}
function say() {    var list = a.map(function(pers) {
        return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages.join(', ')
    });
    document.write(list.join('<hr>'));
}
ask();
say();