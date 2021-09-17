import './node_modules/just-validate/dist/js/just-validate.js'
//import './node_modules/pikaday/pikaday.js'
import './node_modules/moment/dist/moment.js'


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

/*var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});
*/

window.onload = function () {
    createAnStateArray();

    new window.JustValidate('.form', {
        rules: {
            name: {
                //required: true,
                maxLength: 40,
                minLength: 3
            }
        }
    });

    /*let submit = document.querySelector('.submitButton');
    submit.addEventListener('click', submitFunction);

    let clear = document.querySelector('.clearButton');
    clear.addEventListener('click', clearFunction);*/
}