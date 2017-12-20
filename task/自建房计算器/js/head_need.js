// JavaScript Document

var isMoiveHide = true;
$(document).ready(function () {


    $("#theCloseMovieDiv").click(function () {
        $("#movieIframe").attr("src", "www.baidu.com");
        $("#firstMovieDiv").hide();
    });
    $('body').click(function () {
        if (isMoiveHide == false) {
            $("#movieDiv").hide();
            isMoiveHide = true;
        }
    });

    $("#headSelect").selectpick({
        container: '#selectServeHead',
/*        height: 34,*/
        width: 85,
        optionColor: "#3BAFDA",
/*        selectedColor:"#3BAFDA",*/
    });
    $("#topSelect").selectpick({
        container: '#selectServeTop',
/*        height: 34,*/
        width: 85,
        optionColor: "#3BAFDA",
/*        selectedColor:"#000",*/
    });


//select 选择项
/*    $(".unstyled").change(function () {
        $(this).parents('.ui-form-search').find('.seaech_change').html($(this).parents('.ui-form-search').find("option:selected").text());
        $(this).parents('.ui-form-search').find('.s_type').val($(this).val());

    })*/

    $(".subBtn").click(function () {
        var err_msg = "";
        var content = $.trim(strip_tags($(this).parents('#myForm,#myForm-top').find('#content,#contentTop').val()));
        if (content == "") {
            err_msg += "\n　　需求内容不能为空";
        }
        var linkway = $.trim(strip_tags($(this).parents('#myForm,#myForm-top').find("#linkway,#linkwayTop").val()));
        var link = $.trim(strip_tags($(this).parents('#myForm,#myForm-top').find("#link,#linkTop").val()));
        if (linkway == "telephone") {
            if (link != '') {
                var reg = /(^0?[1][34578][\d]{9}$)|(^0[1-9][\d]{1,2}[- ]?[\d]{7,8}[-| ]?[\d]*$)/;
                if (!(result = link.match(reg))) {
                    err_msg += "\n　　请正确填写电话号码";
                }
            } else {
                err_msg += "\n　　请填写您的电话号码";
            }
        }
        if (linkway == "email") {
            if (link != '') {
                var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if (!(result = link.match(reg))) {
                    err_msg += "\n　　请正确填写邮箱地址";
                }
            } else {
                err_msg += "\n　　请填写您的邮箱地址";
            }
        }
        if (linkway == "qq") {
            if (link != '') {
                var reg = /^[1-9]\d{4,10}$/;
                if (!(result = link.match(reg))) {
                    err_msg += "\n　　请正确填写QQ号码";
                }
            } else {
                err_msg += "\n　　请填写您的QQ号码";
            }
        }

        if (err_msg.length > 0) {
            alert("由于以下原因导致提交失败：\n" + err_msg);
            return false;
        } else {
            $.ajax({
                type: 'POST',
                url: '/applydo.html',
                data: $(this).parents('#myForm,#myForm-top').serialize(),
                dataType: 'json',
                success: function (result) {
                    if (result.status == 1) {
                        alert(result.msg);
                    } else {
                        alert(result.msg)
                    }
                }
            });
        }
    });
    /*//头部点击显示，隐藏。

    $("#head_need").hover(function () {
        $("#head_ned_ned").show();
    }, function () {
        $("#head_ned_ned").hide();
    });

    //头部点击显示，隐藏。   */
    //头部点击显示，隐藏。

    $("#head_need").hover(function() {
        $("#head_ned_ned").show();
                        }, function() {
         $("#head_ned_ned").hide();
    });
    $("body").bind("click",function(evt){
        if($(evt.target).parents("#head_need").length==0){
            $('#head_ned_ned').hide();
        }
    });
    //头部点击显示，隐藏。

    $("#top_need").hover(function () {
        $("#top_ned_ned").show();
    }, function () {
        $("#top_ned_ned").hide();
    });

    $(".changetxt a").click(function () {
        $(this).parents('#myForm,#myForm-top').find("#linkway,#linkwayTop").val($(this).attr('data'));
        $(this).parents('#myForm,#myForm-top').find("#showtxt,#showtxtTop").html($(this).text() + '&nbsp;<img src="http://gc.zbj.com/static/gongcheng/images/xia.png">');
        $(".changetxt").hide();
    });

    //点击发布需求的电话选项钮
    $(".showtxt_b").click(function () {
        $(".changetxt_b").show();
    })


    $(".showtxt_a").click(function () {
        $(".changetxt_a").show();
    })

//	if(GetURLParam("sort")==2){
//		$(".r-sl").children().eq(1).children().attr("class","b2 rico");
//	//console.log($(".r-sl").children().eq(1).children().attr("class","test"));
//	}else if(GetURLParam("sort")==1){
//		$(".r-sl").children().eq(1).children().attr("class","b1 rico");
//		}		
//			
});

//获取URL参数
function GetURLParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return (r[2]);
    return null;
}

function showMovie() {
    $("#movieDiv,.movieDivCoat").show();
    setTimeout("setMoiveHied()", 1000);
}

function setMoiveHied() {
    isMoiveHide = false;
}

function showAnimate() {
    $("#mBottomDiv").animate({top: "100%"}, 3000);
    $("#mTopDiv").animate({height: "0%"}, 3000);


}
function showMovieDiv() {
    $("#mBottomDiv").hide();
    $("#mTopDiv").hide();
    $("#firstMovieDiv").show();
}
function showcctv() {
    $("#movieIframe").attr("src", "http://v.ifeng.com/include/exterior.swf?guid=0153b518-f744-4e64-b6f2-2623b094c04a&AutoPlay=true");
    $("#firstMovieDiv").show();
}

//console.log(GetURLParam("sort"));


$(document).ready(function () {

    // 返回头部
    $(".to-top").click(function () {
        var speed=400;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

    //屏幕下翻展示
    $(window).scroll(function (){
        if ($(document).scrollTop() > 400)
        {
            $(".to-top").show();
        } else {
            $(".to-top").hide();

        }
        });

    // top 滑动 出现
    $(window).scroll(function (){
        if ($(document).scrollTop() > 170)
        {
            $(".sj_logo_p").show();
        } else {
            $(".sj_logo_p").hide();

        }
    });
});