let arr = ['sun', 'mon', 'tu', 'wen', 'th', 'fr', 'sut'];
let day = 5;

for (key in arr) {
  if(arr[key] == 'sun' || arr[key] == 'sut') {
    document.write('<b>' + arr[key] + '</b>' + '<br>');
  } 
  else if (key == 5) {
  document.write('<i>' + arr[key] + '</i>' + '<br>');
  }
  else {
    document.write(arr[key] +'<br>');
  }
}
// 2 решение

// let arr = ['sun', 'mon', 'tu', 'wen', 'th', 'fr', 'sut'];

// arr.forEach(it => {
//   if (it == 'sun' || it == 'sut') {
//      document.write('<b>' + it + '</b>' + '<br>');
//   } 
//   else if (it == 'fr') {
//     document.write('<i>' + it + '</i>' + '<br>');
//   }
//   else   {
//     document.write(it + '<br>');
//   }
// })

let array = ['25', '32', '45', '67', '89', '76'];
let newArray = array.filter(item => {
  return item[0] == 3 || item[0] == 7
});
console.log(newArray);