let ball = document.querySelector('#ball'),
    field = document.querySelector('#field');

      
/*ball.addEventListener('click', function go() {
    let floor = field.clientHeight - ball.clientHeight;

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function(progress) {
            ball.style.top = floor * progress + 'px';
        }
    });
});

function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
      }
    }
} */

let square = document.querySelector('#square');
square.addEventListener('click', function() {
    animate(function(timePassed) {
        square.style.left = timePassed / 5 + 'px';
    }, 2000);
});

function animate(draw, duration) {
    let start = perfomance.now();

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