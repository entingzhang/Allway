$(function() {
    var num = 0;
    var timer;
    var imgn = $('.imgList li').length - 1;
    var sportFn = function() {
        $('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
        $('.fadeCover').stop().fadeIn(100, function() {
            $(this).stop().fadeOut(800);
            $('.imgList li').eq(num).show().siblings('li').hide();
        });
    }
    for (i = 0; i <= imgn; i++) {
        var yuandian = "<li></li>";
        $('.btnList').append(yuandian);
    }
    var btnlist_width = $('.btnList').width() / 2;
    $('.btnList').children('li:first').addClass('current');
    $('.btnList').children('li:last').css('margin-left', '0px');
    $('.btnList').css('margin-left', -btnlist_width);
    console.log(btnlist_width);
    var nextFn = function() {
        num++;
        if (num > imgn) {
            num = 0;
        }
        sportFn();
    }
    var prevFn = function() {
            num--;
            if (num < 0) {
                num = imgn;
            }
            sportFn();
        }
    $('.rightBtn').click(nextFn);
    $('.leftBtn').click(prevFn);
    $('.btnList li').mouseover(function(event) {

        var i = $(this).index();
        num = i;
        sportFn();

    });
    timer = setInterval(nextFn, 5000);
    $('.box').hover(function() {
        clearInterval(timer);
    }, function() {
        clearInterval(timer);
        timer = setInterval(nextFn, 5000);
    });
    //tab栏切换
    $('.tabHa li').click(function(e) {
        $(this).addClass('current').siblings().removeClass();
        $('.tabBa .firstu').eq($(this).index()).show().siblings().hide()
    });
    $('.tabHb li').click(function(e) {
        $(this).addClass('current').siblings().removeClass();
        $('.tabBb .firstu').eq($(this).index()).show().siblings().hide()
    });
    $('.tabHc li').click(function(e) {
        $(this).addClass('current').siblings().removeClass();
        $('.tabBc .firstu').eq($(this).index()).show().siblings().hide()
    });
    $('.tabHd li').click(function(e) {
        $(this).addClass('current').siblings().removeClass();
        $('.tabBd .firstu').eq($(this).index()).show().siblings().hide()
    });
    $('.tabHe li').click(function(e) {
        $(this).addClass('current').siblings().removeClass();
        $('.tabBe .firstu').eq($(this).index()).show().siblings().hide()
    });
    $('.tabHf li').click(function(e) {
        $(this).addClass('current').siblings().removeClass();
        $('.tabBf .firstu').eq($(this).index()).show().siblings().hide()
    });
})
