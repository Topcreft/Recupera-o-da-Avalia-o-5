function inverterNumero() {
    const numeroStr = document.getElementById('numero').value;
    const resultadoElemento = document.getElementById('resultado');

    const numeroInt = parseInt(numeroStr);

    if (isNaN(numeroInt) || numeroInt < 100 || numeroInt > 999) {
        resultadoElemento.textContent = 'ERRO: Por favor, digite um número de 3 dígitos.';
        resultadoElemento.className = 'erro';
        return;
    }

    const numeroInvertidoStr = numeroStr.split('').reverse().join('');
    const numeroInvertidoInt = parseInt(numeroInvertidoStr);

    resultadoElemento.textContent = `A centena invertida é: ${numeroInvertidoInt}`;
    resultadoElemento.className = 'sucesso';
}