// 스크롤 업다운감지해서 헤더 숨기기
$(function(){
    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            // console.log('Scroll up');
            $('#header').css('transition-duration', '0.5s').css('transform', 'translateY(0)');
        } else {
            // console.log('Scroll down');
            $('#header').css('transition-duration', '0.5s').css('transform', 'translateY(-100%)');
        }
    });
    
});