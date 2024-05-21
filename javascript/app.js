// Header使用的JQuery
$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() > 985) {
            $('nav ul').css('flex-direction', 'row').show();
            $('.hamburger').hide();
            $('.close').hide();
        } else {
            $('nav ul').css('flex-direction', 'column').hide();
            $('.hamburger').show();
            $('.close').hide();
        }
    }

    checkWidth(); // 檢查視窗大小

    $(window).resize(function() {
        checkWidth();
    });

    $('.btn').click(function() {
        // 按下按鈕後要顯示或隱藏的部分(切換)
        $('.hamburger').toggle(50);
        $('.close').toggle(50);
        $('nav ul').slideToggle(300, 'swing');
        $('.filter').toggle();
    });
});
