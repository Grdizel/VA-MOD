var timer_glob_sec = 0, timer_glob_sec_2 = 0, prohod = 0, timer_glob_sec_temp = 0,  okruglit = 0, kotirovka = 0;

function ArrowDraw(cnv, dir, x, y, w, h, clr, lwidth, type){
	if (dir == 'up') rasp = 1;
	if (dir == 'down') rasp = -1;
	if (type == 'str') fun = 1;
	if (type == 'fill') fun = 2;

  	cnv.beginPath();
	cnv.strokeStyle = clr;
	cnv.fillStyle = clr;
	cnv.lineWidth = lwidth;
  
	var dx,dy;
	x += w / 2;
	cnv.moveTo(x, y);
	dx = w / 2; dy = rasp * h / 2; cnv.lineTo(x + dx, y + dy);
	dx = w / 5; dy = rasp * h / 2; cnv.lineTo(x + dx, y + dy);
	dx = w / 5; dy = rasp * h; cnv.lineTo(x + dx, y + dy);
	dx = -w / 5; dy = rasp * h; cnv.lineTo(x + dx, y + dy);
	dx = -w / 5; dy = rasp * h / 2; cnv.lineTo(x + dx, y + dy);
	dx = -w / 2; dy = rasp * h / 2; cnv.lineTo(x + dx, y + dy);
	
	cnv.closePath();
	
	cnv.stroke();
	if(fun == 2) {
		cnv.fill();
	}
}

/* function timeConverter(UNIX_timestamp){
	var a = new Date(UNIX_timestamp * 1000);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	return time;
} */

function OpenMenu() {

	// document.getElementById('open_menu').onclick = function() {
	$('#open_menu').click(function(){
		if(document.getElementById('open_menu').checked) {
			// console.log("меню галку поставил")
			document.getElementById('Menu').style.display = "block"	
			localStorage.setItem('open_menu', "true");	
			stsrelki_move()
			return 1;
		} else {
			// console.log("меню галку снял")
			document.getElementById('Menu').style.display = "none"	
			localStorage.setItem('open_menu', "false");
			stsrelki_move()
			return 0;
		}
	})
	if (localStorage.getItem('open_menu') == "true") {
		// console.log("меню отрыто")
		document.getElementById("open_menu").setAttribute('checked','checked');
		document.getElementById('Menu').style.display = "block"
		return 1;
	} else {
		// console.log("меню закрыто")
		document.getElementById('Menu').style.display = "none";
		return 0;
	}
}

function trading_view_graff_on() {
	document.getElementById('trading_view_graff').onclick = function() {
		if(document.getElementById('trading_view_graff').checked) {
			// console.log("trading_view галку поставил")
			document.getElementById('TradingView-wrapper').style.display = "block"	
			localStorage.setItem('trading_view_graff', "true");	
			return 1;
		} else {
			// console.log("trading_view галку снял")
			document.getElementById('TradingView-wrapper').style.display = "none"	
			localStorage.setItem('trading_view_graff', "false");
			return 0;
		}
	}
	if (localStorage.getItem('trading_view_graff') == "true") {
		// console.log("trading_view отрыто")
		document.getElementById("trading_view_graff").setAttribute('checked','checked');
		document.getElementById('TradingView-wrapper').style.display = "block"
		return 1;
	} else {
		// console.log("trading_view закрыто")
		document.getElementById('TradingView-wrapper').style.display = "none";
		return 0;
	}
}

function stsrelki_move(){
	document.getElementById("strelki_check").onclick = function() {
		if(document.getElementById("strelki_check").checked) {
			// console.log("стрелки галку поставил")
			if (localStorage.getItem('open_menu') == "true") {
				// console.log("меню отрыто", 'стрелки включены')
				// document.getElementById("Strelki_On").setAttribute("style", menuopen_1);
				// document.getElementById("Strelki_On").style.display = "block"
				localStorage.setItem("strelki_check", "true");
				return 1;
			}
		} else {
			// console.log("стрелки галку снял")
			document.getElementById("Strelki_On").style.display = "none"
			localStorage.setItem("strelki_check", "false");
			return 0;
		}
	}
	// console.log(localStorage.getItem(id))
	if (localStorage.getItem('open_menu') == "true") {
		if (localStorage.getItem("strelki_check") == "true") {
			document.getElementById("strelki_check").setAttribute('checked','checked')
			// console.log("меню отрыто", 'стрелки включены')
			// document.getElementById("Strelki_On").setAttribute("style", menuopen_1);
			// document.getElementById("Strelki_On").style.display = "block"
			return 1;
		} else {
			// console.log("меню отрыто", 'стрелки выкл')
			// document.getElementById("Strelki_On").style.display = "none";
			return 0;
		}
		menu_op = localStorage.getItem("menu_op");
	} else {
		if (localStorage.getItem("strelki_check") == "true") {
			// console.log("стрелки галку вернул")
			document.getElementById("strelki_check").setAttribute('checked','checked');
			// document.getElementById("Strelki_On").setAttribute("style", menuopen_0);
			// document.getElementById("Strelki_On").style.display = "block"
			return 1;
		} else {
			// document.getElementById("Strelki_On").style.display = "none"	
			return 0;
		}
		menu_op = localStorage.getItem("menu_op");
	}
//##################################################################################################################################
	// var menuOff = ("style", "top: -215px; width : 300px; position = absolute;")
	// var menuon = ("style", "top: 0px; position = absolute;")
	// if (localStorage.getItem(id) == "true") {//false
		// console.log("2Menu on")
		// document.getElementById("Strelki_On").setAttribute("style", menuon);
	// } else {
		// console.log("2Menu off")
		// document.getElementById("Strelki_On").setAttribute("style", menuOff);
	// }
//##################################################################################################################################
}
function check_1(id) {
	document.getElementById(id).onclick = function() {
		if(document.getElementById(id).checked) {
			localStorage.setItem(id, "true");
			return 1;
		} else {
			localStorage.setItem(id, "false");
			return 0;
		}
	}
	if (localStorage.getItem(id) == "true") {
		document.getElementById(id).setAttribute('checked','checked');
		return 1;
	} else {
		return 0;
	}
}

function font_size_s(id) {
	document.getElementById(id).onclick = function() {
		var val_0 = document.getElementById("font"); // Получаем наш список
		var val_select = val_0.options[val_0.selectedIndex].value// Получаем значение выделенного элемента (в нашем случае).

		switch (val_select) {
			case '0':
				id0 = 'vremya_size';
				// console.log(id0)
				if (localStorage.getItem('vremya_size') >= 1) {
					vremya_size = localStorage.getItem('vremya_size')
					// font_size = document.getElementById('font_size').value;
					document.getElementById('font_size').setAttribute("value", vremya_size);
					// console.log(vremya_size)
				} else {
					vremya_size = 14
					// console.log(vremya_size)
					document.getElementById('font_size').setAttribute("value", vremya_size);
				}
				break;
			case '1':
				id0 = 'max_size';
				if (localStorage.getItem('max_size') >= 1) {
					max_size = localStorage.getItem('max_size')
					document.getElementById('font_size').setAttribute("value", max_size);
				} else {
					max_size = 14
					document.getElementById('font_size').setAttribute("value", max_size);
				}
				break;
			case '2':
				id0 = 'gis_size';
				if (localStorage.getItem('gis_size') >= 1) {
					gis_size = localStorage.getItem('gis_size')
					document.getElementById('font_size').setAttribute("value", gis_size);
				} else {
					gis_size = 14
					document.getElementById('font_size').setAttribute("value", gis_size);
				}
				break;
			case '3':
				id0 = 'ur_gist';
				if (localStorage.getItem('ur_gist') >= 1) {
					ur_gist = localStorage.getItem('ur_gist')
					document.getElementById('font_size').setAttribute("value", ur_gist);
				} else {
					ur_gist = 14
					document.getElementById('font_size').setAttribute("value", ur_gist);
				}
				break;
			case '4':
				id0 = 'ur_str_size';
				if (localStorage.getItem('ur_str_size') >= 1) {
					ur_str_size = localStorage.getItem('ur_str_size')
					document.getElementById('font_size').setAttribute("value", ur_str_size);
				} else {
					ur_str_size = 14
					document.getElementById('font_size').setAttribute("value", ur_str_size);
				}
				break;
			case '5':
				id0 = 'str_min_size';
				if (localStorage.getItem('str_min_size') >= 1) {
					str_min_size = localStorage.getItem('str_min_size')
					document.getElementById('font_size').setAttribute("value", str_min_size);
				} else {
					str_min_size = 14
					document.getElementById('font_size').setAttribute("value", str_min_size);
				}
				break;
/* 			// case '6':
				// value_1 = val_select
				// font_0('vremya_size', font_size)
				// break;
			// case '7':
				// value_1 = val_select
				// font_0('vremya_size', font_size)
				// break; */
		}

		font_size = document.getElementById('font_size').value;
		localStorage.setItem(id0, font_size);
		document.getElementById(id).setAttribute("value", font_size)
		// console.log("font_size: " + font_size)
	}
	if (localStorage.getItem('vremya_size') >= 1) {
		vremya_size = localStorage.getItem('vremya_size')
	} else {
		vremya_size = 14
	}
	if (localStorage.getItem('max_size') >= 1) {
		max_size = localStorage.getItem('max_size')
	} else {
		max_size = 14
	}
	if (localStorage.getItem('gis_size') >= 1) {
		gis_size = localStorage.getItem('gis_size')
	} else {
		gis_size = 14
	}
	if (localStorage.getItem('ur_gist') >= 1) {
		ur_gist = localStorage.getItem('ur_gist')
	} else {
		ur_gist = 14
	}
	if (localStorage.getItem('ur_str_size') >= 1) {
		ur_str_size = localStorage.getItem('ur_str_size')
	} else {
		ur_str_size = 14
	}
	if (localStorage.getItem('str_min_size') >= 1) {
		str_min_size = localStorage.getItem('str_min_size')
	} else {
		str_min_size = 14
	}
}

function blok_shema_0(id) {
	document.getElementById(id).onclick = function() {
		if(document.getElementById(id).checked) {
			localStorage.setItem(id, "true");
			if (invert == 1) {
				document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
			} else {
				document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
			}
			return 1;
		} else {
			localStorage.setItem(id, "false");
			document.body.style.backgroundImage = "none"
			return 0;
		}
	}
	if (localStorage.getItem(id) == "true") {
		document.getElementById(id).setAttribute('checked','checked');
			if (invert == 1) {
				document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
			} else {
				document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
			}
		return 1;
	} else {
		document.body.style.backgroundImage = "none"
		return 0;
	}
}




