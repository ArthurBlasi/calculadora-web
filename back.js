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
    var numero = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('historico').innerHTML = numero + div;
}

function multiplication(mult)
{
    var numero = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('historico').innerHTML = numero + mult;
}

function subtraction(sub)
{
    var numero = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('historico').innerHTML = numero + sub;
}

function addition(add)
{
    var numero = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('historico').innerHTML = numero + add;
}

function plusminus()
{
    let numero = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;

    let lastOperatorIndex = Math.max(
        numero.lastIndexOf('+'),
        numero.lastIndexOf('−'),
        numero.lastIndexOf('×'),
        numero.lastIndexOf('÷')
    );

    let ultimoNumero = numero.substring(lastOperatorIndex + 1);

    if (ultimoNumero.startsWith('-')) {
        ultimoNumero = ultimoNumero.substring(1);
    } else {
        ultimoNumero = '-' + ultimoNumero;
    }

    //numero = numero.substring(0, lastOperatorIndex + 1) + ultimoNumero;
    document.getElementById('resultado').innerHTML = ultimoNumero;
}

function virgula(vir)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + vir;
}

function equals()
{
    try{
        let expression = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;
        expression = expression.replaceAll('÷', '/').replaceAll('×', '*');
        const result = eval(expression);
        expression = expression.replaceAll('/', '÷').replaceAll('*', '×');
        document.getElementById('historico').innerHTML = expression;
        document.getElementById('resultado').innerHTML = result;
    } catch (e) {
        alert('Expressão inválida.');
    }
}


