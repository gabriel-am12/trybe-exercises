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

let inputs = {
    name: {
      maxLength: 40,
      required: true,
    },
    email: {
      maxLength: 50,
      required: true
    },
    cpf: {
      maxLength: 11,
      required: true
    },
    address: {
      maxLength: 200,
      required: true
    },
    city: {
      maxLength: 28,
      required: true,
    },
    state: {
      type: 'select',
      required: true,
    },
    houseType: {
      type: 'radio',
      required: true,
    },
    resume: {
      maxLength: 1000,
      required: true,
    },
    role: {
      maxLength: 40,
      required: true,
    },
    roleDescription: {
      maxLength: 500,
      required: true,
    },
    startDate: {
      type: 'date',
      required: true,
    }
  }


window.onload = function () {
    createAnStateArray();

    let submit = document.querySelector('.submitButton');
    submit.addEventListener('click', submitFunction);

    let clear = document.querySelector('.clearButton');
    clear.addEventListener('click', clearFunction);
}