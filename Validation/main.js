window.onload = function () {
    $('#date').mask('00/00/0000');
    $('#phone').mask('+38 (000) 000-0000');
    document.getElementById('check').onclick = function validate() {
        var x = true;
        function empty(elem, message) {
            if (elem.value == 0){
                show_error(elem, message);
                x = false;
            }
        }
        function show_error(elem, message) {
            elem.classList.add('error');
            msgElem = document.createElement('span');
            msgElem.innerHTML = message;
            elem.parentNode.appendChild(msgElem);
        }
        function reset_error(elem) {
            elem.classList.remove('error');
            if (elem.parentNode.lastChild.nodeName === 'SPAN') {
                elem.parentNode.removeChild(elem.parentNode.lastChild);
            }
        }
        function pattern(patt, elem, massage) {
            if (!patt.test(elem.value)) {
                show_error(elem, massage);
                x = false;
            }
            else {
                empty(elem, massage);
            }
        }
        _name = document.getElementById('name');
        pattern_name = /^[a-zA-Zа-яА-Я0-9_-]{3,16}$/;
        reset_error(_name);
        pattern(pattern_name, _name, 'Не корректное имя');
        _date = document.getElementById('date');
        reset_error(_date);
        empty(_date, 'Введите дату');
        _sex = document.getElementById('sex');
        reset_error(_sex);
        empty(_sex, 'Выберите пол');
        _email = document.getElementById('email');
        pattern_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        reset_error(_email);
        pattern(pattern_email, _email, 'Не корректная почта');
        _phone = document.getElementById('phone');
        reset_error(_phone);
        empty(_phone, 'Введите ваш телефон');
        _passwd = document.getElementById('passwd');
        pattern_passwd = /^[a-z0-9_-]{6,18}$/;
        reset_error(_passwd);
        pattern(pattern_passwd, _passwd, 'Введите пароль соответствующий требованиям');
        _conf_passwd = document.getElementById('conf_passwd');
        reset_error(_conf_passwd);
        if (_conf_passwd.value === _passwd.value) {
            empty(_conf_passwd, 'Повторите пароль');
        }
        else {
            show_error(_conf_passwd, 'Пароли не совпадают');
        }
        _about = document.getElementById('about');
        reset_error(_about);
        empty(_about, 'Ну скажите хоть что то о себе');
        if (x != false)
            document.write('Все требования по заполнению формы были выполнены!');
    }
};