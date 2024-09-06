function insert(num)
{
    //função responsável por inserir um número no display da calculadora (0-9)
    var numero = document.getElementById('resultado').innerHTML;

    if (numero === "0") {
        document.getElementById('resultado').innerHTML = num;
    } else {
        document.getElementById('resultado').innerHTML += num;
    }
}

function cleaning(num)
{
    //função responsável por limpar os displays do resultado e do "histórico"/calculo atual
    document.getElementById('resultado').innerHTML = num;
    document.getElementById('historico').innerHTML = "";
}

function erase(num)
{
    //função responsável por apagar apenas o display do resultado
    document.getElementById('resultado').innerHTML = num;
}

function percentage()
{
    //essa função lê o valor do display, divide ele por 100 e adiciona um "%" no histórico
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero / 100;
    document.getElementById('historico').innerHTML = numero + "%";
}

function operations(sinal)
{
    //função responsável por inserir um operador (+, −, ×, ÷), mas sempre verificando
    //se a expressão já possui um sinal de =, pois causaria erro na função equals
    var numero = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;

    let lastOperatorIndex = numero.lastIndexOf('=');

    if (lastOperatorIndex !== -1) {
        let ultimoNumero = numero.substring(lastOperatorIndex + 1);
        document.getElementById('historico').innerHTML = ultimoNumero + sinal;
    } else {
        document.getElementById('historico').innerHTML = numero + sinal;
    }
    document.getElementById('resultado').innerHTML = "";
}


function plusminus()
{
    // função responsável por trocar o sinal do último número
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

    document.getElementById('resultado').innerHTML = ultimoNumero;
}

function virgula(vir)
{
    //função responsável por colocar a vírgula no display
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + vir;
}

function equals()
{
    //função responsável por ler a expressão completa e realizar o cálculo
    //o método eval() serve para avaliar uma expressão de código JavaScript que está representada como uma string
    try{
        let expressao = document.getElementById('historico').innerHTML + document.getElementById('resultado').innerHTML;
        expressao = expressao.replaceAll('÷', '/').replaceAll('×', '*');
        const resultado = eval(expressao);
        expressao = expressao.replaceAll('/', '÷').replaceAll('*', '×');
        document.getElementById('historico').innerHTML = expressao + "=";
        document.getElementById('resultado').innerHTML = resultado;
    } catch (e) {
        alert('Expressão inválida.');
    }
}


