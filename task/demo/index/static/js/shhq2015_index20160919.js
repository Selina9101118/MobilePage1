﻿//[网站首页]滚动
var wzsyscroll_interval=0;
var wzsyscroll_width=90;
var wzsyscroll_cnt=0;
//[新闻资讯]滚动
var xwzxscroll_interval=0;
var xwzxscroll_width=90;
var xwzxscroll_cnt=0;
//var NowArea=1;
//[网站首页]焦点图集合对象
var wzsyImgLoadEnd=new Array();
var wzsyImgInterval=0;
//[新闻资讯]焦点图集合对象
var xwzxImgLoadEnd=new Array();
var xwzxImgInterval=0;
//[概况介绍]各界关怀焦点图对象
var gjghImgLoadEnd=new Array();
var gjghImgInterval=0;
//[区域联动]焦点图对象
var qyldImgLoadEnd=new Array();
var qyldImgInterval=0;
//[规划建设]核心区建设成果
var ghjsImgLoadEnd=new Array();
var ghjsImgInterval=0;
var ghjsImglen=0;
var clickfxwx=0;
var txt_input_interval;
var imgcodeoffleft=0;
var picLoadSuccess="0";
var Clearimginterval;
var bigmapisclick=0;
function checktxt_input(){
if ($("#txt_input").length>0) {
  $("#txt_input").click(function(){
      if($(this).attr("title")=="转换纯文本模式网页") {
      	//清除所有定时器，并重置位置
      	clearInterval(wzsyscroll_interval);
      	clearInterval(xwzxscroll_interval);
      	clearInterval(wzsyImgInterval);
      	clearInterval(xwzxImgInterval);
      	clearInterval(gjghImgInterval);
      	clearInterval(qyldImgInterval);
      	clearInterval(ghjsImgInterval);
      	$(".h_leftulbo").css("margin-top","0px")
      	$("#dialog").remove();
      	//$("script").get(1).remove()
	$(".bigmapshow").remove()
      	window.onresize=function ontxtresize(){

      	}
      }
    })
  clearInterval(txt_input_interval);
}
}

function srcollwzsyarea(obj,sw,totalcnt){
	var nowscroolcnt=$(obj).attr("nsc");
	nowscroolcnt++;
	if (nowscroolcnt<=totalcnt) {
		$(obj).attr("nsc",nowscroolcnt).animate({ marginTop: (-(nowscroolcnt-1)*sw).toString()+"px"}, 300,function() {
          })
	}
	else{
		$(obj).attr("nsc",1).animate({ marginTop: (-(nowscroolcnt-1)*sw).toString()+"px"}, 300,function() {
            $(this).css("margin-top","0px")
          })
	}
}
//计算时间是否该信息为最新信息 
function vd(infodate,diffday){
var date1=new Date();  //开始时间
var date2=new Date();    //结束时间
date2.setUTCFullYear(infodate.split("-")[0],infodate.split("-")[1]-1, infodate.split("-")[2]);
date2.setUTCHours(0, 0, 0, 0);
var date3=date1.getTime()-date2.getTime()  //时间差的毫秒数
//计算出相差天数
var days=Math.floor(date3/(24*3600*1000))
if(days<=diffday)return true;
else return false
}
function resetbtmcss(){
	//处理copyright的样式
	if($(".h_foright").height()>75) $("span.h_foright").css("line-height","20px")
	else $("span.h_foright").css("line-height","24px")
	$(".h_nmubox").attr("hh",$(".h_nmubox").height())
	//处理点击量的样式
    if($(".h_nmubox").height()==50) $(".h_nmubox").css("line-height","95px")
    if($(".h_nmubox").height()==190) $(".h_nmubox").css("line-height","50px")
    //else $(".h_nmubox").css("line-height","95px")

	//处理无障碍按钮的样式
	if($(window).width()/2-248>=204) $(".h_searchbox").height(40)
	else $(".h_searchbox").height(80)
}
//焦点图位移
function LoadImgEnd(liend,obj,a, i) {
	var img = new Image();
    img.src = a;
    if (img.width > 50) {
    	//赋值显示img高宽
        $(obj).eq(i).attr("wh",img.width.toString()+"*"+img.height.toString()+"**"+$(".h_leftbox01up").width())
        var imgparentwidth=Math.round(parseInt($("#main").width())*0.61*0.5);
        if (img.width/img.height>imgparentwidth/223) {
          $(obj).eq(i).height(223).css("width","auto")
          $(obj).eq(i).css({"top":"0px","left":"-"+parseInt((img.width/img.height*223-imgparentwidth)/2).toString()+"px"})
        }
        else 
        {
          $(obj).eq(i).width(imgparentwidth).css("height","auto")
          $(obj).eq(i).css({"left":"0px","top":"-"+parseInt((img.height/img.width*imgparentwidth-223)/2).toString()+"px"})
        }
        if (liend==1)//清结束定时器
        clearInterval(wzsyImgLoadEnd[i])
    	else if(liend==2)
    	clearInterval(xwzxImgLoadEnd[i])
    }
}
//焦点图位移-区域联动
function LoadImgEndOfqyld(obj,a, i){
	var img = new Image();
    img.src = a;
    if (img.width > 50) {
    	
        var imgparentwidth=Math.round(parseInt($("#main").width())*0.305);
        if (img.width/img.height>imgparentwidth/238) {
          $(obj).eq(i).height(238).css("width","auto")
          $(obj).eq(i).css({"top":"0px","left":"-"+parseInt((img.width/img.height*238-imgparentwidth)/2).toString()+"px"})
        }
        else 
        {
          $(obj).eq(i).width(imgparentwidth).css("height","auto")
          $(obj).eq(i).css({"left":"0px","top":"-"+parseInt((img.height/img.width*imgparentwidth-238)/2).toString()+"px"})
        }
        
        clearInterval(qyldImgLoadEnd[i])
    }
}
//焦点图位移-各界关怀
function LoadImgEndOfgjgh(obj,a, i) {
	var img = new Image();
    img.src = a;
    if (img.width > 50) {
        var imgparentwidth=parseInt(Math.round(parseInt($("#main").width())*0.27*0.94)-4);
        if (img.width/img.height>imgparentwidth/160) {
          $(obj).eq(i).height(160).css("width","auto")
          $(obj).eq(i).css({"top":"0px","left":"-"+parseInt((img.width/img.height*160-imgparentwidth)/2).toString()+"px"})
        }
        else 
        {
          $(obj).eq(i).width(imgparentwidth).css("height","auto")
          $(obj).eq(i).css({"left":"0px","top":"-"+parseInt((img.height/img.width*imgparentwidth-160)/2).toString()+"px"})
        }
        
        clearInterval(gjghImgLoadEnd[i])
    }
}

