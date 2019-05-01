let anchors = document.querySelectorAll('a[href*="#"]');

for (let item of anchors) {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        let elemId = item.getAttribute('href');

        document.querySelector('' + elemId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

}
