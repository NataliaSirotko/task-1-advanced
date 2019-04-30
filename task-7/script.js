

let bird = document.querySelector('#bird'),
    btn = document.querySelector('input');

btn.addEventListener('click', function() {
    animate(function(timePassed) {
    bird.style.left = timePassed / 5 + 'px';
    bird.style.bottom =  timePassed / 5 + 'px';
  }, 1000);

});

function animate(draw, duration) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timePassed = time - start;

        if (timePassed > duration) {
            timePassed = duration;
        }
        draw(timePassed);

        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }
    });
}
// function makeEaseOut(timing) {
//     return function(timeFraction) {
//         return 1 - timing(1 - timeFraction);
//     }
// }

// function bounce(timeFraction) {
//     for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
//       if (timeFraction >= (7 - 4 * a) / 11) {
//         return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
//       }
//     }
// }
