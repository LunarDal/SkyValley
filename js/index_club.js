'use strict'

$(document).ready(function() {
    let current=0;

    $('.club .c_tabs li').click(function(e) {
         
        $('.c_area_area > div').removeClass('on');
        let i = $(this).index();
        //console.log(i);
        $('.c_area_area > div').eq(i).addClass('on');

    });


    $('.club .c_tabs li').click(function() {
        $('.club .c_tabs li').removeClass('on');
        $(this).addClass('on');

        let i = $(this).index();
        movie(i)
        //console.log("i="+i)
    });


    $('.l_btn').click(function(){    
        current = current - 1 
        if(current==-1){
            current=4;
        }
        movie(current)
        console.log("currentL="+current)
    });

    $('.r_btn').click(function(){
        current = current + 1;
        if(current==5){
            current=0;
        }
        movie(current)
    });

    function movie(i){
        $('.c_space').removeClass('on');
        $('.c_space').eq(i).addClass('on');

        $('.club .c_tabs li').removeClass('on');
        $('.club .c_tabs li').eq(i).addClass('on');
        current = i;
    }

});