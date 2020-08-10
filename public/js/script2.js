const botaoEsconderIngredientes = document.querySelector('.esconderIngredientes');
const conteudoIngrediente = document.querySelector('.conteudoIngrediente');

botaoEsconderIngredientes.addEventListener('click', function () {
    if (botaoEsconderIngredientes.textContent == 'Esconder') {
        conteudoIngrediente.classList.add('desativo');
        botaoEsconderIngredientes.textContent = 'Mostrar';
    }
    else {
        conteudoIngrediente.classList.remove('desativo');
        botaoEsconderIngredientes.textContent = 'Esconder';
    }
});

const botaoEsconderPreparo = document.querySelector('.esconderPreparo');
const conteudoPreparo = document.querySelector('.conteudoPreparo');

botaoEsconderPreparo.addEventListener('click', function () {
    if (botaoEsconderPreparo.textContent == 'Esconder') {
        conteudoPreparo.classList.add('desativo');
        botaoEsconderPreparo.textContent = 'Mostrar';
    }
    else {
        conteudoPreparo.classList.remove('desativo');
        botaoEsconderPreparo.textContent = 'Esconder';
    }
});

const botaoEsconderInformacao = document.querySelector('.esconderInformacao');
const conteudoInformacao = document.querySelector('.conteudoInformacao');

botaoEsconderInformacao.addEventListener('click', function () {
    if (botaoEsconderInformacao.textContent == 'Esconder') {
        conteudoInformacao.classList.add('desativo');
        botaoEsconderInformacao.textContent = 'Mostrar';
    }
    else {
        conteudoInformacao.classList.remove('desativo');
        botaoEsconderInformacao.textContent = 'Esconder';
    }
});