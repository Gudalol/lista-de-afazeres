document.addEventListener('DOMContentLoaded', function() {
    const adcButton = document.getElementById('adicionarAtividade');
    const atividadeInput = document.getElementById('atividade');
    const listaAtividade = document.getElementById("listaAtividades");

    // Adicionar tarefa/atividade
    adcButton.addEventListener('click', function() {
        const atvText = atividadeInput.value.trim();
        if (atvText) {
            const atvItem = document.createElement('li');
            atvItem.classList.add('atividade');

            atvItem.innerHTML = `
                <span>${atvText}</span>
                <button class="remove-btn">&#10006;</button>
            `;

            listaAtividade.appendChild(atvItem);
            atividadeInput.value = '';

            // Adicionar ao botão um evento de remoção
            const removeButton = atvItem.querySelector('.remove-btn');
            removeButton.addEventListener('click', function() {
                removeTask(atvItem);
            });
        }
    });

    // Função para remover atividade
    function removeTask(taskItem) {
        listaAtividade.removeChild(taskItem);
    }
});
