window.gnezdo = { create: function(p){ }};

document.addEventListener('readystatechange', () => {
	if (document.readyState == "interactive") {
		document.querySelectorAll('script').forEach(function(script) {
				if (script.src.includes('2xclick') || script.src.includes('mynewstop')) {
						script.parentNode.removeChild(script);
				}
		});
	}
});

new Image().src = "https://counter.yadro.ru/hit;gruppawoy?r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";h"+escape(document.title.substring(0,150))+
";"+Math.random();

window.onload = function(e){
	ym(98063192, "init", {
		clickmap:true,
		trackLinks:true,
		accurateTrackBounce:true,
		webvisor:true
	});

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
	var c = cs[~~(Math.random() * cs.length)];
	var d = document.getElementById('containerId353630');
	d.id = c;
	d.className = c;
	d.innerHTML = tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", c);

	var a = obj[~~(Math.random() * obj.length)];
	var c = cs[~~(Math.random() * cs.length)];
	var d = document.getElementById('containerId353632');
	d.id = c;
	d.className = c;
	d.innerHTML = tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", c);

	var nodesList = document.querySelectorAll('p, h1, h2');
	var nodes = Array.prototype.slice.call(nodesList);
	var stdout = '';
	for (var i = 0; i < nodes.length; i++)
	{
		var node = nodes[i];
		var text = node.innerText
		if (!text) continue;
		stdout += text;
		if (stdout.length >= 1500)
		{
			stdout = '';
			var id = 'content-auto-banner-' + i;
			var b = '<div id="' + id + '"></div>';
			node.insertAdjacentHTML("afterend", b);
		}
	}

	jQuery('div[id^="content-auto-banner-"]').each(function(index, value) {
		var c = cs[~~(Math.random() * cs.length)];
		this.id = c;
		this.className = c;
		var a = obj[~~(Math.random() * obj.length)];
		this.innerHTML = tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", c);
	});
}
