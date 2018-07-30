function initDict(title,trigger,data){
    var mobileSelect = new MobileSelect({
        trigger: trigger,
        title: title,
        wheels: [
            {data:data}
        ],
        position:[0],
        callback:function(indexArr, data){
            console.log(data);
            if(data.length > 0){
                console.log(data[0]);
                var key = data[0];
                $(trigger).prev().val(key);
            }else{
                $(trigger).prev().val("");
            }
        }//初始化定位
    });
}

$(function(){
    // //性别选择
    // initDict("性别",'#sexTrigger',['男','女']);
    // //学历
    // initDict("学历",'#xlTrigger',['博士','硕士','本科','专科']);
    // //工龄
    // initDict("最高工龄",'#glTrigger',['5-10年','11-14年','15年以上']);
    // //承接项目
    // initDict("承接项目",'#cjxmTrigger',['大型项目','中型项目','小型项目']);
    // //一级目录
    // initDict("一级目录",'#cczyYjTrigger1',['道路专业','桥梁专业','给排水专业','供配电专业','园林专业','自动化控制专业']);
    // //二级专业
    // initDict("二级专业",'#cczyEjTrigger1',['道路工程专业','支挡结构及高边坡专业','交通工程专业','立交工程专业','桥、涵专业','市政给排水专业','道路供配电及照明专业','道路绿化及景观设计专业','电气及自控专业']);

    //删除行
    $("body").on("click", ".deleteRow", function() {
        $this = $(this);
        var subformBody = $this.parents('.x-subform-body');
        $this.parents('.x-subform-line').remove();
        var subformLine = $(subformBody).find('.x-subform-line');
        for (var i = 0; i < subformLine.length ;i++){
            var num = i+1;
            $(subformLine[i]).find('.subform-text-num').text("("+num+")");
        }
    })
    //审查专业添加
    $('.sczy_btn_add').click(function(){
        $this = $(this);
        var index = $this.parents('.x-subform').find('.x-subform-line').length;
        var num = index +1;
        var subformRow = '<div class="x-subform-line expand  sczy-subform-row">\n' +
            '<div class="x-subform-title">\n' +
            '    <a class="x-subform-delete deleteRow">\n' +
            '        <i class="icon icon-trash"></i>\n' +
            '    </a>\n' +
            '    <i class="icon-arrow icon-arrow-right"></i>\n' +
            '    <span class="x-subform-text subform-text-num">('+num+') </span>\n' +
            '</div>\n' +
            '<div class="x-subform-cell" namecol="_widget_1530519603429">\n' +
            '    <div class="x-subform-label">\n' +
            '        <div class="x-subform-label-text">\n' +
            '            一级目录<span class="f-required" style="display: none;" >*</span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="x-subform-cell-widget x-combo" wn="_widget_1530519603429" >\n' +
            '        <select class="selectpicker fui_trigger-input shzyYjSelectPicker" title="请选择" >\n' +
            '            <option value="道路专业">道路专业</option>\n' +
            '            <option value="桥梁专业">桥梁专业</option>\n' +
            '            <option value="给排水专业">给排水专业</option>\n' +
            '            <option value="供配电专业">供配电专业</option>\n' +
            '            <option value="园林专业">园林专业</option>\n' +
            '            <option value="自动化控制专业">自动化控制专业</option>\n' +
            '        </select>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="x-subform-cell" namecol="_widget_1530519603812">\n' +
            '    <div class="x-subform-label">\n' +
            '        <div class="x-subform-label-text">\n' +
            '            二级专业<span class="f-required" style="display: none;">*</span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="x-subform-cell-widget x-combocheck" wn="_widget_1530519603812">\n' +
            '        <select class="selectpicker fui_trigger-input shzyEjSelectPicker" multiple title="请选择" >\n' +
            '            <option value="道路工程专业">道路工程专业</option>\n' +
            '            <option value="支挡结构及高边坡专业">支挡结构及高边坡专业</option>\n' +
            '            <option value="交通工程专业">交通工程专业</option>\n' +
            '            <option value="立交工程专业">立交工程专业</option>\n' +
            '            <option value="桥、涵专业">桥、涵专业</option>\n' +
            '            <option value="市政给排水专业">市政给排水专业</option>\n' +
            '            <option value="道路供配电及照明专业">道路供配电及照明专业</option>\n' +
            '            <option value="道路绿化及景观设计专业">道路绿化及景观设计专业</option>\n' +
            '            <option value="电气及自控专业">电气及自控专业</option>\n' +
            '        </select>\n' +
            '    </div>\n' +
            '</div>\n' +
            '</div>';
        $this.parents('.x-subform').find('.x-subform-body').append(subformRow);
        $('.selectpicker').selectpicker('render');
    })
    //资格证书添加
    $('.zgzs_btn_add').click(function(){
        $this = $(this);
        var index = $this.parents('.x-subform').find('.x-subform-line').length;
        var num = index +1;
        var subformRow = ' <div class="x-subform-line expand zgzs-subform-row">\n' +
            '<div class="x-subform-title">\n' +
            '    <a class="x-subform-delete deleteRow">\n' +
            '        <i class="icon icon-trash"></i>\n' +
            '    </a>\n' +
            '    <i class="icon-arrow icon-arrow-right"></i>\n' +
            '    <span class="x-subform-text subform-text-num">('+num+') </span>\n' +
            '</div>\n' +
            '<div class="x-subform-cell" namecol="_widget_1530519603505">\n' +
            '    <div class="x-subform-label">\n' +
            '        <div class="x-subform-label-text">\n' +
            '            证书名字<span class="f-required" style="display: none;">*</span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="x-subform-cell-widget x-text" wn="_widget_1530519603505">\n' +
            '        <input type="text" placeholder="请输入文本内容" class="zgzsName">\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="x-subform-cell" namecol="_widget_1530519603526">\n' +
            '    <div class="x-subform-label">\n' +
            '        <div class="x-subform-label-text">\n' +
            '            证书照片<span class="f-required" style="display: none;">*</span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="x-subform-cell-widget x-fileupload x-image-upload" data-watermark="暂无内容">\n' +
            '        <div class="upload-info" style="display:none;">\n' +
            '            <div class="upload-preview">\n' +
            '                <img src="http://gc.zbj.com/qyly/file/read/1331" class="upload_show_image image-thumb" style="height: 158px;width: 158px;">\n' +
            '            </div>\n' +
            '            <div class="delete-btn">\n' +
            '                <i class="icon-flow-close"></i>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="upload-btn x-btn">\n' +
            '            <div class="btn-wrapper">\n' +
            '                <i class="icon-plus upload-icon"></i>\n' +
            '                <span class="upload-text">选择图片</span>\n' +
            '            </div>\n' +
            '            <input type="file" name="file" class="upload-btn-input upload-btn-input-add" multiple="true" accept="image/jpg,image/jpeg,image/png,image/gif"></div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '</div>';
        $this.parents('.x-subform').find('.x-subform-body').append(subformRow);
        $('.selectpicker').selectpicker('render');
    })
    //上传业绩
    $("body").on("change", ".upload-btn-input-add", function() {
        $this = $(this);
        //文件上传
        var fd = new FormData();
        var file = $this.parent().find(".upload-btn-input-add").get(0).files[0];
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
                    var path = "http://gc.zbj.com/qyly/file/read/"+data.result.id;
                    var url = ''
                    $this.parents('.x-image-upload').find('.upload_show_image').attr("src",path);
                    $this.parent().hide();
                    $this.parents('.x-image-upload').find('.upload-info').show();
                    alert("上传成功！");
                }else{
                    alert(data.msg);
                }
            }
        });
    });
    //上传业绩
    $("body").on("change", ".upload-btn-input-bu", function() {
        $this = $(this);
        //文件上传
        var fd = new FormData();
        var file = $this.parent().find(".upload-btn-input-bu").get(0).files[0];
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
                    var path = "http://gc.zbj.com/qyly/file/read/"+data.result.id;
                    var uploadInfo = '<div class="upload-info">\n' +
                        '<div class="upload-preview">\n' +
                        '    <img src="'+path+'" class="upload_show_image image-thumb uploadInfoShowImage" style="height: 40px;width: 40px;">\n' +
                        '</div>\n' +
                        '<div class="upload-file-info">\n' +
                        '    <div class="name-text">'+file.name+'</div>\n' +
                        '    <div class="info-text">'+(file.size/1024).toFixed(2) +'KB</div>\n' +
                        '</div>\n' +
                        '<div class="x-progress x-ui-hidden" wn="_widget_1532592543874">\n' +
                        '    <div class="progress-bar" style="width: 100%;"></div>\n' +
                        '</div>\n' +
                        '<i class="delete-btn icon-trash deleteImage"></i>\n' +
                        '</div>';
                    $this.parents('.upload-btn').before(uploadInfo);
                    alert("上传成功！");
                }else{
                    alert(data.msg);
                }
            }
        });
    });
    //删除图片
    $("body").on("click", ".deleteImage", function() {
        $this = $(this);
        $this.parents('.x-image-upload').find('.upload_show_image').attr("src","");
        $this.parents('.x-image-upload').find('.upload-info').hide();
        $this.parents('.x-image-upload').find('.upload-btn').show();
    })

    //职称信息添加
    $('.zcxx_btn_add').click(function(){
        $this = $(this);
        var index = $this.parents('.x-subform').find('.x-subform-line').length;
        var num = index +1;
        var subformRow = '<div class="x-subform-line expand zgzs-subform-row">\n' +
            '<div class="x-subform-title">\n' +
            '    <a class="x-subform-delete deleteRow">\n' +
            '        <i class="icon icon-trash"></i>\n' +
            '    </a>\n' +
            '    <i class="icon-arrow icon-arrow-right"></i>\n' +
            '    <span class="x-subform-text subform-text-num">('+num+') </span>\n' +
            '</div>\n' +
            '<div class="x-subform-cell" namecol="_widget_1530519603505">\n' +
            '    <div class="x-subform-label">\n' +
            '        <div class="x-subform-label-text">\n' +
            '            证书名字<span class="f-required" style="display: none;">*</span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="x-subform-cell-widget x-text" wn="_widget_1530519603505">\n' +
            '        <input type="text" placeholder="请输入文本内容" class="zgzsName">\n' +
            '    </div>\n' +
            '</div>\n' +
            '<div class="x-subform-cell" namecol="_widget_1530519603526">\n' +
            '    <div class="x-subform-label">\n' +
            '        <div class="x-subform-label-text">\n' +
            '            证书照片<span class="f-required" style="display: none;">*</span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="x-subform-cell-widget x-fileupload x-image-upload" data-watermark="暂无内容">\n' +
            '        <div class="upload-info" style="display:none;">\n' +
            '            <div class="upload-preview">\n' +
            '                <img src="" class="upload_show_image image-thumb " style="height: 80px;width: 80px;">\n' +
            '            </div>\n' +
            '            <div class="delete-btn">\n' +
            '                <i class="icon-flow-close deleteImage"></i>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="upload-btn x-btn">\n' +
            '            <div class="btn-wrapper">\n' +
            '                <i class="icon-plus upload-icon"></i>\n' +
            '                <span class="upload-text">选择图片</span>\n' +
            '            </div>\n' +
            '            <input type="file" name="file" class="upload-btn-input upload-btn-input-add" multiple="true" accept="image/jpg,image/jpeg,image/png,image/gif"></div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '</div>';
        $this.parents('.x-subform').find('.x-subform-body').append(subformRow);
        $('.selectpicker').selectpicker('render');
    })
    $("body").on("click", ".submitBtn", function() {
        $this = $(this);
        var specialistName = $('#specialistName').val();
        if(isNullOrEmpty(specialistName)){
            alert("请输入姓名！")
            return false;
        }
        var specialistIdCard = $('#specialistIdCard').val();
        if(isNullOrEmpty(specialistIdCard)){
            alert("请输入身份证！")
            return false;
        }else if(!IdentityCodeValid(specialistIdCard)){
            alert("身份证格式错误！")
            return false;
        }
        var sexSelectPicker = $('#sexSelectPicker').val();
        if(isNullOrEmpty(sexSelectPicker)){
            alert("请选择性别！")
            return false;
        }
        var xlSelectPicker = $('#xlSelectPicker').val();
        if(isNullOrEmpty(xlSelectPicker)){
            alert("请选择最高学历！")
            return false;
        }
        var glSelectPicker = $('#glSelectPicker').val();
        if(isNullOrEmpty(glSelectPicker)){
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

})