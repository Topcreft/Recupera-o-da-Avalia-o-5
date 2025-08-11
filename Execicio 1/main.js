function calcularEstacionamento() {
    // Pega o valor inserido pelo usuário
    const valorInput = document.getElementById('valor').value;
    const valorDepositado = parseFloat(valorInput);
    const resultadoDiv = document.getElementById('resultado');
    
    // Limpa o conteúdo anterior
    resultadoDiv.innerHTML = '';

    // Verifica se o valor é válido (não é nulo ou negativo)
    if (isNaN(valorDepositado) || valorDepositado <= 0) {
        resultadoDiv.innerHTML = '<span class="erro">Por favor, insira um valor válido.</span>';
        return;
    }

    let tempo = 0;
    let troco = 0;

    // Lógica para determinar o tempo e o troco com base na Tabela 4.6
    if (valorDepositado >= 3.00) {
        tempo = 120;
        troco = valorDepositado - 3.00;
    } else if (valorDepositado >= 1.75) {
        tempo = 60;
        troco = valorDepositado - 1.75;
    } else if (valorDepositado >= 1.00) {
        tempo = 30;
        troco = valorDepositado - 1.00;
    } else {
        // Se o valor for menor que o mínimo (R$ 1,00)
        resultadoDiv.innerHTML = '<span class="erro">Valor Insuficiente.</span>';
        return;
    }
    
    // Exibe o tempo de permanência e o troco (se houver)
    let trocoFormatado = troco.toFixed(2); // Formata o troco com 2 casas decimais

    resultadoDiv.innerHTML = `
        <span class="tempo">Tempo: ${tempo} min</span>
        <span class="troco">Troco: R$ ${trocoFormatado}</span>
    `;
}