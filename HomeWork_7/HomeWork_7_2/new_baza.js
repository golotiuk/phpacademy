var a = [];
var person = {};
document.getElementById("add").onclick = function () {
    person = {
        name: document.getElementsByName("name")[0].value,
        sname: document.getElementsByName("sname")[0].value,
        age: document.getElementsByName("age")[0].value,
        languages: document.getElementsByName("langs")[0].value.split(',')
    };
    a.push(person);
    document.getElementsByName("name")[0].value = '';
    document.getElementsByName("sname")[0].value = '';
    document.getElementsByName("age")[0].value = '';
    document.getElementsByName("langs")[0].value = '';
};
document.getElementById("list").onclick = function () {
    var info = document.getElementById("info");
    var li = document.getElementById("lists");
    li.innerHTML = '';
    list = a.map(function (pers) {
        return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages
    });
    li.innerHTML = list.join('<hr>');
    // console.log(typeof lists);
    info.appendChild(li);
};