//规划建设 建设成果焦点图
function LoadImgEndOfghjs(obj,a, i){
var img = new Image();
    img.src = a;
    if (img.width > 50) {
        var imgparentwidth=Math.round($(obj).eq(i).parent().parent().parent().width()*0.315);
        $(obj).eq(i).attr("wh",imgparentwidth+"/"+158)
        if (img.width/img.height>imgparentwidth/158) {
          $(obj).eq(i).height(158).css("width","auto")
          $(obj).eq(i).css({"top":"0px","left":"-"+parseInt((img.width/img.height*158-imgparentwidth)/2).toString()+"px"})
        }
        else 
        {
          $(obj).eq(i).width(imgparentwidth).css("height","auto")
          $(obj).eq(i).css({"left":"0px","top":"-"+parseInt((img.height/img.width*imgparentwidth-158)/2).toString()+"px"})
        }
        
        clearInterval(ghjsImgLoadEnd[i])
    }
}

function resetwzsyimgwh(){
	//设定焦点图li的宽度值[网站首页]
	$("div[name='wzsy'] .h_leftbox01up ul li").width($("div[name='wzsy'] .h_leftbox01up").width()).height(223)
	//设定焦点图 小图img宽度值[网站首页]
	$("div[name='wzsy'] .h_leftbox01bo a img").width(($("div[name='wzsy'] .h_leftbox01up").width()-42)/4).height(46)
	//网站首页焦点图
	$("div[name='wzsy'] .h_leftbox01up ul li img").each(function(i){
		clearInterval(wzsyImgLoadEnd[i])
		wzsyImgLoadEnd[i]=setInterval("LoadImgEnd(1,'"+'div[name="wzsy"] .h_leftbox01up ul li img'+"','"+$(this).attr("src")+"',"+i.toString()+")",100);
	})
}
function resetxwzximgwh(){
	//设定焦点图li的宽度值[新闻资讯]
	$("div[name='xwzx'] .h_leftbox01up ul li").width($("div[name='xwzx'] .h_leftbox01up").width()).height(223)
	//设定焦点图 小图img宽度值[新闻资讯]
	$("div[name='xwzx'] .h_leftbox01bo a img").width(($("div[name='xwzx'] .h_leftbox01up").width()-42)/4).height(46)
	//网站首页焦点图
	$("div[name='xwzx'] .h_leftbox01up ul li img").each(function(i){
		clearInterval(xwzxImgLoadEnd[i])
		xwzxImgLoadEnd[i]=setInterval("LoadImgEnd(2,'"+'div[name="xwzx"] .h_leftbox01up ul li img'+"','"+$(this).attr("src")+"',"+i.toString()+")",100);
	})
}

function resetgjghImgliwidth(){
	$(".h_scrollbox ul").stop(false,true).animate()
	clearInterval(gjghImgInterval)
	var hsboxwidth=parseInt(Math.round(parseInt($("#main").width())*0.27*0.94)-4);
	$(".h_scrollbox ul li").width(hsboxwidth);
	var nsc=$(".h_scrollbox").attr("nsc");
	$(".h_scrollbox ul").css("margin-left",-parseInt(nsc)*hsboxwidth);
	//网站首页焦点图
	$(".h_scrollbox ul li img").each(function(i){
		clearInterval(gjghImgLoadEnd[i])
		gjghImgLoadEnd[i]=setInterval("LoadImgEndOfgjgh('.h_scrollbox ul li img','"+$(this).attr("src")+"',"+i.toString()+")",100);
	})
	gjghImgInterval=setInterval("scrollgjghimg(1,0)",5000);
}

function resetqyldImgliwidth(){
	$(".q_left_t ul").stop(false,true).animate()
	clearInterval(qyldImgInterval)
	var qyldwidth=Math.round(parseInt($("#main").width())*0.305);
	$(".q_left_t ul li").width(qyldwidth);
	var nsc=$(".q_left_t").attr("nsc");
	$(".q_left_t ul").css("margin-left",-parseInt(nsc)*qyldwidth);
	//网站首页焦点图
	$(".q_left_t ul li img").each(function(i){
		clearInterval(qyldImgLoadEnd[i])
		qyldImgLoadEnd[i]=setInterval("LoadImgEndOfqyld('.q_left_t ul li img','"+$(this).attr("src")+"',"+i.toString()+")",100);
	})
	qyldImgInterval=setInterval("scrollqyldimg(1,0)",5000);
}

function resetghjsImgliwidth(){
	$(".j_bo_scrcot .jboul").stop(false,true).animate()
	clearInterval(ghjsImgInterval)
	var ghjswidth=Math.round(parseInt($("#main").width())*0.86*0.655*0.96);
	$(".j_bo_scrcot ul").width(ghjswidth);
	var nsc=$(".j_bo_scroll").attr("nsc");
	$(".j_bo_scrcot .jboul").css("margin-left",-parseInt(nsc)*ghjswidth);
	$(".j_bo_scrcot .jboul ul li img").each(function(i){
		clearInterval(ghjsImgLoadEnd[i])
		ghjsImgLoadEnd[i]=setInterval("LoadImgEndOfghjs('.j_bo_scrcot .jboul ul li img','"+$(this).attr("src")+"',"+i.toString()+")",100);
	})
	ghjsImgInterval=setInterval("scrollghjsimg(1,0)",5000);

}

function resetimgcodeoffleft(){
	imgcodeoffleft=$(".h_tel").width()*0.1-45+$(".h_tel").width()*0.8*0.16+$(".h_tel").width()*0.8*0.05;
	$("#output").css("left",imgcodeoffleft+"px")
}

function resetaltitle(){
	var ww=$(window).width();
	if(ww>950) 
{
$(".altitle").css("font-size","15px")
$(".alti01 a").css("padding","0px 8px")
}//16px 
	else if(ww<=950&&ww>890) 
{
$(".altitle").css("font-size","14px")
$(".alti01 a").css("padding","0px 7px")
}//15px
	else if(ww<=890&&ww>820) 
{
$(".altitle").css("font-size","13px")
$(".alti01 a").css("padding","0px 6px")
}//14px
	else 
{
$(".altitle").css("font-size","12px")
$(".alti01 a").css("padding","0px 5px")
}//13px
}

window.onresize=function resetbottomcss(){
	resetbtmcss();

	resetwzsyimgwh();

	resetxwzximgwh();

	resetgjghImgliwidth();

	resetqyldImgliwidth();

	resetghjsImgliwidth();

	resetimgcodeoffleft();

	resetbigmap()

	resetaltitle()

	resetindexsplitsub()
}

