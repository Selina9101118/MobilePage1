$(document).ready(function(){


        $(".but-org").click(function(){
            
            var tel = $(".fbxq_dh").val();
                    if(tel &&/^1[3|5|7|8][0-9]\d{4,8}$/.test(tel)){ 
                       
                       $(".tj_ok").css("display","block");
                       
                    }else{
                        
                        $(".error").css("display","block");
                        setTimeout(xiaoshi,2000);
                   
                    }
        });
        $(".tj_ok").click(function(){
            $(".tj_ok").css("display","none");
        });
        $(".fbxq_dh").focus(function(){
            $(".error").css("display","none");
            $(".fbxq_dh").val("");
        });
        $(".lie_two_box1").hover(function(){
            $(".hk1").css("display","block");
        },function(){
            $(".hk1").css("display","none");
        });
        $(".lie_two_box2").hover(function(){
            $(".hk2").css("display","block");
        },function(){
            $(".hk2").css("display","none");
        });
        $(".lie_two_box3").hover(function(){
            $(".hk3").css("display","block");
        },function(){
            $(".hk3").css("display","none");
        });
        $(".lie_two_box4").hover(function(){
            $(".hk4").css("display","block");
        },function(){
            $(".hk4").css("display","none");
        });
        $(".lie_two_box5").hover(function(){
            $(".hk5").css("display","block");
        },function(){
            $(".hk5").css("display","none");
        });
        $(".lie_two_box6").hover(function(){
            $(".hk6").css("display","block");
        },function(){
            $(".hk6").css("display","none");
        });
        $(".lie_two_box7").hover(function(){
            $(".hk7").css("display","block");
        },function(){
            $(".hk7").css("display","none");
        });
        $(".lie_two_box8").hover(function(){
            $(".hk8").css("display","block");
        },function(){
            $(".hk8").css("display","none");
        });
       $(".links_h a").each(function(index){

            $(this).hover(function(){
                $(".links_h a").removeClass("over");
                $(".links_h a").eq(index).addClass("over");
                $(".links_m").css("display","none");
                $(".links_m").eq(index).css("display","block");
            });
        });
        $("#pastToggle>span").each(function(index){
        $(this).mouseover(function(){
            $("#pastToggle>span").removeClass("title-over");
            $(this).addClass("title-over");
            $("div[id^='CaseTab-']").css("display","none");
            $("#CaseTab-"+index).fadeToggle(200);
            });
        });



        // 幻灯片
        $('#indexSlide').responsiveSlides({
            pager: true,
            nav: true,
            namespace: 'centered-btns',
        });

        /*//友情链接
        $(".z_links .links_h a").each(function(i){
            $(this).attr("links_h",i)   
        });
        
        $(".z_links .links_h a").bind("mouseover",function(){
            $(".z_links .links_h a").removeClass("over");
            $(this).addClass("over");
            $(".links_m").hide();
            $(".links_m").eq($(this).attr("links_h")).show();
        });
        */
        
        //行业动态
        $(".z_news .news_left .left_wor1").eq(0).css({"border-top":"0px"});
        $(".z_news .news_left .left_wor1").eq(3).css({"border-top":"0px"});
        
        $(".z_news .news_right dl").eq(0).css({"border-top":"0px"});
        $(".z_news .news_right .r_t").eq(0).css({"border-top":"0px"});
        $(".z_news .news_right .r_t_hover").eq(0).css({"border-top":"0px"});


       


});


// input ie8  placeholder OP
        if( !('placeholder' in document.createElement('input')) ){
           
            $('input[placeholder],textarea[placeholder]').each(function(){

                
                var that = $(this),
                    text= that.attr('placeholder');

                  
                if(that.val()===""){    
                    that.val(text).addClass('placeholder');

                }
                that.focus(function(){
                    if(that.val()===text){
                        that.val("").removeClass('placeholder');
                        that.css("color","#333");
                    }
                })
                    .blur(function(){
                        if(that.val()===""){
                            that.val(text).addClass('placeholder');
                            that.css("color","#999");
                        }
                    })
                    .closest('form').submit(function(){
                        if(that.val() === text){
                            that.val('');
                        }
                    });
            });
        }
// input ie8  placeholder ED8
function xiaoshi(){
     $(".error").css("display","none");
}