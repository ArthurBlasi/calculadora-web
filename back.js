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

function plusminus()
{
    /*var numero = document.getElementById('resultado').innerHTML;

    for (let i = numero.length; i > 0; i--) {
        if (numero.charAt(i) === "+" || numero.charAt(i) === "-" || numero.charAt(i) === "×" || numero.charAt(i) === "÷") {

            if(numero.charAt(i) === "-") {
                numero.charAt(i+1) = "+";
                break;
            } else {
                numero.charAt(i+1) = "-";
            }
        }
        numero.charAt(i+1) = numero.charAt(i);
    }*/

        /*let expression = document.getElementById('resultado').innerHTML;

        let lastOperatorIndex = Math.max(
            expression.lastIndexOf('+'),
            expression.lastIndexOf('-'),
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
        document.getElementById('resultado').innerHTML = expression;*/

        let expression = document.getElementById('resultado').innerHTML;

    // Localiza o índice do último operador matemático (+, -, ×, ÷)
    let lastOperatorIndex = Math.max(
        expression.lastIndexOf('+'),
        expression.lastIndexOf('-'),
        expression.lastIndexOf('×'),
        expression.lastIndexOf('÷')
    );

    // Extrai a parte da expressão após o último operador
    let lastNumber = expression.substring(lastOperatorIndex + 1);

    if (lastNumber.startsWith('-')) {
        // Se o último número for negativo, remova o sinal de negativo
        lastNumber = lastNumber.substring(1);

        // Verifica o operador anterior e ajusta a expressão
        if (expression.charAt(lastOperatorIndex) === '-') {
            expression = expression.substring(0, lastOperatorIndex) + '+' + lastNumber;
        } else {
            expression = expression.substring(0, lastOperatorIndex + 1) + lastNumber;
        }
    } else {
        // Se o último número for positivo, adicione o sinal de negativo
        lastNumber = '-' + lastNumber;
        expression = expression.substring(0, lastOperatorIndex + 1) + lastNumber;
    }

    // Atualiza o display com a nova expressão
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

    /*try {
        const result = eval(document.getElementById('resultado').value);
        document.getElementById('resultado').value = result;
    } catch (e) {
        alert('Expressão Inválida');
    }


    var numero = document.getElementById('resultado').innerHTML;
    let encontrou = false;
    var x = 0;
    var num1;
    var num2;

    for (let i = 0; i < numero.length; i++) {
        if (numero.charAt(i) === "+") {
          encontrou = true;
          x = i;
          break;
        }
    }

    for (let i = 0; i < x; i++) {
        num1 += charAt(i);
    }
    
    for (let i = x+1; i < numero.length; i++) {
        num2 += charAt(i);
    }

    document.getElementById('resultado').innerHTML = num1 + num2;*/
}


