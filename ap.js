




// nav after scroll

$(document).ready(function(){
    var menu = $("nav");
    var top = menu.offset();
    var logo = $('.logo');

    $(window).scroll(function(){
        if($(this).scrollTop() > 1){
            menu.addClass('opacity');
            logo.addClass('logo-scroll');
        }else{
            menu.removeClass('opacity');
            logo.removeClass('logo-scroll');
        }
    })
});