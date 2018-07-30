$(function(){
    //审查专业添加
    $('.sczy_btn_add').click(function(){
        $this = $(this);
        var index = $this.parents('.fui_subform').find('.subform-row').length - 1;
        var num = index +1;
        var subformRow = ' <div class="subform-row sczy-subform-row" row-idx="'+index+'" >\n' +
            '    <div class="subform-cell" style="left: 66px; width: 210px;"\n' +
            '         namecol="_widget_1530519603429">\n' +
            '        <div widgetname="_widget_1530519603429" style="width: 200px; height: 30px;">\n' +
            '            <div class="fui_combo_table" widgetname="_widget_1530519603429" style="width: 200px; height: 30px; line-height: 28px;">\n' +
            '                <select class="selectpicker fui_trigger-input shzyYjSelectPicker" title="请选择">\n' +
            '                    <option value="道路专业">道路专业</option>\n' +
            '                    <option value="桥梁专业">桥梁专业</option>\n' +
            '                    <option value="给排水专业">给排水专业</option>\n' +
            '                    <option value="供配电专业">供配电专业</option>\n' +
            '                    <option value="园林专业">园林专业</option>\n' +
            '                    <option value="自动化控制专业">自动化控制专业</option>\n' +
            '                </select>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="subform-cell" style="left: 276px; width: 330px;"\n' +
            '         namecol="_widget_1530519603812">\n' +
            '        <div widgetname="_widget_1530519603812" style="width: 330px; height: 30px;">\n' +
            '            <div class="fui_combocheck_second" widgetname="_widget_1530519603812" style="width: 330px; height: 30px; line-height: 28px;">\n' +
            '                <select class="selectpicker fui_trigger-input shzyEjSelectPicker" multiple title="请选择">\n' +
            '                    <option value="道路工程专业">道路工程专业</option>\n' +
            '                    <option value="支挡结构及高边坡专业">支挡结构及高边坡专业</option>\n' +
            '                    <option value="交通工程专业">交通工程专业</option>\n' +
            '                    <option value="立交工程专业">立交工程专业</option>\n' +
            '                    <option value="桥、涵专业">桥、涵专业</option>\n' +
            '                    <option value="市政给排水专业">市政给排水专业</option>\n' +
            '                    <option value="道路供配电及照明专业">道路供配电及照明专业</option>\n' +
            '                    <option value="道路绿化及景观设计专业">道路绿化及景观设计专业</option>\n' +
            '                    <option value="电气及自控专业">电气及自控专业</option>\n' +
            '                </select>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="subform-cell" style="left: 606px; width: 30px;" namecol="_widget_1530519603812">\n' +
            '        <a href="javascript:void(0)" class="deleteRow"> 删除</a>\n' +
            '    </div>\n' +
            '</div>';
        var rowHead ='<div class="row-head" row-idx="'+index+'">\n' +
            '    <div class="row-num">'+num+'</div>\n' +
            '    <i class="head-icon icon-remove " role="delete"></i>\n' +
            '</div>';
        $this.parents('.fl-widget').find('.subform-content').append(subformRow);
        $this.parents('.fl-widget').find('.fix-row-head').append(rowHead);
        $('.selectpicker').selectpicker('render');
    })
    //删除行
    $("body").on("click", ".deleteRow", function() {
        $this = $(this);
        $this.parents('.fl-widget').find('.fix-row-head .row-head:last-child').remove();
        $this.parents('.subform-row').remove();
    })
    //上传
    $("body").on("change", ".res_file", function() {
        $this = $(this);
        $this.parents('.fui_combocheck_second').find(".upload_show_image").attr("src","");
        //文件上传
        var fd = new FormData();
        fd.append("file",  $this.parent().find(".res_file").get(0).files[0]);
        $.ajax({
            url: "http://gc.zbj.com/qyly/file/photoUpload.json",
            type: "POST",
            processData: false,
            contentType: false,
            data: fd,
            dataType : 'JSON',
            success: function(data){
                if(data.success){
                    $this.parent().find(".pd_jyxy_img_name").val(data.result.name);
                    var path = "http://gc.zbj.com/qyly/file/read/"+data.result.id;
                    $this.parent().find(".pd_jyxy_img_fileId").val(path);
                    $this.parents('.fui_combocheck_second').find("form").hide();
                    $this.parents('.fui_combocheck_second').find(".upload_show_image").attr("src",path);
                    $this.parents('.fui_combocheck_second').find(".show_image").show();
                    alert("上传成功！");
                }else{
                    alert(data.msg);
                }
            }
        });
    });
    $("body").on("click", ".deleteImage", function() {
        $this = $(this);
        $this.parents('.fui_combocheck_second').find(".res_file").val('');
        $this.parents('.fui_combocheck_second').find("form").show();
        $this.parents('.fui_combocheck_second').find(".show_image").hide();
    })
    //资格证书添加
    $('.zgzs_btn_add').click(function(){
        $this = $(this);
        var index = $this.parents('.fui_subform').find('.subform-row').length - 1;
        var num = index +1;
        var subformRow = ' <div class="subform-row zgzs-subform-row" row-idx="'+index+'" >\n' +
                            '<div class="subform-cell" style="left: 66px; width: 210px;"\n' +
                            '     namecol="_widget_1530519603429">\n' +
                            '    <div widgetname="_widget_1530519603429" style="width: 200px; height: 30px;">\n' +
                            '        <div class="fui_combo_table" widgetname="_widget_1530519603429" style="width: 200px; height: 30px; line-height: 28px;">\n' +
                            '            <input class="x-input zgzsName" type="text" >\n' +
                            '        </div>\n' +
                            '    </div>\n' +
                            '</div>\n' +
                            '<div class="subform-cell" style="left: 276px; width: 330px;"\n' +
                            '     namecol="_widget_1530519603812">\n' +
                            '    <div widgetname="_widget_1530519603812" style="width: 330px; height: 30px;">\n' +
                            '        <div class="fui_combocheck_second" widgetname="_widget_1530519603812" style="width: 330px; height: 30px; line-height: 28px;">\n' +
                            '            <form action="#" method="post" enctype="multipart/form-data" class="fui_combocheck_form">\n' +
                            '                <input type="file" name="file" class="res_file" style="font-size: 12px">\n' +
                            '                <input type="hidden" name="name" class="pd_jyxy_img_name"/>\n' +
                            '                <input type="hidden" name="fileId" class="pd_jyxy_img_fileId"/>\n' +
                            '            </form>\n' +
                            '            <div class="show_image" style="display: none">\n' +
                            '                <img src="" class="upload_show_image" style="height: 30px">\n' +
                            '                <a href="javascript:void(0)" class="deleteImage"> 删除</a>\n' +
                            '            </div>\n' +
                            '        </div>\n' +
                            '    </div>\n' +
                            '</div>\n' +
                            '<div class="subform-cell" style="left: 606px; width: 30px;" namecol="_widget_1530519603812">\n' +
                            '    <a href="javascript:void(0)" class="deleteRow"> 删除</a>\n' +
                            '</div>\n' +
                        '</div>';
        var rowHead ='<div class="row-head" row-idx="'+index+'">\n' +
            '    <div class="row-num">'+num+'</div>\n' +
            '    <i class="head-icon icon-remove " role="delete"></i>\n' +
            '</div>';
        $this.parents('.fl-widget').find('.subform-content').append(subformRow);
        $this.parents('.fl-widget').find('.fix-row-head').append(rowHead);
    })
    //职称信息添加
    $('.zcxx_btn_add').click(function(){
        $this = $(this);
        var index = $this.parents('.fui_subform').find('.subform-row').length - 1;
        var num = index +1;
        var subformRow = '<div class="subform-row zcxx-subform-row" row-idx="'+index+'" >\n' +
            '<div class="subform-cell" style="left: 66px; width: 210px;" namecol="_widget_1530519603429">\n' +
            '    <div widgetname="_widget_1530519603429" style="width: 200px; height: 30px;">\n' +
            '        <div class="fui_combo_table" widgetname="_widget_1530519603429" style="width: 200px; height: 30px; line-height: 28px;">\n' +
            '            <input class="x-input zcxxName" type="text">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="subform-cell" style="left: 276px; width: 210px;" namecol="_widget_1530519603429">\n' +
            '    <div widgetname="_widget_1530519603429" style="width: 200px; height: 30px;">\n' +
            '        <div class="fui_combo_table" widgetname="_widget_1530519603429" style="width: 200px; height: 30px; line-height: 28px;">\n' +
            '            <select class="selectpicker fui_trigger-input zcxxSelectpicker" title="请选择">\n' +
            '                <option value="道路专业">道路专业</option>\n' +
            '                <option value="桥梁专业">桥梁专业</option>\n' +
            '                <option value="给排水专业">给排水专业</option>\n' +
            '                <option value="供配电专业">供配电专业</option>\n' +
            '                <option value="园林专业">园林专业</option>\n' +
            '                <option value="自动化控制专业">自动化控制专业</option>\n' +
            '            </select>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="subform-cell" style="left: 486px; width: 190px;" namecol="_widget_1530519603812">\n' +
            '    <div widgetname="_widget_1530519603812" style="width:190px; height: 30px;">\n' +
            '        <div class="fui_combocheck_second" widgetname="_widget_1530519603812" style="width: 330px; height: 30px; line-height: 28px;">\n' +
            '            <form action="#" method="post" enctype="multipart/form-data" class="fui_combocheck_form">\n' +
            '                <input type="file" name="file" class="res_file" style="font-size: 12px">\n' +
            '                <input type="hidden" name="name" class="pd_jyxy_img_name"/>\n' +
            '                <input type="hidden" name="fileId" class="pd_jyxy_img_fileId"/>\n' +
            '            </form>\n' +
            '            <div class="show_image" style="display: none">\n' +
            '                <img src="" class="upload_show_image" style="height: 30px">\n' +
            '                <a href="javascript:void(0)" class="deleteImage"> 删除</a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="subform-cell" style="left: 676px; width: 30px;" namecol="_widget_1530519603812">\n' +
            '    <a href="javascript:void(0)" class="deleteRow"> 删除</a>\n' +
            '</div>\n' +
            '</div>';
        var rowHead ='<div class="row-head" row-idx="'+index+'">\n' +
            '    <div class="row-num">'+num+'</div>\n' +
            '    <i class="head-icon icon-remove " role="delete"></i>\n' +
            '</div>';
        $this.parents('.fl-widget').find('.subform-content').append(subformRow);
        $this.parents('.fl-widget').find('.fix-row-head').append(rowHead);
        $('.selectpicker').selectpicker('render');
    })
    //上传业绩 upload-btn-input"
    $("body").on("change", ".upload-btn-input", function() {
        $this = $(this);
        //文件上传
        var fd = new FormData();
        var file = $this.parent().find(".upload-btn-input").get(0).files[0];
        fd.append("file", file );
        $.ajax({
            url: "http://gc.zbj.com/qyly/file/photoUpload.json",
            type: "POST",
            processData: false,
            contentType: false,
            data: fd,
            dataType : 'JSON',
            success: function(data){
                if(data.success){
                    $this.parent().find(".pd_jyxy_img_name").val(data.result.name);
                    var path = "http://gc.zbj.com/qyly/file/read/"+data.result.id;
                    var showImage = '<div class="upload-info">\n' +
                                        '<div class="upload-preview">\n' +
                                        '    <img src="'+path+'" width="130" height="130" class="uploadInfoShowImage"/>\n' +
                                        '</div>\n' +
                                        '<div class="upload-file-info">\n' +
                                        '    <div class="info-text">'+file.name+'</div>\n' +
                                        '    <div class="info-sub">'+(file.size/1024).toFixed(2) +'KB</div\n' +
                                        '    ></div>\n' +
                                        '<div class="upload-info-btn remove-btn">\n' +
                                        '    <i class="icon-trasho"></i>\n' +
                                        '</div>\n' +
                                    '</div>';
                    $('.upload-preview-list').append(showImage);
                    alert("上传成功！");
                }else{
                    alert(data.msg);
                }
            }
        });
    });
    //删除业绩
    $("body").on("click", ".icon-trasho", function() {
        $this = $(this);
        $this.parents('.upload-info').remove();
    })
    //删除业绩
    $("body").on("click", ".submitBtn", function() {
        $this = $(this);
        var specialistName = $('#specialistName').val();
        if(isNullOrEmpty(specialistName)){
            $('#specialistName').addClass('x-input-error');
            alert("请输入姓名！")
            return false;
        }
        var specialistIdCard = $('#specialistIdCard').val();
        if(isNullOrEmpty(specialistIdCard)){
            $('#specialistIdCard').addClass('x-input-error');
            alert("请输入身份证！")
            return false;
        }else if(!IdentityCodeValid(specialistIdCard)){
            $('#specialistIdCard').addClass('x-input-error');
            alert("身份证格式错误！")
            return false;
        }
        var sexSelectPicker = $('#sexSelectPicker').val();
        if(isNullOrEmpty(sexSelectPicker)){
            $('#sexSelectPicker').parent().find('.dropdown-toggle').addClass('x-input-error');
            alert("请选择性别！")
            return false;
        }
        var xlSelectPicker = $('#xlSelectPicker').val();
        if(isNullOrEmpty(xlSelectPicker)){
            $('#xlSelectPicker').parent().find('.dropdown-toggle').addClass('x-input-error');
            alert("请选择最高学历！")
            return false;
        }
        var glSelectPicker = $('#glSelectPicker').val();
        if(isNullOrEmpty(glSelectPicker)){
            $('#glSelectPicker').parent().find('.dropdown-toggle').addClass('x-input-error');
            alert("请选择工龄！")
            return false;
        }
        var cjxmSelectPickers = $('#cjxmSelectPicker').val();
        var cjxmSelectPicker = '';
        if(!isNullOrEmpty(cjxmSelectPickers)){
            for(var i = 0 ;i <cjxmSelectPickers.length;i++){
                cjxmSelectPicker = cjxmSelectPicker + cjxmSelectPickers[i] +",";
            }
            if(!isNullOrEmpty(cjxmSelectPicker)){
                cjxmSelectPicker = cjxmSelectPicker.substring(0,cjxmSelectPicker.length-1);
            }
        }
        console.log("cjxmSelectPicker---"+cjxmSelectPicker );
        //审查专业
        var sczyRow = $('.sczy-subform-row');
        var shzyYj ="";
        var shzyEj ="";
        if(sczyRow.length < 1){
            alert("请添加审查专业！")
            return false;
        }else{
            for (var i = 0;i < sczyRow.length; i++){
                var shzyYjSelectPicker = $(sczyRow[i]).find('.shzyYjSelectPicker').val();
                if(isNullOrEmpty(shzyYjSelectPicker)){
                    $(sczyRow[i]).find('.shzyYjSelectPicker').parent().find('.dropdown-toggle').addClass('x-input-error');
                    alert("请选择审核专业一级目录！")
                    return false;
                }
                var shzyEjSelectPicker = $(sczyRow[i]).find('.shzyEjSelectPicker').val();
                if(isNullOrEmpty(shzyEjSelectPicker)){
                    $(sczyRow[i]).find('.shzyEjSelectPicker').parent().find('.dropdown-toggle').addClass('x-input-error');
                    alert("请选择审核专业二级目录！")
                    return false;
                }
                shzyYj = shzyYj + shzyYjSelectPicker +",";
                shzyEj = shzyEj + shzyEjSelectPicker +"&";
            }
            if(!isNullOrEmpty(shzyYj)){
                shzyYj = shzyYj.substring(0,shzyYj.length-1);
            }
            if(!isNullOrEmpty(shzyEj)){
                shzyEj = shzyEj.substring(0,shzyEj.length-1);
            }
            console.log("shzyYj---"+shzyYj +"------shzyEj----------"+shzyEj);
        }
        //资格证书
        var zgzsRow = $('.zgzs-subform-row');
        var zgzsName ="";
        var zgzsImage ="";
        if(zgzsRow.length >0){
            for (var i = 0;i < zgzsRow.length; i++){
                var name = $(zgzsRow[i]).find('.zgzsName').val();
                var image = $(zgzsRow[i]).find('.upload_show_image').attr('src');
                console.log(name);
                console.log(image);
                if(!isNullOrEmpty(name) && !isNullOrEmpty(image)){
                    zgzsName = zgzsName + name +",";
                    zgzsImage = zgzsImage + image +",";
                }else if(isNullOrEmpty(name) && !isNullOrEmpty(image)){
                    alert("请填写证书名称！")
                    return false;
                }else if(!isNullOrEmpty(name) && isNullOrEmpty(image)){
                    alert("请上传证书！")
                    return false;
                }
            }
            if(!isNullOrEmpty(zgzsName)){
                zgzsName = zgzsName.substring(0,zgzsName.length-1);
            }
            if(!isNullOrEmpty(zgzsImage)){
                zgzsImage = zgzsImage.substring(0,zgzsImage.length-1);
            }
            console.log("zgzsName---"+zgzsName +"------zgzsImage----------"+zgzsImage);
        }
        //职称信息
        var zcxxRow = $('.zcxx-subform-row');
        var zcxxName ="";
        var zcxxType ="";
        var zcxxImage ="";
        if(zcxxRow.length >0){
            for (var i = 0;i < zcxxRow.length; i++){
                var name = $(zcxxRow[i]).find('.zcxxName').val();
                var type = $(zcxxRow[i]).find('.zcxxSelectpicker').val();
                var image = $(zcxxRow[i]).find('.upload_show_image').attr('src');
                console.log(name);
                console.log(type);
                console.log(image);
                if(!isNullOrEmpty(name) && !isNullOrEmpty(type) && !isNullOrEmpty(image)){
                    zcxxName = zcxxName + name +",";
                    zcxxType = zcxxType + type +",";
                    zcxxImage = zcxxImage + image +",";
                }else if(isNullOrEmpty(name) && !isNullOrEmpty(type) && !isNullOrEmpty(image)){
                    alert("请填写职称名称！")
                    return false;
                }else if(!isNullOrEmpty(name) && isNullOrEmpty(type) && !isNullOrEmpty(image)){
                    alert("请选择专业！")
                    return false;
                }else if(!isNullOrEmpty(name) && !isNullOrEmpty(type) && isNullOrEmpty(image)){
                    alert("请上传职称照片！")
                    return false;
                }else if(isNullOrEmpty(name) && isNullOrEmpty(type) && !isNullOrEmpty(image)){
                    alert("请填写职称名称和选择专业！")
                    return false;
                }else if(isNullOrEmpty(name) && !isNullOrEmpty(type) && isNullOrEmpty(image)){
                    alert("请填写职称名称和上传职称照片！")
                    return false;
                }else if(!isNullOrEmpty(name) && isNullOrEmpty(type) && isNullOrEmpty(image)){
                    alert("请选择专业和上传职称照片！")
                    return false;
                }
            }
            if(!isNullOrEmpty(zcxxName)){
                zcxxName = zcxxName.substring(0,zcxxName.length-1);
            }
            if(!isNullOrEmpty(zcxxType)){
                zcxxType = zcxxType.substring(0,zcxxType.length-1);
            }
            if(!isNullOrEmpty(zcxxImage)){
                zcxxImage = zcxxImage.substring(0,zcxxImage.length-1);
            }
            console.log("zcxxName---"+zcxxName +"------zcxxType----------"+zcxxType+"------zcxxImage----------"+zcxxImage);
        }

        //过往工作业绩
        var uploadInfoShowImage = $('.uploadInfoShowImage');
        if(uploadInfoShowImage.length < 1){
            alert("请上传过往工作业绩！")
            return false;
        }else{
            var urls ="";
            for (var i = 0;i < uploadInfoShowImage.length; i++){
                urls = urls + $(uploadInfoShowImage[i]).attr('src') +",";
            }
            if(!isNullOrEmpty(urls)){
                urls = urls.substring(0,urls.length-1);
            }
        }
        console.log("zcxxName---"+zcxxName +"------zcxxType----------"+zcxxType+"------zcxxImage----------"+zcxxImage);
        var data = {
            "name":specialistName,
            "idcards":specialistIdCard,
            "sex":sexSelectPicker,
            "degree":xlSelectPicker,
            "workingYear":glSelectPicker,
            "type":cjxmSelectPicker,
            "firstSpecialty":shzyYj,
            "secondSpecialty":shzyEj,
            "certificateName":zgzsName,
            "certificateImg":zgzsImage,
            "professionalName":zcxxName,
            "professionalSpecialty":zcxxType,
            "professionalImg":zcxxImage,
            "files":urls
        };
        $.ajax({
            url: "http://gc.zbj.com/bjzs/renren-fast/project/specialist/save",
            type: "POST",
            data : JSON.stringify(data),
            contentType: "application/json;charset=UTF-8",
            dataType: 'json',
            success: function(data){
                if(data.code == 0){
                    alert("提交成功！");
                }else{
                    alert("提交失败！");
                }
                console.log(data);
            }
        });

    })
    $("body").on("click", "input", function() {
        $(this).removeClass('x-input-error');
    })
    $("body").on("click", "button", function() {
        $(this).parent().find('.dropdown-toggle').removeClass('x-input-error');
    })

})