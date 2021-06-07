function num1() {
    for (let i = 0; i <= 8; i++) {
        document.getElementById("i" + i.toString()).innerHTML = i;
        document.getElementById("th" + i.toString()).innerHTML = 3 ** i;
    }
}

function num2() {
    let i = -2;
    let j = 1;
    let int_end = 2;
    let step = 0.5;
    while (i <= int_end) {
        document.getElementById("x" + j.toString()).innerHTML = i;
        let y = (-5 * i ** 2 + 3 * i - 2) / (i + 0.5);
        if (y == -Infinity) {
            y = "-";
        }
        document.getElementById("y" + j.toString()).innerHTML = y;
        i = i + step;
        j++;
    }
}

function num3() {
    let x = parseFloat(document.getElementById("x").value);
    let eps = parseFloat(document.getElementById("eps").value);
    let h = 2;
    let flag = false;
    let sum = 1;
    let a = 1;
    while (a > eps) {
        a = (2 ** h * x ** h) / factorial(h);
        if (flag) sum += a; else sum -= a;
        h += 2;
        flag = !flag;
    }
    document.getElementById("result3_1").innerHTML = "результат: " + a;
    document.getElementById("result3_2").innerHTML = "результат: " + Math.cos(2 * x);
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function num4() {
    var element = document.getElementById("div1");
    let r = parseInt(document.getElementById("row").value);
    let c = parseInt(document.getElementById("col").value);
    var table = document.createElement("table");
    for (let i = 1; i <= r; i++) {
        var tr = document.createElement("tr");
        var tr_node = document.createTextNode(i);
        for (let j = 1; j <= c; j++) {
            var th = document.createElement("th");
            if (j > 1) {
                var th_node = document.createTextNode(j * i);
                th.appendChild(th_node);
            } else {
                th.appendChild(tr_node);
            }
            
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }
    element.appendChild(table);
}