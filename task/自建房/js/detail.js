$(function(){
    //点击服务介绍后显示
    $('.fonter-fwjs').click(function(){
        $('.overlay').show();
        $('.service-introduce').show();
        $('.service-introduce-sqzx').show();

        $('.body-main-up').hide();
        $('.body-main-next').hide();
        $('.footer').hide();
        $('.body-main-show-font').hide();

        //不要滚动条
        $("body").css("overflow","hidden");

    })
    //点击隐藏服务介绍
    $('.hide-button').click(function(){
        $('.overlay').hide();
        $('.service-introduce').hide();
        $('.service-introduce-sqzx').hide();
        $('.body-main-up').show();
        $('.body-main-next').show();
        $('.footer').show();
        $('.body-main-show-font').show();
        //滚动条
        $("body").css("overflow","scroll");
    })

});