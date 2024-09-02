function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;

    if (numero === "0") {
        document.getElementById('resultado').innerHTML = num;
    } else {
        document.getElementById('resultado').innerHTML += num;
    }
}

function cleaning(num)
{
    document.getElementById('resultado').innerHTML = num;
    document.getElementById('historico').innerHTML = "";
}

function erase(num)
{
    document.getElementById('resultado').innerHTML = num;
}

function percentage()
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero / 100;
    document.getElementById('historico').innerHTML = numero + "%";
}

function division(div)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + div;
}

function multiplication(mult)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + mult;
}

function subtraction(sub)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + sub;
}

function addition(add)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + add;
}

function plusminus()
{
    let expression = document.getElementById('resultado').innerHTML;

    let lastOperatorIndex = Math.max(
        expression.lastIndexOf('+'),
        expression.lastIndexOf('−'),
        expression.lastIndexOf('×'),
        expression.lastIndexOf('÷')
    );

    let lastNumber = expression.substring(lastOperatorIndex + 1);

    if (lastNumber.startsWith('-')) {
        lastNumber = lastNumber.substring(1);
    } else {
        lastNumber = '-' + lastNumber;
    }

    expression = expression.substring(0, lastOperatorIndex + 1) + lastNumber;
    document.getElementById('resultado').innerHTML = expression;
}

function virgula(vir)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + vir;
}

function equals()
{
    try{
        let expression = document.getElementById('resultado').innerHTML;
        expression = expression.replaceAll('÷', '/').replaceAll('×', '*');
        const result = eval(expression);
        expression = expression.replaceAll('/', '÷').replaceAll('*', '×');
        document.getElementById('historico').innerHTML = expression;
        document.getElementById('resultado').innerHTML = result;
    } catch (e) {
        alert('NaN');
    }
}


