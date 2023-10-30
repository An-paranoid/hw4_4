function askName() {
    let messValue = document.getElementById("mess").value;
    let str = `Администратор: ${messValue}`;
    document.getElementById("result").innerText = str;
    document.getElementById("mess").value = '';
}

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Пожалуйста, введите числа");
        return;
    }

    var result = num1 + num2;

    document.getElementById("sum").innerText = "Результат: " + result;
}

function subtraction() {
    // Получаем значения из полей ввода
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);

    // Проверяем, что введены числа
    if (isNaN(operand1) || isNaN(operand2)) {
        alert("Пожалуйста, введите числа");
        return;
    }

    // Выполняем операцию вычитания
    var result = operand1 - operand2;

    // Выводим результат
    document.getElementById("sub").innerText = "Результат: " + result;
}