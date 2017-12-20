$(function(){
	//点击顶部选择搜索
	$(".header-list-style-b").click(function(){
		$this = $(this);
		//先移除已经选择的。再添加当前对象为选中状态
		$('.clicked').removeClass("clicked");
		$this.addClass('clicked');
		//先隐藏已经显示的。再显示当前对象为选中
		$('.header-submenu').hide();
		$this.next('.header-submenu').show();
		$('.overlay').show()
	})
	//选择条件
	$(".header-list-style .header-submenu li div").click(function(){
		$this = $(this);
		$('.clicked').removeClass("clicked");
		$('.header-submenu').hide();
		$('.overlay').hide();
		var text = $this.text();
		if(text == '不限'){
			var defaultText = $this.parents('.header-list-style').find('.header-list-style-b span').attr("data-default-text");
			$this.parents('.header-list-style').find('.header-list-style-b span').text(defaultText);
		}else{
			$this.parents('.header-list-style').find('.header-list-style-b span').text(text);
		}
	})
})