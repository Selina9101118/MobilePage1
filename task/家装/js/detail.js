$(function(){
    //动态设置图片居住
    var swiperSlide = $('.swiper-wrapper').find('.swiper-slide');
    var pheight = $('.swiper-wrapper').find('.swiper-slide').height();
    if(pheight <1400){
        pheight = 1400;
    }
    for(var i = 0;i < swiperSlide.length;i++){
        $(swiperSlide[i]).css({"height" :pheight});
        var thisImg = $(swiperSlide[i]).find('img');
        $(thisImg).css({"margin" :"auto auto"});
    }
    // //动态设置底部按钮宽度，扣除boder宽度
    // var width = $('.body-main').width()/2-8;
    // $('.fonter-sqzx').css({"width": width+"px"});
    $('.header-go-back').click(function(){

    })

});