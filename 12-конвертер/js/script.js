let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
    
    inputRub.addEventListener('input', () => {
    
        function getData() {
            
            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
              
                request.open('GET', 'js/current.json');

                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', () => {
                   console.log(request.status);
                    if (request.readyState === 4 && request.status == 200) {
                        let data = JSON.parse(request.response);
                        resolve(data.usd)
                    } else if (request.status != 200 && request.readyState != 4) {
                        reject()
                    }
                });
    
                request.send();
            });
        }

         getData()
            .then(data => {
                console.log('good');            
                inputUsd.value = inputRub.value / data;               
            })
            .catch(() => {
                inputUsd.value = "Что-то пошло не так!";
                console.log('err');
            })
    });
    