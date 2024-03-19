function calculo(x, y) {
    if (x === '' || y === '') {
        alert('Informe números nos dois campos');
        return false;
    }

    if (maior(x,y)){
        x1 = y; 
        y = x;
        x = x1;
    }
    soma = parseInt(x) + parseInt(y);
    CalculoString = ("A Soma é igual a " + soma + "<br />");
    subtracao = x - y;
    CalculoString += ("A subtração é igual a " + subtracao + "<br />");
    divisao = x / y;
    CalculoString += ("A divisão é igual a " + divisao + "<br />");
    multiplicacao = x * y;
    CalculoString += ("A multiplicação é igual a " + multiplicacao);
    return CalculoString
}

function maior(x, y) {
    if (x < y) { 
        return true;
    } else { 
         return false; 
    }
}
// calculo(2,3);