function resetindexsplitsub()
{
	$("#index_1").width(parseInt($("#main").width())*0.61-145)
	var moveleftcnt=parseInt($("div[name='wzsy'] .h_leftbox01up").attr("moveleft"));
	$("div[name='wzsy'] .h_leftbox01bo ul").css("margin-left",(-moveleftcnt*($("div[name='wzsy'] .h_leftbox01bo ul li").eq(0).width()+4)).toString()+"px")
	
}

function resetbigmap(){
//图片高度宽度大小 1587/1063 w/h
var ww=$(window).width();
var wh=$(window).height();
var imgwidth=0;
var imgheight=0;
var fixtop=0;
var fixleft=0;
//如果浏览器高度大于比例 则压缩宽度至浏览器的90% 1587/1063>=w/h width=w*0.9
if(1587/1063>=ww/wh)
{
imgwidth=ww*0.9;
imgheight=1063/1587*ww*0.9;
//边距值
fixleft=ww*0.05;
fixtop=(wh-imgheight)/2;
$(".bigmapshow img").css("height","auto")
$(".bigmapshow img").width(imgwidth)
}
else{//如果浏览器宽度大于比例 则压缩高度至浏览器的90% 1587/1063<w/h height=h*0.9
imgheight=wh*0.9
imgwidth=1587/1063*wh*0.9;
//边距值
fixtop=wh*0.05;
fixleft=(ww-imgwidth)/2;
$(".bigmapshow img").css("width","auto")
$(".bigmapshow img").height(imgheight)
}
$(".bigmapshow").css({"left":fixleft+"px","top":fixtop+"px"})
$(".imgclosebtn").css({"right":fixleft-15+"px","top":fixtop-15+"px"})
if(bigmapisclick==1)
$(".bigmapshow,.imgclosebtn,.bigmapbg").show()
}
function closebigmap(){
$(".bigmapshow,.imgclosebtn,.bigmapbg").hide()
}
$(function(){
	
	//网站首页 焦点图左右按钮切换
	$("#img_r,#img_l").hover(function(){
		clearInterval(wzsyImgInterval)
	},function(){
		wzsyImgInterval=setInterval("autochangewszyimg()",5000);
	})

	$("#img_r").click(function(){
  wzsyimg_moveright()
})
$("#img_l").click(function(){
  wzsyimg_moveleft()
})
	
	$(".lookbigmap").click(function(){
		bigmapisclick=1;
		resetbigmap()
	})
	$(".imgclosebtn").click(function(){
		bigmapisclick=0;
		closebigmap()
	})
	resetbtmcss();
	resetaltitle()
	//网站首页滚动初始化
	wzsyscroll_cnt=$("div[name='wzsy'] .h_leftdivbo .h_leftulbo li").length/3;
	$(".h_leftulbo").attr("nsc",1)
	wzsyscroll_interval=setInterval("srcollwzsyarea('"+'div[name="wzsy"]'+" .h_leftulbo',"+wzsyscroll_width+","+(wzsyscroll_cnt-1)+")",5000);
	//新闻资讯滚动初始化
	xwzxscroll_cnt=$("div[name='xwzx'] .h_leftdivbo .h_leftulbo li").length/3;
	$(".h_leftulbo").attr("nsc",1)
	xwzxscroll_interval=setInterval("srcollwzsyarea('"+'div[name="xwzx"]'+" .h_leftulbo',"+xwzxscroll_width+","+(xwzxscroll_cnt-1)+")",5000);
	//网站首页切换
	$("div[name='wzsy'] .alti01 a").each(function(i){
		$(this).mouseover(function(){
			$("div[name='wzsy'] .alti01 a").attr("class","")
			$(this).attr("class","current")
			$("div[name='wzsy'] .altitle .more").hide()
			$("div[name='wzsy'] .altitle .more").eq(i).show()
			$("div[name='wzsy'] .h_leftulto").hide()
			$("div[name='wzsy'] .h_leftulto").eq(i).show()
		})
	})
	//新闻资讯切换
	$("div[name='xwzx'] .alti01 a").each(function(i){
		$(this).mouseover(function(){
			$("div[name='xwzx'] .alti01 a").attr("class","")
			$(this).attr("class","current")
			$("div[name='xwzx'] .altitle .more").hide()
			$("div[name='xwzx'] .altitle .more").eq(i).show()
			$("div[name='xwzx'] .h_leftulto").hide()
			$("div[name='xwzx'] .h_leftulto").eq(i).show()
		})
	})

	//设定焦点图li的宽度值
	$(".h_leftbox01up ul li").width($(".h_leftbox01up").width()).height(223)
	//设定焦点图 小图img宽度值
	$(".h_leftbox01bo a img").width(($(".h_leftbox01up").width()-42)/4).height(46)
	//网站首页焦点图
	$("div[name='wzsy'] .h_leftbox01up ul li img").each(function(i){
		wzsyImgLoadEnd[i]=setInterval("LoadImgEnd(1,'"+'div[name="wzsy"] .h_leftbox01up ul li img'+"','"+$(this).attr("src")+"',"+i.toString()+")",100);
	})


	//绑定焦点图文字显示
	$("div[name='wzsy'] .h_leftbox01bo a").each(function(i){
		$(this).hover(function(){
			$("div[name='wzsy'] .h_leftbox01bo a").attr("class","")
			$(this).attr("class","current")
			$("div[name='wzsy'] .h_leftbox01up ul li").hide()
			$("div[name='wzsy'] .h_leftbox01up ul li").eq(i).show()
			$("div[name='wzsy'] .h_leftbox01up .bar a").hide()
			$("div[name='wzsy'] .h_leftbox01up .bar a").eq(i).show()
			$("div[name='wzsy'] .h_leftbox01up").attr("nsc",i)
			clearInterval(wzsyImgInterval);
		},function(){
			wzsyImgInterval=setInterval("autochangewszyimg()",5000);
		})
	})


	$("div[name='wzsy'] .h_leftbox01bo a").eq(0).attr("class","current")
	$("div[name='wzsy'] .h_leftbox01up .bar a").eq(0).show()
	//新闻资讯焦点图
	$("div[name='xwzx'] .h_leftbox01up ul li img").each(function(i){
		xwzxImgLoadEnd[i]=setInterval("LoadImgEnd(2,'"+'div[name="xwzx"] .h_leftbox01up ul li img'+"','"+$(this).attr("src")+"',"+i.toString()+")",100);
	})
	//绑定焦点图文字显示
	$("div[name='xwzx'] .h_leftbox01bo a").each(function(i){
		$(this).hover(function(){
			$("div[name='xwzx'] .h_leftbox01bo a").attr("class","")
			$(this).attr("class","current")
			$("div[name='xwzx'] .h_leftbox01up ul li").hide()
			$("div[name='xwzx'] .h_leftbox01up ul li").eq(i).show()
			$("div[name='xwzx'] .h_leftbox01up .bar a").hide()
			$("div[name='xwzx'] .h_leftbox01up .bar a").eq(i).show()
			$("div[name='xwzx'] .h_leftbox01up").attr("nsc",i)
			clearInterval(xwzxImgInterval);
		},function(){
			xwzxImgInterval=setInterval("autochangexwzximg()",5000);
		})
	})
	$("div[name='xwzx'] .h_leftbox01bo a").eq(0).attr("class","current")
	$("div[name='xwzx'] .h_leftbox01up .bar a").eq(0).show()
	//自动切换网站首页焦点图
	$("div[name='wzsy'] .h_leftbox01up").attr("moveleft","0")
	$("div[name='wzsy'] .h_leftbox01up").attr("nsc","0")
	wzsyImgInterval=setInterval("autochangewszyimg()",5000);
	//自动切换新闻资讯焦点图
	xwzxImgInterval=setInterval("autochangexwzximg()",5000);
	//概况介绍 各界关怀焦点图自动切换
	resetgjghImgliwidth();
	$(".h_scrollbox").attr("nsc",0);
	$(".h_scrollbox").attr("start",1)
	//gjghImgInterval=setInterval("scrollgjghimg(1)",5000);
	$(".h_scrollbox .h_pre").click(function(){
		scrollgjghimg(-1,1)
	})
	$(".h_scrollbox .h_pre1").click(function(){
		scrollgjghimg(1,1)
	})
	$(".h_scrollbox ul li img,.h_scrollbox .h_pre img,.h_scrollbox .h_pre1 img").each(function(){
		$(this).hover(function(){
			$(".h_scrollbox").attr("start",0)
		},function(){
			$(".h_scrollbox").attr("start",1)
		})
	})
	//搜索框 请选择 浮层控制
	$(".h_choose").click(function(){
		$(".selbtn").show()
	})
	$(".selbtn div").each(function(){
		$(this).click(function(){
			$(".selbtn div").attr("class","")
			$(this).attr("class","current")
			$(".selbtn").hide();
			$(".h_choose").html($(this).html()).css("font-size","12px").attr("chooseid",$(this).attr("id"))
		})
	})
	//未点中选择区域时，关闭浮层
	$(document).mousedown(function(e){
		if($(e.target).attr("class")=="selbtn"||$(e.target).parent().attr("class")=="selbtn"||$(e.target).attr("class")=="h_choose")
		{
                       
        }else{
			$(".selbtn").hide();
		}
	})
	//搜索框js
	$(".h_ipt").focus(function(){
		if($(this).val()=="请输入搜索关键字") $(this).val("")
	})
	$(".h_ipt").blur(function(){
		if($(this).val()=="") $(this).val("请输入搜索关键字")
	})
	$(".j_bo_left_01 a").each(function(i){
		$(this).mouseover(function(){
			$(".j_bo_left_01 a").attr("class","")
			$(this).attr("class","current")
			$(".j_bo_left_02 ul").hide()
			$(".j_bo_left_02 ul").eq(i).show();
		})
	})
	//区域联动 焦点图自动切换
	resetqyldImgliwidth();
	$(".q_left_t").attr("nsc",0);
	$(".q_left_t").attr("start",1)
	$(".q_left_t .h_pre").click(function(){
		scrollqyldimg(-1,1)
	})
	$(".q_left_t .h_pre1").click(function(){
		scrollqyldimg(1,1)
	})
	$(".q_left_t ul li img,.q_left_t .h_pre img,.q_left_t .h_pre1 img").each(function(){
		$(this).hover(function(){
			$(".q_left_t").attr("start",0)
		},function(){
			$(".q_left_t").attr("start",1)
		})
	})
	//读取核心区建设成果所有图片
	ghjsImglen=$(".j_bo_scrcot ul li").length;
	//添加 时间 20151224 宋亮亮 
	//防止页面过载,强制删除多余的部分
	if (ghjsImglen%3!=0){
		$(".j_bo_scrcot ul li").each(function(i){
			if(i>=ghjsImglen-ghjsImglen%3)
			$(this).remove();
		})
		ghjsImglen=$(".j_bo_scrcot ul li").length;
	}
	if (ghjsImglen%3!=0) {//如果无法被3整除，则重复三段+将最后三个li复制到最前即[456][012][345][601][234][560][123][456]
		//重新组装html代码
		var liprehtml="";
		$(".j_bo_scrcot ul li").each(function(i){
			if (i+1==ghjsImglen||i+2==ghjsImglen||i+3==ghjsImglen) 
			{
				liprehtml+=$(this).get(0).outerHTML;
			}

		})
		var jboulhtml=$(".j_bo_scrcot ul").html();
		$(".j_bo_scrcot ul").html(liprehtml+$(".j_bo_scrcot ul").html()+$(".j_bo_scrcot ul").html()+$(".j_bo_scrcot ul").html());

		//设置第三个的样式为 添加<ul></ul>标签
		$(".j_bo_scrcot ul li").each(function(i){
			if (i%3==2) $(this).attr("class","li_last")
		})
		$(".j_bo_scrcot ul li:li_last").each(function(i){
			if(i+1!=$(".j_bo_scrcot ul li:li_last").length) $(this).after("[split]")
		})
		var lastghjspichtml=$(".j_bo_scrcot ul").get(0).outerHTML.replace(/[split]/g,"</ul><ul>");
		//alert(lastghjspichtml)
		$(".j_bo_scrcot").html(lastghjspichtml)

	}
	else//将最后三个li复制到最前[345][012][345]，这里不处理图片个数小于3张的情况
	{
		var liprehtml="";
		$(".j_bo_scrcot ul li").each(function(i){
			if (i+1==ghjsImglen||i+2==ghjsImglen||i+3==ghjsImglen) 
				liprehtml+=$(this).get(0).outerHTML;
		})
		$(".j_bo_scrcot ul").html(liprehtml+$(".j_bo_scrcot ul").html())
		//设置第三个的样式为
		$(".j_bo_scrcot ul li").each(function(i){
			if (i%3==2) $(this).attr("class","li_last")
		})
		$(".j_bo_scrcot ul li.li_last").each(function(i){
			if(i+1!=$(".j_bo_scrcot ul li.li_last").length) $(this).after("{split}")
		})
		var lastghjspichtml=$(".j_bo_scrcot ul").get(0).outerHTML.replace(/{split}/g,"</ul><ul>");
		
		$(".j_bo_scrcot").html("<div class='jboul'>"+lastghjspichtml+"</div>")
	}
	//核心区建设成果 焦点图自动切换
	$(".j_bo_scroll").attr("nsc",1);
	$(".j_bo_scroll").attr("start",1)
	resetghjsImgliwidth();
	$(".j_bo_scroll .j_bo_scrollleft").click(function(){
		scrollghjsimg(-1,1)
	})
	$(".j_bo_scroll .j_bo_scrollright").click(function(){
		scrollghjsimg(1,1)
	})
	$(".j_bo_scroll .j_bo_scrcot ul li img,.j_bo_scroll .j_bo_scrollleft img,.j_bo_scroll .j_bo_scrollright img").each(function(){
		$(this).hover(function(){
			$(".j_bo_scroll").attr("start",0)
		},function(){
			$(".j_bo_scroll").attr("start",1)
		})
	})
	//通栏js开始
	$(".h_tel_01").eq(0).hover(function(){
		$(".govWeChat").show().css("left",(($(".h_tel").width()/5-160)/2).toString()+"px")
	},function(){
		$(".govWeChat").hide()
	});
	$(".h_tel_01").eq(1).hover(function(){
		$(".mobileAccess").show().css("left",(($(".h_tel").width()/5-160)/2+$(".h_tel").width()/5).toString()+"px")
	},function(){
		$(".mobileAccess").hide()
	});
	$(".h_tel_01").eq(2).hover(function(){
		$(".maildl").show()
	},function(){
		$(".maildl").hide()
	})
	$(".h_tel_01").eq(3).hover(function(){
		$(".maildy").show()
	},function(){
		$(".maildy").hide()
	})

	$(".h_tel_01").eq(4).hover(function(){
		$(".fenxiang").show()
	},function(){
		$(".fenxiang").hide()
	})

	$("#EmailLogin").click(function(){
		var username=$("#txtEmail").val();
	var password=$("#txtPassword").val();
	if(username==null || username.length==0)
	{
		alert("请输入邮箱地址！");
		return false;
	}
	if(password==null||password.length==0)
	{
		alert("请输入密码！");
		return false;
	}		
	username += "@hqcbd.shanghai.gov.cn";
	window.open("http://mail.shanghai.gov.cn/webmail/login.jsp?uid=" + username + "&password=" + password);
	})

	$(".govWeChat,.mobileAccess,.maildl,.maildy,.fenxiang").each(function(i){
		$(this).hover(function(){
			$(".h_tel_01").eq(i).attr("class","h_tel_01 current")
			$(this).show();
			},function(){
			$(".h_tel_01").eq(i).attr("class","h_tel_01")
			$(this).hide();
		})
	})

	$(".home-share img").eq(0).hover(function(){
		imgcodeoffleft=$(".h_tel").width()*0.1-45+$(".h_tel").width()*0.8*0.16+$(".h_tel").width()*0.8*0.05;
		$(".wxAccess").css("left",imgcodeoffleft+"px")
		$(".wxAccess").show()
	},function(){
		$(".wxAccess").hide()
	})


	//通栏js结束
	//地图相关，2015-12-22 10:45添加，15:55注释
	//$("#sitemap > img").eq(0).click(function(e){
	//	if(picLoadSuccess=="0"){
	//		$("#hh").html('<div id="tt"><div class="P120"><div class="imgl"><img alt="" src="../../images/index/L.gif" style="width:20px" /></div><div class="txtr"><span>&nbsp;图片加载中...</span></div></div></div><div class="imgclosebtn"></div>');
	//		$("#hh,#FloatDiv").show();
	//		clearInterval(Clearimginterval);
	//		Clearimginterval = setInterval("LoadImgForBig('" + $(this).attr("src").replace("map","bigmap") + "')", 200);
	//	}else{
	//		$("#hh").html("<div class='imgshow'><img alt='' src='" + $(this).attr("src").replace("map","bigmap") + "' /></div><div class='imgclosebtn'></div>");
	//		$("#hh,#FloatDiv").show();
	//	}
	//	positionXY();
	//})
	//供能服务相关，胡芳2015-12-21添加
	$(".newadd").hide()
	$(".newadd").eq(0).show()
	$(".j_bo_left_03 a").each(function(i){
		$(this).mouseover(function(){
			$(".j_bo_left_03 a").attr("class","")
			$(this).attr("class","current")
			$(".newadd").hide()
			$(".newadd").eq(i).show()
		})
	})
	//2015-12-22 16:03添加

	$("area").each(function(i){
		$(this).hover(function(){
			showstart(i)
		},function(){
			showstop()
		})
	})
	txt_input_interval=setInterval("checktxt_input()",1000);
})
//关闭浮层
function closeBg(){
	$("#fullbg,#dialog").slideUp();
}

