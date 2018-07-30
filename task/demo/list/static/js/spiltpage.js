function spiltmethod(ListPage,PageCount)
{
	try{
		var PageCount = PageCount;//总页数 4
		var ListPage = ListPage;//页面编号0,3,2,1
		var CurrentPage = (ListPage==0?1:(PageCount - ListPage + 1));//当前页1,2,3,4
		document.write("");
		document.write("");
		document.write("<span>共"+PageCount+"页</span>");
		document.write("");
		document.write(""+isFE(CurrentPage,PageCount,true,"首页")+"");
		document.write(""+isA(CurrentPage,PageCount,"前一页",true)+"");
		// 前5后4条件
		if (CurrentPage > 6 && PageCount > 10){
			//最后推4页
			if (CurrentPage + 4 >= PageCount){
				for (var i = PageCount - 10+1; i <= PageCount; i++){
					document.write(""+isClick(PageCount,i,CurrentPage,i)+"")
				}
			}else{
				//最小页码(23456 7 891011)
				var maxPage = (CurrentPage+4)>PageCount?PageCount:(CurrentPage+4);
				for (var i = CurrentPage - 6 + 1; i <= maxPage; i++){
					document.write(""+isClick(PageCount,i,CurrentPage,i)+"")
				}
			}
		}else{
			var maxPage = PageCount>10?10:PageCount;
			for (var i = 1; i <= maxPage; i++){
				document.write(""+isClick(PageCount,i,CurrentPage,i)+"")
			}
		}
		document.write(""+isA(CurrentPage,PageCount,"后一页",false)+"");
		document.write(""+isFE(CurrentPage,PageCount,false,"尾页")+"");
		document.write("");
	}catch(e){
		return;
	}
}


function isA(CurrentPage,PageCount,c,d){
	if(d){
		if(CurrentPage>1){
			 if(CurrentPage==2)	c = "<a href='list_0.htm' title='页码："+c+"' >" + c + "</a>";	
			 else c = "<a href='list_"+(PageCount-CurrentPage+2)+".htm' title='页码："+c+"' >" + c + "</a>";	
		}
	}else{
	 	  if(CurrentPage<PageCount) c = "<a href='list_"+(PageCount-CurrentPage)+".htm' title='页码："+c+"' >" + c + "</a>"; 
	}
	if (c.indexOf("a")==-1) c="<span>"+c+"</span>";
	return c;
}

function isFE(a,b,c,o){
	if(c&&(a>1)) o = "<a href='list_0.htm' title='页码："+o+"' >" + o + "</a>";
	if(!c&&(a!=b)) o = "<a href='list_1.htm' title='页码："+o+"' >" + o + "</a>";
	if (o.indexOf("a")==-1) o="<span>" + o + "</span>";
	return o;
}

function isClick(a,b,c,o){
	var n = (a-b+1);
	if(b!=c){
		if(n==a) o = "<a href='list_0.htm' title='页码："+o+"' style='text-decoration:none;'>" + o + "</a>";
		else o = "<a href='list_"+n+".htm' title='页码："+o+"' style='text-decoration:none;'>" + o + "</a>";
	}else{
		o = "<span class='current'>" + o + "</span>";
	}
	return o
}