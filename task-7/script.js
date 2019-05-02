let bird = document.querySelector('#bird'),
    btn = document.querySelector('input');

    btn.addEventListener('click', function() {
        bird.animate([
            {transform: 'translateY(0px)'},
            {offset: 0.15,
            transform: 'translate(70px, -100px)'},
            {offset: 0.3,
            transform: 'translate(150px, -70px)'},
            {offset: 0.45,
            transform: 'translate(300px, -200px)'},
            {offset: 0.60,
            transform: 'translate(400px, -170px)'},
            {offset: 0.75,
                transform: 'translate(500px, -250px)'},
            {transform: 'translate(700px, 0px)'},
            {transform: 'translate(700px, 0px)'}
        ],
            {duration: 4000},
            // {iterations: Infinity},
            {fill: 'forward'});
    });

//----2 вариант- не работает почему-то

// btn.addEventListener('click', function() {
//     bird.animate({
//         duration: 2000,
//         timing: makeEaseOut(quad),
//         draw: function(progress) {
//             bird.style.left = 200 * progress + 'px';
//         }
//     });
// console.log('go');
//     bird.animate({
//         duration: 2000,
//         timing: makeEaseOut(bounce),
//         draw: function(progress) {
//             bird.style.bottom = 200 * progress + 'px';
//         }
//     });
// });

// function makeEaseOut(timing) {
//     return function (timeFraction) {
//         return 1 - timing(1 - timeFraction);
//     }
// }

// function bounce(timeFraction) {
//     for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
//         if (timeFraction >= (7 - 4 * a) / 11) {
//             return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
//         }
//     }
// }

// function quad(timeFraction) {
//     return Math.pow(timeFraction, 2);
// }



//---3 вариант- работает. просто движение вверх.

// btn.addEventListener('click', function() {
//     animate(function(timePassed) {
//     bird.style.left = timePassed / 5 + 'px';
//     bird.style.bottom =  timePassed / 5 + 'px';
//   }, 2000);
// });

// function animate(draw, duration) {
//     let start = performance.now();

//     requestAnimationFrame(function animate(time) {
//         let timePassed = time - start;

//         if (timePassed > duration) {
//             timePassed = duration;
//         }
//         draw(timePassed);

//         if (timePassed < duration) {
//             requestAnimationFrame(animate);
//         }
//     });
// }