function scrollqyldimg(dec,isclick){
	if ( $(".q_left_t").attr("start")=="1" || isclick==1) {
		var nsc=$(".q_left_t").attr("nsc");
		var nnsc=parseInt(nsc)+dec;
		var hsboxlen=$(".q_left_t ul li").length;
		var hsboxwidth=Math.round(parseInt($("#main").width())*0.305);
		if (dec>0) {//>0 点击向右
			if (nnsc<hsboxlen) {
				$(".q_left_t ul").stop(false,true).animate()
				$(".q_left_t ul").animate({marginLeft:-parseInt(nnsc)*hsboxwidth},300);
				$(".q_left_t").attr("nsc",nnsc);
			}
			else
			{
				$(".q_left_t ul").stop(false,true).animate()
				$(".q_left_t ul").animate({marginLeft:0},300);
				$(".q_left_t").attr("nsc",0);
			}
			
		}
		else//<0 点击向左
		{
			if (nnsc>-1) {
				$(".q_left_t ul").stop(false,true).animate()
				$(".q_left_t ul").animate({marginLeft:-parseInt(nnsc)*hsboxwidth},300);
				$(".q_left_t").attr("nsc",nnsc);
			}
			else
			{
				$(".q_left_t ul").stop(false,true).animate()
				$(".q_left_t ul").animate({marginLeft:-parseInt(hsboxlen-1)*hsboxwidth},300);
				$(".q_left_t").attr("nsc",hsboxlen-1);
			}
		}
	}
}

