var template="<li><a href='{Href}' title='{Title}' target='_blank'>· {Title}</a><span>{ClickCount}</span><span>{PublishDate}</span></li>";
function add(id){
	$("#ADframe").attr("src","http://www.shhqcbd.gov.cn:81/CMS/InfoPublish/UI/InfoManage/Commitup.aspx?conId="+id);
}
function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }
  catch (e) {
     try {
       window.sidebar.addPanel(title, url, "");
      }
     catch (e) {
         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
     }
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

  //处理 评价 收藏 排行榜

  var str = $(".d_detail_top label").text();
  var txtfontsize=12;
  var txtmathfontsize=9;
  var reg = /\d+/g;
  var ms = str.match(reg)
  var mathstr=ms.join('')
  var labelw=($(".l_cot").width()-9*mathstr.length-12*(str.length-mathstr.length))/2-20;
  //$(".d_detail_top label").attr("w",labelw+"/"+$(".d_detail_icon").width())
  if(labelw>$(".d_detail_icon").width()) $(".d_detail_top").height(55)
  else $(".d_detail_top").height(85)
}

window.onresize=function resetpsp(){

  resetbtmcss();

}

function GetTopInfoListData(sortType) {
    $.ajax({
        type: "post",
        url: "../../../../HttpHandler/TopInfoHandler.ashx?SortType="+sortType+"&t="+Math.random(),
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //if(sortType==1)
            		//alert("近期热点数据加载失败，请刷新页面重试！");
            	//else if(sortType==2)
            		//alert("年度热点数据加载失败，请刷新页面重试！");
            	//else if(sortType==3)
            		//alert("整站热点数据加载失败，请刷新页面重试！");
            return "";
        },
        success: function (json) {
            if (json != null && json != "") {
                jsondata = eval('(' + json + ')');
                var content = "";
                for (var i = 0; i < jsondata.TopInfo.length; i++) {
                	content+=template.replace(/{Href}/g,jsondata.TopInfo[i].Href).replace(/{Title}/g,jsondata.TopInfo[i].Title).replace(/{PublishDate}/g,jsondata.TopInfo[i].PublishDate).replace(/{ClickCount}/g,jsondata.TopInfo[i].ClickCount);
                }

                $(".d_hotlist_cot ul").eq(sortType-1).html(content);
                $(".d_hotlist_cot ul li a").css("left",'0%')
                $(".d_hotlist_cot ul li span").each(function(i){
                  if (i%2==0) $(this).css("left",'60%')
                  else $(this).css("left",'80%')
                })
            }
            else {
            	//if(sortType==1)
            		//alert("近期热点数据加载失败，请刷新页面重试！");
            	//else if(sortType==2)
            		//alert("年度热点数据加载失败，请刷新页面重试！");
            	//else if(sortType==3)
            		//alert("整站热点数据加载失败，请刷新页面重试！");
                return "";
            }
        }
    });
}

$(function(){
  resetbtmcss();
  GetTopInfoListData(1)
  GetTopInfoListData(2)
  GetTopInfoListData(3)
  $(".d_icon_title").eq(2).click(function(){
  	window.open("/html/shhq/shhq2015_pfphb/List/");
  })
  $(".f12H img").css("max-width","700px")

});

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