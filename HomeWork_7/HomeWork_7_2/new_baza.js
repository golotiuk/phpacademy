var a = [
    {name:'dima',age:23},
    {name:'olya',age:24},
    {name:'vasya',age:25},
    {name:'taras',age:26}
    ];
var person = {};
document.getElementById("add").onclick = function () {
    valid(document.getElementsByClassName("validate"));
    say();
};
document.getElementById("list").onclick = function () {
    say();
};
document.getElementById('delete').onclick = function () {
    var button = document.getElementById('delete_button');
    button.innerHTML = '';
    var del_name = document.createElement('input');
    var del_index = document.createElement('input');
    var name_index = document.createElement('input');
    del_name.type = del_index.type = 'button';
    name_index.type = 'text';
    del_name.id = 'del_name';
    del_index.id = 'del_index';
    name_index.id = 'name_index';
    del_index.value = 'Удалить по индексу';
    del_name.value = 'Удалить по имени';
    del_name.className = del_index.className = "del";
    button.appendChild(name_index);
    button.appendChild(del_name);
    button.appendChild(del_index);
};
document.getElementById("del_name").onclick = function () {
    var name = document.getElementById('name_index')[0].value;
    console.log(name);
    for (var i = 0; i < a.length; i++) {
        for (field in a[i]) {
            if (a[i][field] == name) {
                a.splice(i,1);
                alert('Удалено');
                say();
            }
        }
    }
//         say();
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
    for (i = 0; i < arg.length; i++) {
        if (arg[i].value == "") {
            x = false;
            alert("Не верные значение!");
            break;
        }
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
function say() {
    var li = document.getElementById("lists");
    var button_del = document.getElementById('delete_button');
    var button_sort = document.getElementById('sort_button');
    button_del.innerHTML = '';
    button_sort.innerHTML = '';
    li.innerHTML = '';
    list = a.map(function (pers) {
        return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Пол - ' + pers.sex + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages
    });
    li.innerHTML = list.join('<hr>');
}