"use strict";

$(function () {

    function search(e) {
        e.preventDefault();
        $('.search_results a').remove();
        var $requestKey = $('.search_input').val();
        var apiKey = '2865065-3ac1457aa95c8223295b9d2d8';

        $.ajax({
            url: "https://pixabay.com/api/?key="+apiKey+"&q=" + $requestKey + "",
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                var $results = data.hits;
                for (var i = 0; i < data.hits.length; i++) {
                    $('.search_results').append('<a href="' + $results[i].pageURL + '">' + '<img src="' + $results[i].previewURL + '"></a>');
                }
                },
            
            error: function () {
                alert( 'Ошибка!' );
            }
        });
    }

    $('.btn_search').on('click', search);

    $('.search_input').keypress(function(e) {
        if (e.which == 13) {
            search(e);
        } 
    });
});