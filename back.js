function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    if(numero.charAt(0)) {
        document.getElementById('resultado').innerHTML = num;
    }
    document.getElementById('resultado').innerHTML = numero + num;
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

function plusminus(pm)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + pm;
}

function virgula(vir)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + vir;
}

function equals()
{
    var numero = document.getElementById('resultado').innerHTML;
    let encontrou = false;

    for (let i = 0; i < numero.length; i++) {
        if (numero.charAt(i) === "+") {
          encontrou = true;
          break;
        }
    }

    
}


