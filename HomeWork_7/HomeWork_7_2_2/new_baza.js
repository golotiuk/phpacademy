window.onload =function () {
    var a = [
        {name: 'dima', sex: 'мужской', age: 23, languages: ['php', ' html', ' css']},
        {name: 'olya', sex: 'женский', age: 30, languages: ['php', ' css']},
        {name: 'vasya', sex: 'мужской', age: 26, languages: ['pyton']},
        {name: 'ruslan', sex: 'мужской', age: 22, languages: ['pyton', ' php', ' html', ' css', ' js']}
    ];
    var person = {};
    document.getElementById("add").onclick = function () {
        clear_button();
        valid(document.getElementsByClassName("validate"));
    };
    document.getElementById("list").onclick = function () {
        clear_button();
        say();
    };
    document.getElementById("delete").onclick = function () {
        clear_button();
        var list = document.getElementById('lists');
        list.innerHTML = '';
        say2();
        var del_name = document.createElement('input');
        var del_index = document.createElement('input');
        var name_index = document.createElement('input');
        del_name.type = del_index.type = 'button';
        name_index.type = 'text';
        del_name.id = 'del_name';
        del_index.id = 'del_index';
        name_index.name = 'name_index';
        del_index.value = 'Удалить по индексу';
        del_name.value = 'Удалить по имени';
        del_name.className = del_index.className = "del";
        button.appendChild(name_index);
        button.appendChild(del_name);
        button.appendChild(del_index);
        document.getElementById("del_name").onclick = function () {
            var name = document.getElementsByName('name_index')[0].value;
            for (var i = 0; i < a.length; i++) {
                for (field in a[i]) {
                    if (a[i][field] == name) {
                        a.splice(i, 1);
                        document.getElementsByName('name_index')[0].value = '';
                        say2();
                        break;
                    }
                }
            }
        };
        document.getElementById("del_index").onclick = function () {
            var index = document.getElementsByName('name_index')[0].value;
            for (var i = 0; i < a.length; i++) {
                if (i == index) {
                    a.splice(i, 1);
                    document.getElementsByName('name_index')[0].value = '';
                    say2();
                }
            }
        };
    };
    document.getElementById("sort").onclick = function sort() {
        document.getElementById('lists').innerHTML = '';
        clear_button();
        var button = document.getElementById('sort_button');
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
        say2();
        document.getElementById("sort_name").onclick = function () {
            a.sort(sort_n);
            say2();
        };
        document.getElementById("sort_age").onclick = function () {
            a.sort(sort_a);
            say2();
        };
        document.getElementById("sort_lang").onclick = function () {
            a.sort(sort_l).reverse();
            say2();
        }
    };
    document.getElementById("close").onclick = function () {
        if (confirm('Вы действительно хотите выйти?'))
        close();
    };
    function sort_n(n, m) {
        if (n.name > m.name) return 1;
        if (n.name < m.name) return -1;
    }
    function sort_a(n, m) {
        if (n.age > m.age) return 1;
        if (n.age < m.age) return -1;
    }
    function sort_l(n, m) {
        if (n.languages.length > m.languages.length) return 1;
        if (n.languages.length < m.languages.length) return -1;
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
            alert("Введите возраст в числовом формате");
            x = false;
            return x;
        }
        if (check(document.getElementsByName("sex")) == undefined) {
            alert('Выберите пол');
            x = false;
            return x;
        }
        for (var i = 0; i < arg.length; i++) {
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
        say();
    }
    function clear_button() {
        var button = document.getElementById('sort_button');
        button.innerHTML = '';
        var button_d = document.getElementById('delete_button');
        button_d.innerHTML = '';
    }
    function say() {
        var li = document.getElementById("lists");
        li.innerHTML = '';
        list = a.map(function (pers) {
            return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Пол - ' + pers.sex + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages
        });
        li.innerHTML = list.join('<hr>');
    }
    function say2() {
        var li = document.getElementById("lists");
        list = a.map(function (pers) {
            return '<tr>' + '<td>' + pers.name + '</td>' + '<td>' + pers.sname + '</td>' + '<td>' + pers.sex + '</td>' +
                '<td>' + pers.age + '</td>' + '<td>' + pers.languages + '</td>' + '</tr>'
        });
        head = '<tr>' + '<th>' + 'Имя' + '</th>' +'<th>' + 'Фамилия' + '</th>' + '<th>' + 'Пол' + '</th>' + '<th>' + 'Возраст' + '</th>' + '<th>' + 'Знание язиков' + '</th>' + '</tr>';
        li.innerHTML = '<table>' + head + list.join('') + '</table>';
    }
};