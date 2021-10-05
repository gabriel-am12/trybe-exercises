 //ex.01
 const employeesEmails = (name) => {
     const email = name.toLowerCase().split(' ').join('_');
     return {
         name,
         email: `${email}@trybe.com`
     };
 }

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carlos Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
     }
    return employees;
 };

console.log(newEmployees(employeesEmails));

//ex.02
const checkTheNumbers = (number01, number02) => number01 === number02;

const lotteryResult = (number, func) => {
    const randomNumber = Math.floor((Math.random() * 5) + 1);

    return func(number, randomNumber) ? 'Parabéns vocẽ ganhou!' : 'Tente novamente!';
}

console.log(lotteryResult(3, checkTheNumbers));
//ex.03
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightA, studentA, func) => {
    let counter = 0;
    for (let index = 0; index < rightA.length; index += 1) {
        const funcReturn = func(rightA[index], studentA[index]);
        counter += funcReturn;
    }
    return `Resultado final: ${counter} corretas`;
}

console.log(compareAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, (rightAnswer, youAnswer) => {
    if (rightAnswer === youAnswer) {
        return 1;
    } if (youAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
}));