function Menu() {

	menuopen = OpenMenu()
	// console.log('menuopen', menuopen)
	
	trading_view_graff_on()
	
	color = check_1('color')
	invert = check_1('invert')
	timer = check_1('timer')
	max_obj = check_1('max_obj')
	max_obj_color = check_1('max_obj_color')
	Strelki_On = stsrelki_move()
	strelki_procent = check_1('strelki_procent')
	font_size = font_size_s('font_size')
	blok_shema = blok_shema_0('blok_shema')
	odinak = check_1('odinak')
	
	okrugl_on = check_1('okrugl_on')
	
	// console.log('Strelki_On', Strelki_On)

	document.getElementById('background').onclick = function() {
		var sel_0 = document.getElementById("background"); // Получаем наш список
		var background = sel_0.options[sel_0.selectedIndex].value// Получаем значение выделенного элемента (в нашем случае).
		
		// var ind = document.getElementById("background").selectedIndex; // Получаем индекс (в нашем случае его значение 1).
		// console.log(background)
		switch (background) {
			case '0' :document.body.style.backgroundColor = "#21252c"; break;
			case '1' :document.body.style.backgroundColor = "#000000"; break;
			case '2' :document.body.style.backgroundColor = "#00008b"; break;
			case '3' :document.body.style.backgroundColor = "#808080"; break;
			case '4' :document.body.style.backgroundColor = "#686c5e"; break;
			case '5' :document.body.style.backgroundColor = "#964b00"; break;
			case '6' :document.body.style.backgroundColor = "#ffd700"; break;
			case '7' :document.body.style.backgroundColor = "#6DB3F2"; break;
			case '8' :document.body.style.backgroundColor = "transparent"; break;
		}
		localStorage.setItem('background', background);
	}
	if (localStorage.getItem('background') > "0") {
		var select = document.querySelector('#background');
		var back = localStorage.getItem('background')
		switch (back) {
			case '0' :document.body.style.backgroundColor = "#21252c"; break;
			case '1' :document.body.style.backgroundColor = "#000000"; break;
			case '2' :document.body.style.backgroundColor = "#00008b"; break;
			case '3' :document.body.style.backgroundColor = "#808080"; break;
			case '4' :document.body.style.backgroundColor = "#686c5e"; break;
			case '5' :document.body.style.backgroundColor = "#964b00"; break;
			case '6' :document.body.style.backgroundColor = "#ffd700"; break;
			case '7' :document.body.style.backgroundImage = "#6DB3F2"; break;
			case '8' :document.body.style.backgroundColor = "transparent"; break;
		}
		document.getElementById('background').setAttribute("background", back)
		select.value = back;
	}
	if (!obrez) {
		obrez = 0;
		localStorage.setItem('obrez', obrez);
	}
	document.getElementById('obrez').onclick = function() {
		// var obrez = sel_1.options[sel_1.selectedIndex].value// Получаем значение выделенного элемента (в нашем случае).
		obrez = document.getElementById("obrez").value;
		document.getElementById("obrez").setAttribute("value", obrez)
		localStorage.setItem('obrez', obrez);
		// console.log("obrez: " + obrez)
	}

	if (localStorage.getItem('obrez') != document.getElementById("obrez").value) {
		document.getElementById('obrez').value = localStorage.getItem('obrez')
		obrez = localStorage.getItem('obrez')
		// console.log("!!!!!!!!!!!!!!!!obrez: " + obrez)
	} else {
		localStorage.setItem('obrez', obrez);
	}
	pair2 = $("#pair").attr("val")
/* 	if (!okrugl) {
		okrugl = 6;
		localStorage.setItem('okrugl'+ pair2, okrugl);
		document.getElementById("okrugl").setAttribute("value", okrugl)
	} */
	document.getElementById('okrugl').onclick = function() {
		// var okrugl = sel_1.options[sel_1.selectedIndex].value// Получаем значение выделенного элемента (в нашем случае).
		okrugl = document.getElementById("okrugl").value;
		document.getElementById("okrugl").setAttribute("value", okrugl)
		localStorage.setItem('okrugl'+ pair2, okrugl);
		// console.log("okrugl: " + okrugl)
	}
	okr_get_elem = document.getElementById("okrugl").value
	local_get_elem = localStorage.getItem('okrugl'+ pair2)

	if (!local_get_elem) {
		// console.log("нет local: " + local_get_elem)
		if (!okr_get_elem) {
			// console.log("нет хтмл: " + okr_get_elem)
		} else {
			// console.log("есть хтмл: " + okr_get_elem)
			okrugl = okr_get_elem
			localStorage.setItem('okrugl'+ pair2, okr_get_elem);
		}
	} else {
		// console.log("есть local: " + local_get_elem)
		okrugl = localStorage.getItem('okrugl'+ pair2)
		document.getElementById("okrugl").setAttribute("value", okrugl)
		
	}


/* 	if (local_get_elem != okr_get_elem) {
		if (!local_get_elem) {
			local_get_elem = 0
			document.getElementById("okrugl").setAttribute("value", local_get_elem)
		} else {
			okr_get_elem = localStorage.getItem('okrugl'+ pair2)
			okrugl = localStorage.getItem('okrugl'+ pair2)
			// console.log("okrugl: " + okrugl)
		}
	} else {
		localStorage.setItem('okrugl'+ pair2, okrugl);
	} */

	// console.log("okrugl: " + okrugl)
	// console.log("pair: " + pair2)
}

