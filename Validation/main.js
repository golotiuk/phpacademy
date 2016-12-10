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
            console.log(msgElem);
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
                console.log('asdasd');
                show_error(elem, massage);
                x = false;
            }
            else {
                console.log('xczx2');
                empty(elem, massage);
            }
        }
        //
        // err(date, 'Не корректная дата');
        // err('phone');
        // err('sex');
        // err('about');
        _name = document.getElementById('name');
        pattern_name = /^[a-z0-9_-]{3,16}$/;
        // reset_error(_name);
        pattern(pattern_name, _name, 'Не корректное имя');
        _date = document.getElementById('date');
        reset_error(_name);
        empty(_date, 'Введите дату');
        _sex =document.getElementById('sex');
        reset_error(_name);
        empty(_sex, 'Выберите пол');
        _email = document.getElementById('email');
        pattern_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        reset_error(_email);
        pattern(pattern_email, _email, 'Не корректная почта');
        // reg_passwd = document.getElementById('passwd');
        // pattern_passwd = /^[a-z0-9_-]{6,18}$/;
        // if (!pattern_passwd.test(reg_passwd.value)) {
        //     document.getElementById('passwd').classList.add('error');
        //     err(reg_passwd, 'Не корректный пароль');
        //     x = false;
        // }
        if (x != false)
            document.write('Все требования по заполнению формы были выполнены!');
    }
};