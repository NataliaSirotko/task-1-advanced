//функция
 function sliceText(str) {
     if (str.length>10) {
         let newStr = str.slice(0, 10 + 1) + "...";
        //  str = newStr;
     }
     return newStr;
 }
 sliceText('fkfgjgjgjfffffffffffffff');