$(function(){
    //选择省弹出弹出层
    $('.mfsj-province').click(function(){
        $('.overlay').show();
        $('.mfsj-province-submenu').show();
    });
    //选择后回写数据
    $('.mfsj-province-submenu-ul li').click(function(){
        $this = $(this);
        var text = $this.find('.mfsj-radio-text').text();
        $('.mfsj-province-di-d').text(text);
        $('.overlay').hide();
        $('.mfsj-province-submenu').hide();
    });


    //选择省弹出弹出层
    $('.mfsj-city-di').click(function(){
        $('.overlay').show();
        $('.mfsj-city-submenu').show();
    });
    //选择后回写数据
    $('.mfsj-city-submenu-ul li').click(function(){
        $this = $(this);
        var text = $this.find('.mfsj-radio-text').text();
        $('.mfsj-city-di-d').text(text);
        $('.overlay').hide();
        $('.mfsj-city-submenu').hide();
    });
});