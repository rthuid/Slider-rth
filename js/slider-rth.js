$(document).ready(function () {

    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 1000);
    });

    $('.slider-rth').each(function () {

        var sliderWrp = $('.slider-rth')
        var sliderlist = $('.slider-rth>ul>li')
        var sliderUl = $('.slider-rth>ul')
            function cloning(){
                var cloneLis = $(sliderlist).clone();
                $(sliderUl).append(cloneLis);
            }
        //checking li length
        if ($(sliderWrp).closest('ul').children('li').length < 5) {
            cloning();
            if ($(sliderWrp).closest('ul').children('li').length < 5) {
                cloning();
                if ($(sliderWrp).closest('ul').children('li').length < 5) {
                    cloning();
                }
            }
        } 
        classAdding();
            //adding li classes
        function classAdding(){
            $(sliderUl).children('li').first().addClass('active').next().addClass('next').next().addClass('nnext');
            $(sliderUl).children('li').last().addClass('prev').prev().addClass('pprev')
        }
            


            function moveLeft() {
                if (!$(sliderWrp).find('li.pprev').next('li').length) {
                    $(sliderWrp).find('li.pprev').removeClass('pprev').siblings('li').first().addClass('pprev')
                } else {
                    $(sliderWrp).find('li.pprev').removeClass('pprev').next('li').addClass('pprev')
                }
                //
                if (!$(sliderWrp).find('li.prev').next('li').length) {
                    $(sliderWrp).find('li.prev').removeClass('prev').siblings('li').first().addClass('prev')
                } else {
                    $(sliderWrp).find('li.prev').removeClass('prev').next('li').addClass('prev')
                }
                //
                if (!$(sliderWrp).find('li.active').next('li').length) {
                    $(sliderWrp).find('li.active').removeClass('active').siblings('li').first().addClass('active')
                } else {
                    $(sliderWrp).find('li.active').removeClass('active').next('li').addClass('active')
                }
                //
                if (!$(sliderWrp).find('li.next').next('li').length) {
                    $(sliderWrp).find('li.next').removeClass('next').siblings('li').first().addClass('next')
                } else {
                    $(sliderWrp).find('li.next').removeClass('next').next('li').addClass('next')
                }
                //
                if (!$(sliderWrp).find('li.nnext').next('li').length) {
                    $(sliderWrp).find('li.nnext').removeClass('nnext').siblings('li').first().addClass('nnext')
                } else {
                    $(sliderWrp).find('li.nnext').removeClass('nnext').next('li').addClass('nnext')
                }
            };

            function moveRight() {
                if (!$(sliderWrp).find('li.pprev').prev('li').length) {
                    $(sliderWrp).find('li.pprev').removeClass('pprev').siblings('li').last().addClass('pprev')
                } else {
                    $(sliderWrp).find('li.pprev').removeClass('pprev').prev('li').addClass('pprev')
                }
                //
                if (!$(sliderWrp).find('li.prev').prev('li').length) {
                    $(sliderWrp).find('li.prev').removeClass('prev').siblings('li').last().addClass('prev')
                } else {
                    $(sliderWrp).find('li.prev').removeClass('prev').prev('li').addClass('prev')
                }
                //
                if (!$(sliderWrp).find('li.active').prev('li').length) {
                    $(sliderWrp).find('li.active').removeClass('active').siblings('li').last().addClass('active')
                } else {
                    $(sliderWrp).find('li.active').removeClass('active').prev('li').addClass('active')
                }
                //
                if (!$(sliderWrp).find('li.next').prev('li').length) {
                    $(sliderWrp).find('li.next').removeClass('next').siblings('li').last().addClass('next')
                } else {
                    $(sliderWrp).find('li.next').removeClass('next').prev('li').addClass('next')
                }
                //
                if (!$(sliderWrp).find('li.nnext').prev('li').length) {
                    $(sliderWrp).find('li.nnext').removeClass('nnext').siblings('li').last().addClass('nnext')
                } else {
                    $(sliderWrp).find('li.nnext').removeClass('nnext').prev('li').addClass('nnext')
                }
            };



        $(this).find('.control_prev').click(function () {
            moveLeft();
            sliderWrp = $(this).parent('div')
        });

        $(this).find('.control_next').click(function () {
            moveRight();
            sliderWrp = $(this).parent('div')
        });
    });


    /*$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');*/



});