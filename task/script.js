let num = 33721;
function getNumsProduct(){
     return num.toString().split('').reduce(function(a, b) {
         return +a * +b;
     });
}

let power = getNumsProduct()*getNumsProduct()*getNumsProduct();
let symbols = power.toString();
alert(symbols.slice(0,2));