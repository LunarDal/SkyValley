'use strict'
window.addEventListener('load', ()=>{
    window.addEventListener('scroll', function(){
        let offsety = window.pageYOffset // console.log(offsety)
        // console.log(offsety)
        let n1 = false;
        let n2_1 = false;
        let n2_2 = false;
        let n3 = false;
        let n4 = false;
        let n5_1 = false;
        let n5_2 = false;
        let n5_3 = false;
        let n6_1 = false;
        let n6_2 = false;
        let n7_1 = false;
        let n7_2 = false;
        let n7_3 = false;

        // content1
        if(370 < offsety && n1 == false){
            n1 = true;
            document.querySelector('.intro_inner').classList.add('act');
        }
        else if(330 < offsety && n1 == true){
            n1 = false;
            document.querySelector('.intro_inner').classList.remove('act');
        }

        // content2
        if(650 < offsety && n2_1 == false){
            n2_1 = true;
            document.querySelector('.course > .title').classList.add('act');
        }
        else if(650 < offsety && n2_1 == true){
            n2_1 = false;
            document.querySelector('.course > .title').classList.remove('act');
        }

        if(830 < offsety && n2_2 == false){
            n2_2 = true;
            document.querySelector('.course .course_list').classList.add('act');
        }
        else if(830 < offsety && n2_2 == true){
            n2_2 = false;
            document.querySelector('.course .course_list').classList.remove('act');
        }

        // content3
        if(1600 < offsety && n3 == false){
            n3 = true;
            document.querySelector('.club').classList.add('act')
        }
        else if(1600 < offsety && n3 == true){
            n3 = false;
            document.querySelector('.club').classList.remove('act')
        }

        // content4
        if(2370 < offsety && n4 == false){
            n4 = true;
            document.querySelector('.garden').classList.add('act')
        }
        else if(2370 < offsety && n4 == true){
            n4 = false;
            document.querySelector('.garden').classList.remove('act')
        }

        // content5
        if(3320 < offsety && n5_1 == false){
            n5_1 = true;
            document.querySelector('.event > .title').classList.add('act')
        }
        else if(3320 < offsety && n5_1 == true){
            n5_1 = false;
            document.querySelector('.event > .title').classList.remove('act')
        }

        if(3400 < offsety && n5_2 == false){
            n5_2 = true;
            document.querySelector('.e_list').classList.add('act')
        }
        else if(3400 < offsety && n5_2 == true){
            n5_2 = false;
            document.querySelector('.e_list').classList.remove('act')
        }

        if(3410 < offsety && n5_3 == false){
            n5_3 = true;
            document.querySelector('.event .btn').classList.add('act')
        }
        else if(3410 < offsety && n5_3 == true){
            n5_3 = false;
            document.querySelector('.event .btn').classList.remove('act')
        }

        // content6
        if(4170 < offsety && n6_1 == false){
            n6_1 = true;
            document.querySelector('.inquiry > .title').classList.add('act')
        }
        else if(4170 < offsety && n6_1 == true){
            n6_1 = false;
            document.querySelector('.inquiry > .title').classList.remove('act')
        }

        if(4360 < offsety && n6_2 == false){
            n6_2 = true;
            document.querySelector('.i_area').classList.add('act')
        }
        else if(4360 < offsety && n6_2 == true){
            n6_2 = false;
            document.querySelector('.i_area').classList.remove('act')
        }

        // content7
        if(4930 < offsety && n7_1 == false){
            n7_1 = true;
            document.querySelector('.notice > .title').classList.add('act')
        }
        else if(4930 < offsety && n7_1 == true){
            n7_1 = false;
            document.querySelector('.notice > .title').classList.remove('act')
        }

        if(5100 < offsety && n7_2 == false){
            n7_2 = true;
            document.querySelector('.n_list').classList.add('act')
        }
        else if(5100 < offsety && n7_2 == true){
            n7_2 = false;
            document.querySelector('.n_list').classList.remove('act')
        }

        if(5110 < offsety && n7_3 == false){
            n7_3 = true;
            document.querySelector('.notice .btn').classList.add('act')
        }
        else if(5110 < offsety && n7_3 == true){
            n7_3 = false;
            document.querySelector('..notice .btn').classList.remove('act')
        }
    })
    

})