function TradingView_11() {
	// TradingV = document.getElementById('TradingView-wrapper')
		
		// pair2 = $("#pair").text()
		if (pair_0 = JSON.parse(localStorage.getItem("dsav"))){			
			pair2 = pair_0.pair
		} else { 
			pair2 = 'EURUSD';
		}
		console.log(pair2)
		// console.log('2: ', pair2)
	// if (pair2 == 'EURO') pair2 = 'EURUSD'
		// console.log('3: ', pair2)
	var str_0 = pair2;
	var res0 = str_0.replace("/", "");
		res = res0.replace("frx", "");
		inter_view_0 = size/60,
	new TradingView.widget({

		// "width": 980,
		// "height": 610,
		"autosize": true,

		"symbol": "OANDA:" + res,
		"interval": "" + inter_view_0,
		"timezone": "Europe/Moscow",
		"theme": "Dark",
		"style": "1",
		"locale": "ru",
		"toolbar_bg": "#f1f3f6",
		"enable_publishing": false,
		"withdateranges": true,
		"hide_side_toolbar": false,
		"allow_symbol_change": true,//false
		"save_image": false,
		"details": false,
		"hotlist": false,
		"calendar": false,
		"popup_width": "1000",
		"popup_height": "650",
		// "studies": [
		// "Volume@tv-basicstudies"
			// ],
		"container_id": "tradingview_61bf3"
	});

}
var Sign = function () {
	TradingView_11()

	var lookPrice = 0;
	var self = this,
		wss, reset = false,
		resettimes = 0,
		servtim = 0,
		host5 = window.location.hostname,
		pos = [x = 0, y = 0],
		typ = "Binomo",
		rate = 0,
		ratei = 0;
	var canvas = document.getElementById('valx');
	var ctx = canvas.getContext('2d');
	var cooki = [];
	$(canvas).attr("width", window.innerWidth);
	$(canvas).attr("height", window.innerHeight);
	$(window).bind('resize orientationchange', function () {

		$(canvas).attr("width", window.innerWidth);
		$(canvas).attr("height", window.innerHeight)
	});

	$(canvas).mousemove(function (e) {

		pos.x = e.pageX;
		pos.y = e.pageY;
		var ww = (($(canvas).width() / 100) * 15) / 100;
		var h = $(canvas).height() - (($(canvas).height() / 100) * 200);
		if (pos.x < (ww * 100) && pos.y < h) {

			requestAnimationFrame(self.indi)
		};
		if (pos.y > h) requestAnimationFrame(self.indi)
	});

	this.lincen = function (d) {
		// console.log("d: ", d)
		if (d.hp < pos.y && pos.y < (d.hp + d.hh) && pos.x < d.ww) {//определение позиции мышки в гисторгамме
			return true
		};
		if (d.hp < pos.y && pos.y < (d.hp + d.hh) && pos.x > d.wp && pos.x < (d.wp + d.ww)) {//определение позиции мышки в столбике
			return true
		};
		return false
	};
	this.risv = function (ar, max) {
		// console.log("ar: " + ar)
		// console.log("max: " + max)
		var ii = ar.length;
		var h = ($(canvas).height() - (($(canvas).height() / 100) * 20)) / ii,
			w, mpr = max / 100,
			ww = (($(canvas).width() / 100) * 15) / 100;
		if (window.location.hostname.length !== host5.length) return;
		var linedat = [];
		max_ob_left = 0;
		vertikal_gis_pos = [];
		cena_gist = 0;
		for (var i = 0; i < ii; i++) {
			
//#####################################################################################
// выловить максимум в левой гистограмме
			// console.log('max: ', max)
			if (ar[i][1] > 6 ) {
				if (ar[i][1] == max) {
					ctx.beginPath();
					ctx.strokeStyle = "grey";//серый цвет линии
					// ctx.moveTo(0, (h * i) );
					// ctx.lineTo(($(canvas).width() / 80) * 50, (h * i));
					ctx.moveTo(0, (h * i + h /2) );//рисует линию от 0
					ctx.lineTo(($(canvas).width() / 80) * 50, (h * i + h /2));// до этой точки
					ctx.stroke();
					// ctx.fillStyle = "#808080";
					ctx.fillStyle = "rgba(0, 33, 56, 0.61)"; //цвет фона под цифрами значения уровня цены
					ctx.fillRect((($(canvas).width() / 100) * 25) - (ar[i][0].length * 8), (h * i + (h / 2))- 25, String(ar[i][0]).length * 10, 20);//рисует фон уровня цены максимального объёма

					
					
					// ctx.fillRect((($(canvas).width() / 100) * 15.2), (h * i + (h / 2)), String(ar[i][0]).length * 10, 20);
					// ctx.fillRect((($(canvas).width() / 100) * 15.2), (h * i + (h / 2)) - 20, String(ar[i][1]).length * 20, 20);
					
					
					ctx.fillStyle = "rgba(86, 176, 104, 1)";//цвет значения объёма в квадритике
					if (ar[i][0] <= self.data.data[0].close) ctx.fillStyle = "rgba(210, 59, 59, 1)"; //цвет значения объёма в квадритике 2
					ctx.fillRect((($(canvas).width() / 100) * 20) - (ar[i][0].length * 8), (h * i + (h / 2)) - 25, String(ar[i][1]).length * 10, 20);//рисует фон значения максимального объёма
					ctx.fillStyle = "#fff";
					// ctx.font = "14px Verdana";//размер текста уровня цены
					ctx.font = ur_gist + "px Verdana";//размер текста уровня цены
					ctx.fillText(ar[i][0], (($(canvas).width() / 100) * 25) - (ar[i][0].length * 8), (h * i) + h / 2 - 10);// ar[i][0] - это значение уровня цены
					ctx.fillText(max, (($(canvas).width() / 100) * 20) - (ar[i][0].length * 8), (h * i) + h / 2 - 10);//max - это значение максимального объёма
				}
			}
			
/* 			// if (ar[i][1] > 1 ) { //русует палки с уровнями цены
				// if (ar[i][1] == max) {
					ctx.beginPath();
					ctx.strokeStyle = "grey";//серый цвет линии
					// ctx.moveTo(0, (h * i) );
					// ctx.lineTo(($(canvas).width() / 80) * 50, (h * i));
					// ctx.moveTo(0, (h * i + h /2) );//рисует линию от 0
					ctx.moveTo((($(canvas).width())) - (ar[i][0].length) * 20, (h * i + h /2) );//рисует линию от 0
					ctx.lineTo(($(canvas).width()) * 50, (h * i + h /2));// до этой точки
					vertikal_gis_pos[i] = (h * i + h /2)
					ctx.stroke();
					ctx.fillStyle = "#fff";
					// ctx.font = "14px Verdana";//размер текста уровня цены
					ctx.font = 10 + "px Verdana";//размер текста уровня цены
					ctx.fillText(ar[i][0], (($(canvas).width())) - (ar[i][0].length) *10, (h * i) + h / 2 - 5);// ar[i][0] - это значение каждого уровня цены столбиком справа

				// }
			// } */
//####################################################################################
			w = ar[i][1];
			//console.log($(canvas).height())
			//console.log("0: " + ar[i][0])
			if (invert == 1) {
				ctx.fillStyle = "#d75c48"//"#53a15f";//цвет горизонтальных объёмов слева
				if (ar[i][0] <= self.data.data[0].close) ctx.fillStyle = "#53a15f";//"#d75c48";//цвет горизонтальных объёмов слева
	//////////////////////////////////////////////////////////{
				//console.log("color: " + color)
				if (color == 1) {
	//где ar[i][1] - это значение в квадратике
				if (ar[i][1] >= 5 && ar[i][1] < 8) {
					ctx.fillStyle = "#bf3e2a";//ctx.fillStyle = "#42aaff" //добавил окрас объёма	в левой гистограмме. Меняется цвет если больше значения
				} else if (ar[i][1] >=8 && ar[i][1] < 10) {
					ctx.fillStyle = "#963121";
				} else if (ar[i][1] >=10) {
					ctx.fillStyle = "#6e2418";
				};
				if (ar[i][0] <= self.data.data[0].close) {
					if (ar[i][1] >= 5 && ar[i][1] < 8) {
						ctx.fillStyle = "#42804b"; //;//ctx.fillStyle = "#42aaff" //добавил окрас объёма	в левой гистограмме. Меняется цвет если больше значения
					} else if (ar[i][1] >=8 && ar[i][1] < 10) {
						ctx.fillStyle = "#315e38";
					} else if (ar[i][1] >=10) {
						ctx.fillStyle = "#203d24";
					}};
					//console.log(ww)
				}
			} else {

				ctx.fillStyle = "#53a15f"//"#d75c48";//цвет горизонтальных объёмов слева
				if (ar[i][0] <= self.data.data[0].close) ctx.fillStyle = "#d75c48";//"#53a15f";//цвет горизонтальных объёмов слева
//////////////////////////////////////////////////////////
				//console.log("color: " + color)
				if (color == 1) {
	//где ar[i][1] - это значение в квадратике
				if (ar[i][1] >= 5 && ar[i][1] < 8) {
					ctx.fillStyle = "#42804b";//ctx.fillStyle = "#42aaff" //добавил окрас объёма	в левой гистограмме. Меняется цвет если больше значения
				} else if (ar[i][1] >=8 && ar[i][1] < 10) {
					ctx.fillStyle = "#315e38";
				} else if (ar[i][1] >=10) {
					ctx.fillStyle = "#203d24";
				};
				if (ar[i][0] <= self.data.data[0].close) {
					if (ar[i][1] >= 5 && ar[i][1] < 8) {
						ctx.fillStyle = "#bf3e2a"; //;//ctx.fillStyle = "#42aaff" //добавил окрас объёма	в левой гистограмме. Меняется цвет если больше значения
					} else if (ar[i][1] >=8 && ar[i][1] < 10) {
						ctx.fillStyle = "#963121";
					} else if (ar[i][1] >=10) {
						ctx.fillStyle = "#6e2418";
					}};
					//console.log(ww)
				}
			}

/////////////////////////////////////////////////////////
			ctx.fillRect(0, h * i, (w / mpr) * ww, h - (h / 100));//рисует левую гистограмму(профиль рынка)
//			//console.log("ar[i][0]: " + ar[i][0])
//			//console.log("закрытие: " + self.data.data[0].close)
			if (ar[i][0] == self.data.data[0].close) {
				cena_gist = (h * i)
				// console.log('1:', cena_gist)

/* 				length_ar = String(ar[i][0]).length
				if (length_ar == 7) {
					console.log(length_ar)
//				//console.log(ar[i][1])
					console.log(ar[i][0])
				} */
				ctx.beginPath();
				ctx.strokeStyle = "#49bde8";
				ctx.moveTo(0, h * i);
				ctx.lineTo(($(canvas).width() / 100) * 30, h * i);
				ctx.stroke();
				ctx.fillStyle = "#49bde8";
				ctx.font = gis_size + "px Verdana";//размер текста уровня цены

//				if (i > i / 2) {
//					position = 30;
//				} else {
//					position = -30
//				}
//------------------------------------------------------------------------{
// для изменения занечения выше или ниже палки возде левой гисторграммы
//				//console.log("вертикаль: " + $(canvas).height())
//				//console.log("hhhhhhhhh: " + h)
//				//console.log("iiiiiiiii: " + i)
//				//console.log("h*i:		 " + (h * i))
				vertikal = ($(canvas).height() / 2 - 100)
				vertik = Math.round(h * i)
//				//console.log("вертикаль: " + vertikal)
//				//console.log("h*i:		 " + vertik)
				if (vertik > vertikal) {
					temp = (-15)
					temp_2 = (-45)
				}else {
					// temp = 30
					temp = 14
					temp_2 = 60
				}
//------------------------------------------------------------------------}
//				temp = 30

//################################################################################################################################################################
//################################################################################################################################################################
//################################################################################################################################################################
				tim = new Date();
				hour = tim.getHours();
				if (timer == 1) {
//////////////////////////////////////////////////////////
//время у гистограммы
					if (typ == "Binomo") {
						// console.log("Binomo")
						plus = 1
					} else {
						// console.log("другое")
						plus = 0
					}
					minut = plus + tim.getMinutes();
					// console.log(minut)
					sec = 60 - glob_sec + plus;// -3
//////////////////////////////////////////////////////////
				} else {
					plus = 0
					minut = tim.getMinutes();
					sec = glob_sec - plus;// -3
				}
					if (minut > 59) {
						minut = 00;
						hour = hour + plus;
					}
				if (hour < 10) hour = "0" + hour;
				if (minut < 10) minut = "0" + minut;
				if (sec < 10) {
					sec = ":" + "0" + sec;
				} else if  (sec < 0) {
					sec = 00;
				}
				if (timer == 1) {
					if (sec <= "45" && sec > "35") ctx.fillStyle = "#ffff00";//желтый добавил цвет секунд на свечи
					if (sec <= "35" && sec > "30") ctx.fillStyle = "#ff0000";//красный добавил цвет секунд на свечи
				} else {
					if (sec >= "15" && sec < "25") ctx.fillStyle = "#ffff00";//желтый добавил цвет секунд на свечи
					if (sec >= "25" && sec < "30") ctx.fillStyle = "#ff0000";//красный добавил цвет секунд на свечи
				}
//				//console.log(self.data.barsize)
//				ctx.fillText("[" + hour + ":" + minut + sec + "]", w * ((size - 1) - i), $(canvas).height() - (h * (vol / mpr)) - 50);

//################################################################################################################################################################
//################################################################################################################################################################
//################################################################################################################################################################
//				//console.log(self.data.data[0].close)
//				//console.log("ar[i][0]: " + ar[i][0])


				ctx.fillText(ar[i][0], (($(canvas).width() / 100) * 20) - (ar[i][0].length * 8), (h * i) + temp)// ar[i][0] - это значение уровня цены
				// ctx.fillText(hour + ":" + minut + ":" + sec, (($(canvas).width() / 100) * 20) - (ar[i][0].length * 8), (h * i) + temp_2)// часы у гистограммы слева
			};
			linedat.hp = h * i;
			linedat.hh = h - (h / 100);
			linedat.ww = ww * 100;
//####################################################################
// попытка выловить значение в профиле
// if (lookPrice == ar[i][0]) { //при наведении мышкой на гистограмму
//####################################################################
			
			if (self.lincen(linedat) || (lookPrice == ar[i][0])) { //при наведении мышкой на гистограмму
				ctx.fillStyle = "rgba(0, 33, 56, 0.61)";
				ctx.fillRect((($(canvas).width() / 100) * 15.2), (h * i + (h / 2)), String(ar[i][0]).length * 10, 20);
				ctx.fillStyle = "rgba(86, 176, 104, 1)";
				if (ar[i][0] <= self.data.data[0].close) ctx.fillStyle = "rgba(210, 59, 59, 1)";
				ctx.fillRect((($(canvas).width() / 100) * 15.2), (h * i + (h / 2)) - 20, String(ar[i][1]).length * 20, 20);
				ctx.beginPath();
				ctx.strokeStyle = "#fff";
				ctx.moveTo(0, h * i + (h / 2));
				ctx.lineTo(($(canvas).width() / 100) * 15.2, h * i + (h / 2));
				// console.log(self.data.data[0].close)
				ctx.stroke();
				ctx.fillStyle = "#fff";
				ctx.font = gis_size + "px Verdana";
				if (odinak > 0 ) lookPrice = ar[i][0];
				ctx.fillText(ar[i][0], (($(canvas).width() / 100) * 15.5), (h * i + (h / 2)) + 14);// ar[i][0] - это значение уровня цены при наведении мышкой на гистограмму
				ctx.fillText(ar[i][1], (($(canvas).width() / 100) * 15.5), (h * i + (h / 2)) - 5)// ar[i][1] - это цифра в квадратике при наведении мышкой на гистограмму
			}
		}
	};
	this.risg = function (ar) {
		fon_svecha = [];
		X_price = [], Y_price = [];
		if (window.location.hostname.length !== host5.length) return;
		var size = $('#period').val(),
			maxl = 0;
		for (var i = 0; i < size; i++) {
			 if (!ar[i].tick) break;
			if (ar[i].tick.length > maxl) maxl = ar[i].tick.length
		};
		var mpr = maxl / 100,
			w = ($(canvas).width() - 120) / size,
			h = (($(canvas).height() / 100) * 20) / 100;
			//console.log(w);
		var vol = 0,
			tim, hour, minut, sec, tim_0;
			open_sv = []
		for (var i = 0; i < size; i++) {
			if (!ar[i].tick) break;
			if (ar[i].tick) vol = ar[i].tick.length;
			
			open_sv[i] = ar[i].open

			if (ar[i].close < ar[i].open) {
				// console.log('крас')
				ctx.fillStyle = "#d75c48";// d75c48- красноватый "#53a15f";цвет фона фнутри свечи
				fon_svecha[i] = 'red';
				// console.log("I: " + i)
				// console.log("фон красный", i)
				// console.log("закрытие: " + ar[i].close)
				// console.log("открытие: " + ar[i].open)
				// console.log("ar[i]: " + ar[i])
			} else if (ar[i].close > ar[i].open){
				ctx.fillStyle = "#53a15f";// 53a15f - зелёный"#d75c48";цвет фона фнутри свечи
				fon_svecha[i] = 'green';
				// console.log("I: " + i)
				// console.log("фон зелёный", i)
				// console.log("закрытие: " + ar[i].close)
				// console.log("открытие: " + ar[i].open)
				// console.log("ar[i]: " + ar[i])
			} else if (ar[i].close = ar[i].open){
				ctx.fillStyle = "#808080";// 808080 - серый"#d75c48";цвет фона фнутри свечи
				fon_svecha[i] = 'grey';
			}
			ctx.fillRect(w * ((size - 1) - i), $(canvas).height(), w - (w / 100), 0 - (h * (vol / mpr)));
			ctx.fillStyle = "#fff";// цвет для окраса времени над столбиком свечи
			// ctx.font = w / 6 + "px Verdana"; //размер времени над свечой
			ctx.font = vremya_size + "px Verdana"; //размер времени над свечой
			tim = new Date(ar[i].time * 1000);
			//console.log(ar[i].time)
			//console.log("ка: " + tim)
			tim_0 = new Date();
			hour = tim.getHours();
			if (typ == "Binomo") {
				// console.log("Binomo")
				plus = 1
				sec_0 = 59
			} else {
				// console.log("другое")
				plus = 0
				sec_0 = 60
			}
			if (timer == 1) {
				minut = (tim.getMinutes() + plus);
//////////////////////////////////////////////////////////
//время у столбиков
					// console.log("тик время: " + i)

					if (i < 1) {
						//sec = 60 - tim_0.getSeconds()// -3
						sec = sec_0 - glob_sec + plus;// -3
						if (sec < -1) sec = 59
						if (sec < -2) sec = 58
						if (sec < 10) {
							sec = "0" + sec
						}
					} else {
						sec = ""
						// ctx.font = w / 4 + "px Verdana";//tim.getSeconds()
						ctx.font = vremya_size + "px Verdana"; //размер времени над свечой
					};
//////////////////////////////////////////////////////////

					if (minut < 10) minut = "0" + minut;
					if (minut > 59) {
						minut = "00";
						hour = (parseInt(hour) + 1)
					}
					if (hour < 10) hour = "0" + plus;
					if (sec > 59) sec = "00";
					if (sec <= "45" && sec > "35") ctx.fillStyle = "#ffff00";//желтый добавил цвет секунд на свечи
					if (sec <= "35" && sec > "30") ctx.fillStyle = "#ff0000";//красный добавил цвет секунд на свечи
			} else {
				minut = (tim.getMinutes() + plus);
					if (i < 1) {
						//sec = 60 - tim_0.getSeconds()// -3
						sec = glob_sec - plus;// -3
						if (sec < 10) {
							sec = "0" + sec
						}
					} else {
						sec = ""
						// ctx.font = w / 4 + "px Verdana";//tim.getSeconds()
						ctx.font = vremya_size + "px Verdana"; //размер времени над свечой
					};
					
					if (minut < 10) minut = "0" + minut;
					if (minut > 59) {
						minut = "00";
						hour = (parseInt(hour) + plus)
					}
					if (hour < 10) hour = "0" + hour;
					if (sec > 59) sec = "00";
					if (sec >= "15" && sec < "25") ctx.fillStyle = "#ffff00";//желтый добавил цвет секунд на свечи
					if (sec >= "25" && sec < "30") ctx.fillStyle = "#ff0000";//красный добавил цвет секунд на свечи

			}
					// console.log("1: " + h)
					// console.log("vol: " + vol)
					// console.log("mpr: " + mpr)
			if (i < 1) {
				sec = ':'+ sec
				if (timer == 1) {

				} else {
					minut = minut - 1
				}

			}
			ctx.fillText(hour + ":" + minut + sec, w * ((size - 1) - i), $(canvas).height() - (h * (vol / mpr)) - 10);//время у столбиков
			X_price[i] = w * ((size - 1) - i)
			Y_price[i] = $(canvas).height() - (h * (vol / mpr))
			// console.log("x_2" + X_price[i])
			// console.log("y_2" + Y_price[i])
			vol = 0

		}
	};
	this.rish = function (data) {
		var sub_uid;
		var clust_count = $('#period').val() * 1 + 1
		var clustW = ($(canvas).width()) / (clust_count + 1.5);
		var hPos = 300;
		var step = ($(canvas).height() - hPos) / 2;
		
		
		cena_sv = []
		cena_stolbik = 0, rash_up = 0;
		var max_ob, text_cen_max_ob = [], max_position_all = 0, max_p, test;
		if (window.location.hostname.length !== host5.length) return;
		var size = $('#period').val(),
			high_1 = 0, low_1 = 0,
			maxl, maxtick = 0,
			mpr, ii, ky = 0,
			ar = [],
			arrg = [],
			arrgg = [],
			iss, ik, datatic = [],
			linedat = [];
		var vol = 0;
		for (var i = 0; i < size; i++) {
			if (!data[i].tick) break;
			if (data[i].tick) {
				vol = data[i].tick.length
				// console.log("123: " + vol)
			};
			arrg = [],
			ii = data[i].tick.length;
			if (ii > maxtick) maxtick = ii;
			for (var is = 0; is < ii; is++) {
				if (!arrg[data[i].tick[is].close]) {
					arrg[data[i].tick[is].close] = 1
				} else {
					arrg[data[i].tick[is].close]++
				}
			};
			var arrgg = [];
			for (var key in arrg) {
				arrgg.push([key, arrg[key]])
			};
			var iss = arrgg.length,
				ik, ar = [];
			for (var iv = 0; iv < iss; iv++) {
				if (Number(arrgg[iv][0]) > 0) {
					ik = iv;
					ky = arrgg[iv][0];
					for (var iii = 0; iii < iss; iii++) {
						if (Number(arrgg[iii][0]) > ky) {
							ky = arrgg[iii][0];
							ik = iii;
							if (iv > 0) iv--
						}
					};
					ar.push([ky, arrgg[ik][1]]);
					arrgg[ik][0] = 0
				}
			};
			datatic.push(ar)
		};
		var ids = datatic.length,
			ig;
		var mpr = maxtick / 100;
		var w = ($(canvas).width() - 120) / size;
		var hh = (($(canvas).height() / 100) * 20) / 100,

			h = 0,
			w1 = 0,
			close = 0;
		var maxl;
		candleLow = 0
		candleHigh = 0
		// open = 0
		// candleLow = datatic[i][0][0] 
		// candleHigh = datatic[i][ids][0]
		// candleLow = datatic[i][0]
		// candleHigh = datatic[i][ids]
		for (var i = 0; i < ids; i++) {// где ids - это колличество собранных свечей
			// console.log("ids: " + ids)
			// console.log("i: " + i)// где i - это номер свечи начиная с 0 где 0 - это текущая свеча
			ig = datatic[i].length;//сумма строк объёма в столбике

			// console.log("ig: " + ig)
			// console.log("datatic[i]: " + datatic[i])
			h = ((data[i].tick.length / mpr) * hh) / ig;
			// console.log(data[i].tick[0])// массив всех тиков
			close = data[i].tick[0].close;//цена закрытия каждого тика
			// console.log(close)
			maxl = 0;
			// if (ig == 1) {
				// console.log(datatic)
				open[i] = open_sv[i]
				// console.log(open[i])
			// }
			candleHigh = datatic[i][0][0]// цена максимума свечи
			candleLow = datatic[i][ig -1][0]//цена минимума свечи		

			for (var ii = 0; ii < ig; ii++) {
				// console.log("maxl1: " + maxl)
				if (datatic[i][ii][1] > maxl) {
					maxl = datatic[i][ii][1]// maxl - максимальный текущий объём
				}
			};
			max_ob = 0;
			text_cen_max_ob = 0;
			for (var ii = 0; ii < ig; ii++) {
//////////////////////////////////////////////////////////
//максимальный объём
			// if (datatic[i][ii][1] > maxl) {
				// maxl = datatic[i][ii][1]// maxl - максимальный текущий объём
			// }
			
			if(datatic[i][ii][1] >= max_ob) {
				max_ob = datatic[i][ii][1]
				max_position_all = ig
				max_p_find = ii
				// console.log("maxl1: " + maxl)
				// console.log("max_ob: " + max_ob)
				text_cen_max_ob = datatic[i][ii][0]//text_cen_max_ob - цена на максимальном объёме
				if (text_cen_max_ob < close) {
					color_text = "#008f1d"//зелёный
				}
				if (text_cen_max_ob > close) {
					color_text = "#d75c48"//красный
				}
				if (datatic[i][ii][0] == close) {
					color_text = "#ffffff"//белый
				}
			};
//максимальный объём
//////////////////////////////////////////////////////////

//				//console.log("ii: " + ii)
//				//console.log("ig: " + ig)
//				//console.log("datatic[i][ii][0]: " + datatic[i][ii][0])
//				//console.log(self.data.barsize);//интервал свечей где объём(время жизни свечи)
				if (invert == 1) {
					ctx.fillStyle = "#930000";//красный"#005811";объём цвета фнутри свечи
					if (datatic[i][ii][0] <= close) ctx.fillStyle = "#005811";//"#930000"объём цвета фнутри свечи
					if (color == 1) {
						if (datatic[i][ii][1] >= 6) ctx.fillStyle = "#2e0000";//добавил окрас объёма	в свече меняется цвет если больше значения
						if (datatic[i][ii][1] >= 4 && datatic[i][ii][1] < 6)
							ctx.fillStyle = "#610000";//добавил окрас объёма	в свече меняется цвет если больше значения

						if (datatic[i][ii][0] <= close) {
							if (datatic[i][ii][1] >= 6) ctx.fillStyle = "#002908";//добавил окрас объёма	в свече меняется цвет если больше значения
							if (datatic[i][ii][1] >= 4 && datatic[i][ii][1] < 6 )
								ctx.fillStyle = "#005c12";//добавил окрас объёма
						}
					}
				} else {
					ctx.fillStyle = "#005811";//зелёный"#005811";объём цвета фнутри свечи
					if (datatic[i][ii][0] <= close) ctx.fillStyle = "#930000";//"#930000"объём цвета фнутри свечи
					if (color == 1) {
						if (datatic[i][ii][1] >= 6) ctx.fillStyle = "#002908";//добавил окрас объёма	в свече меняется цвет если больше значения
						if (datatic[i][ii][1] >= 4 && datatic[i][ii][1] < 6)
							ctx.fillStyle = "#0a4500";//добавил окрас объёма	в свече меняется цвет если больше значения

						if (datatic[i][ii][0] <= close) {
							if (datatic[i][ii][1] >= 6) ctx.fillStyle = "#2e0000";//добавил окрас объёма	в свече меняется цвет если больше значения
							if (datatic[i][ii][1] >= 4 && datatic[i][ii][1] < 6 )
								ctx.fillStyle = "#610000";//добавил окрас объёма
						}
					}
				}
				w1 = (w / 100) * (datatic[i][ii][1] / (maxl / 100));
				
				// console.log('2: ', cena_gist)
				// console.log("222")
				// console.log("_______________")
				// cena_sv[i] = cena_gist
				// if (cena_gist > 0) ctx.fillRect(w * ((size - 1) - i), cena_sv[i] - (h * (ig - ii)), w1 - ((w1 / 100) * 10), h - (h / 100));//рисует объёмы  контекст.fillRect(x, y, ширина, высота);
				// ctx.fillRect((clustW / 2) + i * clustW,  $(canvas).height() - ((step * clNumb)) - hPos / 2, w1 - ((w1 / 100) * 10), h - (h / 100));//русует объёмы как свечи
				
				
				ctx.fillRect(w * ((size - 1) - i), $(canvas).height() - (h * (ig - ii)), w1 - ((w1 / 100) * 10), h - (h / 100));//рисует объёмы  контекст.fillRect(x, y, ширина, высота);
				linedat.hp = $(canvas).height() - (h * (ig - ii));
				linedat.hh = h;
				linedat.wp = w * ((size - 1) - i);
				linedat.ww = (w / 100) * (maxl / (maxl / 100));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//попытка отловить значение из профиля
// (lookPrice == datatic[i][ii][0])
//////////////////////////////////////////////////////////
				if (self.lincen(linedat)|| (lookPrice == datatic[i][ii][0])) {//при наведении мышкой в столбике
					var textcenasv = datatic[i][ii][0];
					ctx.fillStyle = "rgba(0, 33, 56, 0.61)";
					ctx.fillRect((w * ((size - 1) - i)) + linedat.ww - 1, linedat.hp + (linedat.hh / 2) - 20, textcenasv.length * 10, 20);
					ctx.fillStyle = "rgba(86, 176, 104, 1)";
					if (datatic[i][ii][0] <= close) ctx.fillStyle = "rgba(210, 59, 59, 1)";
					ctx.fillRect((w * ((size - 1) - i)) + linedat.ww - 1, linedat.hp + (linedat.hh / 2) - 40, String(datatic[i][ii][1]).length * 15, 20);
					ctx.beginPath();
					ctx.strokeStyle = "#fff";
					ctx.moveTo(linedat.wp, linedat.hp + (h / 2));
					ctx.lineTo(linedat.wp + linedat.ww, linedat.hp + (h / 2));
					ctx.stroke();
					ctx.fillStyle = "#fff";
					ctx.font = "14px Verdana";//размер шрифта при наведении мышкой в столбике
					if (odinak > 0 ) lookPrice = textcenasv
					ctx.fillText(textcenasv, (w * ((size - 1) - i)) + linedat.ww, linedat.hp + (linedat.hh / 2) - 5);// значение цены при наведении мыки в столбике
					ctx.fillText(datatic[i][ii][1], (w * ((size - 1) - i)) + linedat.ww, linedat.hp + (linedat.hh / 2) - 25)// максимальный объём при наведении мыки в столбике
				}
			}
			x = X_price[i]
			y = Y_price[i]
			if (max_obj == 1) {

				// console.log("x_2: " + x)
				// console.log("y_2: " + y)
					if (max_obj_color == 1) {
						// if (color_text == "#008f1d") {
							// ctx.fillStyle = "#000000"
						// } else {
							// ctx.fillStyle = "#000000"
						// }
						// ctx.fillRect(x, y - (linedat.hp / (size * 1.2)), String(text_cen_max_ob).length * 10, 20);

						// ctx.beginPath();
						// ctx.moveTo(linedat.wp, linedat.hp + (h / 2));
						// ctx.lineTo(linedat.wp + linedat.ww, linedat.hp + (h / 2));

						ctx.fillStyle = color_text;// цвет для окраса над столбиком свечи
					} else {
						ctx.fillStyle = "#ffffff"

					}
					// console.log('размер массива максимальной цены: ', text_cen_max_ob.length);
					
					/* // console.log("high: ", high_1[i], ' свеча: ', i)
					// console.log("low: ", low_1[i], ' свеча: ', i)
					console.log("candleLow: ", candleLow, "candleHigh: ", candleHigh)
					
					if (candleLow < candleHigh) {
						candleLow = parseFloat(candleLow)
						candleHigh = parseFloat(candleHigh)
						minus = candleHigh - candleLow
						console.log('minus 1: ', minus)
						minus = Math.round(minus * 100000) / 100000
						console.log('minus 2: ', minus)
						center = ((minus) / 2) + (candleLow)
						console.log('center', center)
						//если a < b = ((b-a)/a) * 100
						//если center < candleHigh = ((candleHigh - center) / center) * 100
						// (a — b) / [ (a + b) / 2 ] | * 100 %
						procentHigh = ((candleHigh - center) / (candleHigh + center / 2) * 100)
						// procentHigh = ((candleHigh - center) / center) * 100
						console.log('procentHigh: ', procentHigh)
						
						//если a > b = ((a-b)/a) * 100
						//если center > candleLow = ((center - candleLow) / center) * 100
						// procentLow = ((center - candleLow) / center) * 100
						procentLow = ((center - candleLow) / (center + candleLow / 2) * 100)
						console.log('procentLow: ', procentLow)
					} else {
						console.log('не меньше')
						procentHigh = candleHigh
						procentLow = candleLow
					}
					 */
					text_cen_max_ob = text_cen_max_ob.slice(obrez, 12) //для округления значений
					// ctx.font = w / 20 * razmer_obj + "px Verdana"; //размер	над свечой
					ctx.font = max_size + "px Verdana"; //размер	над свечой
					// console.log(w)
					ctx.fillText(text_cen_max_ob, x, y - (vremya_size * 2.2));// значение цены максимального объёма столбика
					ctx.fillText(max_ob, x + (linedat.ww / 3), y - (parseFloat(vremya_size) + parseFloat(max_size)* 2.3));// значение максимального объёма у столбика

					// ctx.fillText('p_all: ' + max_position_all, x, y - w/1);// сколько строк объёма в свече
					// ctx.fillText('p_m_f: ' + max_p_find, x, y - w/1.2);// позиция макс объёма в свече
					// ctx.fillText('%H:' + procentHigh, x, 300);// % procentHigh
					// ctx.fillText('%L:' + procentLow, x, 500);// %procentLow
					// ctx.fillText('H:' + candleHigh, x, 300);// цена максимума свечи
					// ctx.fillText('L:' + candleLow, x, 400);// цена минимума свечи
					// ctx.fillText('O:' + open[i], x, 500);// цена открытия свечи
					// ctx.fillText('C:' + close, x, 600);// цена закрытия свечи

			}

//##########################################################################################################################################
//##########################################################################################################################################
//СТРЕЛКИ ВКЛЮЧИТЬ
			if (strelki_procent == 1) {
				ctx.fillStyle = color_text;
				var upstr = "\u2B08", downstr = "\u2B0A", ravnostr = "\u2B0D";
				procent_rassh = (max_p_find * 100 / max_position_all)
				procent_rassh = parseFloat(procent_rassh.toFixed());
				// console.log('i: ', i)
				// console.log('a: ', max_position_all)
				// console.log('f: ', max_p_find)
				// console.log('%: ', procent_rassh)
				// console.log('_________________')
				ctx.font = str_min_size + "px Verdana"; //размер текста мелких стрелок над свечой
				// console.log(fon_svecha[i])
				if (fon_svecha[i] == 'red') {
					if (procent_rassh < 50) {
						max_p = 'down'
					} else if (procent_rassh > 50) {
						max_p = 'down'
					} else if (procent_rassh = 50) {
						max_p = '0'
					}
					procent_rassh = 100 - procent_rassh
				}
				if (fon_svecha[i] == 'green'){
					if (procent_rassh < 50) {
						max_p = 'up'
					} else if (procent_rassh > 50) {
						max_p = 'up'
					} else if (procent_rassh = 50) {
						max_p = '0'
					}
				}
				if (fon_svecha[i] == 'grey'){
					if (procent_rassh < 50) {
						max_p = '0'
					} else if (procent_rassh > 50) {
						max_p = '0'
					} else if (procent_rassh = 50) {
						max_p = '0'
					}
				}
				// console.log('max_size', parseFloat(max_size) + parseFloat(vremya_size))
				if (max_p == 'up') {
					// if (procent_rassh > 80) upstr = (upstr + upstr)
					// ctx.fillText(upstr + procent_rassh, x + (linedat.ww / 4), y - (w * 1.2) - (max_size * 1));// сколько строк объёма в свече
					ctx.fillText(upstr + procent_rassh, x + (linedat.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));// позиция макс объёма в свече
					rash_up = procent_rassh
					rash_down = 100 - procent_rassh
				} else if (max_p == 'down') {
					// if (procent_rassh > 80) downstr = (downstr + downstr)
					ctx.fillText(downstr + procent_rassh, x + (linedat.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));// позиция макс объёма в свече
					rash_up = 100 - procent_rassh
					rash_down = procent_rassh
				} else if (max_p == '0') {
					ctx.fillText(ravnostr + procent_rassh, x + (linedat.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));// позиция макс объёма в свече
					rash_up = procent_rassh
					rash_down = procent_rassh
				}
				po_up = 2
				po_down = 1
			}
			if (Strelki_On == 1) {
				if (i == 1) {
					var	x22 = ($(canvas).width() / 2);
					var	y22 = ($(canvas).height() / 10);
					
					// console.log("ig1:", ig)
					// var arrow_up_x = 850, 
					// arrow_up_y = 150, 
					// arrow_down_x = 850, 
					// arrow_down_y = 500;
					var arrow_up_x = x22, 
					arrow_up_y = y22;
					// console.log(arrow_up_y);
					arrow_down_x = x22, 
					arrow_down_y = y22 + 330;
					// console.log(arrow_down_y);
					ctx.font = ur_str_size + "px Verdana"; //размер	текста между большими стрелками
					if (color_text == "#d75c48") {//красный
						// console.log('red')
						// document.getElementById("downa").src="img/down.png";
						// document.getElementById("upa").src="img/upa.png";
						// document.getElementById('close_1').innerHTML = (close)
						ArrowDraw(ctx, 'up', arrow_up_x, arrow_up_y, 150, 150, 'green', 1, 'str');
						ArrowDraw(ctx, 'down', arrow_down_x, arrow_down_y, 150, 150, 'red', 1, 'fill');
						ctx.fillText(close, arrow_up_x + 30, arrow_down_y / 1.6)
						if (strelki_procent == 1) {
							ctx.fillStyle = "#fff";
							ctx.fillText(rash_down + '%', arrow_up_x + 50, arrow_down_y / po_up * 1.5)
							// ctx.fillStyle = "Yellow";
							ctx.fillText(rash_up + '%', arrow_up_x + 50, arrow_down_y / po_up)
						}
					} else if (color_text == "#008f1d") { //зеленый
						// console.log('зеленый')
						// document.getElementById("upa").src="img/up.png";
						// document.getElementById("downa").src="img/downa.png";
						// document.getElementById('close_1').innerHTML = (close)
						ArrowDraw(ctx, 'up', arrow_up_x, arrow_up_y, 150, 150, 'green', 1, 'fill');
						ArrowDraw(ctx, 'down', arrow_down_x, arrow_down_y, 150, 150, 'red', 1, 'str');
						ctx.fillText(close, arrow_up_x + 30, arrow_down_y / 1.6)
						if (strelki_procent == 1) {
							ctx.fillStyle = "#fff";
							ctx.fillText(rash_down + '%', arrow_up_x + 50, arrow_down_y / po_up * 1.5)
							// ctx.fillStyle = "Yellow";
							ctx.fillText(rash_up + '%', arrow_up_x + 50, arrow_down_y / po_up)
						}
					} else if (color_text == "#ffffff") { //белый
						// console.log('белый')
						// document.getElementById("upa").src="img/upa.png";
						// document.getElementById("downa").src="img/downa.png";
						// document.getElementById('close_1').innerHTML = (close + ' закр. на макс. объёме')
						ArrowDraw(ctx, 'up', arrow_up_x, arrow_up_y, 150, 150, 'green', 1, 'str');
						ArrowDraw(ctx, 'down', arrow_down_x, arrow_down_y, 150, 150, 'red', 1, 'str');
						ctx.fillText((close + ' закр. на макс. объёме'), arrow_up_x + 30, arrow_down_y / 1.6)
						if (strelki_procent == 1) {
							
							ctx.fillStyle = "#fff";
							ctx.fillText(rash_down + '%', arrow_up_x + 50, arrow_down_y / po_up * 1.5)
							// ctx.fillStyle = "Yellow";
							ctx.fillText(rash_up + '%', arrow_up_x + 50, arrow_down_y / po_up)
						}
					}
				}
			}
//##########################################################################################################################################
//##########################################################################################################################################
		};
		// console.log('preload01')
		if ($(".preload").is(':visible')) {
			console.log('загрузка завершена')
			$(".preload").hide("fade")
		}
	};
	this.soc = function (pair = "EURUSD", size = 60) {
		if (window.location.hostname.length !== host5.length) return;
		console.log('Загрузка данных')
		$(".preload").show("fade");
		if ($("#" + $("#pair").attr("val").replace(/[/]/g, '_')).attr("data") !== typ || !wss) {
			typ = $("#" + $("#pair").attr("val").replace(/[/]/g, '_')).attr("data");
			if (wss) wss.close();
			if (typ == "OlympTrade") {
				console.log('OlympTrade');
				wss = new WebSocket("wss://olymptrade.com/ds/v4");
				// console.log('wss OlympTrade:' + wss)
			}
			if (typ == "Binary") {
				console.log('Binary');
				wss = new WebSocket("wss://blue.binaryws.com/websockets/v3?app_id=1&l=RU");
				// console.log('wss Binary:' + wss)
			}
			if (typ == "Binomo") {
				console.log('Binomo');
				wss = new WebSocket("wss://as.binomo.com/");
				// console.log('wss Binomo:' + wss)
			}
			wss.onopen = function () {
				// if (typ == "OlympTrade") wss.send('{"pair":"' + pair + '","size":' + size + '}');
				if (typ == "OlympTrade") {
					send_olymp = '[{"t":2,"e":4,"d":[{"p":"' + pair + '","tf":' + size + '}]}]'
					// send_olymp = '[{"t":2,"e":4,"uuid":"JSM1ZVGXXVB0J6AWR9B","d":[{"p":"Bitcoin","tf":1}]}]'
					wss.send(send_olymp);
					
					// console.log(send_olymp)
				}
				// [{"t":2,"e":4,"d":[{"p":"GBPUSD","tf":15}]}]
				if (typ == "Binary") {
					// {"ticks_history":"R_100","style":"ticks","end":"latest","count":20,"subscribe":1,"req_id":1,"passthrough":{}}
					wss.send('{"ticks_history":"' + pair + '","style":"ticks","end":"latest","count":20,"subscribe":1,"req_id":1,"passthrough":{}}')
					// wss.send('{"ticks_history":"R_100","style":"ticks","end":"latest","count":20,"subscribe":1,"req_id":1,"passthrough":{}}')

					// console.log('Binary WSS send 1');
				}
				if (typ == "Binomo") {
					wss.send('subscribe:' + pair)
					// console.log('subscribe:' + pair)
				}

			};
			wss.onclose = function () {
				console.log("Connection closed...");
				self.soc($("#pair").attr("val"), $("#size").val())
			};
			wss.onmessage = function (evt) {
				// console.log('evt:' + evt.data)
				temppp = (JSON.parse(evt.data))
				// console.log(temppp.data[0].assets[0].created_at)
				if (typ == "Binomo") {
					if (temppp.data[0].assets && temppp.data[0].assets[0].created_at) {
						// console.log('ok')
						timer_temp = temppp.data[0].assets[0].created_at

						timer_test = new Date(timer_temp);
						timer_glob_hour = timer_test.getHours();
						timer_glob_min = timer_test.getMinutes();
						timer_glob_sec = timer_test.getSeconds();
						kotirovka = temppp.data[0].assets[0].rate;


						if (prohod == 0) {
							prohod = 1
							
							temp_data_t0 = evt.data
							timer_glob_hour_t0 = timer_test.getHours();
							timer_glob_min_t0 = timer_test.getMinutes();
							timer_glob_sec_t0 = timer_test.getSeconds();
							kotirovka_t0 = temppp.data[0].assets[0].rate;
						}else if (prohod == 1) {
							prohod = 0
							
							temp_data_t1 = evt.data
							timer_glob_hour_t1 = timer_test.getHours();
							timer_glob_min_t1 = timer_test.getMinutes();
							timer_glob_sec_t1 = timer_test.getSeconds();
							kotirovka_t1 = temppp.data[0].assets[0].rate;
						}

						if (timer_glob_sec_temp != timer_test.getSeconds()) {
							timer_glob_sec_temp = timer_test.getSeconds();
							if (prohod == 1) {
								self.predobrdata(temp_data_t0)
								// console.log('', timer_glob_hour_t0, timer_glob_min_t0, timer_glob_sec_t0, kotirovka_t0)
							}else if (prohod == 0) {
								self.predobrdata(temp_data_t1)
								// console.log('', timer_glob_hour_t1, timer_glob_min_t1, timer_glob_sec_t1, kotirovka_t1)
							}

						}	
					// console.log('org:', timer_glob_hour, timer_glob_min, timer_glob_sec, kotirovka)
					}
				} else if (typ == "Binary") {
					if (temppp.tick && temppp.tick.quote) {
						// console.log('Binary ok')
						timer_temp = (temppp.tick.epoch * 1000)

						timer_test = new Date(timer_temp);
						timer_glob_hour = timer_test.getHours();
						timer_glob_min = timer_test.getMinutes();
						timer_glob_sec = timer_test.getSeconds();
						kotirovka = temppp.tick.quote;
						if (prohod == 0) {
							prohod = 1
							
							temp_data_t0 = evt.data
							timer_glob_hour_t0 = timer_test.getHours();
							timer_glob_min_t0 = timer_test.getMinutes();
							timer_glob_sec_t0 = timer_test.getSeconds();
							kotirovka_t0 = temppp.tick.quote;
						}else if (prohod == 1) {
							prohod = 0
							
							temp_data_t1 = evt.data
							timer_glob_hour_t1 = timer_test.getHours();
							timer_glob_min_t1 = timer_test.getMinutes();
							timer_glob_sec_t1 = timer_test.getSeconds();
							kotirovka_t1 = temppp.tick.quote;
						}

						if (timer_glob_sec_temp != timer_test.getSeconds()) {
							timer_glob_sec_temp = timer_test.getSeconds();
							if (prohod == 1) {
								self.predobrdata(temp_data_t0)
								// console.log('', timer_glob_hour_t0, timer_glob_min_t0, timer_glob_sec_t0, kotirovka_t0)
							}else if (prohod == 0) {
								self.predobrdata(temp_data_t1)
								// console.log('', timer_glob_hour_t1, timer_glob_min_t1, timer_glob_sec_t1, kotirovka_t1)

							}

						}
					// console.log('org:', timer_glob_hour, timer_glob_min, timer_glob_sec, kotirovka)
					}
				}
				document.getElementById("tik").setAttribute("value", kotirovka)
				// self.predobrdata(evt.data)
			}
		} else {
			// if (typ == "OlympTrade" && wss) wss.send('{"pair":"' + pair + '","size":' + size + '}');

			if (typ == "OlympTrade" && wss) {
				if (!uuid) uuid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 12)).toUpperCase()
				if(sub_uid === 'undefined'){
					// console.log("sub_uid undefined");//если sub_uid undefined (не найдено)
					if (wss.readyState === WebSocket.OPEN) {
						wss.close();
						wss = new WebSocket("wss://olymptrade.com/ds/v4");
					}
					wss.onopen = function () {
						send_olymp = '[{"t":2,"e":4,"d":[{"p":"' + pair + '","tf":' + size + '}]}]'
						// send_olymp = '[{"t":2,"e":4,"uuid":"JSM1ZVGXXVB0J6AWR9B","d":[{"p":"Bitcoin","tf":1}]}]'
						wss.send(send_olymp);				
						// console.log(send_olymp)
					}
				} else {
					// console.log("sub_uid OlympTrade: ", sub_uid)
					send_sub_uid = '[{"t":2,"e":5,"uuid":"'+ uuid +'","d":[{"sub_uid":"'+ sub_uid + '"}]}]'//команда для отписки от котировок олимпа
					wss.send(send_sub_uid);//отправка команды
					// console.log('send_sub_uid:', send_sub_uid);//вывести в консоль команду отписки от олимпа

				// [{"t":2,"e":5,"uuid":"","d":[{"sub_uid":"16222c49-cb01-4afc-b426-90b4454f4841"}]}]
					send_olymp = '[{"t":2,"e":4,"uuid":"'+ uuid +'","d":[{"p":"' + pair + '","tf":' + size + '}]}]'//команда для подписки на котировку олимпа
					wss.send(send_olymp);//отправка команды
					// console.log('send_olymp:', send_olymp);//вывести в консоль команду подписки от олимпа
				}
			}
			if (typ == "Binary") {
					wss.send('{"forget_all":["ticks","candles"],"passthrough":{}}');
					wss.send('{"ticks_history":"' + pair + '","style":"ticks","end":"latest","count":20,"subscribe":1,"req_id":1,"passthrough":{}}')

			};
			if (typ == "Binomo") {
				console.log('Binomo22');
				if(sub_bin == 'undefined'){
					// console.log("sub_bin undefined");//если sub_bin undefined (не найдено)
					if (wss.readyState === WebSocket.OPEN) {
						wss.close();
						wss = new WebSocket("wss://as.binomo.com/");
					}
					wss.onopen = function () {
						wss.send('subscribe:' + pair)
						console.log('subscribe:' + pair)
					}
				} else {
					// console.log("sub_bin: ", sub_bin)
					// console.log('unsub: ', self.data.pair);
					wss.send('unsubscribe:' + self.data.pair);
					console.log('unsubscribe:' + self.data.pair);
					wss.send('subscribe:' + pair)
					console.log('subscribe:' + pair)
				}
			};
			ratei = 0
		};
		// console.clear()
	};
	this.predobrdata = function (data) {
		


		// $("#VA_MOD").html('<a href="https://t.me/VA_MOD">Telegram</a>')
		var data = JSON.parse(data);
//##############################################################################################
//#############################################################################_________________
		// console.log('data_all:', data)
		uuid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 12)).toUpperCase()
		if (typ == "OlympTrade") {
			sub_bin = 'undefined'
			// console.log('OlympTrade')
			// console.log('OlympTrade', data[0].e)		
			var jso = {},
				tim;
				// console.log('data5: ', data[5].d[0])
				// console.log('data5:')
			if (rate == 0 && data[5]) {
				// console.log('data5:')
				if (rate == 0 && data[5].e == 4) {
				sub_uid = data[5].d[0].sub_uid;			
				// console.log('sub_uid:', sub_uid)
				}
			} else if (data[0].d[0].sub_uid) {
				sub_uid = data[0].d[0].sub_uid;
				// console.log('sub_uid2:', sub_uid)
			} else if (data[5]) {
				if (data[5].e == 4) {
					if (data[5].d[0]) {
					sub_uid = data[5].d[0].sub_uid;
					// console.log('sub_uid3:', sub_uid)
					}
				}
			}
			// console.log('sub_uid_0:', sub_uid);
			// console.log('t:', data[0].t)
			// console.log('data:', data)
			if (rate == 0 && data[0].e == 1) {				
				rate = data[0].d[0].q;
				// console.log('rate:', rate)
			}
			if (data[0].d) {
				// console.log('close:', data[0].d[0].close)
				if (rate == data[0].d[0].close) {
					ratei++
				}
			};
			if (data[0].e == 1) {
				data = data[0].d[0];
				tim = data.t
				// console.log('timer', tim);
				// console.log('Ol', data[0].d[0].close);
				// console.log('timer', data[0].d[0].t);

		// {"data":[{"assets":[{"rate":1.1453,"precision":6,"ask":1.1455,"created_at":"2019-02-01T15:36:06.000000Z","bid":1.1451,"ric":"EURO"}],"action":"assets"}],"success":"true","errors":[]}
		
		// [{"e":2,"d":[{"p":"ETCUSD","t":1549051411,"open":3.91412,"low":3.91402,"high":3.91412,"close":3.91402}]}]
		//окончание округления
//##############################################################################################
				// tim = String(timer);
				// tim = Math.trunc(tim);
				
				// tim2 = timeConverter(tim)
				// console.log("111: ", tim2)
				
				// milliseconds = parseInt((tim % 1000) / 100),
				// seconds = parseInt((tim / 1000) % 60),
				// minutes = parseInt((tim / (1000 * 60)) % 60),
				// hours = parseInt((tim / (1000 * 60 * 60)) % 24);

				// glob_hour = (hours < 10) ? "0" + hours : hours;
				// glob_min = (minutes < 10) ? "0" + minutes : minutes;
				// glob_sec = (seconds < 10) ? "0" + seconds : seconds;
////##############################################################################################
//добавил глобальные секунды из даты
				// tim_00 = (timer);
				//console.log(tim_00);
				// test_time = new Date();
				// new Date(UNIX_timestamp * 1000)
				test_time = new Date(tim * 1000);
				// bDate = new Date(data[0].d[0].t);
				// console.log('bDate: ', bDate)
				// console.log('Date: ', test_time)
				glob_hour = test_time.getHours();
				glob_min = test_time.getMinutes();
				glob_sec = test_time.getSeconds();
				// console.log('hour: ', glob_hour)
				// console.log('min: ', glob_min)
				// console.log('sec: ', glob_sec)
				// console.log(glob_hour, glob_min, glob_sec, "-" , data.q)//котировка с олимпа
//окончание секунд
//##############################################################################################
				// tim = Number(tim.substring(0, tim.length - 3));

				if (reset == true) {
					jso["pair"] = data.p;
					jso["time"] = +tim;
					// console.log(jso["time"])
					//console.log(Math.trunc((data.ask - data.bid) *100000))
					//console.log(Math.trunc((data.rate - data.bid) *100000))
					//console.log(Math.trunc((data.ask - data.rate) *100000))
					// console.log("1: " + data.rate)
					jso["open"] = +data.q;
					// console.log("2: " + jso["open"])
					jso["low"] = +data.q;
					jso["high"] = +data.q;
					jso["close"] = +data.q
				} else if (reset == false) {
					jso["barsize"] = +$("#size").val();
					jso["data"] = [];
					jso["pair"] = data.p;
					var jskl = {};
					jskl["pair"] = data.p;
					jskl["time"] = tim - (tim % $("#size").val());
					jskl["open"] = +data.q;
					//console.log(jskl["time"])
					jskl["low"] = +data.q;
					jskl["high"] = +data.q;
					jskl["close"] = +data.q;
					for (var i = 0; i < 72; i++) {
						jso["data"].push(jskl);
						jskl["time"] = tim - $("#size").val()
					}
				}
			}
			self.obr(jso)
		}
