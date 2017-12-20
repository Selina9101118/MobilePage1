$(window).load(function(){
	// 加载完成
	// $("#loading").hide();
	// $(".overlay").hide();
	// $("body").css("overflow","scroll");
});

$(function(){
	//点击顶部选择搜索
	$(".header-list-style-b").click(function(){
		$this = $(this);
		//先移除已经选择的。再添加当前对象为选中状态
		$('.clicked').removeClass("clicked");
		$this.addClass('clicked');
	})
	//选择条件
	$(".header-list-style .header-submenu li div").click(function(){
		$this = $(this);
		$('.clicked').removeClass("clicked");
		var text = $this.text();
		if(text == '不限'){
			var defaultText = $this.parents('.header-list-style').find('.header-list-style-b span').attr("data-default-text");
			$this.parents('.header-list-style').find('.header-list-style-b span').text(defaultText);
		}else{
			$this.parents('.header-list-style').find('.header-list-style-b span').text(text);
		}
	})
})