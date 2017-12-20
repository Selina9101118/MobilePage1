$(function(){
    $(".body-main-mess-ch-ul-li").click(function(){
        $this = $(this);
        //先移除已经选择的。再添加当前对象为选中状态
        $(this).parent().find('.clicked').removeClass("clicked");
        $this.addClass('clicked');
    })
    //关闭提示弹窗
    $('.prompt-message-close').click(function(){
        $('.prompt-message').hide();
        $('.prompt-barrier').hide();
    });
});