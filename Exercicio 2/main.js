function verificarTriangulo() {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);
    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        resultadoElemento.textContent = 'Por favor, digite valores numéricos e positivos para todos os lados.';
        return;
    }

    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        if (ladoA === ladoB && ladoB === ladoC) {
            resultadoElemento.textContent = 'Os lados podem formar um triângulo: Equilátero.';
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            resultadoElemento.textContent = 'Os lados podem formar um triângulo: Isósceles.';
        } else {
            resultadoElemento.textContent = 'Os lados podem formar um triângulo: Escaleno.';
        }
    } else {
        resultadoElemento.textContent = 'Os lados NÃO podem formar um triângulo.';
    }
}
