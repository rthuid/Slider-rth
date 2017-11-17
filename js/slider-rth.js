$(document).ready(function () {

    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 1000);
    });

    $('.slider-rth').each(function () {
        var interval = 600

        var sliderWrp = $(this);
        var slides = $('>ul>li', sliderWrp);
        var slideUl = $('>ul', sliderWrp);
        var slidesLength = $(slides).length;
        
        //checking slide length
        function slideLengthChecking(){
            if (slidesLength < 5) {
                cloning();
            }
        }
        //clone function
        function cloning() {
                var cloneList = $(slides).clone();
                $(slideUl).append(cloneList);
                slides = $('>ul>li', sliderWrp);
                slidesLength = $(slides).length;
                slideLengthChecking()
        }
        //adding li classes
        function classAdding() {
            $(slideUl).children('li').first().addClass('active').next().addClass('next').next().addClass('nnext');
            $(slideUl).children('li').last().addClass('prev').prev().addClass('pprev');
        }
        //
        slideLengthChecking()
        classAdding();



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
            if (!$(this).hasClass('clicked')) {
                moveLeft();
                sliderWrp = $(this).parent('div');
                //delay
                $(this).addClass('clicked').delay(interval).queue(function (next) {
                    $(this).removeClass("clicked");
                    next();
                });
            }
        });

        $(this).find('.control_next').click(function () {
            if (!$(this).hasClass('clicked')) {
                moveRight();
                sliderWrp = $(this).parent('div')
                //delay
                $(this).addClass('clicked').delay(interval).queue(function (next) {
                    $(this).removeClass("clicked");
                    next();
                });
            }
        });
    });


    /*$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: slideUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');*/



});