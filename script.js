function calculadora(){
    var operacao = Number(prompt('Digite a Operação desejada\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Divisão inteira (%) \n 6 - Potencia (**)'));
    while (!operacao || operacao > 6){
        operacao = Number(prompt('OPERAÇÃO INVALIDA!\nDigite a Operação desejada\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Divisão inteira (%) \n 6 - Potencia (**)'));
    };
    var n1 = Number(prompt('Primeiro número'));
    while (!n1){
        n1 = Number(prompt('NÚMERO INVALIDO!\nPrimeiro número'));
    };
    var n2 = Number(prompt('Segundo número'));
    while(!n2){
        n1 = Number(prompt('NÚMERO INVALIDO!\nSegundo número'));
    };
    var resultado;
    var resp;

    switch (operacao) {
        case 1:
            resultado = soma(n1, n2);
            alert(`${n1} + ${n2} = ${resultado}`);
            break;
        case 2:
            resultado = sub(n1, n2);
            alert(`${n1} - ${n2} = ${resultado}`);
            break;
        case 3:
            resultado = mult(n1, n2);
            alert(`${n1} * ${n2} = ${resultado}`);
            break;
        case 4:
            resultado = divi(n1, n2);
            alert(`${n1} / ${n2} = ${resultado}`);
            break;
        case 5:
            resultado = diviInteira(n1, n2);
            alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
            break;
        case 6:
            resultado = potencia(n1, n2);
            alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
            break;
    };
};

function soma(n1, n2){
    return n1 + n2;
};

function sub(n1, n2){
    return n1 - n2;
};

function mult(n1, n2){
    return n1 * n2;
};

function divi(n1, n2){
    return n1 / n2;
};

function diviInteira(n1, n2){
    return n1 % n2;
};

function potencia(n1, n2){
    return n1 ** n2;
};

function continuar(){
    var calcularNovamente = Number(prompt('Deseja calcular?\n1 - Sim\n2 - Não'));
    while (!calcularNovamente || calcularNovamente > 2) {
        calcularNovamente = Number(prompt('OPÇÃO INVALIDA!\nDeseja calcular?\n1 - Sim\n2 - Não'));
    }
    
    return (calcularNovamente == 1) ? true : false;
}

do {
    calculadora();
    resp = continuar();
} while (resp)

alert('Obrigado por utilizar, volte sempre!')

