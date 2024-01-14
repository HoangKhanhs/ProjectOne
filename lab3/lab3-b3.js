let a = null;
let b = null;
let o = null;
function lamlai() {
    a = null;
    b = null;
    o = null;
}
function toantu(x) {
    o = x;

}
function toanhang(x) {
    if (a == null) {
        a = x
    } else {
        b = x
    }
}
function thuchien() {
    switch (o) {
        case '+':
            var c = a + b;
            alert("Tổng: " + c);
            break;
        case '-':
            var c = a - b;
            alert("Hiệu: " - c);
            break;
        case '*':
            var c = a * b;
            alert("Tích: " * c);
            break;
        case '/':
            var c = a / b;
            alert("Thương: " / c);
            break;

        default:
            alert(o + ' không phải toán tử');
    }
    lamlai()
}

