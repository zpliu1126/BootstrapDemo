/*获取当前分类目录访问该目录下的index即可*/
	var localpage=window.location.href.split("/")[window.location.href.split("/").length-2];
	/*获取需要填充数据的标签*/
	var prepage=document.getElementById("prepage").getElementsByTagName("a")[0]
	var nextpage=document.getElementById("nextpage").getElementsByTagName("a")[0]
	var percent=document.getElementById("percent").getElementsByTagName("span")[0]

var xhttp=new XMLHttpRequest();
xhttp.open("GET","https://zpliu1126.github.io/BootstrapDemo/siteurl.json",true);
xhttp.send(null);
xhttp.onreadystatechange=function(){
/*开始解析json数据*/
if(xhttp.readyState==4&&xhttp.status==200){
			var siteurl=JSON.parse(xhttp.responseText);
			for(var key in siteurl){			
				/*根据当前站点信息，提取前后信息*/
				/*这里的key其实和siteorde是一样的都是字符串哦*/
				if(localpage==siteurl[key].sitename){
					/*判断一下有没有走到最后一页,如果是的话就把下一页改成END*/
					if (key==siteurl.length-1) {
						prepage.setAttribute("href",siteurl[key-1].siteurl);
						nextpage.setAttribute("href","#");
						nextpage.innerHTML="END";
						percent.innerHTML=siteurl[key].siteorder+'/'+String(siteurl.length-1);
					}else{
						prepage.setAttribute("href",siteurl[parseInt(key)-1].siteurl);
						nextpage.setAttribute("href",siteurl[parseInt(key)+1].siteurl);
						percent.innerHTML=siteurl[key].siteorder+'/'+String(siteurl.length-1);
					}

				}
			}
		}
	}