//#############################################################################_________________
		if (typ == "Binary") {
			sub_bin = 'undefined'
			// console.log('Binary')
			// console.log('Binary:', data.tick.quote)		
			var jso = {},
				tim;
			if (rate == 0 && data.tick) {				
				rate = data.tick.quote;
				// console.log('rate:', rate)
			}
			if (data.tick) {
				// console.log('close:', data[0].d[0].close)
				if (rate == data.tick.quote) {
					ratei++
				}
			};
			if (data.tick) {
				data = data.tick;
				tim = data.epoch
				// console.log('timer', tim);
				// console.log('Ol', data[0].d[0].close);
				// console.log('timer', data[0].d[0].t);

		// {"data":[{"assets":[{"rate":1.1453,"precision":6,"ask":1.1455,"created_at":"2019-02-01T15:36:06.000000Z","bid":1.1451,"ric":"EURO"}],"action":"assets"}],"success":"true","errors":[]}
		
		// [{"e":2,"d":[{"p":"ETCUSD","t":1549051411,"open":3.91412,"low":3.91402,"high":3.91412,"close":3.91402}]}]
				if (okrugl_on == 1) {

					// data.rate = Math.round(data.rate * okruglit) / okruglit
					data.quote = parseFloat(data.quote.toFixed(okrugl))
					// console.log('data.quote', data.quote);
				}else {
		//окончание округления
					if (data.symbol == 'R_10') {
						data.quote = Math.round(data.quote * 10) / 10	
					} else if (data.symbol == 'R_25') {
						data.quote = Math.round(data.quote * 10) / 10	
					} else if (data.symbol == 'R_50') {
						data.quote = Math.round(data.quote * 10) / 10	
					} else if (data.symbol == 'R_75') {
						data.quote = Math.round(data.quote * 10) / 10	
					} else if (data.symbol == 'R_100') {
						data.quote = Math.round(data.quote * 10) / 10	
					} else {
						data.quote = Math.round(data.quote * 100000) / 100000	
					}
				}
				// tim_00 = (timer);
				//console.log(tim_00);
				// test_time = new Date();
				// new Date(UNIX_timestamp * 1000)
				test_time = new Date(tim * 1000);

				glob_hour = test_time.getHours();
				glob_min = test_time.getMinutes();
				glob_sec = test_time.getSeconds();

				// tim = Number(tim.substring(0, tim.length - 3));

				if (reset == true) {
					jso["pair"] = data.symbol;
					jso["time"] = +tim;
					// console.log(jso["time"])
					//console.log(Math.trunc((data.ask - data.bid) *100000))
					//console.log(Math.trunc((data.rate - data.bid) *100000))
					//console.log(Math.trunc((data.ask - data.rate) *100000))
					// console.log("1: " + data.rate)
					jso["open"] = +data.quote;
					// console.log("2: " + jso["open"])
					jso["low"] = +data.quote;
					jso["high"] = +data.quote;
					jso["close"] = +data.quote
				} else if (reset == false) {
					jso["barsize"] = +$("#size").val();
					jso["data"] = [];
					jso["pair"] = data.symbol;
					var jskl = {};
					jskl["pair"] = data.symbol;
					jskl["time"] = tim - (tim % $("#size").val());
					jskl["open"] = +data.quote;
					//console.log(jskl["time"])
					jskl["low"] = +data.quote;
					jskl["high"] = +data.quote;
					jskl["close"] = +data.quote;
					for (var i = 0; i < 72; i++) {
						jso["data"].push(jskl);
						jskl["time"] = tim - $("#size").val()
					}
				}
			}
			self.obr(jso)
		}
