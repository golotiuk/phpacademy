var a = [];
var person = {
    name: '',
    sname: '',
    age: ''
};
function ask() {
    do {
        person = {};
        person.name = prompt("Введите свое имя:");
        person.sname = prompt("Введите свою фамилию:");
        person.age = +prompt("Введите свой возраст:");
        a.push(person);
        repeater = confirm("Пройти заполнение еще раз?");
    } while (repeater);
}
ask();
console.log(a);
for (var i = 0; i < a.length; i++) {
    for(field in a[i]) {
        console.log(a[i][field]);
        document.write(a[i][field]+ '<br>');
    }
    document.write('<hr>')
}