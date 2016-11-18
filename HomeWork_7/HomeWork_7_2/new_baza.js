var a = [];
var person = {};
var x;
document.getElementById("add").onclick = function () {
    valid(document.getElementsByClassName("validate"));

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
// function error(arg) {
//     if (arg == "") {
//         x = false;
//         return alert(x);
//     }
//     else
//         return person.name = arg;
// }
// function err(arg) {
//     console.log(arg)
//     for (field in arg) {
//         if (arg[field] == "") {
//             arg = 0;
//             return alert("!");
//         }
//     }
// }
function valid(arg) {
    for (i = 0; i < arg.length; i++) {
        if (arg[i].value == "") {

            return alert("not valid")
        }
        else {
            alert("Готово");
            continue;
        }
    }
}