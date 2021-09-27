const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//ex.01
const addNightTurn = (obj, key, value) => obj[key] = value;
addNightTurn(lesson2, 'turno', 'noite');

//ex.02
const listKeys = obj => console.log(Object.keys(obj));
listKeys(lesson1);

//ex.03
const objLength = obj => console.log(Object.keys(obj).length);
objLength(lesson1);

//ex.04
const listObjValues = obj => console.log(Object.values(obj));
listObjValues(lesson1)

//ex.05
const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
console.log(allLessons);

//ex.06
const totalStudents = obj => {
  let counter = 0;
  const array = Object.keys(obj);
  for (students in array) {
    counter += obj[array[students]].numeroEstudantes;
  }
  return counter
}
console.log(totalStudents(allLessons));

//ex.07
const getValue = (obj, position) => Object.values(obj)[position]
console.log(getValue(allLessons,0))

//ex.08
const verify = (obj, key, value) => {
  const arrayEntries = Object.entries(obj);
  let trueOrFalse = false;
  for (index in arrayEntries) {
    if (arrayEntries[index][0] === key && arrayEntries[index][1] === value) trueOrFalse = true
  }
  return trueOrFalse;
}
console.log(verify(lesson2,'professor','Carlos'));