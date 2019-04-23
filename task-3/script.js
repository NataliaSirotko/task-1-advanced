let str = "урок-3-был слишком легким";
let newStr = str[0].toUpperCase() + str.slice(1);

//let newSt = newStr.split('-').join(' ');
let newSt = newStr.replace(/-/g, ' ');

console.log(newSt);

console.log(newSt.indexOf('легким'));
let word = newSt.substr(19);

let wordN = word.replace(/им/, 'о');
//let wordN = word.substring(0,4) + 'о';
console.log(wordN);

// массив

let arr = [20, 33, 1, "Человек", 2, 3];
arr.splice(3, 1);
console.log(arr);

// let sum = 0;
// for (i=0; i<arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//     //sum += arr[i]**3;
// }
function toSqrt() {
    let sum = arr.reduce((acc, i) => {
        return acc + (i**3);
    }, 0);
    console.log(sum);

    let res = Math.sqrt(sum);
    console.log(res);
}
toSqrt();

//функция
 function sliceText(string) {

    if (typeof string !== 'string') {
        alert('Error');
    } else {
        let s = string.trim();

        if (s.length>10) {
            let newString = s.slice(0, 50 + 1) + "...";
             s = newString;
        } 
        console.log(s);
    }
    
 }
 sliceText(' fffffff ');