let input = document.querySelectorAll('[type="text"]');

input[0].addEventListener('input', () => {
    let elem = input[0].value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    input[0].value = `(${elem[1]}) ${elem[2]}- ${elem[3]}- ${elem[4]}`;    
});

input[1].addEventListener('input', () => {
    let elem = input[1].value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    input[1].value = `(${elem[1]}) ${elem[2]}- ${elem[3]}- ${elem[4]}`;    
});