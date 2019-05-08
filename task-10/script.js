let input = document.querySelectorAll('[type="text"]');

//белорусский
input[0].addEventListener('keyup', () => {
    let re = /(\+{0,1}\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/;
    let elem = input[0].value.replace(/[^0-9\+]/g, '').match(re);
    input[0].value = !elem[2] ? elem[1] : elem[1] + ' (' + elem[2] + (elem[3] ? ') ' + elem[3] : '') + (elem[4] ? '-' + elem[4] : '') + (elem[5] ? '-' + elem[5] : '');
});
//российский
input[1].addEventListener('keyup', () => {
    let re = /(\+{0,1}\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/;
    let elem = input[1].value.replace(/[^0-9\+]/g, '').match(re);
    input[1].value = !elem[2] ? elem[1] : elem[1] + ' (' + elem[2] + (elem[3] ? ') ' + elem[3] : '') + (elem[4] ? '-' + elem[4] : '') + (elem[5] ? '-' + elem[5] : '');
});

//с потерей фокуса
// input[0].addEventListener('blur', () => {
//     let elem = input[0].value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
//     input[0].value = `(${elem[1]}) ${elem[2]}- ${elem[3]}- ${elem[4]}`;    
// });
