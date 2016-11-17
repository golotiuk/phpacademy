var a = [];
var person = {};
document.getElementById("send").onclick = function () {
    person = {
        name: document.getElementsByName("name"),
        sname: document.getElementsByName("sname"),
        age: document.getElementsByName("age"),
        languages: document.getElementsByName("langs")
    };

    a.push(person);
};
document.getElementById("list").onclick = function () {
    var info = document.getElementById("info");
    var lists = document.createElement("p");
    lists.innerHTML = write();
    console.log(typeof lists);

//     list = "hi dslkfdsf dsf";
    info.appendChild(lists);
};
// // write();
// // say();
function write() {
    var list = a.map(function (pers) {
        return 'Имя - ' + pers.name + '<br>' + 'Фамилия - ' + pers.sname + '<br>' + 'Возраст - ' + pers.age + '<br>' + 'Владение языками - ' + pers.languages
    });
    // document.write(list.join('<hr>'));
    // alert(list)
}