function scrollgjghimg(dec,isclick){
	if ( $(".h_scrollbox").attr("start")=="1" || isclick==1) {
		var nsc=$(".h_scrollbox").attr("nsc");
		var nnsc=parseInt(nsc)+dec;
		var hsboxlen=$(".h_scrollbox ul li").length;
		var hsboxwidth=parseInt(Math.round(parseInt($("#main").width())*0.27*0.94)-4);
		if (dec>0) {//>0 点击向右
			if (nnsc<hsboxlen) {
				$(".h_scrollbox ul").stop(false,true).animate()
				$(".h_scrollbox ul").animate({marginLeft:-parseInt(nnsc)*hsboxwidth},300);
				$(".h_scrollbox").attr("nsc",nnsc);
			}
			else
			{
				$(".h_scrollbox ul").stop(false,true).animate()
				$(".h_scrollbox ul").animate({marginLeft:0},300);
				$(".h_scrollbox").attr("nsc",0);
			}
			
		}
		else//<0 点击向左
		{
			if (nnsc>-1) {
				$(".h_scrollbox ul").stop(false,true).animate()
				$(".h_scrollbox ul").animate({marginLeft:-parseInt(nnsc)*hsboxwidth},300);
				$(".h_scrollbox").attr("nsc",nnsc);
			}
			else
			{
				$(".h_scrollbox ul").stop(false,true).animate()
				$(".h_scrollbox ul").animate({marginLeft:-parseInt(hsboxlen-1)*hsboxwidth},300);
				$(".h_scrollbox").attr("nsc",hsboxlen-1);
			}
		}
	}
}

