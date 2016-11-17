var a = [];
var person = {};
// var list;
document.getElementById("add").onclick = function () {
    person = {
        name: document.getElementsByName("name")[0].value,
        sname: document.getElementsByName("sname")[0].value,
        age: document.getElementsByName("age")[0].value,
        languages: document.getElementsByName("langs")[0].value
    };
    n = document.getElementsByName("name")[0].value;
    console.log(n);
    console.log(person);
    a.push(person);
    document.getElementsByName("name")[0].value = '';
    document.getElementsByName("sname")[0].value = '';
    document.getElementsByName("age")[0].value = '';
    document.getElementsByName("langs")[0].value = '';
};
document.getElementById("list").onclick = function () {
    var info = document.getElementById("info");
    var lists = document.createElement("p");
    list = a.map(function (pers) {
        return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages
    });
    lists.innerHTML = list.join('<hr>');
    console.log(typeof lists);
    info.appendChild(lists);
};
// function list() {
//      list = a.map(function (pers) {
//         return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages
//     });
//     // asd = list.join('<hr>');
// }
console.log(a);