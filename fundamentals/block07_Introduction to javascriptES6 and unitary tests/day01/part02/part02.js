//ex.01
const factorial = number => number == 0 || number == 1 ? 1 : number * factorial(number - 1)

console.log(factorial(5));

//ex.02
const longestWord = word => {
    let longestword = 0;
    let finalword = '';
    const wordSplited = word.split(' ');
    for (let index = 0; index < wordSplited.length; index += 1) {
        if (wordSplited[index].length > longestword) {
            longestword = wordSplited[index].length;
            finalword = wordSplited[index];
        }
    }
    return finalword;
}

console.log(longestWord( "Antônio foi no banheiro e não sabemos o que aconteceu"));

//ex.03
//let clickCount = 0;
//let showCounter = document.getElementById('showCounter');
//let button = document.getElementById('click');

//button.addEventListener('click', () => showCounter.innerHTML = clickCount += 1);

//ex.04
const array = ["HTML", "CSS", "JS", "Bootstrap", "Git"];

const buildAPhrase = string => {
    const f01 = string => `Tryber ${string} aqui!`

    let f01Call = `${f01(string)} Minha cinco principais habilidades são:`;
    for (let index = 0; index < array.length; index += 1) {
        f01Call = `${f01Call} 

        - ${array[index]}`;        
    }

    f01Call = `${f01Call}
    
    #goTrybe
    `;

    return f01Call;
}

console.log(buildAPhrase('Gabriel'));
