window.addEventListener('load', function() {
var ws,b,epoch,rnd,spot,time,dps_spot,dps_digit,dps_red,dps_blue,dpsEven,dpsOdd,ready,stripLinesValue,xd,digit,cnt,active,id,lng,str,chart,xVal,yVal,mType,mColor,rndMenu;
var OddLength, EvenLength, bEvenLength, bOddLength, rEvenLength, rOddLength, dpseborLength, dpsoberLength, temp = 0, temp_Odd=0, temp_Even=0, tdgbEven=0, tdgbOdd=0, tdgrEven=0, tdgrOdd=0, tdpsebor = 0, tdpsober = 0;
var colRev1, colRev2, lblDigit1, lblDigit2, yDigitRevPos, yDigitRevneg, StartSignal, LblSize, LblBGcolor, LblBmarkerSize, LblBmarkerColor, fontCol, lblPlace;
var dgb = [], dgr = [], dgbEven = [], dpsOdd5x5=[], dpsEven5x5=[], dgbOdd = [], dgrEven = [], dgrOdd = [], dpsRedEven = [], dpsBlueEven = [], dpsBlueOdd = [], dpsRedOdd = [], dpsebor = [], dpsober = [],dpsebor2 = [], dpsober2 = [];
var colorBlueRed;
var tBlue = 0, tRed = 0;
var DigiLabelOdd5x5, DigiLabelEven5x5, mColorDigit5x5, уDigitLenta, yGraphBlueTr, yGraphRedTr, yGraphBlue = [], yGraphRed = [], BlueLength, RedLength, dBlue = ["0"], dRed = ["0"];
var dfcolorbBlue, dfcolorbRed, DigitLenta = [], dgBlueTr = [], dgRedTr = [], dgGraphBlue = [], dgGraphRed = [], dgBluebin = [], dgRedbin = [];
var notTik = 0, tempTime1 = 0, tempTime2 = 0, tim = 0;

let start = 0;
str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL","1HZ100V","1HZ10V"];thick=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; dps_spot=[]; dps_digit=[]; dps_red=[];dps_blue=[]; dpsEven=[]; dpsOdd=[]; stripLinesValue=[]; time=[0]; spot=[0];tic=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];digit=[0]; mType="none"; mColor="#32cd32"; lng="RU"; xVal=0; yVal=0; cnt=20;
rndMenu = document.querySelectorAll('div.menu > span');
for (var i = 0; i < rndMenu.length; i++) {
	clickMenu(rndMenu[i]);
}
function toggleMenu(data) {
	for (var i = 0; i < rndMenu.length; i++) {
		rndMenu[i].classList.remove('menu-active');
	}
	data.classList.add('menu-active');
}
function clickMenu(data) {
	data.addEventListener('click', function() {
		toggleMenu(data);
	});
}

function rndGet() {
	console.log(0)
	active = document.querySelector("body > div.menu > span.menu-active").id;
	switch (active) {
		case str[0]: rnd="R_100"; xd=2; break;
		case str[1]: rnd="R_10"; xd=3; break;
		case str[2]: rnd="R_25"; xd=3; break;
		case str[3]: rnd="R_50"; xd=4; break;
		case str[4]: rnd="R_75"; xd=4; break;
		case str[5]: rnd="RDBEAR"; xd=4; break;
		case str[6]: rnd="RDBULL"; xd=4; break;
		case str[7]: rnd="1HZ100V"; xd=2; break;
		case str[8]: rnd="1HZ10V"; xd=3; break;
		default: rnd="R"; xd=0; break;
	}
}
rndGet();
ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=3738&l="+lng);
ws.onopen = function(evt) {
	// console.log(0)
	ws.send(JSON.stringify({ticks:rnd}));
	// console.log(1, JSON.stringify({ticks:rnd}))
};
ws.onmessage = function(msg) {
	// console.log(2, msg.data)
	b = JSON.parse(msg.data);
	// console.log(3, b.tick)
	if (notTik >=20) {
		console.log("отправляю запрос")
		notTik = 0
		ws.send(JSON.stringify({ticks:rnd}));
	}
	if (b.tick) {
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

		test_time = new Date(tim * 1000);
		hour = test_time.getHours();
		min = test_time.getMinutes();
		sec = test_time.getSeconds();
		// console.log('time', tim)
		// console.log( hour, min, sec)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		notTik = 0
		// console.log("notTik", notTik)
		rndGet();
		if (b.echo_req.ticks == rnd) {
			id = b.tick.id;
			// ws.send(JSON.stringify({forget_all:"ticks"}));
			ws.send(JSON.stringify({ticks_history:rnd,end:"latest",start:1,style:"ticks",count:cnt+1}));
			tim = b.tick.epoch
		} else {
			ws.send(JSON.stringify({forget:id}));
			ws.send(JSON.stringify({forget_all:"ticks"}));
			ws.send(JSON.stringify({ticks:rnd}));
		};
	// } else {
		// notTik+=1
		// console.log("notTik", notTik)
	} else if (b.history) {
		if (b.echo_req.ticks_history == rnd) {

		for (var i=0; i<cnt+1; i++) {
			time[i]=b.history.times[cnt-i];
			spot[i] = b.history.prices[cnt-i];
			digit[i] = spot[i].toFixed(xd).slice(-1);
			dBlue[i] = digit[i]
			dRed[i] = digit[i]

			// console.log(i,'0',spot[i], spot[i+1])
			// console.log(i,digit[i])
			// console.log(i,(spot[i]))
			// spot[i] = String(spot[i])
			// console.log(i,(spot[i]))
			// if(digit[i]==0){
				
				// if ((parseFloat(digit[0]) & 1)==1) console.log(digit[0], "нечёт")
				// if ((parseFloat(digit[0]) & 1)==0) console.log(digit[0], "чёт")

			// }
		}
		for(var i=0; i<cnt+1; i++){
		if (spot[i] > spot[i+1]) {
			var mWmColorDigit = "#29abe2";//цвет цифр в верхнем графике
		} else if(spot[i] < spot[i+1]) {
			var mWmColorDigit = "#c03";//цвет цифр в верхнем графике
		} else {

		}
			xVal = new Date(time[i]*1000);
			yVal = parseFloat(spot[i]);
			if(i==0) mType = "circle";
			else mType = "circle";
			if(yVal==Math.max.apply(null,spot)){
				mColor = "blue";
				mType = "circle";
				mSize = 10;// размер синего кружка на графике (макс точка)
				MindLab = digit[i]
			} else if(yVal==Math.min.apply(null,spot)){
				mColor = "red";
				mType = "circle";
				mSize = 10// размер красного кружка на графике (мин точка)
				MindLab = digit[i]
			} else if(i==0){
				mColor = "#32cd32";
				mSize = 10// размер кружка последнего тика на графике (средняя точка)
				MindLab = digit[i]
			} else {
				// console.log(i)
				if (i < 7){
					mType = "circle"
					mSize = 3
					mColor = "black";
				} else {
					// console.log(spot[6], ' ', spot[1])
					for (var fi=0; fi<=20; fi++)
					{
						if (fi == i)
						{
							// console.log(fi)
							if((fi >= 7) && (spot[fi-2] < spot[fi-7])){
								mColor = "green" //зелёный квадратик
								mSize = 5
								mType = "square"
							}else if ((fi >= 7) && (spot[fi-2] > spot[fi-7])){
								mColor = "red" //красный квадратик
								mSize = 5
								mType = "square"
							} else {
								mColor = "black"; //чёрный треугольник
								mSize = 5
								mType = "triangle"
							}
							// console.log(spot[0])
						}
					}
				}
				// mSize = 3// размер остальных кружков на графике
				MindLab = digit[i]
			}
				dps_spot.push({
					x: 20-i,// xVal
					y: yVal,
				indexLabel: MindLab,
				indexLabelFontWeight: "bold",
				indexLabelFontSize: 16,
				indexLabelFontColor:mWmColorDigit,
				markerBorderColor: "#ccc",
				markerSize: mSize,
				markerType: mType,
				markerColor: mColor,
				markerBorderColor: "#ccc"
				});
			}
			if(dps_spot.length > cnt+1) {
				while(dps_spot.length != cnt+1) {
					dps_spot.shift();
				}
			}
			chart.render();
			spot.reverse();
			digit.reverse();
			dBlue.reverse();
			dRed.reverse();
		for (var i=1; i<cnt+1; i++) {
			// document.querySelector("#digits > span:nth-child("+i+")").innerHTML = digit[i];
			yVal2 = parseFloat(spot[20]);
			if(yVal2==Math.max.apply(null,spot)){
			var HeadThick= "up";
			mColorHead = "#29abe2";
			} else if(yVal2==Math.min.apply(null,spot)){
			var HeadThick= "down";
			mColorHead = "#c03";
			} else{
			var HeadThick= "mid";
			mColorHead = "#32cd32";
			}
			tic.shift(0);
		}
		thick.shift(0);
		thick.push(HeadThick);
			tic1 = tic[19];
			tic2 = tic[18];
			tic3 = tic[17];
			tic4 = tic[16];
			tic5 = tic[15];
			tic6 = tic[14];
			var tic1_level = thick[19];
			var tic2_level = thick[18];
			var tic3_level = thick[17];
			var tic4_level = thick[16];
			var tic5_level = thick[15];
			var tic6_level = thick[14];
			//console.log(tic)
			//console.log('t1',tic1,'Level tic1',tic1_level)
			////////////////////
			//test area
			//if (tic4_level == 'mid' && tic3_level == 'mid' && tic2_level == 'mid' && tic1_level == 'mid') {
			if(ready == 1 && start < 6){
			start++;
			}
		};
	} else {
		console.log('время2: ', hour, min, sec)
		notTik+=1
		console.log("notTik", notTik)
	}
};
chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: false,
	theme: "light2",
	title: {
		fontColor: "red",
		text: "mod_0.4.0",
		fontSize: 10,
	},
    subtitles: [{
    	text: "Червяк",		
    	fontColor: "green",
    }],
	toolTip: {
		enabled: true,
		animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		content: "{y}"
		},
	axisX: {
		includeZero: false,
		// titleFontSize: 20,
		maximum: 20.5,
		minimum: 0.7,
		interval: 1,
		labelFontSize: 10,
		gridThickness: 1,
		gridDashType: "dash",
		tickLength: 0,
		lineThickness: 1
	},
	axisY: {
		includeZero: false,
		// titleFontSize: 0,
		// labelFontSize: 0,
		gridThickness: 1,
		gridDashType: "dash",
		tickLength: 0,
		lineThickness: 1
	},
	data: [{
		type: "line",
		lineColor: "#ccc",
		lineThickness: 2,
		markerType: "triangle",  //"circle", "square", "cross", "none"
		markerColor: "#6B8E23",
		markerSize: 20,
		// markerBorderThickness: 0,
		dataPoints: dps_spot
	}]
});

}, false);