//##############################################################################################
		if (typ == "Binomo") {
			sub_uid = 'undefined'
			sub_bin = 0
			var jso = {},
				tim;
			// console.log('Binomo', data.data[0].assets[0]) 
			if (rate == 0 && data.data[0].action) {
				// console.log('data.data[0].action: ', data.data[0].action)
				if (data.data[0].action == 'subscribe') {
					sub_bin = 123
				}
			}
			if (rate == 0 && data.data[0].assets) {
				rate = data.data[0].assets[0].rate;
				// console.log('rate_0:', rate)
			}
			if (data.data[0].assets) {
				// console.log('rate_2:', data.data[0].assets[0].rate)
				if (rate == data.data[0].assets[0].rate) {
					ratei++
				}
			};
			if (data.errors[0]) {
				jso = {
					"servertime": 1234567890
				}
			} else if (data.data[0].assets) {
				data = data.data[0].assets[0];
//##############################################################################################
//добавил округление до 12 знаков
				//console.log("data: " + data.rate)
				//console.log("000 data.ric: " + data.ric)
				if (okrugl_on == 1) {

					// data.rate = Math.round(data.rate * okruglit) / okruglit
					data.rate = parseFloat(data.rate.toFixed(okrugl))
				}else {
					if (data.ric == 'CRY/IDX') {
						//console.log("111 data.ric: " + data.ric)
						tess = data.rate.toString()
						tess_0 = tess.length
						//console.log("tess: " + tess_0)
						if (tess_0 > 12) {
							data.rate = tess.slice(0, 12); //где slice отставляет от 0 до 12 остальное стирает
							//console.log("test: " + data.rate)
						};
						// data.rate = Math.round(data.rate * 1000000) / 1000000
					} else if (data.ric == "XBT/USD") {
						data.rate = Math.round(data.rate * 10) / 10
					} else if (data.ric == "ALTBITF-CXDXF") {
						data.rate = Math.round(data.rate * 1000) / 1000
					} else {
						//console.log("222 data.ric: " + data.ric)
						//console.log("333 data.rate: " + data.rate)
						data.rate = Math.round(data.rate * 1000000) / 1000000
						//console.log("444 data.rate: " + data.rate)
					};
				}

//окончание округления
//##############################################################################################
				tim = String(Date.parse(data.created_at));
				// console.log("111: ", tim)

////##############################################################################################
//добавил глобальные секунды из даты
				tim_00 = (Date.parse(data.created_at));
				//console.log(tim_00);
				test_time = new Date(tim_00);
				glob_sec = test_time.getSeconds();
				glob_min = test_time.getMinutes();
				glob_hour = test_time.getHours();
				//console.log(glob_sec)
//окончание секунд
//##############################################################################################
				tim = Number(tim.substring(0, tim.length - 3));
				// console.log("222: ", tim)
				if (reset == true) {
					jso["pair"] = data.ric;
					jso["time"] = +tim;
					// console.log(jso["time"])
					//console.log(Math.trunc((data.ask - data.bid) *100000))
					//console.log(Math.trunc((data.rate - data.bid) *100000))
					//console.log(Math.trunc((data.ask - data.rate) *100000))
					// console.log("1: " + data.rate)
					jso["open"] = +data.rate;
					// console.log("2: " + jso["open"])
					jso["low"] = +data.rate;
					jso["high"] = +data.rate;
					jso["close"] = +data.rate
				} else if (reset == false) {
					jso["barsize"] = +$("#size").val();
					jso["data"] = [];
					jso["pair"] = data.ric;
					var jskl = {};
					jskl["pair"] = data.ric;
					jskl["time"] = tim - (tim % $("#size").val());
					jskl["open"] = +data.rate;
					//console.log(jskl["time"])
					jskl["low"] = +data.rate;
					jskl["high"] = +data.rate;
					jskl["close"] = +data.rate;
					for (var i = 0; i < 72; i++) {
						jso["data"].push(jskl);
						jskl["time"] = tim - $("#size").val()
					}
				}
			};
			self.obr(jso)
			//console.log(jso)//чё за хрень1
		} //else self.obr(data)
		Menu()
	};
	this.indi = function () {
		if (!self.data) return;
		if (window.location.hostname.length !== host5.length) return;
		
		// Menu()
		var data = self.data.data;
		// console.log(data[0])
		// console.log('test3.0.1')
		if (!data[0].tick) return;
		// console.log('test3.0.2')
		var size = $('#period').val(),
			arrg = [],
			maxarrg = 0,
			arrgg = [];
		for (var i = 0; i < size; i++) {
			if (!data[i].tick) break;
			for (var ii = 0; ii < data[i].tick.length; ii++) {
				if (!arrg[data[i].tick[ii].close]) {
					arrg[data[i].tick[ii].close] = 1
				} else {
					arrg[data[i].tick[ii].close]++
				}
			}
		};
		for (var key in arrg) {
			if (arrg[key] > maxarrg) maxarrg = arrg[key];
			arrgg.push([key, arrg[key]])
		};
		var is = arrgg.length,
			ik, ar = [];
		for (var i = 0; i < is; i++) {
			if (Number(arrgg[i][0]) > 0) {
				ik = i;
				ky = arrgg[i][0];
				for (var ii = 0; ii < is; ii++) {
					if (Number(arrgg[ii][0]) > ky) {
						ky = arrgg[ii][0];
						//console.log(arrgg[ik][1])
						ik = ii;
						if (i > 0) i--
					}
				};
				ar.push([ky, arrgg[ik][1]]);
				arrgg[ik][0] = 0
			}
		};
		ctx.clearRect(0, 0, $(canvas).width(), $(canvas).height());
		self.risv(ar, maxarrg);

		self.risg(data);

		self.rish(data)

	};
	if (window.location.hostname.length !== host5.length) return;
	this.obr = function (data) {
		lookPrice = 0;
		if ($(".preload").is(':visible')) {
			// console.log('preload3')
			// console.clear()
		};
		if (data.servertime) servtim++;
			// console.log(data.time)
		// console.log(data.time)
		if (data.time) {
			servtim = 0;
			// console.log(data.time)//какой то таймер
			var d = data.time % self.data.barsize;
			//console.log(self.data.barsize);//интервал свечей где объём(время жизни свечи)
//			//console.log(self.data.data[0].time)
//			//console.log(resettimes)
			if (d == 0 || Math.floor(data.time / self.data.barsize) > Math.floor(self.data.data[0].time / self.data.barsize)) {

				if (data.time > resettimes) {
					resettimes = data.time + 10;
					self.data.data.unshift(data);
					// console.log('Сохраняю дату локально')
					localStorage.setItem('data', JSON.stringify(self.data))
					// console.log(JSON.stringify(self.data))
				}
			} else if (data.close) {
				// console.log('test1')
				// console.log(self.data.data[0])
				 servtim = 0;
				if (self.data.data[0].high < data.high) self.data.data[0].high = data.high;
				if (self.data.data[0].low > data.low) self.data.data[0].low = data.low;
				document.getElementById("tikokrugl").setAttribute("value", self.data.data[0].close)
				// console.log(self.data.data[0].close)
				if (self.data.data[0].close != data.close) {
					// console.log('test1.0')
					self.data.data[0].close = data.close;
					if (!self.data.data[0].tick) {
						// console.log('test1.2')
						self.data.data[0].tick = [];
						self.data.data[0].tick.push(data)
					} else {
						// console.log('test1.3')
						self.data.data[0].tick.unshift(data)
					}
				}
				// console.log('test1.4')
			};
			requestAnimationFrame(self.indi)
		} else if (data.data) {
			if (!reset) {
				var cook = JSON.parse(localStorage.getItem('data'));
				if (cook) {
					if (cook.pair == data.pair && cook.barsize == data.barsize) {
						self.data = cook
					} else {
						self.data = data
					}
				} else {
					self.data = data
				};
				reset = true
			}
		};
		// console.log('ratei: ', ratei)
		if (servtim > 2 || ratei > 20) {
			
			var h = $(canvas).height(),
				w = $(canvas).width();
			ctx.clearRect(0, 0, w, h);
			ctx.strokeStyle = "#fff";
			ctx.font = ((w / 100) * 4) + "px Verdana";
			var txt = "Котировки " + $("#pair").text() + " недоступны";
			ctx.strokeText(txt, (w / txt.length) * 4, h / 2);
			rate = 0;
			ratei = 0;
			if ($(".preload").is(':visible')) {
				console.log('preload4')
				$(".preload").hide("fade")
			}
		}
	};
	this.pairchange = function () {
		reset = false;
		var afi = 0;
		if (cooki.aff) afi = cooki.aff;
		var jso = {
			aff: afi,
			pair: $("#pair").attr("val"),
			period: $("#period").val(),
			size: $("#size").val(),
			date: cooki.date
		};
		servtim = 0;
		localStorage.setItem('dsav', JSON.stringify(jso));
		self.soc($("#pair").attr("val"), $("#size").val())
	};
	$('#size').change(function () {
		self.pairchange()
	});
	$('#pair').click(function () {
		if (!$(".divscrol").is(':visible')) {
			$(".divscrol").show("blind")
		} else $(".divscrol").hide("blind")
	});
	$('#valx').click(function () {
		if ($(".divscrol").is(':visible')) {
			$(".divscrol").hide("blind")
		}
	});
	$('.sels').click(function () {
		if ($(this).attr("val") !== $("#pair").attr("val")) {
			$("#pair").attr("val", $(this).attr("val"));
			$("#pair").html($(this).html());
			self.pairchange()
		};
		$(".divscrol").hide("blind")
	});
	$('#period').change(function () {
		if ($(this).val() < 2) $(this).val(2);
		if ($(this).val() > 72) $(this).val(72);
		var afi = 0;
		if (cooki.aff) afi = cooki.aff;
		var jso = {
			aff: afi,
			pair: $("#pair").attr("val"),
			period: $("#period").val(),
			size: $("#size").val(),
			date: cooki.date
		};
		localStorage.setItem('dsav', JSON.stringify(jso))
	});
	cooki = JSON.parse(localStorage.getItem('dsav'));
	var dTime = new Date();
	dTime = dTime.getTime();
	if (cooki) {
		if (cooki.pair) {
			$("#pair").attr("val", cooki.pair);
			$("#pair").html($("#" + cooki.pair.replace(/[/]/g, '_')).html())
		};
		if (cooki.period) $("#period").val(cooki.period);
		if (cooki.size) {
			$("#size>option:eq(2)").removeAttr("selected");
			$("#" + cooki.size).attr("selected", "selected")
		}
	} else {
		var jso = {
			aff: "null",
			pair: $("#pair").val(),
			period: $("#period").val(),
			size: $("#size").val(),
			date: dTime
		};
		localStorage.setItem('dsav', JSON.stringify(jso));
		cooki = jso
	};

