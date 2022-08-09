// 헤더 메뉴
$(function(){
        $('#header nav .gnb > li').hover(function(){
            $(this).find('.sub').stop().slideDown();
        },function(){
            $(this).find('.sub').stop().slideUp();
        });
});



// 토글메뉴버튼 애니메이션
$(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("active");
    });
    
    $('#toggle-menu-btn').click(function(){
        $('#toggle-menu').toggleClass('on');
    })
});

// 토글메뉴의 메뉴 슬라이드 애니메이션
$(function(){
    $('#toggle-gnb > li').hover(function(){
        $(this).find('.sub').stop().slideDown();
    },function(){
        $(this).find('.sub').stop().slideUp();
    });
});

// 모바일 버전의 토글메뉴의 메뉴 슬라이드 애니메이션
$(function(){
    $('#toggle-gnb > li > .gnb-plus').click(function(){
        $(this).find('.sub').stop().slideDown();
    });
});

// 검색바 뿅 
$(function(){
    $('#tool-zone .container .tool-wrap .search').click(function(){
        $('#tool-zone .container .tool-wrap .search-bar').toggleClass('on')
    })
});

// 탑버튼 
$(function(){
    $('.top').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });
})

// 스크롤좌표값 구하기
$(function () {
    $(window).scroll(function () {
        // scrollposition이 현재 스크롤 좌표임
        var scrollposition = $(window).scrollTop();
        console.log(scrollposition);


        // 300 이 넘으면 커튼이 열려요
        if (scrollposition >= 300) {
            $('.left-curtain').css('transition-duration', '3s').css('transform',
                'translateX(-100%)');
            $('.right-curtain').css('transition-duration', '3s').css('transform',
                'translateX(100%)');
        } else {
            $('.left-curtain').css('transition-duration', '3s').css('transform',
                'translateX(0)');
            $('.right-curtain').css('transition-duration', '3s').css('transform',
                'translateX(0)');
        }


        if (scrollposition >= 2000) {
           $('#tool-zone').addClass('on');
        } else {
            $('#tool-zone').removeClass('on');
        }

        
    });
});

// #show swiper
$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
});




// footer 
$(function(){
        //instagram hover
        $("#insta").hover(
            function() {$(this).attr("src","images/instagram_2.png");
            },
            function() {$(this).attr("src","images/instagram.png"); 
        });
        //youtube hover
        $("#youtube").hover(
            function() {$(this).attr("src","images/youtube_2.png");
            },
            function() {$(this).attr("src","images/youtube.png"); 
        });
        //kakao hover
        $("#kakaotalk").hover(
            function() {$(this).attr("src","images/kakao_2.png");
            },
            function() {$(this).attr("src","images/kakao.png"); 
        });
        //naver hover
        $("#naver").hover(
            function() {$(this).attr("src","images/navrer_1.png");
            },
            function() {$(this).attr("src","images/navrer.png"); 
        });
});
