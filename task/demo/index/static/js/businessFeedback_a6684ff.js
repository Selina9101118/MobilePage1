define("poidetail:widget/ui/businessFeedback/businessFeedback.js",function(require,exports,module){var poiUtl=require("poidetail:widget/libs/poiDetailUtil/poiDetailUtil.js"),style=".poidetail-widget-businessFeedback{padding:15px 0;text-align:center}.poidetail-widget-businessFeedback .pic-common{background-image:url(//webmap0.bdimg.com/wolfman/static/poidetail/images/generalInfo/detail-general-info_7a530db.png);background-repeat:no-repeat}.poidetail-widget-businessFeedback .bottom-button{text-decoration:none;margin:0 4px;padding:0 17px;border:1px solid #ddd;border-radius:2px;display:inline-block;line-height:30px;font-size:12px;color:#333;text-align:center;height:29px}.poidetail-widget-businessFeedback .bottom-button .pic-common{display:inline-block;top:2px;position:relative;margin-right:7px}.poidetail-widget-businessFeedback a.businessFeedback-business .pic-common{top:2px;background-position:0 -386px;width:12px;height:14px}.poidetail-widget-businessFeedback a.businessFeedback-feedback-link .pic-common{top:2px;background-position:0 -134px;width:14px;height:14px}@media only screen and (-webkit-min-device-pixel-ratio:2),(-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.poidetail-widget-businessFeedback .pic-common{background-image:url(//webmap0.bdimg.com/wolfman/static/poidetail/images/generalInfo/general-infox2_5de0e66.png);background-size:89px 20px}.poidetail-widget-businessFeedback a.businessFeedback-business .pic-common{background-position:-52px 0}.poidetail-widget-businessFeedback a.businessFeedback-feedback-link .pic-common{background-position:-64px 0}}";require.loadCss({content:style,name:"businessFeedback"}),module.exports=Widget.extend({render:function(data){try{var template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="poidetail-widget-businessFeedback bottom-split">    ');var url=data.url?data.url:"javascript:void(0);";_template_fun_array.push("    "),data.showbusver&&_template_fun_array.push('    <a class="businessFeedback-business bottom-button" href="http://biaozhu.baidu.com/?uid=',"undefined"==typeof data.uid?"":baidu.template._encodeHTML(data.uid),'&from=detailverify#/mark-basic" target=&#39;_blank&#39;>        <span class="pic-common"></span>免费认领本店    </a>'),_template_fun_array.push('<a class="businessFeedback-feedback-link bottom-button" href="',"undefined"==typeof url?"":baidu.template._encodeHTML(url),'" target="_blank"><span class="pic-common"></span>我要报错</a></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],data=this.preProcessTemplateData(data),html=template(data);return html}catch(e){"undefined"!=typeof alog&&alog("exception.fire","catch",{msg:e.message||e.description,path:"poidetail:widget/ui/businessFeedback/businessFeedback.js",ln:19})}},preProcessTemplateData:function(e){var i="http://i.map.baidu.com/api/page/poicorrect/addpoiproblempc?",a={};if(a.business_trigger=12,e.uid&&(a.poi_uid=e.uid),e.url=i+$.ajax.param(a),e.showbusver=!1,e.ext&&e.ext.detail_info&&e.ext.detail_info.mbc&&e.ext.detail_info.mbc.markv){var t=""+e.ext.detail_info.mbc.markv;"3"===t&&(e.showbusver=!0)}return(poiUtl.isEmptyobj(e.ext)||"dt_stop"===e.ext.src_name||e.ext.detail_info&&e.ext.detail_info.std_tag&&e.ext.detail_info.std_tag.indexOf("公交车站")>-1||e.ext.detail_info.tag&&e.ext.detail_info.tag.indexOf("车站")>-1||e.poiType&&1===e.poiType)&&window.addStat("poidetail.busstop.render","show"),e},renderComplete:function(e){try{e.find(".businessFeedback-business").bind("click",function(){addStat("poidetail.feedback.claim","click")}),e.find(".businessFeedback-feedback-link").bind("click",function(){addStat("poidetail.feedback.error","click")})}catch(i){"undefined"!=typeof alog&&alog("exception.fire","catch",{msg:i.message||i.description,path:"poidetail:widget/ui/businessFeedback/businessFeedback.js",ln:81})}},name:"businessFeedback"})});