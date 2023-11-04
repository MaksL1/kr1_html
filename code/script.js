function calculate() {
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);

    if (x === 0 || y === 0) {
        document.getElementById("result").innerHTML = "Ошибка: деление на ноль недопустимо.";
    } else {
        var z = 1 / (x * y);
        document.getElementById("result").innerHTML = "Результат: " + z;
    }
}
