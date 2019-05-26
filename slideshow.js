function slideSwitch() {
    var index = $('.indicator ul li.active').index();
    var $active1 = $('.slideshow img.active');
    var $active2 = $('.indicator ul li.active');
    var $next1 = $active1.next();
    var $next2 = $active2.next();
    if (index == 4) {
       $next1 = $('.slideshow img:first');
       $next2 = $('.indicator ul li:first');
    } 
    $next1.addClass('active');
    $next2.addClass('active');
    $active1.removeClass('active');
    $active2.removeClass('active');    
};

$(function () {
    setInterval("slideSwitch()", 3000);
});

$(".indicator li").click(function () {
    var index = $(".indicator li").index(this);
    $('img').removeClass("active");
    $('.indicator li').removeClass("active");
    $('img').eq(index).addClass("active");
    $('.indicator li').eq(index).addClass("active");
});