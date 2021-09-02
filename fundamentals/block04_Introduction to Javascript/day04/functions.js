/*ex.01
const string = "arara";

function is_Palindrome(word){
    let length_word = word.length;

    for(let index = 0; index < length_word / 2; index += 1){
        if(word[index] !== word[length_word - 1 - index]){
            //return "Isn't a palindrome";
            return false;
        }
    }
    //return "Is an palindrome";
    return true;
}
const result = is_Palindrome(string);
console.log(result);
*/

/*ex.02
let array_numbers = [2,3,6,70,10,11];

function max_index(array){
    let max = 0;
    for(let index in array){
        if(array[index] > array[max]){
            max = index;
        }
    }
    return max;
}
console.log(max_index(array_numbers));
*/

/*ex.03
let array_numbers2 = [2,4,6,7,10,0,-3];

function min_index(array){
    let min = 0;
    for(let index in array){
        if(array[index] < array[min]){
            min = index;
        }
    }
    return min;
}
console.log(min_index(array_numbers2));
*/

/*ex.04
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function bigger(array){
    let biggest_word = array[0];
    for(index in names){
        if(biggest_word.length < array[index].length){
            biggest_word = names[index];
        }
    }
    return biggest_word;
}
console.log(bigger(names));
*/

/*ex.05
let array_numbers3 = [2, 3, 2, 5, 8, 2, 3];

function repeated_numbers(array){

    let counter_repeated = 0;
    let  counter_number= 0;
    let index_repeated_number = 0;

    for(index in array){
        let verify = array[index];
        for(index2 in array){
            if(verify === array[index2]){
                counter_number += 1;
            }
        }
        if(counter_number > counter_repeated){
            counter_repeated = counter_number;
            index_repeated_number = index;
        }
        counter_number = 0;
    }
    return array[index_repeated_number]
}
console.log(repeated_numbers(array_numbers3))
*/

/*ex.06
let numb = 5;

function somatory(number){
    let sum = 0;
    for(let index = 1; index <= number; index += 1){
        sum += index;
    }
    return sum;
}
console.log(somatory(numb));
*/

//ex.07

let word = "trybe";
let end = "be";

function verifyWordEnd(begin, end){
    let w = begin.split('');
    let wEnd = end.split('');
    let match = true;
    for(let i = 0; i < wEnd.length; i += 1){
        if(w[w.length - wEnd.length + i] != wEnd[i]){
            match = false;
        }
    }
    return match;
}
console.log(verifyWordEnd(word, end));