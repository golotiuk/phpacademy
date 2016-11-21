var a = [];
var person = {};
var x;
document.getElementById("add").onclick = function () {
    valid(document.getElementsByClassName("validate"));
};
document.getElementById("list").onclick = function () {
    var info = document.getElementById("info");
    var li = document.getElementById("lists");
    li.innerHTML = '';
    list = a.map(function (pers) {
        return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Пол - ' + pers.sex + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages
    });
    li.innerHTML = list.join('<hr>');
    info.appendChild(li);
};
function check(arg) {
    var res = arg;
    for (var i = 0; i < res.length; i++) {
        if (res[i].checked == true) {
            return res[i].value;
        }
    }
}
function valid(arg) {
    var x;
    for (i = 0; i < arg.length; i++) {
        console.log(typeof arg[i].value);
        if (arg[i].value == "") {
            x = false;
            alert("Не верные значение!");
            break;
        }
    }
    if ( isNaN(document.getElementsByName("age")[0].value)){
        alert("Введите число");
        x = false;
        return x;
    }
    if (check(document.getElementsByName("sex")) == undefined) {
        alert('Выберите значение');
        x = false;
        return x;
    }
    else {
        alert('Добавлено');
    }
    if (x == false) return false;
    else write();
}
function write() {
    person = {
        name: document.getElementsByName("name")[0].value,
        sname: document.getElementsByName("sname")[0].value,
        age: document.getElementsByName("age")[0].value,
        sex: check(document.getElementsByName("sex")),
        languages: document.getElementsByName("langs")[0].value.split(',')
    };
    a.push(person);
    document.getElementsByName("name")[0].value = '';
    document.getElementsByName("sname")[0].value = '';
    document.getElementsByName("age")[0].value = '';
    document.getElementsByName("langs")[0].value = '';
}