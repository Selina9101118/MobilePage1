
$(function () {
    // $('.tags_main_item').click(function(){
    //     var $this= $(this);
    //     $('.div_click').removeClass('div_click');
    //     $this.addClass('div_click');
    //     var contentAttr = $this.attr("contentAttr");
    //     $('.tags_main_item_content').hide();
    //     $(contentAttr).show();
    // })
    //立即咨询
    $('.ljzx_buttom').click(function(){
        $("input[ type='text' ] ").val('');
        $(".remark").val('');
        $('.over-flow').show();
    })
    //关闭弹窗
    $(".over-flow .close").click(function(){
        $(".over-flow").hide();
    });
    //提交
    $(".submit-btn").click(function(){
        var username = $(this).parent().find(".username").val()||'';
        var phone = $(this).parent().find(".phone").val()||'';
        var is_remark = $(this).parent().find(".phone").data("remark")||'';
        var qq = $(this).parent().find(".qq").val()||'';
        var remark = $(this).parent().find(".remark").val()||"";
        // alert(is_remark);
        if(phone==''){
            fail_dialog("请输入手机号码！");
            return;
        }
        var postdata={userName:username,telephoneNum:phone,userRemark:remark,site:"bgl-sjzb"};

        if(qq!=""){
            postdata["qq"]=qq;
        }
        $.ajax({
            type: 'POST',
            url: "http://gc.zbj.com/qyly/admin/message/addMessageEntity",
            data: postdata,
            dataType: 'json',
            success: function (result) {
                if (result.success) {
                    succeed_dialog();
                } else {
                    fail_dialog(result.msg)
                }
            }
        });
    });
    $(".art-close").click(function(){
        $(".over-flow").hide();
        $(".over-flow-succeed").hide();
        $(".over-flow-fail").hide();
    });
})
function succeed_dialog(){
    $(".over-flow").hide();
    $(".over-flow-succeed").show();
    $(".over-flow-fail").hide();
}

function fail_dialog(msg){
    $(".over-flow").hide();
    $(".over-flow-succeed").hide();
    $(".over-flow-fail").show();
    $(".over-flow-fail p").html(msg);
}
