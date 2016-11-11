var a = [1, 4, 11, 2, 9, 99, 5];
function sort_number(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
a.sort(sort_number);
document.write(a.join("<p>"));
document.write("<hr/>");
var s = ["January", "February", "March", "April", "May"];
s.sort();
document.write(s.join("<p>"));