function scrollghjsimg(dec,isclick){
	if ( $(".j_bo_scroll").attr("start")=="1" || isclick==1) {
		var nsc=$(".j_bo_scroll").attr("nsc");
		var nnsc=parseInt(nsc)+dec;
		var hsboxlen=$(".j_bo_scrcot .jboul ul").length;
		var hsboxwidth=Math.round(parseInt($("#main").width())*0.86*0.655*0.96);
		if (dec>0) {//>0 点击向右
			if (nnsc<hsboxlen) {
				$(".j_bo_scrcot .jboul").stop(false,true).animate()
				$(".j_bo_scrcot .jboul").animate({marginLeft:-parseInt(nnsc)*hsboxwidth},300,function(){
					if (nnsc+1==hsboxlen) {//到最后一项时，强制移到第一项
						$(".j_bo_scrcot .jboul").css("margin-left","0px");
						$(".j_bo_scroll").attr("nsc",0);
					}
				})
				$(".j_bo_scroll").attr("nsc",nnsc);

			}
			else
			{
				$(".j_bo_scrcot .jboul").stop(false,true).animate()
				$(".j_bo_scrcot .jboul").animate({marginLeft:0},300);
				$(".j_bo_scroll").attr("nsc",0);
			}
			
		}
		else//<0 点击向左
		{
			if (nnsc>-1) {
				$(".j_bo_scrcot .jboul").stop(false,true).animate()
				$(".j_bo_scrcot .jboul").animate({marginLeft:-parseInt(nnsc)*hsboxwidth},300,function(){
					if (nnsc==0) {//到最后一项时，强制移到第一项
						$(".j_bo_scrcot .jboul").css("margin-left",-parseInt(hsboxlen-1)*hsboxwidth);
						$(".j_bo_scroll").attr("nsc",hsboxlen-1);
					}
				})
				$(".j_bo_scroll").attr("nsc",nnsc);
			}
			else
			{
				$(".j_bo_scrcot .jboul").stop(false,true).animate()
				$(".j_bo_scrcot .jboul").animate({marginLeft:-parseInt(hsboxlen-1)*hsboxwidth},300);
				$(".j_bo_scroll").attr("nsc",hsboxlen-1);
			}
		}
	}
}

function move1(nnsc){
		$("div[name='wzsy'] .h_leftbox01bo a").attr("class","")
		$("div[name='wzsy'] .h_leftbox01bo a").eq(nnsc).attr("class","current")
		$("div[name='wzsy'] .h_leftbox01up ul li").hide()
		$("div[name='wzsy'] .h_leftbox01up ul li").eq(nnsc).show()
		$("div[name='wzsy'] .h_leftbox01up .bar a").hide()
		$("div[name='wzsy'] .h_leftbox01up .bar a").eq(nnsc).show()
		
}

function move2(nnsc){
		$("div[name='wzsy'] .h_leftbox01bo a").attr("class","")
		$("div[name='wzsy'] .h_leftbox01bo a").eq(0).attr("class","current")
		$("div[name='wzsy'] .h_leftbox01up ul li").hide()
		$("div[name='wzsy'] .h_leftbox01up ul li").eq(0).show()
		$("div[name='wzsy'] .h_leftbox01up .bar a").hide()
		$("div[name='wzsy'] .h_leftbox01up .bar a").eq(0).show()
		
}

function wzsyimg_moveleft(){
  //nsc 第几张图片 当超出范围，则移动Ul margin值
  var moveleftcnt=parseInt($("div[name='wzsy'] .h_leftbox01up").attr("moveleft"));
  var nsc=$("div[name='wzsy'] .h_leftbox01up").attr("nsc");
  var wzsylen=$("div[name='wzsy'] .h_leftbox01bo a").length;
  var nnsc=nsc;
  //先切换 移动位置后切换图片，如图片未靠边，则位置不动。
  if(moveleftcnt==0){
    moveleftcnt=wzsylen-4;
    nnsc=wzsylen-1;
  }
  else  {
    moveleftcnt--;
    if(nsc>moveleftcnt+3)  nnsc=nsc-1    
  }
    

    $("div[name='wzsy'] .h_leftbox01up").attr("moveleft",moveleftcnt)
	$("div[name='wzsy'] .h_leftbox01up").attr("nsc",nnsc)
    $("div[name='wzsy'] .h_leftbox01bo ul").stop(false,true).animate()
     $("div[name='wzsy'] .h_leftbox01bo ul").animate({marginLeft: (-moveleftcnt*($("div[name='wzsy'] .h_leftbox01bo ul li").eq(0).width()+4)).toString()+"px"},300,function(){
      
          $("div[name='wzsy'] .h_leftbox01bo a").attr("class","")
          $("div[name='wzsy'] .h_leftbox01bo a").eq(nnsc).attr("class","current")
          $("div[name='wzsy'] .h_leftbox01up ul li").hide()
          $("div[name='wzsy'] .h_leftbox01up ul li").eq(nnsc).show()
          $("div[name='wzsy'] .h_leftbox01up .bar a").hide()
          $("div[name='wzsy'] .h_leftbox01up .bar a").eq(nnsc).show()
      })

}

