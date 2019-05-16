$(document).ready(function() {

    function go(sel) {
        sel.on('click', function() {
            $('.overlay').fadeTo('slow', 1);
            $('.modal').animate({
                opacity: 'show',
                height: 'show'
            }, {
                duration: 3000,
                specialEasing: {
                    opacity: 'swing',
                    height: 'swing'
                }
            });
        });
    }

    go($('.col-sm-3:eq(1)'));
    go($('.col-sm-3:eq(2)'));
    go($('[href="#sheldure"]'));

    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow', 0);
        $('.modal').animate({
            opacity: 'hide',
            height: 'hide'
        }, {
            duration: 3000,
            specialEasing: {
                opacity: 'swing',
                height: 'swing'
            }
        });
    });

    $('form').ajax({
        type: 'POST',
        url: 'server.php',
        async: true,
        data: 'name=name&name=phone&name=mail&name=message', 
        success: function() {
            alert('done');
        }
    });

    // $('form').ajax({
    //     type: 'POST',
    //     url: 'server.php',
    //     async: true,
    //     data: 'name=name&name=phone&name=mail&name=message',
    //     loading: function() {
    //         console.log('load');
    //     },
    //     failure: function() {
    //         console.log('что-то пошло не так..');
    //     },
    //     success: function() {
    //         alert('5');
    //     }
    // });
    

    
});
