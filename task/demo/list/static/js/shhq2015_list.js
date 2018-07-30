
function checktxt_input(){
if ($("#txt_input").length>0) {
  $("#txt_input").click(function(){
      if($(this).attr("title")=="转换纯文本模式网页") {
      	$("#dialog").remove();
      	window.onresize=function ontxtresize(){

      	}
      }
    })
  clearInterval(txt_input_interval);
}
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
window.onresize=function resetbottomcss(){
	resetbtmcss();
}
$(function(){
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
	//通栏js开始
	$(".h_tel_01").eq(0).hover(function(){
		$(".govWeChat").show().css("left",(($(".h_tel").width()/4-160)/2).toString()+"px")
	},function(){
		$(".govWeChat").hide()
	});
	$(".h_tel_01").eq(1).hover(function(){
		$(".mobileAccess").show().css("left",(($(".h_tel").width()/4-160)/2+$(".h_tel").width()/4).toString()+"px")
	},function(){
		$(".mobileAccess").hide()
	});
	$(".h_tel_01").eq(2).hover(function(){
		$(".maildy").show()
	},function(){
		$(".maildy").hide()
	})

	$(".h_tel_01").eq(3).hover(function(){
		$(".fenxiang").show()
	},function(){
		$(".fenxiang").hide()
	})

	$(".govWeChat,.mobileAccess,.maildy,.fenxiang").each(function(i){
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

	$(".qrshare").attr("src","../../../../Common/MobileUrl.aspx?mobileUrl="+location.href+"&t="+Math.random());
	$(".mobileAccess").html("<img width=103 height=103 src='../../../../Common/MobileUrl.aspx?mobileUrl="+location.href+"&t="+Math.random()+"' />");
	$(".wxAccess").html("<img width=103 height=103 src='../../../../Common/MobileUrl.aspx?mobileUrl="+location.href+"&t="+Math.random()+"' />");
	//通栏js结束

	txt_input_interval=setInterval("checktxt_input()",1000);

	resetbtmcss()

	$(".d_hotlist_title a").each(function(i){
		$(this).mouseover(function(){
			$(".d_hotlist_title a").attr("class","")
			$(this).attr("class","current")
			$(".d_hotlist_cot").hide()
			$(".d_hotlist_cot").eq(i).show()
		})
	})
	//$.get(
		//"/shhq_webadmin/cms/InfoPublish/UI/TopInfoForyearHandler.ashx",
		//function(d){
			//alert(d)
	//});
})
//关闭浮层
function closeBg(){
	$("#fullbg,#dialog").slideUp();
}

//分享至微信相关，解云浩2015-12-9 15:49添加
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
/*周成2015-12-10添加---友情链接*/
function openWindow(A){
if(A.value!="#"){
window.open(A.value)
}}
/*周成2015-12-14添加，解云浩2015-12-16 13:12修改---搜索功能*/
function Search()
{
    //var code=$(".h_choose").attr("chooseid");
    var code="";
    if($(".h_choose").attr("chooseid")!=undefined)
    	code=$(".h_choose").attr("chooseid");
    var keyWord = encodeURIComponent($("input#keyword").val()); 
    //document.location.href = "../../../../Search/SearchResult.aspx?keyWord=" + keyWord + "&SiteCode=" + code;
    window.open("/Web/Home/List?title=" + keyWord + "&SiteCode=" + code);
}
/*解云浩2015-12-15 15:50添加---回车搜索功能*/
function openSearch(event){
	var keyCode;
	var e = event ? event : (window.event ? window.event : null);
	keyCode = e.keyCode || e.which || e.charCode;
	if(keyCode==13 && $("input#keyword").val()!=""){
		Search();
	}
}
//导航样式选中
function setCurrentMenu(a){
	$(".l_bot a[code='"+a+"']").attr("class","current")
}

function tomobileurl(arg) {
                    var sUserAgent = navigator.userAgent.toLowerCase();
                    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                    var bIsAndroid = sUserAgent.match(/android/i) == "android";
                    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                    if ( bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                        location.href="../../../shhq_m/"+arg;
                    } else {
                        
                    }
}