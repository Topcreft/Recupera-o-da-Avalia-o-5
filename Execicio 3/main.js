function verificarMulta() {
    const velocidadePermitida = parseFloat(document.getElementById('velocidadePermitida').value);
    const velocidadeCondutor = parseFloat(document.getElementById('velocidadeCondutor').value);
    const resultadoElemento = document.getElementById('resultado');

    // Valida se os campos foram preenchidos com números positivos
    if (isNaN(velocidadePermitida) || isNaN(velocidadeCondutor) || velocidadePermitida <= 0 || velocidadeCondutor <= 0) {
        resultadoElemento.textContent = 'Por favor, insira valores numéricos e positivos.';
        return;
    }

    // Calcula os limites para as multas
    const limiteMultaLeve = velocidadePermitida * 1.20;

    // Lógica para verificar o tipo de multa
    if (velocidadeCondutor <= velocidadePermitida) {
        resultadoElemento.textContent = 'Sem Multa';
        resultadoElemento.style.color = '#28a745'; // Verde
    } else if (velocidadeCondutor <= limiteMultaLeve) {
        resultadoElemento.textContent = 'Multa Leve';
        resultadoElemento.style.color = '#ffc107'; // Amarelo
    } else {
        resultadoElemento.textContent = 'Multa Grave';
        resultadoElemento.style.color = '#dc3545'; // Vermelho
    }
}