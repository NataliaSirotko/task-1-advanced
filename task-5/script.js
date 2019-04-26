//1
let p = document.createElement('p');
document.body.appendChild(p); 
p.innerHTML = '00:00:00';

window.addEventListener('load', go);

function go(){
    window.timerId = window.setInterval(timer, 500);
}
function timer(){
    let date = new Date();
    p.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
}
//2
function addZero(num) {
    if (num>0 && num<10) {
        return '0' + num;
    } if (num == 0) {
        return '00';
    } 
    else {
        return num;
    }
}
let date1 = new Date();
document.write(addZero(date1.getHours()) + ':' + addZero(date1.getMinutes()) + ':' + addZero(date1.getSeconds()) + ' ' + addZero(date1.getDate()) + '.' + addZero(date1.getMonth() + 1) + '.' + addZero(date1.getFullYear()));


//3
function toDay() {
    let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        data = new Date(),
        day = data.getDay();
    document.write('<br>' + week[day] );
}
toDay();

// 4 
//функция которая с заданной даты до сегодня считает дни. 
function diff() {
    let dataa = new Date(),
        time = Date.parse('2018-03-01T00:00:00'),
        now = dataa.getTime(),
        result = Math.floor((now - time) / (1000 * 60 * 60 * 24));
    console.log(result);
}
diff();

// 4а эта уже введенные даты считает

let input1 = document.createElement('input'); 
input1.type = "date"; 
input1.value =""; 
input1.style.display = "block"; 
input1.style.margin = "20px 0"; 
input1.id = 'diff'; 
document.body.appendChild(input1); 

let input2 = document.createElement('input'); 
input2.type = "date"; 
input2.value =""; 
input2.style.display = "block"; 
input2.style.margin = "20px 0"; 
input2.id = 'diff'; 
document.body.appendChild(input2); 

let button = document.createElement('button'); 
button.innerHTML = "Найти разницу";
document.body.appendChild(button);

let inputDiff = document.createElement('input'); 
document.body.appendChild(inputDiff); 
inputDiff.type = "text"; 
inputDiff.value=""; 
inputDiff.style.display = "block";
inputDiff.style.margin = "20px 0"; 

button.addEventListener('click', function go() { 
    let str1 = input1.value,
        str2 = input2.value,
        date1 = new Date(str1),
        date2 = new Date(str2),
        daysDiff = Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
        //daysDiff = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));

    inputDiff.value = daysDiff;

  }); 