function wzsyimg_moveright(){
  //nsc 第几张图片 当超出范围，则移动Ul margin值
  var moveleftcnt=parseInt($("div[name='wzsy'] .h_leftbox01up").attr("moveleft"));
  var nsc=parseInt($("div[name='wzsy'] .h_leftbox01up").attr("nsc"));
  var wzsylen=$("div[name='wzsy'] .h_leftbox01bo a").length;
  var nnsc=nsc;
  //先切换 移动位置后切换图片，如图片未靠边，则位置不动。
  
  if(moveleftcnt==wzsylen-4){
    moveleftcnt=0;
    nnsc=0;
  }
  else  {
    moveleftcnt++;
    if(nsc<moveleftcnt)  nnsc=nsc+1 
  }
    

    $("div[name='wzsy'] .h_leftbox01up").attr("moveleft",moveleftcnt)
$("div[name='wzsy'] .h_leftbox01up").attr("nsc",nnsc)
    $("div[name='wzsy'] .h_leftbox01bo ul").stop(false,true).animate()
     $("div[name='wzsy'] .h_leftbox01bo ul").animate({marginLeft: (-moveleftcnt*($("div[name='wzsy'] .h_leftbox01bo ul li").eq(0).width()+4)).toString()+"px"},300,function(){
      
          $("div[name='wzsy'] .h_leftbox01bo a").attr("class","")
          $("div[name='wzsy'] .h_leftbox01bo a").eq(nnsc).attr("class","current")
          $("div[name='wzsy'] .h_leftbox01up ul li").hide()
          $("div[name='wzsy'] .h_leftbox01up ul li").eq(nnsc).show()
          $("div[name='wzsy'] .h_leftbox01up .bar a").hide()
          $("div[name='wzsy'] .h_leftbox01up .bar a").eq(nnsc).show()
      })
}

function autochangewszyimg(){

	//nsc 第几张图片 当超出范围，则移动Ul margin值
	var moveleftcnt=parseInt($("div[name='wzsy'] .h_leftbox01up").attr("moveleft"));
	var nsc=$("div[name='wzsy'] .h_leftbox01up").attr("nsc");
	
	var wzsylen=$("div[name='wzsy'] .h_leftbox01bo a").length;
	var nnsc=parseInt(nsc)+1;
	if (nnsc<wzsylen) {
		$("div[name='wzsy'] .h_leftbox01up").attr("nsc",nnsc)
//alert(nnsc-moveleftcnt)
		if(nnsc-moveleftcnt>3){
			moveleftcnt+=parseInt(nnsc-3-moveleftcnt);	
			//$("div[name='wzsy'] .h_leftbox01bo ul").stop(true,true)
			$("div[name='wzsy'] .h_leftbox01bo ul").animate({marginLeft: (-moveleftcnt*($("div[name='wzsy'] .h_leftbox01bo ul li").eq(0).width()+4)).toString()+"px"},300,function(){
			move1(nnsc)
			})

			$("div[name='wzsy'] .h_leftbox01up").attr("moveleft",moveleftcnt)
		}
		else if(nnsc<moveleftcnt)
		{
			$("div[name='wzsy'] .h_leftbox01bo ul").animate({marginLeft: "0px"},300,function(){
			move1(nnsc)
			})
			$("div[name='wzsy'] .h_leftbox01up").attr("moveleft",0)
		}
		else{
			move1(nnsc)
		}
		
	}
	else
	{
		nnsc=0;
		$("div[name='wzsy'] .h_leftbox01up").attr("nsc",nnsc)
		if(nnsc-moveleftcnt>3){
			moveleftcnt+=parseInt(nnsc-3-moveleftcnt);	
			//$("div[name='wzsy'] .h_leftbox01bo ul").stop(true,true)
			$("div[name='wzsy'] .h_leftbox01bo ul").animate({marginLeft: (-moveleftcnt*($("div[name='wzsy'] .h_leftbox01bo ul li").eq(0).width()+4)).toString()+"px"},300,function(){
			move2(nnsc)
			})

			$("div[name='wzsy'] .h_leftbox01up").attr("moveleft",moveleftcnt)
		}
		else if(nnsc<moveleftcnt)
		{
			$("div[name='wzsy'] .h_leftbox01bo ul").animate({marginLeft: "0px"},300,function(){
			move2(nnsc)
			})
			$("div[name='wzsy'] .h_leftbox01up").attr("moveleft",0)
		}
		else
		{
			move2(nnsc)}

		}
}

function autochangexwzximg(){
	var nsc=$("div[name='xwzx'] .h_leftbox01up").attr("nsc");
	var xwzxlen=$("div[name='xwzx'] .h_leftbox01bo a").length;
	var nnsc=parseInt(nsc)+1;
	if (nnsc<xwzxlen) {
		$("div[name='xwzx'] .h_leftbox01bo a").attr("class","")
		$("div[name='xwzx'] .h_leftbox01bo a").eq(nnsc).attr("class","current")
		$("div[name='xwzx'] .h_leftbox01up ul li").hide()
		$("div[name='xwzx'] .h_leftbox01up ul li").eq(nnsc).show()
		$("div[name='xwzx'] .h_leftbox01up .bar a").hide()
		$("div[name='xwzx'] .h_leftbox01up .bar a").eq(nnsc).show()
		$("div[name='xwzx'] .h_leftbox01up").attr("nsc",nnsc)
	}
	else
	{
		$("div[name='xwzx'] .h_leftbox01bo a").attr("class","")
		$("div[name='xwzx'] .h_leftbox01bo a").eq(0).attr("class","current")
		$("div[name='xwzx'] .h_leftbox01up ul li").hide()
		$("div[name='xwzx'] .h_leftbox01up ul li").eq(0).show()
		$("div[name='xwzx'] .h_leftbox01up .bar a").hide()
		$("div[name='xwzx'] .h_leftbox01up .bar a").eq(0).show()
		$("div[name='xwzx'] .h_leftbox01up").attr("nsc",0)
	}
}

//加载导航切换效果
function changearea(obj){
	$("#mainNav ul li").attr("class","")
	$("#mainNav ul li").each(function(){
		if ($(this).attr("onmouseover").indexOf(obj)>0) 	$(this).attr("class","current")
	})
	$(".h_left,.h_right,.q_left,.q_center,.q_right,.g_left,.g_right,.j_top,.j_bottom,.b_bus_left,.b_bus_right,.n_navbox,.fg_left,.fg_right,.eny_left,.eny_center,.map_right").hide();
	$("div[name='"+obj+"']").show();
	if (obj=="wzsy"){
		resetwzsyimgwh()
	}
	if (obj=="xwzx") {
		resetxwzximgwh()
	}
	if(obj=='qyld'){
		$('#main').css("height","760px");
		$('#mainNav').css("height","760px");

	}else{
		$('#main').css("height","510px");
		$('#mainNav').css("height","510px");
	}
	//$("#main").attr("w_w",Math.round(parseInt($("#main").width())*0.86*0.655*0.96)+"/"+$(".j_bo_scrcot").width())
}

