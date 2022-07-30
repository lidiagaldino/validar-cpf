const cpfInput = document.getElementById('cpf');
const buttonVerificar = document.getElementById('buttonVerificar');
const resultado = document.getElementById('resultado');

function eliminacao() {

    let cpf = cpfInput.value;
    let soma = 0;
    
    for (let i = 0; i < 11; i++) {
        
        soma += parseInt(cpf[i]);

    }

    if (soma == (parseInt(cpf[0]) * 11) && soma == (parseInt(cpf[1]) * 11) && soma == (parseInt(cpf[2]) * 11)) {

        resultado.textContent = 'CPF inválido 1' + soma;

    } else{
        validarPrimeiroPasso();
    }
}

function validarPrimeiroPasso() {

    let cpf = cpfInput.value;
    let soma = 0;
    
    for (let i = 0; i < 9; i++) {
    
        soma += parseInt(cpf[i]) * (10 - i);    
    
    }

    let digitoUm = (soma * 10) % 11;

    if (digitoUm == parseInt(cpf[9])) {
        validarSegundoPasso();
    } else{
        resultado.textContent = 'CPF inválido 2';
    }
    
}

function validarSegundoPasso() {

    let cpf = cpfInput.value;
    let soma = 0;

    for (let i = 0; i < 10; i++){

        soma += parseInt(cpf[i]) * (11 - i);

    }

    let digitoDois = (soma * 10) % 11;

    if (digitoDois == parseInt(cpf[10])) {
        resultado.textContent = 'CPF válido';
    } else{
        resultado.textContent = 'CPF inválido 3';
    }
}

buttonVerificar.addEventListener('click', eliminacao);