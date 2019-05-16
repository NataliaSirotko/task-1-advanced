$(document).ready(() => {
    // Animation mmodal
    $('.col-sm-3:eq(1), .col-sm-3:eq(2), [href="#sheldure"]').on('click', () => {
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

    $('.close').on('click', () => {
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
    // Ajax
    $('form').on('submit', () => {
        let request = $.ajax({
            type: 'POST',
            url: 'server.php',
            async: true,
            data: {name: $('input:eq(0)').val(), phone: $('input:eq(1)').val(), mail: $('input:eq(2)').val(), message: $('textarea').val()},
            dataType: "html"
        });

        request.done(function () {
            console.log('done');
            $('.modal').slideUp('slow');
            $('.thanks').slideDown('slow');
            $('.thanks').html('Done');
        });

        request.fail(function (jqXHR, textStatus) {
            console.log('Request failed: ' + textStatus);
            $('.thanks').slideDown('slow');
            $('.thanks').html('Request failed: ' + textStatus);
        });
        
    });
});
    // $.ajax({
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
    