window.onload = function () {
        $('#date').mask('00/00/0000');
        $('#phone').mask('+38 (000) 000-0000');
    function validate() {
        input = document.getElementsByClassName('input');
        var x;
        for (i = 0; i < input.length; i++) {
            if (input[i].value == "") {
                input[i].classList.add('error');
                x = false;
            }
        }
        reg_name = document.getElementsByName('name')[0].value;
        pattern_name = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        if (pattern_name.test(reg_name)) {
        }
        else {
            document.getElementsByName('name')[0].classList.add('error');
            x = false;
            return x;
        }
        reg_email = document.getElementsByName('email')[0].value;
        pattern_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (pattern_email.test(reg_email)) {
        }
        else {
            document.getElementsByName('email')[0].classList.add('error');
            x = false;
            return x;
        }
        if (x != false) say();

    }
    function say() {
        input = document.getElementsByClassName('input');
        for (i=0;i<input.length;i++) {
            console.log(input[i].value);
        }
    }
    document.getElementsByClassName('ok')[0].onclick = validate;
};