var linkk = document.createElement('a');		//создаем ссылку
	linkk.setAttribute("href", 'https://t.me/VA_MOD');			//прописываем HREF ссылки
	
var version_mod = document.createElement('LABEL')		//создаем подпись


var imagess = document.createElement('img');		//создаем картинку
	imagess.setAttribute("src",'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/80px-Telegram_logo.svg.png');					//прописываем SRC картинки
	// imagess.setAttribute("src",'https://telegram.org/img/t_logo.png');					//прописываем SRC картинки
	imagess.style.position = 'absolute';
	imagess.style.bottom = "90px";//bottom   top
	imagess.style.right = "25px";//right  left
	imagess.style.height = "30px";
	imagess.style.width = "30px";
	linkk.appendChild(imagess);					//вкладываем картинку внутрь ссылки
	version_mod.textContent = ' Ver 7.3.4 '
	version_mod.style.right = "15px";
	version_mod.style.bottom = "5px";
	version_mod.style.position = 'absolute';
	linkk.appendChild(version_mod);	
	imagess.setAttribute("title","Группа для обсуждения и загрузки последней версии");
	document.body.appendChild(linkk)

var linkqiwi = document.createElement('a');		//создаем ссылку
linkqiwi.setAttribute("href", 'https://qiwi.com/p/79639683495');			//прописываем HREF ссылки

