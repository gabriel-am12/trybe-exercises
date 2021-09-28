function encode(string) {
    let emptyArray = [];
  
    for (let index in string) {
      if (string[index] === 'a') {
        emptyArray.push('1');
      } else if (string[index] === 'e') {
        emptyArray.push('2');
      } else if (string[index] === 'i') {
        emptyArray.push('3');
      } else if (string[index] === 'o') {
        emptyArray.push('4');
      } else if (string[index] === 'u') {
        emptyArray.push('5');
      } else {
        emptyArray.push(string[index]);
      }
    }
    return emptyArray.join('');
  }
  
  function decode(string) {
    let emptyArray = [];
    for (let index in string) {
      if (string[index] === '1') {
        emptyArray.push('a');
      } else if (string[index] === '2') {
        emptyArray.push('e');
      } else if (string[index] === '3') {
        emptyArray.push('i');
      } else if (string[index] === '4') {
        emptyArray.push('o');
      } else if (string[index] === '5') {
        emptyArray.push('u');
      } else {
        emptyArray.push(string[index]);
      }
    }
    return emptyArray.join('');
  }

  const functions = {encode, decode};
  module.exports = functions;