Consider the sentence "No lemon, no melon.".  It is a palindrome, a sentence which is the same backwards and forwards.  Can you write a function that checks if a given string is a palindrome?
  
  // split the string and get rid of spaces and punctuations
  // create variable for first half
  // iterate through second half backwards
  // check if both halves are equivalent, if so return true else return false
  
  const palindrome = (str) => {
    if (str === '') return null;
    // if (str.length === 1) return true;
    // const split = str.split('');  // this results in ['n', 'o', 'm', 'o', 'n']...
//     const left = split.splice(0, Math.floor(split.length/2) + 1); // ['n', 'o', 'm']
//     const right = []; // ['n', 'o', 'm']
    
//     for (let i = split.length - 1; i >= Math.floor(split.length/2); i--) {
//       right.push(split[i]);
//     }
    
//     if (left === right) {
//       return true;
//     }
//     return false;
    
    let pointerL = 0
    let pointerR = split.length - 1
    
    while (pointerL < pointerR) {
      if (str[pointerL].toLowercase() === str[pointerR].toLowercase()) {
        pointerL++;
        pointerR--;
      } else {
        return false;
      }
    }
    
    return true;
  }

let str = "noon";



console.log(palindrome(str));