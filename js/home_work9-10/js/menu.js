$(function() {
    var $uncover = $('.uncover');
    $uncover.mouseenter( function() {
        $(this).children('.submenu')
            .slideToggle()
            .animate({
                backgroundColor:'#cbe23c',
            }, 200);
    });

    $uncover.mouseleave( function() {
        $(this).children('.submenu')
            .animate({
                backgroundColor: '#92bd24'
            }, 200)
            .slideToggle();
    });   
});