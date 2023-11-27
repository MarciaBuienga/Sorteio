
document.getElementById('sortear').addEventListener('click', function(evento){
    evento.preventDefault();
    
    let maiorNum = parseInt(document.querySelector('#maiorNum').value);
    let menorNum = parseInt(document.querySelector('#menorNum').value);
    let numAdvinhado = parseInt(document.querySelector('#adivinhar').value);
    let valorAleatorio;
    let tentativas = 0;

    if (isNaN(maiorNum) || isNaN(menorNum)) {
        console.log("Por favor, insira números válidos.");
    }
    else{
        valorAleatorio = Math.floor(Math.random()*(maiorNum -menorNum +1 ))+ menorNum;

        if (numAdvinhado === valorAleatorio){
            console.log(`Parabéns! ${numAdvinhado} = ${valorAleatorio} Você acertou o número`);
        }
        else{
            console.log(`Sorry! ${numAdvinhado} != ${valorAleatorio}`);
        }
    }

})