//分享至微信相关，2015-12-9 15:49添加
function data_share(){
	//$(".share_QRcode_s").attr("isc","1")//1代表进入微信分享区域
	//$(".h_tel").height(284);
	//$("#output").show()
	//$("#output").show().css("left",($(".h_tel").width()/2).toString()+"px")
}

function data_close(){
	$(".h_tel").height(164);
	$("#output").hide();
}

//分享到微博、人人、开心
function data_sendto(shareType) {
    try { var conf = jiathis_config || {}; } catch (e) { var conf = {}; };
    var ec = encodeURIComponent,
		UU=document.getElementById('url');
		TT = document.getElementById('title'),
		SS = document.getElementById('summary'),
		KK = document.getElementById('nodeid'),
		OO = document.getElementById('objname'),
		IDID = document.getElementById('idleaf');
	if(UU != null){U = document.getElementById('url').value;}else{ U="";}
	if(TT != null){T = document.getElementById('title').value;}else{ T="";}
	if(SS != null){S = document.getElementById('summary').value;}else{ S="";}
	if(KK != null){K = parseInt(document.getElementById('nodeid').value)}else{ K="";}
	if(OO != null){O = document.getElementById('objname').value;}else{ O="";}
	if(IDID != null){ID = document.getElementById('idleaf').value;}else{ ID="";}
	var newUrl="";
	switch(shareType){
		case "tsina":
			newUrl="http://v.t.sina.com.cn/share/share.php?title="+ec(T || document.title)+"&url="+ec(U || document.location)+"&source="+ec("重庆弹子石商务区");
			break;
		case "tqq":
			newUrl="http://v.t.qq.com/share/share.php?title="+ec(T || document.title)+"&url="+ec(U || document.location);
			break;
		case "t163":
			newUrl="http://t.163.com/article/user /checkLogin.do?link="+ec(U || document.location)+"&source=重庆弹子石商务区&info="+encodeURIComponent(document.title);
			break;
		case "tsohu":
			newUrl="http://t.sohu.com/third/post.jsp?content=utf-8&url="+ec(U || document.location)+"&title="+encodeURIComponent(document.title);
			break;
		case "renren":
			newUrl="http://share.renren.com/share/buttonshare.do?title="+ec(T || document.title)+"&link="+ec(U || document.location);
			break;
		case "kaixin001":
			newUrl="http://www.kaixin001.com/repaste/share.php?rtitle="+ec(T || document.title)+"&rurl="+ec(U || document.location)+"&rcontent=";
			break;
		default:
			break;
	}
	if(newUrl!="")
		window.open(newUrl,'');
        //A = 'http://service.shanghai.gov.cn/zhsh/Share/ArticleInfo.aspx',
	//C = '?type=' + a + '&url=' + ec(U || document.location) + '&title=' + ec(T || document.title) + (S ? '&summary=' + ec(S) : '')
	//	    + (O ? '&objname=' + O : '') + '&nodeid=' + ec(K || document.nodeid) + '&idleaf=' + ec(ID || document.idleaf);
    //try {
    //    window.open(A + C, '');
    //} catch (e) {
    //}
    return false;
}
/*2015-12-10添加---友情链接*/
function openWindow(A){
if(A.value!="#"){
window.open(A.value)
}}
/*2015-12-14添加，2015-12-16 13:12修改---搜索功能*/
function Search()
{
    //var code=$(".h_choose").attr("chooseid");
    var code="";
    if($(".h_choose").attr("chooseid")!=undefined)
    	code=$(".h_choose").attr("chooseid");
    var keyWord = encodeURIComponent($("input#keyword").val()); 
    window.open("/Web/Home/List?title=" + keyWord + "&SiteCode=" + code);
}
/*2015-12-15 15:50添加---回车搜索功能*/
function openSearch(event){
	var keyCode;
	var e = event ? event : (window.event ? window.event : null);
	keyCode = e.keyCode || e.which || e.charCode;
	if(keyCode==13 && $("input#keyword").val()!=""){
		Search();
	}
}
//地图相关，2015-12-22 10:45添加
function closeWindow(){
	$("#hh").html("");
	$("#hh,#FloatDiv").hide();
}
function positionXY(){
	var width = $(window).width();
	var height = $(window).height();
	var targetWidth = $("#hh img").width();
	var targetHeight = $("#hh img").height();
	if(parseFloat(targetWidth/width)>0.8)
		targetWidth=width*0.8;
	if(parseFloat(targetHeight/height)>0.8)
		targetHeight=height*0.8;
	$(".imgshow > img").width(targetWidth+"px");
	$(".imgshow > img").height(targetHeight+"px");
	$(".imgshow").width(targetWidth+"px");
	$(".imgshow").css({"margin-top":((height-targetHeight)/2).toString()+"px","margin-left":((width-targetWidth)/2).toString()+"px"});
	$(".imgclosebtn").css({"margin-top":((height-targetHeight-30)/2).toString()+"px","margin-left":((width-targetWidth)/2+targetWidth-15).toString()+"px"})
	if ($("#tt").length>0) {
		$("#tt").css({"margin-top":((height-300)/2).toString()+"px","margin-left":((width-500)/2).toString()+"px"});
		$(".imgclosebtn").css({"margin-top":((height-330)/2).toString()+"px","margin-left":((width-500)/2+485).toString()+"px"})
	}
	$(".imgclosebtn").click(function(){
		closeWindow();
	})
}
function LoadImgForBig(a){
	var img = new Image();
    img.src = a;
    if(img.width>50)
    {
    	$("#hh").html("<div class='imgshow'><img alt='' src='"+a+"' /></div><div class='imgclosebtn'></div>");
    	$("#hh,#FloatDiv").show();
		positionXY()
    	picLoadSuccess="1";
    	clearInterval(Clearimginterval);
    } 
}
//2015-12-22 16:03添加
function showstart(a){
	$('#dkImage').attr("src","../../images/map"+(a+1).toString()+".jpg");
}
function showstop(){
	$('#dkImage').attr("src","../../images/map.jpg");
}


//function tomobileurl(arg) {
                        
//                    var sUserAgent = navigator.userAgent.toLowerCase();

//                    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//                    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//                    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//                    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//                    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//                    var bIsAndroid = sUserAgent.match(/android/i) == "android";
//                    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//                    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
//                    if ( bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
//                        location.href="../../../shhq_m/"+arg;
//                    } else {

//                    }
//}