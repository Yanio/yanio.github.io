function showfollowweixin(){
	var htmltmp = '<div id="follow-box" style="position: absolute; top:0;left:0;width:100%;height:100%;z-index:9999998;opacity:0.6;filter:Alpha(Opacity = 60);display :block;background:rgba(0,0,0,0.5);"></div><div id="follow-weixin" style="position: absolute;z-index:9999999;top:50px;left:50%; margin-left: -120px; padding: 20px; background: #fff;"><p style="text-align: right; line-height: 25px;"><a href="javascript:void(0);" onclick="showfollowhide()">Close</a></p><img src="images/weixin.jpg" width="235" /><p style="line-height: 25px;">Scan WeChat QR Code to Add Yanio</p></div>';
    $('body').css("position","relative").append(htmltmp);
}

function showfollowhide(){
	$("#follow-box").detach();
	$("#follow-weixin").detach();
}