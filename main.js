function yAlert(txt){
	var eSrc=(document.all)?window.event.srcElement:arguments[1];
	var alertFram = document.createElement("DIV");
	alertFram.id="alertFram";
	alertFram.style.position = "absolute";
	alertFram.style.left = "50%";
	alertFram.style.top = "170";
	alertFram.style.marginLeft = "-217px" ;
	alertFram.style.marginTop = -75+document.documentElement.scrollTop+"px";
	alertFram.style.width = "433px";
	alertFram.style.height = "100px";
	alertFram.style.background = "#ccc";
	alertFram.style.textAlign = "center";
	alertFram.style.lineHeight = "100px";
	alertFram.style.zIndex = "10001";
	strHtml  = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
	strHtml += "	<li style=\"background:#7978AC;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;color:#FFFFFF;height:25px;line-height:25px;border:1px solid #9C9BC5;\">提示</li>\n";
	strHtml += "	<li style=\"background:#FFFFFF;text-align:center;font-size:14px;height:70px;line-height:70px;border-left:1px solid #9C9BC5;border-right:1px solid #9C9BC5;\">"+txt+"</li>\n";
	strHtml += "	<li style=\"background:#FFFFFF;text-align:center;font-size:12px;height:20px;line-height:20px;border-left:1px solid #9C9BC5;border-right:1px solid #9C9BC5;\">You can also get one <a target=\"_blank\" href=\"http://go.yanio.us/yid\" title=\"Create an account @yanio.com\">MSN account</a> sponsored by Yanio!</li>\n";
	strHtml += "	<li style=\"background:#D2D1EF;text-align:center;font-weight:bold;height:25px;line-height:25px; border:1px solid #9C9BC5;\"><input type=\"button\" value=\"    确定    \" id=\"do_OK\" onclick=\"doOk()\" /></li>\n";
	strHtml += "</ul>\n";
	alertFram.innerHTML = strHtml;
	document.body.appendChild(alertFram);
	this.setOpacity = function(obj,opacity){
		if(opacity>=1)opacity=opacity/100;
		try{ obj.style.opacity=opacity; }catch(e){}
		try{ 
			if(obj.filters.length>0&&obj.filters("alpha")){
				obj.filters("alpha").opacity=opacity*100;
			}else{
				obj.style.filter="alpha(opacity=\""+(opacity*100)+"\")";
			}
		}catch(e){}
	}
	this.doOk = function(){
		//alertFram.style.display = "none";
		document.body.removeChild(alertFram);
		eSrc.focus();
		document.body.onselectstart = function(){return true;}
		document.body.oncontextmenu = function(){return true;}
	}
	document.getElementById("do_OK").focus();
	eSrc.blur();
	document.body.onselectstart = function(){return false;}
	document.body.oncontextmenu = function(){return false;}
}