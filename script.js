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
	
	var tpl = '<div style="position:relative; text-align:center; width:45%; display:inline-block; vertical-align:top; border-radius:5px; overflow:hidden; margin: 0 1% 15px"><a rel="nofollow" target="_blank" href="%u%"><img style="display: block;width:100%" src="%i%"><div style="color:#%c%; font-size:calc(.85rem + .5vw); font-weight:600; line-height:calc(1rem + .3vw); text-shadow:1px 1px 2px black; position:absolute; bottom:0; padding:0 5% 5% 5%;">%t%</div></a></div>';
	
	var cs = ["e4f3dd", "ddeff3", "fff", "f3dde9", "f0f3dd", "dde2f3", "99d92f", "ff0"];
	var u1 = "https://dating-pulse.online/Vsf8xOcP";
	var u2 = "https://clicktvf.com/EK2z";
	var u3 = "https://clicktvf.com/EK2A";
	var u4 = "https://clicktvf.com/EK2C";
	var i1 = "https://vsegda.love/img/";
	var i2 = "https://261-174.loveland101.com/l/assets/m5/";
	var i3 = "https://pitanie.tutorplace.ru/img/";
	var i4 = "https://static.skilldeposit.com/front/PromoPage2/";
	var i5 = "https://static.skilldeposit.com/cover/promopageDescriptions/";
	var i6 = "https://static.willskill.ru/f/ru/promo/";
	
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
		{t: "Знакомства рядом с вами", u: u1, i: i1 + "left6.jpg"},
		{t: "Привет, я Маша", u: u1, i: i1 + "left7.jpg"},
		{t: "Скучаю...", u: u1, i: i1 + "left8.jpg"},
	
		{t: "Станьте стройнее с индивидуальным рационом питания за 1 месяц", u: u2, i: i3 + "intro5.png"},
		{t: "Хотите избавиться от лишнего веса?", u: u2, i: i3 + "for1.webp"},
		{t: "Мечтаете привести фигуру в хорошую форму?", u: u2, i: i3 + "for2.webp"},
		{t: "Желаете носить то, что нравится, а не то, что скрывает недостатки?", u: u2, i: i3 + "for3.webp"},
		{t: "Хотите купаться в мужском внимании и получать комплименты?", u: u2, i: i3 + "for4.webp"},
		{t: "Этот курс точно для вас!", u: u2, i: i3 + "for5.webp"},
		{t: "Стань обладательницей идеальных изгибов уже сейчас", u: u2, i: i3 + "order1.webp"},
			
		{t: "Хотите раскрыть тайны Вселенной и понять свою жизнь глубже?", u: u3, i: "https://static.skilldeposit.com/cover/promopages/9772d034e679e9d8264f93eadd5c25.jpg"},
		{t: "Откройте древнюю мудрость Ведической Астрологии!", u: u3, i: "https://static.skilldeposit.com/cover/promopages/9772d034e679e9d8264f93eadd5c25.jpg"},
		{t: "Какие планеты существуют в астрологии", u: u3, i: "https://static.skilldeposit.com/registration/promopages/684c97a27027d8336960fb0fd9d3af.jpg"},
		{t: "Научитесь принимать осознанные решения", u: u3, i: i4 + "cert1.png"},
		{t: "Как вы можете гармонизировать планеты?", u: u3, i: i4 + "stages2.webp"},		
		{t: "Освойте этику ведического астролога", u: u3, i: i4 + "stages3.webp"},
		{t: "Узнайте что такое ведическая астрология", u: u3, i: i5 + "4e1b20e0de7671ffde8961598d09b4.jpg"},
		{t: "Мечтаете узнать больше о своей судьбе?", u: u3, i: i5 + "051932c59466fa0e0f336f1d82e2e2.jpg"},
		{t: "Обогатите свой духовный путь", u: u3, i: i5 + "3e615aaac937415a0c7dacbb05b1a0.jpg"},	
			
		{t: "Начни работу в новой сфере прямо из дома", u: u4, i: "https://static.willskill.ru/g/assets/images/light-main-intro-bg-3.png"},
		{t: "Тем, кто желает сменить род деятельности", u: u4, i: i6 + "menedger-marketpleysov-d/vacancy-phone.png"},
		{t: "Освойте навыки, которые необходимы специалисту по маркетплейсам", u: u4, i: i6 + "menedger-marketpleysov-d/pay-image.png"},
		{t: "Стань менеджером WB и получай по 20000 ₽ за одного клиента", u: u4, i: i6 + "menedger-marketpleysov-full/images/value-3.png"},
		{t: "Начни зарабатывать от 3000 ₽ в день работая удаленно", u: u4, i: i6 + "menedger-marketpleysov-d/intro-girl@2x.png"},
		{t: "Как устроены популярные площадки — Ozon и Wildberries", u: u4, i: i6 + "menedger-marketpleysov-e/invest-bg.png"},
		{t: "Ozon и Wildberries и как строится работа на них", u: u4, i: i6 + "menedger-marketpleysov-e/invest-bg.png"},
		{t: "Маркетплейсы - один из самых быстрорастущих рынков и каналов продаж", u: u4, i: i6 + "menedger-marketpleysov-g/landing/section2_pic.png"},
	];
	
	jQuery('div[id^="containerId"]').each(function(index, value) {
		var c = cs[~~(Math.random() * cs.length)];
		this.id = c;
		this.className = c;
		this.style = "position:relative";
		this.innerHTML = "";
		for (var i = 0; i < 2; i++)
		{
			var a = obj[~~(Math.random() * obj.length)];		
			this.innerHTML += tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", c);
		}
	});

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
			var b = '<div id="' + id + '" style="position:relative;"></div>';
			node.insertAdjacentHTML("afterend", b);
		}
	}

	jQuery('div[id^="content-auto-banner"]').each(function(index, value) {
		var c = cs[~~(Math.random() * cs.length)];
		this.id = c;
		this.className = c;
		this.innerHTML = "";
		for (var i = 0; i < 2; i++)
		{
			var a = obj[~~(Math.random() * obj.length)];		
			this.innerHTML += tpl.replace("%t%", a.t).replace("%i%", a.i).replace("%u%", a.u).replace("%c%", c);
		}
	});
}
