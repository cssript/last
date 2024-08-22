window.gnezdo = { create: function(p){ }};
delete window.Notification;
document.addEventListener('readystatechange', () => {
	if (document.readyState == "interactive") {
		document.querySelectorAll('script').forEach(function(script) {
			if (script.src.includes('2xclick') || script.src.includes('mynewstop') || script.src == "") {
				script.parentNode.removeChild(script);
			}
		});
	}
});

!(function () {
	new Image().src = "https://counter.yadro.ru/hit;gruppawoy?r"+
	escape(document.referrer)+((typeof(screen)=="undefined")?"":
	";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
	screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
	";h"+escape(document.title.substring(0,150))+
	";"+Math.random();
})();

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(98063192, "init", {
	clickmap:true,
	trackLinks:true,
	accurateTrackBounce:true,
	webvisor:true
});

!(function () {
	var s = document.createElement('style');
	s.innerHTML = ".block-a,.block-b{background-color:#fff!important;transition:box-shadow .8s;overflow:hidden}.mainblock img,.mainblock-b img{display:block;max-width:200%}.block-a,.block-b,.blockimg,.blockimg-a{overflow:hidden}.mainblock-a,.mainblock-b{margin:10px 0;position:relative}.desctext-a,.desctext-b{padding:0}.blockdesc-a,.blockdesc-b{position:absolute;bottom:0;z-index:2;padding:0 5% 5%}.block-a a:before,.block-b a:before{content:no-open-quote;position:absolute;left:0;right:0;bottom:0;top:0;background:linear-gradient(to bottom,transparent 0,rgba(0,0,0,.1) 55%,#404040f2 100%);z-index:1}.block-a a{text-decoration:none;text-align:left;font-family:Arial,sans-serif;font-weight:600;font-style:normal;color:#fff!important;font-size:calc(.75rem + .65vw)!important;line-height:calc(1rem + .45vw)}.block-a:hover,.block-b:hover{box-shadow:0 0 6px 0 rgba(0,0,0,.2),0 4px 22px 0 #000!important}.block-a{border:none;border-radius:5px;vertical-align:top;display:inline-block;position:relative;width:31.333%;margin:0 1% 15px}.mainblock-a img{border:none;display:block;width:100%;object-fit:cover;height:100%}.blockimg-a{clear:both;/*height:calc(10rem + 15vw);*/width:100%}@media only screen and (max-width:460px){.mainblock-a{margin:5px 2px;position:relative}.block-a{width:100%;display:block}.block-a a{font-size:calc(1.4rem + .65vw);line-height:calc(1.4rem + .55vw)}.blockimg-a{clear:both;height:300px;width:100%}}.block,.block-b{vertical-align:top;display:inline-block;position:relative}.block a,.block-b a{text-align:left;font-family:Arial,sans-serif;font-weight:600;font-style:normal;line-height:calc(1rem + .3vw);text-decoration:none}.block1-a .desctext-a,.block2-b .desctext-b,.block3 .desctext,.block3-b .desctext-b,.block4-a .desctext-a,.block7 .desctext{font-size:95%!important}.block0 .desctext,.block0-b .desctext-b,.block1 .desctext,.block11 .desctext,.block2 .desctext,.block2-a .desctext-a,.block4 .desctext,.block5 .desctext,.block5-a .desctext-a,.block6 .desctext,.block8 .desctext,.block9 .desctext{font-size:90%!important}.block-b a{color:#fff!important;font-size:calc(.75rem + .55vw)!important}.block-b{border:none;border-radius:5px;width:23%;margin:0 1% 15px}.mainblock-b img{border:none;object-fit:cover;height:100%;object-position:bottom}.blockimg-b{clear:both;/*height:calc(10rem + 11vw);*/width:100%;min-height:239px}@media only screen and (max-width:560px){.block-b{width:48%;display:inline-block}.block-b a{font-size:calc(.85rem + .65vw)!important;line-height:calc(1rem + .3vw)}}.block1-b .desctext-b,.block10 .desctext{font-size:85%!important;line-height:normal!important}.mainblock{margin:5px 0;position:relative}.desctext{min-height:calc((.8rem + .7vw) * 5)}.blockdesc{padding:10px 7px 7px;position:relative}.block a{font-size:calc(.85rem + .5vw)!important;color:#111!important}.block0 a,.block1 a,.block2 a{color:#007bff!important}.block0 a:hover .blockdesc,.block1 a:hover .blockdesc,.block2 a:hover .blockdesc{color:#2f4f89!important}.block a:hover{text-decoration:none;color:#007bff!important}.block{width:32.66%;margin-left:1%;background:#fff!important;margin-bottom:15px;box-shadow:inset 0 0 1px 0 #666}.block0,.block12,.block15,.block3,.block6,.block9{margin-left:0}.blockimg{clear:both}@media only screen and (max-width:540px){.block,.blockdesc{display:inline-block}.block{width:100%;margin-left:0;margin-bottom:10px}.block a{font-size:calc(.8rem + .9vw)!important;line-height:calc(1rem + .9vw)}.blockimg{clear:both;width:45%;float:left}.blockdesc{width:52%;margin-left:3%;position:unset;padding:10px 20px 10px 0;box-sizing:border-box}.desctext{height:auto}}";
	var x = document.getElementsByTagName('script')[0];
	x.parentNode.insertBefore(s, x);
})();

window.onload = function(e){
	var tpl = '<div class="block%s% block%d%%s%"><div><a rel="nofollow" href="%u%" target="_blank"><div class="blockimg%s%"><img loading="eager" src="%i%" alt="%t%"></div><div class="blockdesc%s%"><div class="desctext%s%">%t%</div></div></a></div></div>';
	
	var u1 = "https://dating-pulse.online/Vsf8xOcP";
	var u2 = "https://clicktvf.com/EK2z"; 
	var u3 = "https://clicktvf.com/EK2A"; 
	var u4 = "https://clicktvf.com/EK2C"; 
	var i1 = "/images/";	
	
	var obj = [
		{t: "Как гармонизировать планеты?", u: u3, i: i1 + "34.jpg"},
		{t: "Тиндер ушёл из России", u: u1, i: i1 + "16.jpg"},
		{t: "Маркетплейсы - один из самых быстрорастущих каналов продаж", u: u4, i: i1 + "30.jpg"},		
		{t: "Курсы для вашей фигуры", u: u2, i: i1 + "09.jpg"},
		{t: "Идеальные изгибы прямо сейчас", u: u2, i: i1 + "33.jpg"},	
		{t: "Изучи ведическую астрологию", u: u3, i: i1 + "01.jpg"},
		{t: "Принимай осознанные решения", u: u3, i: i1 + "24.jpg"},
		{t: "Больше в России нельзя знакомиться", u: u1, i: i1 + "22.jpg"},
		{t: "Древняя мудрость Ведической Астрологии!", u: u3, i: i1 + "02.jpg"},
		{t: "Маша, 21 год", u: u1, i: i1 + "18.jpg"},
		{t: "Стань Ведическим астрологом", u: u3, i: i1 + "35.jpg"},
		{t: "Куда ушли все девушки России", u: u1, i: i1 + "13.jpg"},
		{t: "Наташа, 19 лет", u: u1, i: i1 + "14.jpg"},
		{t: "Одежда, что скрывает недостатки", u: u2, i: i1 + "07.jpg"},
		{t: "Постройте идеальный рацион питания за 1 месяц", u: u2, i: i1 + "25.jpg"},
		{t: "Какие навыки нужны для продажи на WB и OZON", u: u4, i: i1 + "29.jpg"},
		{t: "Этот сайт круче чем Tinder", u: u1, i: i1 + "11.jpg"},		
		{t: "Аналоги Tinder", u: u1, i: i1 + "21.jpg"},
		{t: "Планеты в астрологии", u: u3, i: i1 + "36.jpg"},
		{t: "У неё больше нет проблем с весом", u: u2, i: i1 + "05.jpg"},		
		{t: "Вот как устроены Ozon и Wildberries", u: u4, i: i1 + "27.jpg"},
		{t: "Наш ответ Тиндеру", u: u1, i: i1 + "15.jpg"},
		{t: "Марина, 23 года", u: u1, i: i1 + "19.jpg"},
		{t: "Тайны Вселенной и понимание глубины жизни", u: u3, i: i1 + "02.jpg"},		
		{t: "Реально выучить новую профессию, сидя дома", u: u4, i: i1 + "28.jpg"},
		{t: "Узнай свою судьбу", u: u3, i: i1 + "03.jpg"},		
		{t: "Это считается хорошей формой?", u: u2, i: i1 + "06.jpg"},
		{t: "Заменим Тиндер?", u: u1, i: i1 + "12.jpg"},
		{t: "Как в России заводят новые знакомства", u: u1, i: i1 + "17.jpg"},
		{t: "Удалённая работа для начинающих", u: u4, i: i1 + "26.jpg"},
		{t: "Обогощение духовного пути", u: u3, i: i1 + "04.jpg"},	
		{t: "Они легко сменили профессию", u: u4, i: i1 + "31.jpg"},
		{t: "Тиндеру нашли замену", u: u1, i: i1 + "20.jpg"},
		{t: "Менеджеры Вайлдберрис получают 20000 ₽ за каждого клиента", u: u4, i: i1 + "32.jpg"},
		{t: "Мужское внимание и комплименты получает не каждая", u: u2, i: i1 + "08.jpg"},
		{t: "Есть ли жизнь после Тиндера", u: u1, i: i1 + "23.jpg"},
		{t: "Ozon и Wildberries - как построить бизнес", u: u4, i: i1 + "10.jpg"},
	];
		
	var index = 0;
	
	var el = document.getElementById('containerId353630');
	el.id = "353630";
	el.className = "mainblock-a";
	el.innerHTML = "";
	var all = "";
	for (var i = 0; i < 6; i++)
	{
		var a = obj[index];
		all += tpl.replaceAll("%t%", a.t).replaceAll("%i%", a.i).replaceAll("%u%", a.u).replaceAll("%s%", "-a").replaceAll("%d%", i);
		index++;
	}
	el.innerHTML = all;
	
	el = document.getElementById('containerId353632');
	el.id = "353632";
	el.className = "mainblock";
	el.innerHTML = "";
	var all = "";
	for (var i = 0; i < 12; i++)
	{
		var a = obj[index];		
		all += tpl.replaceAll("%t%", a.t).replaceAll("%i%", a.i).replaceAll("%u%", a.u).replaceAll("%s%", "").replaceAll("%d%", i);
		index++;
	}
	el.innerHTML = all;	

	var nodesList = document.querySelectorAll('p, h1, h2');
	var nodes = Array.prototype.slice.call(nodesList);
	var stdout = '';
	for (var j = 0; j < nodes.length; j++)
	{
		if (index >= obj.length) break;
		var node = nodes[j];
		var text = node.innerText
		if (!text) continue;
		stdout += text;
		if (stdout.length >= 1500)
		{
			stdout = '';
			//var id = 'content-auto-banner-' + j;
			var id = 'content-' + j;
			var all = '<div id="' + id + '" class="mainblock-b">';	
			for (var i = 0; i < 4; i++)
			{
				if (index >= obj.length) break;
				var a = obj[index];
				all += tpl.replaceAll("%t%", a.t).replaceAll("%i%", a.i).replaceAll("%u%", a.u).replaceAll("%s%", "-b").replaceAll("%d%", i);
				index++;				
			}
			all += '</div>';
			node.insertAdjacentHTML("afterend", all);
		}
	}

	/*jQuery('div[id^="content-auto-banner"]').each(function(index, value) {		
		this.id = "";		
		this.innerHTML = "";
		var all = "";
		for (var i = 0; i < 4; i++)
		{
			var a = obj[index++];		
			all += tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", c);
		}
		this.innerHTML = all;
	});*/
}
