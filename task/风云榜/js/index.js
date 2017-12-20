$(function(){
    var i = 0;
    $(window).scroll(function () {
        var scrollTop= $(window).scrollTop();//这个方法是当前滚动条滚动的距离
        var wheight = $(window).height();//获取当前窗体的高度
        var dheight = $(document).height();//获取当前文档的高度
        var bot = 250; //bot是底部距离的高度
        if ((bot + scrollTop) >= (dheight - wheight)) {
            i++;
            if(i<10){
                var nelDiv = $('.body-main-left .body-main-show').first().clone();
                var nerDiv = $('.body-main-right .body-main-show').first().clone();
                $('.body-main-left').append(nelDiv);
                $('.body-main-right').append(nerDiv);
            }
            console.log((bot + scrollTop)+"-->---"+(dheight - wheight)+"---"+i);
        }
    });
    
})