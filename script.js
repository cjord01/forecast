var main = function() {
    $('.day').click(function() {
        $(this).next('.hourly').toggle('fast');
        $(this).find('.glyphicon-plus').toggleClass('glyphicon-minus');
    }); 
};

$(document).ready(main);