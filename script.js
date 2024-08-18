!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);
window.onload = function(e){
	new Image().src = "https://counter.yadro.ru/hit;gruppawoy?r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";h"+escape(document.title.substring(0,150))+
";"+Math.random();	

	ym(98063192, "init", {
		clickmap:true,
		trackLinks:true,
		accurateTrackBounce:true,
		webvisor:true
	});		
	jQuery("div.gnezdo_used").html('');
	
	setTimeout(() => {
		jQuery("div.gnezdo_used").html('');
		var tpl = '<div style="position: relative; text-align: center; "><a rel="nofollow" target="_blank" href="%u%"><img style="width:50%" src="%i%"><div style="color: #%c%; font-size:16pt; font-weight: 700; text-shadow: 1px 1px 2px black; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">%t%</div></a></div>';
		var cs = ["e4f3dd", "ddeff3", "fff", "f3dde9", "f0f3dd", "dde2f3", "99d92f", "ff0"];
		var u1 = "https://dating-pulse.online/Vsf8xOcP";
		var i1 = "https://vsegda.love/img/";
		var i2 = "https://261-174.loveland101.com/l/assets/m5/";
		var obj = [
			{t: "Тиндер ушёл из России, но ему нашли замену", u: u1, i: i2 + "slide1.jpg"},
			{t: "Этот сайт круче чем Tinder", u: u1, i: i2 + "slide2.jpg"},
			{t: "Где-то скучает одна Наташа", u: u1, i: i2 + "slide3.jpg"},
			{t: "Новый сайт знакомств в России", u: u1, i: i2 + "slide4.jpg"},
			{t: "", u: u1, i: "https://cpa.house/contents/landings/7210.jpeg"},
			{t: "Заменим Тиндер?", u: u1, i: i1 + "left1.jpg"},
			{t: "Все девушки России перешли сюда", u: u1, i: i1 + "left2.jpg"},
			{t: "Хотите внимания и комплиментов?", u: u1, i: i1 + "left3.jpg"},
			{t: "Наш ответ Тиндеру", u: u1, i: i1 + "left4.jpg"},
			{t: "Тиндер ушёл из России? Не всё так однозначно", u: u1, i: i1 + "left5.jpg"},
			{t: "Последние 8 лет мы создавали новый сайт", u: u1, i: i1 + "left6.jpg"},
			{t: "Привет, я Маша", u: u1, i: i1 + "left7.jpg"},
			{t: "Скучаю...", u: u1, i: i1 + "left8.jpg"},
		];
		
		var a = obj[~~(Math.random() * obj.length)];
		document.getElementById('containerId353630').innerHTML = tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", cs[~~(Math.random() * cs.length)]);
		
		var a = obj[~~(Math.random() * obj.length)];
		document.getElementById('containerId353632').innerHTML = tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", cs[~~(Math.random() * cs.length)]);
		
		jQuery('div[id^="content-auto-banner"]').each(function(index, value) {
			var a = obj[~~(Math.random() * obj.length)];
			this.innerHTML = tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", cs[~~(Math.random() * cs.length)]);
		});	
	}, 1000);
}
