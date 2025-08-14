function calcularParcelas() {
    const totalCompra = parseFloat(document.getElementById('totalCompra').value);
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';

    const parcelaMinima = 20;
    
    const maxParcelas = 6;

    if (isNaN(totalCompra) || totalCompra <= 0) {
        resultadoElemento.innerHTML = '<p class="erro">Por favor, insira um valor de compra válido.</p>';
        return;
    }

    let numParcelas = Math.floor(totalCompra / parcelaMinima);

    if (numParcelas > maxParcelas) {
        numParcelas = maxParcelas;
    }
    
    if (totalCompra < parcelaMinima) {
        resultadoElemento.innerHTML = `<p class="erro">A compra não pode ser parcelada. O valor mínimo da parcela é de ${parcelaMinima.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.</p>`;
    } else {
        const valorParcela = totalCompra / numParcelas;

        resultadoElemento.innerHTML = `
            <p class="sucesso"><strong>Compra parcelada com sucesso!</strong></p>
            <p><strong>Número máximo de parcelas:</strong> ${numParcelas}x</p>
            <p><strong>Valor de cada parcela:</strong> ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        `;
    }
}