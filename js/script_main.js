'use strict'

$(document).ready(function() {


    var myData = [
        {
            eng: "Front · Lobby",
            kor: "프론트 · 로비",
            intro: "갤러리를 옮겨 놓은 듯 문화와 여유가 숨쉬는 휴게공간",
            imgUrl: "url(./images/main/robby.png)"
        },
        {
            eng: "Restaurant",
            kor: "레스토랑",
            intro: "최고의 셰프들이 선사하는 품격 있는 다이닝 공간",
            imgUrl: "url(./images/main/restaurant.png)"
        },
        {
            eng: "Banquet Hall",
            kor: "연회장",
            intro: "성공적인 비즈니스와 특별한 연회를 위한 고품격 공간",
            imgUrl: "url(./images/main/hall.png)" 
        },
        {
            eng: "Locker · Spa",
            kor: "락커 · 스파",
            intro: "라운드 후 지친 몸과 마음을 풀어주는 편안한 힐링 공간",
            imgUrl: "url(./images/main/spa.png)" 
        },
        {
            eng: "Pro Shop",
            kor: "프로샵",
            intro: "최신 트렌드의 골프 용품과 차별화된 브랜드 전용 매장",
            imgUrl: "url(./images/main/pro.png)" 
        }
    ];


    $('.c_tabs li').click(function(e) {
        e.preventDefault(); 
        
        var index = $(this).index(); 
        
        $('.c_tabs li').removeClass('on'); 
        $(this).addClass('on');           
        
       
        var selectedItem = myData[index]; 

        $('.space_name h5').text(selectedItem.eng);
        $('.space_name h4').text(selectedItem.kor); 
        $('.space_intro').html(selectedItem.intro); 

        
        $('.space_r').css({
            'background-image': selectedItem.imgUrl,
            'background-size': 'cover',
            'background-position': 'center'
        });
    });

});