window.onload =function () {
    var a = [
        {name: 'dima', age: 23},
        {name: 'olya', age: 30},
        {name: 'vasya', age: 26},
        {name: 'taras', age: 22}
    ];
    var person = {};
    document.getElementById("add").onclick = function () {
        valid(document.getElementsByClassName("validate"));
        say();
    };
    document.getElementById("list").onclick = say();
    document.getElementById("delete").onclick = function () {
        var button = document.getElementById('delete_button');
        button.innerHTML = '';
        var button_s = document.getElementById('sort_button');
        button_s.innerHTML = '';
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
        document.getElementById("del_name").onclick = function () {
            var name = document.getElementById('name_index').value;
            for (var i = 0; i < a.length; i++) {
                for (field in a[i]) {
                    if (a[i][field] == name) {
                        a.splice(i, 1);
                        alert(name + ' - удалено');
                        say();
                    }
                }
            }
        };
        document.getElementById("del_index").onclick = function () {
            var name = document.getElementById('name_index').value;
            for (var i = 0; i < a.length; i++) {
                if (i == name) {
                    a.splice(i, 1);
                    alert('Удалено');
                    say();
                }
            }
        };
    };
    document.getElementById("sort").onclick = function () {
        var button = document.getElementById('sort_button');
        button.innerHTML = '';
        var button_d = document.getElementById('delete_button');
        button_d.innerHTML = '';
        var sort_name = document.createElement('input');
        var sort_lang = document.createElement('input');
        var sort_age = document.createElement('input');
        sort_name.type = sort_lang.type = sort_age.type = 'button';
        sort_name.id = 'sort_name';
        sort_lang.id = 'sort_lang';
        sort_age.id = 'sort_age';
        sort_name.value = 'По имени';
        sort_lang.value = 'По кол. языков';
        sort_age.value = 'По возрасту';
        sort_name.className = sort_lang.className = sort_age.className = "sort_but";
        button.appendChild(sort_name);
        button.appendChild(sort_lang);
        button.appendChild(sort_age);
        document.getElementById("sort_name").onclick = function () {
            a.sort(sort_n);
            say();
        };
        document.getElementById("sort_age").onclick = function () {
            a.sort(sort_a);
            say();
        };
        document.getElementById("sort_lang").onclick = function () {

        }
    };
    function sort_n(n, m) {
        if (n.name > m.name) return 1;
        if (n.name < m.name) return -1;
    }
    function sort_a(n, m) {
        if (n.age > m.age) return 1;
        if (n.age < m.age) return -1;
    }

    function check(arg) {
        for (var i = 0; i < arg.length; i++) {
            if (arg[i].checked == true) {
                return arg[i].value;
            }
        }
    }

    function valid(arg) {
        var x;
        if (isNaN(document.getElementsByName("age")[0].value)) {
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
};
