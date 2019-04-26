let date = new Date();
console.log(date.getHours() + ':'+ date.getMinutes() + ':' + date.getSeconds() + ' ' + date.getDate() + '.' + 0 + (date.getMonth() + 1) + '.' + date.getFullYear());

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
console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear()));

function toDay() {
    let week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        data = new Date(),
        day = data.getDay();
    console.log(week[day]);
}
toDay();

function diff() {
    let dataa = new Date(),
        time = Date.parse('2018-03-01T00:00:00'),
        now = dataa.getTime(),
        result = Math.floor((now - time) / (1000 * 60 * 60 * 24));
    console.log(result);
}
diff();