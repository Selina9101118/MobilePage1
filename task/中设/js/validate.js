//身份证验证
function IdentityCodeValid2(code) {
    var reg = new RegExp("^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$");
    if (!reg.test(obj.value)) {
        return false;
    }

    return true;
}

function IdentityCodeValid2(code) {
    var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    var tip = "";
    var pass = true;

    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    }

    else if (!city[code.substr(0, 2)]) {
        tip = "地址编码错误";
        pass = false;
    }
    else {
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if (parity[sum % 11] != code[17]) {
                tip = "校验位错误";
                pass = false;
            }
        }
    }
    //if(!pass) alert(tip);
    return pass;
}
function IdentityCodeValid(card) {
    var pass = true;
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        // alert("身份证输入不合法");
        pass = false;
    }
    return pass;
}

//手机号验证
function checkPhone(phoneNO) {
    var pass = true;
    if (phoneNO.length == 11 && /^(13[0-9]|15[012356789]|17[34678]|18[0-9]|14[57])[0-9]{8}$/.test(phoneNO)) {
        return true;
    }
    return false;
}
//固话验证
function checkTelephoneNO(str) {
    var re = /^0\d{2,3}-?\d{7,8}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}
//检查空值
function isNullOrEmpty(strVal) {
    if (strVal == '' || strVal == null || strVal == undefined || strVal == "undefined") {
        return true;
    } else {
        return false;
    }
}
//组织机构代码 9位数字
function checkOrganizationCode(code) {
    if (code.length == 10 && /^([0-9a-z]){8}-[0-9|x|X]$/.test(code)) {
        return true;
    } else if (code.length == 9 && /^([0-9a-z]){8}[0-9|x|X]$/.test(code)) {
        return true;
    }
    return false;

}
//营业执照号码15位数字
function checkLicenceNo(code) {
    if (code.length == 15 && /^\d{15}$/.test(code)) {
        return true;
    }
    return false;
}
//检查非法字符
function checkValue(code) {
    if (/[！￥·～％！＄｀～％！￥·~%@!#~`\^\$%\^&\*]+/g.test(code)) {
        return true;
    }
    return false;
}
//描述里不能带“测试,反共产党...”等
function filterVal(value) {
    var filter = "测试,反共产党";
    var str = new Array();

    str = filter.split(",");
    for (i = 0; i < str.length; i++) {
        if (value.indexOf(str[i]) == 0) {
            return true;
        }
    }
    return false;
}
//统一检查
function checkAllValue(value) {
    if (filterVal(value) || checkValue(value)) {
        return true;
    } else {
        return false;
    }
}

function checkChineseCharacter(value) {
    var reg = /^[\u2E80-\u9FFF]+$/;//Unicode编码中的汉字范围
    if (reg.test(value)) {
        return true;
    } else {
        return false;
    }
}

//验证QQ

function isQQ(qq) {
    if (qq.search(/^[1-9]\d{4,10}$/) != -1) {
        return true;
    } else {
        return false;
    }
}

//判断是否为正数
function validatePositiveNumber(num) {
    var reg = /^\d+(?=\.{0,1}\d+$|$)/
    if (reg.test(num)) return true;
    return false;
}

function isPriceNumber(_keyword){
    if(_keyword == "0" || _keyword == "0." || _keyword == "0.0" || _keyword == "0.00"){
        _keyword = "0"; return true;
    }else{
        var index = _keyword.indexOf("0");
        var length = _keyword.length;
        if(index == 0 && length>1){/*0开头的数字串*/
            var reg = /^[0]{1}[.]{1}[0-9]{1,2}$/;
            if(!reg.test(_keyword)){
                return false;
            }else{
                return true;
            }
        }else{/*非0开头的数字*/
            var reg = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;
            if(!reg.test(_keyword)){
                return false;
            }else{
                return true;
            }
        }
        return false;
    }
}