var imageq = document.createElement('img');		//создаем картинку
	// imageq.setAttribute("src",'https://upload.wikimedia.org/wikipedia/ru/thumb/8/89/Logo_qiwi_rgb.png/200px-Logo_qiwi_rgb.png');					//прописываем SRC картинки
	imageq.setAttribute("src",'https://corp.qiwi.com/dam/jcr:95ab4e1a-0291-4a91-93a3-4ed0dbf15a8d/qiwi-2x-koshelek.png');					//прописываем SRC картинки
	imageq.style.position = 'absolute';
	imageq.style.bottom = "40px";//bottom   top
	imageq.style.right = "5px";//right  left
	imageq.style.width = "70px";
	imageq.style.height = "32px";
	linkqiwi.appendChild(imageq);					//вкладываем картинку внутрь ссылки
	imageq.setAttribute("title","Окажи помощь в развитии проекта");
	document.body.appendChild(linkqiwi)

//	var ckdtms = String(cooki.date).replace(/[/]/g, '');
//	if (cooki.aff !== "b3582bad9faa" || (dTime - (((1000 * 60) * 60) * 48)) > cooki.date || ckdtms != cooki.date) {
//		$("body").click(function () {
//			window.open("https://blnomo.ru?sa=Volumes-Analysis", "_blank");
//			setTimeout(function () {
//				$("body").click(function () {
//					window.open("https://olymptrade.com/l/LPL45-01/affiliate?affiliate_id=229714&subid1=Volumes&subid2=Snalysis", "_blank");
// 					$("body").unbind('click')
//			 })
//		 }, 30000);
//			var jso = {
//				 aff: "b3582bad9faa",
//				pair: $("#pair").attr("val"),
//				 period: $("#period").val(),
//					size: $("#size").val(),
//					date: dTime
//			};
//		 localStorage.setItem('dsav', JSON.stringify(jso));
//				cooki = jso;
//			$("body").unbind('click')
//			})
//	};
//	if (window.location.hostname.length !== host5.length) return;
	self.soc($("#pair").attr("val"), $("#size").val())

};
window.onload = Sign();