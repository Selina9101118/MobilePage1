define("common:widget/ui/ui3MapSuggest/ui3MapSuggest.js",function(require,exports,module){var initialize=function(opts){function escapeXSS(t){return(t||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}try{var config=require("common:widget/ui/config/config.js"),modelConfig=config.modelConfig,mapConfig=config.mapConfig,util=require("common:widget/ui/util/util.js"),ui3SetMyPlace=require("common:widget/route/setMyPlace/ui3SetMyPlace.js"),hisMgr=require("common:widget/ui/searchHistory/hisMgr.js"),toast=require("common:widget/ui/toast/toast.js"),userMgr=require("common:widget/ui/userMgr/userMgr.js"),ipLocation=require("common:widget/com/IpLocation/IpLocation.js"),defaults={input:null,url:"/su",cityId:modelConfig.cityCode,type:0,from:null,adjustTop:0,adjustLeft:0,adjustWidth:0,"z-index":1e3,top:0,left:0,width:0,isAutoWidth:!1,onSelect:null,onClose:null,onShowWrap:null,onlyPrecise:!1,showMyPlace:!1,hasHistory:!0};opts=T.extend(defaults,opts);var input=opts.input;if(!input)return;"$DOM"!==T.type(input)&&(input=opts.input=T(opts.input));var wrap,that,wrapType,HOVER_CLASS="ui3-suggest-item-hover",body=T(document.body),isOwnSuggestWrap=!0,keyMap={16:1,17:1,18:1,27:1,91:1,92:1,38:1,40:1,13:1},ui3MapSuggest=that={work:function(){that.isInSuggestList=!1,this.bindInputEvents()},bindInputEvents:function(){input.bind("keyup",this.processKeyUp).bind("keydown",this.processKeyDown).bind("focus",this.processFocus).bind("click",this.processClick).bind("blur",this.processBlur).bind("copy",this.processCopy).bind("paste",this.processPaste.bind(this))},processFocus:function(){this.onBlur=!1},processBlur:function(){that.isInSuggestList||(this.onBlur=!0,setTimeout(function(){that.hide()},100))},processClick:function(){!opts.hasHistory||""!==T.trim(input.val())||that.onEnter||that.onBlur||setTimeout(function(){that.processData(),"search"==opts.from?addStat("search.history.sug","show"):"route"==opts.from?addStat("route.history.sug","show"):"infowindow"===opts.from&&addStat("infowindow.history.sug","show"),addStat("total.history.sug","show")},200)},processKeyDown:function(t){function i(t){var i=t?!1:{extra:n.attr("data-extra")};input.data("sugData",i)}that.onCopy=!1,that.onEnter=!1,that.onBlur=!1;var e=t.keyCode;if(13!==e&&input.data("sugData",!1),!(e in keyMap&&wrap))return 13!=e||wrap||(that.onEnter=!0),void(9==e&&(that.onBlur=!0));27===e&&that.hide();var a;wrap&&(a=wrap.find("."+HOVER_CLASS));var s;a&&!a.length?s=0:a&&(s=a.prevAll("li").length+1);var o,r=that.userKey;wrap&&(o=wrap.find("li"));var n,l;if(38===e&&(0===s?(n=o.eq(-1).addClass(HOVER_CLASS),input.val(n.attr("data-key"))):(a.removeClass(HOVER_CLASS),1===s?(input.val(r),l=!0):(n=o.eq(s-2).addClass(HOVER_CLASS),input.val(n.attr("data-key")))),i(l)),40===e){var p=0;void 0!==that.list?p=that.list.length:void 0!==that.hisList&&null!==that.hisList&&(p=that.hisList.length),0===s?(n=o.eq(0).addClass(HOVER_CLASS),input.val(n.attr("data-key"))):(a.removeClass(HOVER_CLASS),s===o.length?(input.val(r),l=!0):(n=o.eq(s).addClass(HOVER_CLASS),input.val(n.attr("data-key")))),i(l)}if(13==e){if(that.hide(),0===s)return void(that.onEnter=!0);var c=a.attr("data-target");if(c)ui3SetMyPlace.select(c,input);else{var u=a.attr("data-key"),d=a.attr("data-location"),h=a.attr("data-extra")||"";if(input.val(u),"clear"===h)return hisMgr.clearSearchData(),void toast.show("删除成功");opts.onSelect&&opts.onSelect.call(this,u,d,h)}}t.preventDefault()},processInput:function(){},processPaste:function(t){var i=this;setTimeout(function(){i.processKeyUp(t)},0)},processCopy:function(){that.onCopy=!0},processKeyUp:function(t){if(!that.onCopy){var i=t.keyCode;if(!(i in keyMap)){var e=input.val();if(""===e&&that.wrap){if(that.hide(),!opts.hasHistory)return;that.processData(),addStat("search.history.sug","show")}that.userKey=e,that.sendRequest({url:opts.url,cityId:opts.cityId,query:e,type:opts.type})}}},sendRequest:function(t){if(""!==t.query){t=T.extend({url:"",query:"",cityId:"",type:""},t);var i=util.formatBounds({margins:[0,0,0,mapConfig.leftMargin]});0==that.readyState?clearTimeout(that.timeout):1==that.readyState&&that.xhr.abort(),that.readyState=0,that.timeout=setTimeout(function(){that.readyState=1,that.xhr=T.ajax(t.url,{dataType:"json",data:{wd:t.query,cid:t.cityId||opts.cityId,type:t.type,newmap:1,b:i,t:+new Date,pc_ver:2},success:function(i){that.readyState=2,that.data=i,i&&that.processData(t.query,"search")}})},200)}},processData:function(t){var i=this;if(t){if(""===T.trim(input.val())||that.onEnter||that.onBlur)return;var e=this.data,a=e.s;if(!a||!a.length)return void this.hide();var s=hisMgr.getSearchData();s.done(function(e){i.generateHTML({query:t,sug:a,history:e})})}else{var s=hisMgr.getSearchData();s.done(function(t){t.length||opts.showMyPlace?i.generateHTML({history:t}):(i.wrap&&i.wrap.hide(),"search"===opts.from&&i.generateHTML({history:t}))})}},generateHTML:function(param){function deployList(){var history=param.history,hisList=[],length=0,historyTpl,listTpl;if(param.query){history.length&&opts.hasHistory&&T.each(history,function(t,i){i.wd.indexOf(param.query)>=0&&hisList.length<3&&hisList.push(i)}),historyTpl=that.processList(hisList,2),0!==hisList.length&&addStat("search.sug.history.show","show"),length=length+hisList.length+param.sug.length-10;for(var i=0;length>i;i++)param.sug.pop();listTpl=that.processList(param.sug,0),that.list=param.sug,wrapType="sug",wrap.find("ul").empty().append(historyTpl+listTpl)}else{var listTpl="",template=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="city-special-container">    <div class="city-special-list">        <div class="city-special-item" data-type="channel" data-key="美食" data-stat-code="sug.channel.cater">    <div class="city-list-item cater" >找美食</div>        </div>        <div class="city-special-item" data-type="channel" data-key="酒店" data-stat-code="sug.channel.hotel">    <div class="city-list-item hotel" >订酒店</div>        </div>        <div class="city-special-item" data-type="channel" data-key="公交站" data-stat-code="sug.channel.busstop">            <div class="city-list-item busstop" >公交站</div>        </div>    </div>    <div class="city-normal-list">        <div class="city-normal-item" data-type="channel" data-key="景点" data-stat-code="sug.channel.scenery">景点</div>        <div class="city-normal-item" data-type="channel" data-key="电影院" data-stat-code="sug.channel.movie">电影院</div>        <div class="city-normal-item" data-type="channel" data-key="银行" data-stat-code="sug.channel.bank">银行</div>        <div class="city-normal-item city-normal-last" data-type="channel" data-key="KTV" data-stat-code="sug.channel.ktv">KTV</div>    </div>    <div class="clear-history">        <span class="clear-login"><a class="clear-login-link">立即登录</a>可同步云端历史记录</span>    </div></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];"search"===opts.from&&(modelConfig&&2===modelConfig.cityType||3===modelConfig.cityType)&&(listTpl+=template()),wrapType="history",opts.showMyPlace&&("success"===ipLocation.status&&(listTpl+=that.processIpLocationList(),length+=1),listTpl+=that.processMyPlaceList(),length+=2,addStat("indexleftmenu.setMyPlace.show","click",{})),history.length&&(listTpl+=that.processList(history,2,"only-history")),that.hisList=history,wrap.find("ul").empty().append(listTpl),userMgr.defferd.fail(function(){wrap.find(".clear-login").show()})}}var history=param.history;if(this.wrap)"infowindow"===opts.from&&this.setPosAndSize(),deployList();else{if(window.ui3MapSuggestWrap)wrap=this.wrap=window.ui3MapSuggestWrap.hide().remove();else{var wrapTpl=['<div class="ui3-suggest-wrap" id="ui3-suggest-wrap">','<div id="ui3-suggest-scroll">',"    <ul>","    </ul>","</div>","</div>"];window.ui3MapSuggestWrap=wrap=this.wrap=T(wrapTpl.join(""))}this.setPosAndSize(),deployList(),wrap.appendTo(document.body)}this.bindSuggestEvents(),wrap.suggestInputTarget!==input&&(isOwnSuggestWrap=!1,this.setPosAndSize()),listener.trigger("ui.suggest","show"),param.history.length>0&&T(".city-special-container .clear-history").css("display","none"),wrap.show(),wrap.find("li").width(wrap.width());var scrollWrap=T("#ui3-suggest-scroll");scrollWrap.width(wrap.width());var height=document.documentElement.clientHeight-wrap.offset().top-70,contentHeight=wrap.find("ul").height();height=Math.min(height,contentHeight),scrollWrap.height(height),10>height&&wrap.hide(),addStat("searchbox.sug.show","show"),wrap.suggestInputTarget=input,opts.onShowWrap&&opts.onShowWrap.call(this,wrap,input)},bindGEvents:function(){},processList:function(t,i,e){var a=[];if(T.each(t,function(t,e){var s;0==i?(e=e.split("$"),(!opts.onlyPrecise||e[5])&&(s=that.processItem("sug",e[3],e[0]+e[1]+e[2],e[5]),a.push(s))):1==i||(2===i?(s=that.processItem("history",e.wd,e.wd2,"","history",e.platform?e.platform:"3"),a.push(s)):3===i&&(e=e.split("-"),s=that.processItem("history",e[0],e[1]),a.push(s)))}),2===i&&"only-history"===e){var s="删除历史";("route"===opts.from||"infowindow"===opts.from)&&(s="删除历史");var o=['<li class="clear-history" data-extra="clear">','<span class="clear-login"><a class="clear-login-link">立即登录</a>可查看更多历史记录</span>','<a class="clear-link">',s,"</a>","</li>"];a.push(o.join(""))}return a.join("")},processMyPlaceList:function(){return ui3SetMyPlace.init(opts.onSelect)},processIpLocationList:function(){var t=ipLocation.myPlace,i="ipLocation",e=['<li class="ui3-iploc-my-place-item ',i,'" data-type="iploc"','" data-key="我的位置"','">','<div class="clearfix ui3-iploc-my-place-inner">',"<b><em>&nbsp;</em><span>我的位置</span>",'</b><a href="#" title="',t.note,'" onclick="return false">',t.note,"</a>","</div>","</li>"];return e.join("")},processItem:function(t,i,e,a,s,o){s=s?s:"default";var r=['<li class="ui3-suggest-item" data-from="',o,'" data-type="',t,'" data-key="',T.encodeHTML(i),'" data-location="',e,'" data-extra="',a,'">',"    <a>",'        <i class = "',s,'">',escapeXSS(i),"</i>","        <em>",escapeXSS(e),"</em>","    </a>","</li>"];return r.join("")},setPosAndSize:function(){var t=this.wrap,i=input.offset(),e={width:input.outerWidth(),height:input.outerHeight()},a=opts.isAutoWidth?0:opts.width||e.width+opts.adjustWidth;if(t.css({top:opts.top||i.top+e.height+opts.adjustTop,left:opts.left||i.left+opts.adjustLeft,zIndex:opts["z-index"]||1e3}),opts.isAutoWidth)t.css({"min-width":a});else{var a=opts.width||e.width+opts.adjustWidth;t.css({width:a})}},bindSuggestEvents:function(){this.wrap.find(".city-special-item,.city-normal-item").bind("click",function(){that.hide();var t=$(this),i=t.attr("data-key"),e=t.attr("data-stat-code");addStat(e,"click");var a=wrap.suggestInputTarget;a.val(i),opts.onSelect&&opts.onSelect.call(this,i)}).bind("mousedown",function(){that.isInSuggestList=!0}).bind("mouseup",function(){that.isInSuggestList=!1,that.hide()}),this.wrap.find(".clear-login-link").bind("click",function(){addStat("multi.history.login","click",{da_trd:opts.from}),userMgr.login(void 0,void 0,"sug-his")}),this.wrap.find(".clear-link").bind("click",function(){that.hide(),hisMgr.clearSearchData(),toast.show("删除成功"),addStat("searchbox.history.clear","click",{})}),this.wrap.find("li").bind("click",function(t){var i=(T(t.target),T(this));if(!i.hasClass("clear-history")){var e=i.attr("data-type"),a=i.attr("data-key"),s=i.attr("data-location"),o=i.attr("data-extra")||"",r=i.attr("data-from")||"web";if(this.getAttribute("data-target"))return void that.hide();var n=wrap.suggestInputTarget;n.val(a),opts.onSelect&&opts.onSelect.call(this,a,s,o),"sug"===e?s?addStat("searchbox.sug.GRequest","click"):addStat("searchbox.sug.GrRequest","click"):"history"===e&&(opts.from&&"route"==opts.from?addStat("route.sug.history.click","click",{da_trd:r}):"sug"==wrapType?addStat("searchbox.sug.history.click","click",{da_trd:r}):opts.from&&"search"==opts.from?addStat("searchbox.history.click","click",{da_trd:r}):opts.from&&"infowindow"==opts.from&&addStat("infowindow.history.click","click",{da_trd:r}),addStat("history.click","click")),that.hide()}}).bind("mouseenter",function(){}).bind("mouseleave",function(){}).bind("mousedown",function(){that.isInSuggestList=!0}).bind("mouseup",function(){that.isInSuggestList=!1,that.hide()}),opts.showMyPlace&&ui3SetMyPlace.bindWrapEvents(this.wrap)},hide:function(){window.ui3MapSuggestWrap&&(wrap=window.ui3MapSuggestWrap,wrap.hide(),0===that.readyState?clearTimeout(that.timeout):1===that.readyState&&that.xhr.abort(),listener.trigger("ui.suggest","hide"))}};return ui3MapSuggest.work(),{hide:ui3MapSuggest.hide,wrap:wrap}}catch(e){"undefined"!=typeof alog&&alog("exception.fire","catch",{msg:e.message||e.description,path:"common:widget/ui/ui3MapSuggest/ui3MapSuggest.js",ln:805})}},style='.pc .ui3-suggest-wrap{font-family:Arial,Helvetica,"Microsoft YaHei",sans-serif}#ui3-suggest-scroll{width:100%;overflow-y:auto;overflow-x:hidden}.ui3-suggest-wrap{position:absolute;background-color:#fff;border-top:1px solid #E4E6E7;display:none;box-shadow:1px 2px 1px rgba(0,0,0,.15);border-radius:0 0 2px 2px}.ui3-suggest-wrap .ui3-suggest-item a{display:block;height:35px;line-height:35px;padding-right:10px;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ui3-suggest-wrap .ui3-suggest-item i{padding-left:39px;font-style:normal;color:#666;position:relative;z-index:1;padding-top:1px}.ui3-suggest-wrap .ui3-suggest-item i.history{background:url(//webmap1.bdimg.com/wolfman/static/common/images/ui3/tools/suggestion-icon_013979b.png) no-repeat 12px 2px}.ui3-suggest-wrap .ui3-suggest-item i.default{background:url(//webmap1.bdimg.com/wolfman/static/common/images/ui3/tools/suggestion-icon_013979b.png) no-repeat 12px -12px}.ui3-suggest-wrap .ui3-suggest-item i.home{background:url(//webmap1.bdimg.com/wolfman/static/common/images/ui3/tools/suggestion-icon_013979b.png) no-repeat 12px -40px}.ui3-suggest-wrap .ui3-suggest-item i.company{background:url(//webmap1.bdimg.com/wolfman/static/common/images/ui3/tools/suggestion-icon_013979b.png) no-repeat 12px -26px}.ui3-suggest-wrap .ui3-suggest-item em{margin-left:10px;margin-right:20px;font-style:normal;color:#999}.ui3-suggest-wrap .clear-history{border-top:1px solid #F2F5F8;overflow:hidden}.ui3-suggest-wrap .clear-history .clear-link{height:35px;line-height:35px;text-decoration:none;color:#B2B2B2;float:right;padding:0 10px}.ui3-suggest-wrap .clear-history .clear-link:hover{background-color:#EBEBEB}.ui3-suggest-wrap .clear-history .clear-login-link:hover{text-decoration:underline}.ui3-suggest-wrap .clear-history .clear-login{height:35px;line-height:35px;float:left;color:#333;display:none}.ui3-suggest-wrap .clear-history .clear-login-link{text-decoration:none;color:#3385ff;padding:0 5px 0 30px;background:url(//webmap0.bdimg.com/wolfman/static/common/images/unloginSug_e5196cc.gif) no-repeat 10px 5px;float:left;height:35px}.ui3-suggest-item-hover a,.ui3-suggest-item:hover a{background-color:#EBEBEB}.ui3-suggest-item-hover em,.ui3-suggest-item:hover em{color:#888}.ui3-suggest-wrap strong{color:#999;float:right;margin-right:15px;display:none;position:relative;z-index:2}.ui3-suggest-item-hover strong{display:block}.ui3-suggest-item-hover strong:hover{color:#666}.city-special-container{width:100%;border-bottom:1px solid #e0e0e0;text-align:center;padding:15px 10px 0;box-sizing:border-box;font-size:12px;color:#666}.pc .city-special-container{font-family:Arial,Helvetica,"Microsoft YaHei",sans-serif}.city-special-list{overflow:hidden;height:24px;padding-bottom:10px;border-bottom:1px solid #eee}.city-special-list .city-special-item{text-align:center;display:inline-block;position:relative;width:32%;box-sizing:border-box;overflow:hidden;cursor:pointer}.city-special-list .city-list-item{height:24px;background:url(//webmap1.bdimg.com/wolfman/static/common/images/new/searchbox_f175577.png) no-repeat;display:inline-block;padding-left:32px;line-height:24px}.city-special-list .cater{background-position:0 -190px}.city-special-list .hotel{background-position:0 -214px}.city-special-list .busstop{background-position:0 -238px}.city-normal-list{text-align:center;margin:17px auto}.city-normal-item{cursor:pointer;text-align:center;border-right:1px dashed #eee;height:14px;line-height:14px;width:74px;display:inline-block}.city-normal-item.city-normal-last{border-right:0}@media only screen and (-webkit-min-device-pixel-ratio:2),(-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.city-special-list .cater{background:url(//webmap1.bdimg.com/wolfman/static/common/images/retina/sug-list_a20fddd.png) no-repeat;background-size:auto 72px;background-position:0 -48px}.city-special-list .hotel{background:url(//webmap1.bdimg.com/wolfman/static/common/images/retina/sug-list_a20fddd.png) no-repeat;background-size:auto 72px;background-position:0 -24px}.city-special-list .busstop{background:url(//webmap1.bdimg.com/wolfman/static/common/images/retina/sug-list_a20fddd.png) no-repeat;background-size:auto 72px;background-position:0 0}}';require.loadCss({content:style,name:"ui3MapSuggest"}),module.exports={initialize:initialize}});