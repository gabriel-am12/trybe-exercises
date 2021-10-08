const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, value) => acc.concat(value), []);// escreva seu código aqui
  }
  console.log(flatten());