function createAnStateArray() {
    let stateId = document.getElementById('state');
    let states = [
        'Mato Grosso',
        'Bahia',
        'Rio de Janeiro',
        'Minas Gerais',
        'Goiás',
        'Ceará',
        'Rio Grande do Sul',
        'São Paulo',
        'Paraná',
        'Santa Catarina',
        'Pernambuco',
        'Espirito Santo',
        'Pará',
        'Amazonas',
        'Piauí',
        'Mato Grosso do Sul',
        'Sergipe',
        'Maranhão',
        'Rio Grande do Norte',
        'Paraíba',
        'Tocantins',
        'Acre',
        'Rondônia',
        'Roraima',
        'Amapá'
    ];

    for (let i = 0; i < states.length; i += 1) {
        let generateOptionTag = document.createElement('option');
        stateId.appendChild(generateOptionTag).innerText = states[i];
        stateId.appendChild(generateOptionTag).value = states[i];
    }
}
createAnStateArray();