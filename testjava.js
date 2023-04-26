var testTimer;
var haveJava;
function testApplet(id,imgsrc,img_id,imgmap) {
	testTimer = setInterval(doTest(id,imgsrc,img_id,imgmap),3000);
}
function doTest(id,imgsrc,img_id,imgmap) {
	var applet = document.applets[0];
	haveJava = false;
	try {
		if(applet.isActive()) {
			haveJava = true;
		}
	} catch(err) {}
	
	var applets = document.getElementsByTagName('applet');
	if(!haveJava) {
		var altimg = document.createElement("img");
		altimg.src=imgsrc;
		altimg.id=img_id;
		if(imgmap) {
			altimg.useMap = imgmap;
		}
		var appletNode = document.getElementById(id);
		appletNode.parentNode.replaceChild(altimg, appletNode);
	}
	
	clearInterval(testTimer);
}