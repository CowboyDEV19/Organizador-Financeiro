function calcularValores() {
    const salarioInput = document.getElementById('salario');
    const resultadosDiv = document.getElementById('resultados');

    const salario = parseFloat(salarioInput.value);

    if (isNaN(salario) || salario <= 0) {
        alert('Por favor, insira um salário válido.');
        return;
    }

    // Percentuais
    const percentuais = {
        'Contas': 42.857143,
        'Metas': 19.809524,
        'Lazer': 12.952381,
        'Investimento': 9.904762,
        'Emergência': 14.476190
    };

    // Limpa resultados anteriores
    resultadosDiv.innerHTML = '';

    for (const [categoria, percentual] of Object.entries(percentuais)) {
        const valor = salario * (percentual / 100);
        const elemento = document.createElement('div');
        elemento.classList.add('resultado-item');
        elemento.innerText = `${categoria}: R$ ${valor.toFixed(2)}`;
        resultadosDiv.appendChild(elemento);
    }
}
