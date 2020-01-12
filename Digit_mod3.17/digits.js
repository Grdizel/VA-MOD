window.addEventListener('load', function() {
var ws,b,rnd,spot,time,dps_spot,dps_digit,dps_red,dps_blue,dpsEven,dpsOdd,ready,stripLinesValue,xd,digit,cnt,random,id,lng,str,chart,xVal,yVal,mType,mColor,rndMenu;
var OddLength, EvenLength, bEvenLength, bOddLength, rEvenLength, rOddLength, dpseborLength, dpsoberLength, temp = 0, temp_Odd=0, temp_Even=0, tdgbEven=0, tdgbOdd=0, tdgrEven=0, tdgrOdd=0, tdpsebor = 0, tdpsober = 0;
var colRev1, colRev2, lblDigit1, lblDigit2, yDigitRevPos, yDigitRevneg, StartSignal, LblSize, LblBGcolor, LblBmarkerSize, LblBmarkerColor, fontCol, lblPlace;
var dgb = [], dgr = [], dgbEven = [], dgbOdd = [], dgrEven = [], dgrOdd = [], dpsRedEven = [], dpsBlueEven = [], dpsBlueOdd = [], dpsRedOdd = [], dpsebor = [], dpsober = [],dpsebor2 = [], dpsober2 = [];
var colorBlueRed;

let start = 0;
str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL"];thick=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; dps_spot=[]; dps_digit=[]; dps_red=[];dps_blue=[]; dpsEven=[]; dpsOdd=[]; stripLinesValue=[]; time=[0]; spot=[0];tic=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];digit=[0]; mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; cnt=20;
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
function toggleDigit(d,m) {
	var nameClass = document.querySelector("#digits > span:nth-child("+d+")").className;
		if(nameClass != "digits_moved_"+m) {
		document.querySelector("#digits > span:nth-child("+d+")").classList.remove(nameClass);
		document.querySelector("#digits > span:nth-child("+d+")").classList.add("digits_moved_"+m);
	}
}
function toggleHead(e,s) {
	var nameClass = document.querySelector("#headcol > span:nth-child("+e+")").className;
	if(nameClass != "Head_moved_"+s) {
		document.querySelector("#headcol > span:nth-child("+e+")").classList.remove(nameClass);
		document.querySelector("#headcol > span:nth-child("+e+")").classList.add("Head_moved_"+s);
	}
}
function togglePlace(f,g) {
	var nameClass = document.querySelector("#placecol > span:nth-child("+f+")").className;
	if(nameClass != "Place_moved_"+g) {
		document.querySelector("#placecol > span:nth-child("+f+")").classList.remove(nameClass);
		document.querySelector("#placecol > span:nth-child("+f+")").classList.add("Place_moved_"+g);
	}
}
function toggleArrow(e,d,m) {
	var nameClass = document.querySelector(""+e+" > span:nth-child("+d+")").className;
		if(nameClass != "Arrow_Bg_"+m) {
		//document.querySelector(""+e+" > span:nth-child("+d+")").classList.remove(nameClass);
		document.querySelector(""+e+" > span:nth-child("+d+")").classList.add("Arrow_Bg_"+m);
	}
}
function toggleSpotArrow(d,m) {
	var nameClass = document.querySelector("#SpotArrow > span:nth-child("+d+")").className;
		if(nameClass != "Spot_Arrow_"+m) {
		document.querySelector("#SpotArrow > span:nth-child("+d+")").classList.remove(nameClass);
		document.querySelector("#SpotArrow > span:nth-child("+d+")").classList.add("Spot_Arrow_"+m);
	}
}
function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}
function rndGet() {
	random = document.querySelector("body > div.menu > span.menu-active").title;
	switch (random) {
		case str[0]: rnd="R_100"; xd=2; break;
		case str[1]: rnd="R_10"; xd=3; break;
		case str[2]: rnd="R_25"; xd=3; break;
		case str[3]: rnd="R_50"; xd=4; break;
		case str[4]: rnd="R_75"; xd=4; break;
		case str[5]: rnd="RDBEAR"; xd=4; break;
		case str[6]: rnd="RDBULL"; xd=4; break;
		default: rnd="R"; xd=0; break;
	}
}
rndGet();
ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=3738&l="+lng);
ws.onopen = function(evt) {
	ws.send(JSON.stringify({ticks:rnd}));
};
ws.onmessage = function(msg) {
	b = JSON.parse(msg.data);
	if (b.tick) {
		rndGet();
		if (b.echo_req.ticks == rnd) {
			id = b.tick.id;
			ws.send(JSON.stringify({ticks_history:rnd,end:"latest",start:1,style:"ticks",count:cnt+1}));
		} else {
			ws.send(JSON.stringify({forget:id}));
			ws.send(JSON.stringify({forget_all:"ticks"}));
			ws.send(JSON.stringify({ticks:rnd}));
		};
	};
	if (b.history) {
		if (b.echo_req.ticks_history == rnd) {

		for (var i=0; i<cnt+1; i++) {
			time[i]=b.history.times[cnt-i];
			spot[i] = b.history.prices[cnt-i];
			digit[i] = spot[i].toFixed(xd).slice(-1);
			

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
			// console.log(spot[i] + ' : '+	i)
			// console.log(spot[i] + ' : '+	i)
			// console.log(i,'0',spot[i], spot[i+1])
			// console.log(i,'0',spot[i], spot[i+1])
			if (spot[i] > spot[i+1]) {
				// console.log(i,'С1>',spot[i])
				dgb[i] = digit[i]
			} else if (spot[i] < spot[i+1]) {
				// console.log(i,'К2<',spot[i])
				dgr[i] = digit[i]
			} else {
				// console.log(i,'Б3=',spot[i])
				if (spot[i] > spot[i+2]) {
					dgb[i] = digit[i]
				} else if(spot[i] < spot[i+2]) {
					dgr[i] = digit[i]
				}
			}
			if ((parseFloat(dgb[i]) & 1)==0) {
				dgbEven[i] = digit[i]
				// console.log(i,'синий чёт',dgbEven[i])
			} else if ((parseFloat(dgb[i]) & 1)==1) {
				dgbOdd[i] = digit[i]
				// console.log(i,'синий нечёт',dgbOdd[i])
			} else if ((parseFloat(dgr[i]) & 0)==1) {
				dgrEven[i] = digit[i]
				// console.log(i,'красный чёт',dgrEven[i])
			} else if ((parseFloat(dgr[i]) & 1)==1) {
				dgrOdd[i] = digit[i]
				// console.log(i,'красный нечёт',dgrOdd[i])
			}
//#################################################################
				// if (((parseFloat(digit[i+1]) & 1)==1) && ((parseFloat(digit[i]) & 1)==0) && (parseFloat(digit[i-1])==0)) console.log(i+1, digit[i+1], i, digit[i])
				// if  (((digit[i])==(parseFloat(digit[i+1])+1)) && (digit[i+1]>=5)) console.log(i, digit[i], i+1, digit[i+1], parseFloat(digit[i+1])+1)
				// if  (digit[i+1]>=5) console.log(i+1, digit[i+1])
					// console.log(i+1, parseFloat(digit[i+1])+1)
				// if (parseFloat(digit[i-1])==0) digit[i-1]= "10", console.log(i,digit[i-1]);
				if (((parseFloat(digit[i+1]) & 1)==1) && ((parseFloat(digit[i]) & 1)==0) && (parseFloat(digit[i-1])==0) && ((digit[i])==(parseFloat(digit[i+1])+1)) && parseFloat(digit[i+1]>=5)) {
					digit[i-1] = "10"
					console.log(i,digit[i])
					console.log(i,(spot[i]))
				}else if(((parseFloat(digit[i+1]) & 1)==0) && ((parseFloat(digit[i]) & 1)==1) && (parseFloat(digit[i-1])==0) && ((digit[i])==(parseFloat(digit[i+1])+1)) && parseFloat(digit[i+1]>=6)) {
					digit[i-1] = "10"
					console.log(i,digit[i])
					console.log(i,(spot[i]))
				}
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
		for (var i=1; i<cnt+1; i++) {
			document.querySelector("#digits > span:nth-child("+i+")").innerHTML = digit[i];
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
			// console.log('spot',i ,spot[i] )
			// console.log('digit',i ,digit[i] )
			// console.log('digit',i ,parseFloat(digit[i]) & 1 )
			// (parseFloat(digit[i]) & 1 )
			// if ((digit[19])==((digit[18])+1)) console.log("up")
			// if ((digit[19])==((digit[18])-1)) console.log("down")
				// if (i==20){
					// console.log(digit[20],"")
					// if (spot[i-1] < spot[i]) console.log(digit[20],"")
					// if (spot[i-1] > spot[i]) console.log(digit[20],"_")
					// if(((parseFloat(digit[18]) & 1)==1) && ((parseFloat(digit[19]) & 1)==0) && (parseFloat(digit[20])==0) && ((digit[19])==(digit[18]+1)) && (digit[18]>=5)) {
					// if(digit[i]==0){
						// if (spot[i-1] < spot[i]){
							// console.log('10')
							// var tic2nd= (10);
						// } else if (spot[i-1] > spot[i]){
							// console.log('-10')
							// var tic2nd= (-10);
						// }
					// }
					// }else if (((parseFloat(digit[18]) & 1)==0) && ((parseFloat(digit[19]) & 1)==1) && (parseFloat(digit[20])==0) && ((digit[19])==(digit[18]+1)) && (digit[18]>=6)){
						// if (spot[i-1] < spot[i]){
							// console.log('10')
							// var tic2nd= (10);
						// } else if (spot[i-1] > spot[i]){
							// console.log('-10')
							// var tic2nd= (-10);
						// }
					// }
				// }

			if (spot[i-1] < spot[i]) {
				toggleDigit(i,"up");
				// if(digit[i] !=0) {
					var tic2nd= (digit[i]*1);
					// console.log(i,'+',tic2nd)
				// }
			} else if(spot[i-1] > spot[i]) {
				toggleDigit(i,"down");
				// if(digit[i] !=0) {
					var tic2nd= (digit[i]*-1);
					// console.log(i,'-',tic2nd)
				// }
			} else if(spot[i-1]==spot[i] && i-1>0) {
				if(document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_up") {
					toggleDigit(i,"up");
				} else if(document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_down") {
					toggleDigit(i,"down");
				}
			}
			tic.shift(0);
			tic.push(tic2nd);
		}
		thick.shift(0);
		thick.push(HeadThick);
			// for (var i=1; i<14; i++) {
				// if (spot[i-1] > spot[i+5]) {
						// document.querySelector("#SpotArrow > span:nth-child("+(i+7)+")").innerHTML = "&#241";
						 // toggleSpotArrow((i+7),"Up");
						 // console.log(spot[i-1],"	 ",spot[i+5] ,"	 ",	i ,"Up ",)
				 // } else if (spot[i-1] < spot[i+5]) {
						// document.querySelector("#SpotArrow > span:nth-child("+(i+7)+")").innerHTML = "&#242";
						// toggleSpotArrow((i+7),"Down");
						// console.log(spot[i-1],"	 ",spot[i+5] ,"	 ",	i ,"Down",)
				 // } else if (spot[i-1] == spot[i+5]) {
						// chech for equal for this Wingdings or _
						// document.querySelector("#SpotArrow > span:nth-child("+(i+7)+")").innerHTML = " ";
						 // toggleSpotArrow((i+7),"Equal");
						// console.log(spot[i-1],"	 ",spot[i+5] ,"	 ",	i ,"Equal",)
				 // }
			// }
		for (var i=1; i<cnt+1; i++) {
			if (spot[i-1] < spot[i]) {
				colorBlueRed = "#29abe2"; 
				toggleDigit(i,"up");
				mColorBarEven = "#4169E1";//цвет второго графика синие столбики
				mColorBarOdd = "#8533ff";//цвет третьего графика синие столбики
				var mColorDigit = "#29abe2";//цвет четвёртого графика синие столбики
			} else if(spot[i-1] > spot[i]) {
				colorBlueRed = "#c03";
				toggleDigit(i,"down");
				mColorBarEven = "#DC143C";//цвет второго графика красные столбики
				mColorBarOdd = "#CD5C5C";//цвет третьего графика красные столбики
				var mColorDigit = "#c03";//цвет четвёртого графика красные столбики
			} else {
				colorBlueRed = 'grey'
				// mColorDigit = "#c03"
				// mColorDigit = "#29abe2"
			}
		toggleHead(i,thick[i-1]);
		document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = tic;
		xDigit = (i);
		yDigit = parseFloat(tic[i-1]);
			if (Math.abs(parseInt(tic[i-1])) != 8 || Math.abs(parseInt(tic[i-1])) != 9  || Math.abs(parseInt(tic[i-1])) != 10) {
				fontCol	= "white";
				lblPlace = "inside";//inside
				}
			if (Math.abs(parseInt(tic[i-1])) == 8 ||	Math.abs(parseInt(tic[i-1])) == 9 ||	Math.abs(parseInt(tic[i-1])) == 10) {
				fontCol = "black";
				lblPlace =	"outstde"//outstde
				}
			if (tic[i-1] >= 0){
				colRev1 = "White";
				colRev2 = mColorDigit;
				lblDigit1 =	"";
				lblDigit2 = digit[i];
				yDigitRevPos = parseFloat(tic[i-1]);
				yDigitRevneg = 10 -	parseFloat(tic[i-1]);
			}
		if (tic[i-1] <= -0){
			colRev1 = mColorDigit
			colRev2 = "White";
			lblDigit1 = digit[i];
			lblDigit2 = "";
			yDigitRevPos = (10) -	Math.abs(parseFloat(tic[i-1]));
			yDigitRevneg =	Math.abs(parseFloat(tic[i-1]));
		}
		if (digit[i-1] - digit[i] == 1 || digit[i-1] - digit[i] == -1 || digit[i+1] - digit[i] == 1 || digit[i+1] - digit[i] == -1 ) {
			StartSignal = "Start";
			LblSize = 20;
			LblBGcolor = "";
			LblBmarkerSize = 10;
			LblBmarkerColor = "#ffa500";
		} else {
			StartSignal = "";
			LblSize = 14;
			LblBGcolor = "white";
			LblBmarkerSize = 6;
			LblBmarkerColor = "";
		}
		xDigitEven = (i);
		xDigitOdd = (i);
		// console.log("tik", i);
		if ( parseFloat(tic[i-1]) & 1 ){
			temp_Odd+=1
			if (spot[i-1] < spot[i]) {
				tdgbOdd+=1
			} else if (spot[i-1] > spot[i]) {
				tdgrOdd+=1
			};
		} else {
			temp_Even+=1
			if (spot[i-1] < spot[i]) {
				tdgbEven+=1
			} else if (spot[i-1] > spot[i]) {
				tdgrEven+=1
			};
		};
		// console.log(i, tic[i-1])
		// if ((parseFloat(tic[i-1]) & 1)==0) console.log(i, 'чёт')
		// if ((parseFloat(tic[i-1]) & 1)==1) console.log(i, 'нечёт')
			
		// if ((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==0)) console.log(i, 'ЧС')
		// if ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==1)) console.log(i, 'НК')
		// if ((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==1)) console.log(i, 'НС')
		// if ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==0)) console.log(i, 'ЧК')
		// if (((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==0)) && ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==1))) console.log(i, 'Чс и Нк желтый')
		// if (((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==0)) && ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==1))) console.log(i, 'Нс Чк зелёный')	
		if (((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==0)) || ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==1))) {
			tdpsebor+=1
		}
		if (((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==1)) || ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==0))) {
			tdpsober+=1
		}
		if (i==20) {
			// console.log(tdpsebor, " Чс и Нк " );
			dpseborLength = tdpsebor;
			// console.log(tdpsober, " Нс Чк " );
			dpsoberLength = tdpsober;
			
			temp = 1;
			// console.log(dpsOdd.length, " Odd Нечет " );
			OddLength = temp_Odd;
			// console.log(dpsEven.length, " Even Чет " );
			EvenLength = temp_Even;
			// console.log('Odd Н', temp_Odd, 'Even Ч', temp_Even);
			bEvenLength = tdgbEven;
			// console.log('tdgbEven Even ЧС', tdgbEven);
			// console.log(dpsBlueEven.length, "dpsb Even Чет синие" );
			bOddLength = tdgbOdd;
			rEvenLength = tdgrEven;
			rOddLength = tdgrOdd;
			tdpsebor = 0;
			tdpsober = 0;
			temp_Odd = 0;
			temp_Even = 0;
			tdgbEven=0;
			tdgbOdd=0;
			tdgrEven=0;
			tdgrOdd=0;
		}
//##############################################################################
		if (((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==0)) || ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==1))) {
			if (spot[i-1] < spot[i]){
				yor = parseFloat(tic[i-1])
			}
			if (spot[i-1] > spot[i]) {
				yor = yDigitRevPos
			}
			dpsebor.push({//Чс и Нк yellow EvenBlue OddRed
				x: i,
				y: parseFloat(tic[i-1]),
				indexLabel: digit[i],
				indexLabelFontWeight: "bold",
				indexLabelFontSize: LblSize,
				indexLabelFontColor:mColorDigit,
				indexLabelBackgroundColor:LblBGcolor,
				// markerSize: LblBmarkerSize,
				markerType: "circle",  //"circle", "square", "cross", "none"
				// markerColor: LblBmarkerColor,
				color: mColorBarOdd,
				markerBorderColor: "#ccc",
				})
			dpsebor2.push({//Чс и Нк yellow EvenBlue OddRed
				x: i,
				y: yor,
				indexLabel: digit[i],
				indexLabelFontWeight: "bold",
				indexLabelFontSize: LblSize,
				indexLabelFontColor:mColorDigit,
				indexLabelBackgroundColor:LblBGcolor,
				// markerSize: LblBmarkerSize,
				markerType: "circle",  //"circle", "square", "cross", "none"
				// markerColor: LblBmarkerColor,
				color: mColorBarOdd,
				markerBorderColor: "#ccc",
				})
		}
//##############################################################################

//##############################################################################
			if (((spot[i-1] < spot[i]) && ((parseFloat(tic[i-1]) & 1)==1)) || ((spot[i-1] > spot[i]) && ((parseFloat(tic[i-1]) & 1)==0))) {
				if (spot[i-1] < spot[i]){
					yor = parseFloat(tic[i-1])
				}
				if (spot[i-1] > spot[i]) {
					yor = yDigitRevPos
				}
				dpsober.push({//Нс Чк green OddBlue EvenRed
					x: i,
					y: parseFloat(tic[i-1]),
					indexLabel: digit[i],
					indexLabelFontWeight: "bold",
					indexLabelFontSize: LblSize,
					indexLabelFontColor:mColorDigit,
					indexLabelBackgroundColor:LblBGcolor,
					// markerSize: LblBmarkerSize,
					markerType: "circle",  //"circle", "square", "cross", "none"
					// markerColor: LblBmarkerColor,
					color: mColorBarOdd,
					markerBorderColor: "#ccc",
					})
				dpsober2.push({//Нс Чк green OddBlue EvenRed
					x: i,
					y: yor,
					indexLabel: digit[i],
					indexLabelFontWeight: "bold",
					indexLabelFontSize: LblSize,
					indexLabelFontColor:mColorDigit,
					indexLabelBackgroundColor:LblBGcolor,
					// markerSize: LblBmarkerSize,
					markerType: "circle",  //"circle", "square", "cross", "none"
					// markerColor: LblBmarkerColor,
					color: mColorBarOdd,
					markerBorderColor: "#ccc",
					})
			}
//##############################################################################
		if ( parseFloat(tic[i-1]) & 1 ){
			// console.log(i, " Odd Нечет " );
			yDigitOdd = parseFloat(tic[i-1]);
			yDigitEven = '';
			var DigiLabelOdd = digit[i];
			// console.log(digit[i], " Odd Нечет ")
			dpsOdd.push({
				x: xDigitOdd,
				y: yDigitOdd,
				indexLabel: DigiLabelOdd,
				indexLabelFontWeight: "bold",
				indexLabelFontSize: LblSize,
				indexLabelFontColor:mColorDigit,
				indexLabelBackgroundColor:LblBGcolor,
				markerSize: LblBmarkerSize,
				markerType: "circle",  //"circle", "square", "cross", "none"
				markerColor: LblBmarkerColor,
				color: mColorBarOdd,
				markerBorderColor: "#ccc",
				});
				
			if (spot[i-1] < spot[i]) {

				dpsBlueOdd.push({//нечёт синий
					x: xDigitOdd,
					y: yDigitOdd,
					indexLabel: DigiLabelOdd,
					indexLabelFontWeight: "bold",
					indexLabelFontSize: LblSize,
					indexLabelFontColor:mColorDigit,
					indexLabelBackgroundColor:LblBGcolor,
					// markerSize: LblBmarkerSize,
					markerType: "circle",  //"circle", "square", "cross", "none"
					// markerColor: LblBmarkerColor,
					color: mColorBarOdd,
					markerBorderColor: "#ccc",
					})
			} 
			if(spot[i-1] > spot[i]) {
				dpsRedOdd.push({//нечёт красный
					x: xDigitOdd,
					y: yDigitRevPos,
					indexLabel: DigiLabelOdd,
					indexLabelFontWeight: "bold",
					indexLabelFontSize: LblSize,
					indexLabelFontColor:mColorDigit,
					indexLabelBackgroundColor:LblBGcolor,
					// markerSize: LblBmarkerSize,
					markerType: "circle",  //"circle", "square", "cross", "none"
					// markerColor: LblBmarkerColor,
					color: mColorBarOdd,
					markerBorderColor: "#ccc",
					})
			};
		} else {

			// console.log(i, " Even Чет " );
			yDigitEven = parseFloat(tic[i-1]);
			yDigitOdd = '';
			var DigiLabelEven = digit[i];
			// console.log(digit[i], " Even Чет " );
			dpsEven.push({
				x: xDigitEven,
				y: yDigitEven,
				indexLabel: DigiLabelEven,
				// indexLabelFontWeight: "bold",
				indexLabelFontSize: LblSize,
				indexLabelFontColor:mColorDigit,
				indexLabelBackgroundColor:LblBGcolor,
				markerSize: LblBmarkerSize,
				// markerType: "circle",  //"circle", "square", "cross", "none"
				markerColor: LblBmarkerColor,
				color: mColorBarEven,
				markerBorderColor: "#ccc",
				});
			if (spot[i-1] < spot[i]) {
				// console.log(i, digit[i], " Even Чет синий" );
				dpsBlueEven.push({//чёт синий
					x: xDigitEven,
					y: yDigitEven,
					indexLabel: DigiLabelEven,
					indexLabelFontWeight: "bold",
					indexLabelFontSize: LblSize,
					indexLabelFontColor:mColorDigit,
					indexLabelBackgroundColor:LblBGcolor,
					// markerSize: LblBmarkerSize,
					markerType: "circle",  //"circle", "square", "cross", "none"
					// markerColor: LblBmarkerColor,
					color: mColorBarEven,
					markerBorderColor: "#ccc",
					});
			} 
			if(spot[i-1] > spot[i]) {
				// console.log(i, digit[i], " Even Чет красный" );
				dpsRedEven.push({//чёт красный
					x: xDigitEven,
					y: yDigitRevPos,
					indexLabel: DigiLabelEven,
					indexLabelFontWeight: "bold",
					indexLabelFontSize: LblSize,
					indexLabelFontColor:mColorDigit,
					indexLabelBackgroundColor:LblBGcolor,
					// markerSize: LblBmarkerSize,
					markerType: "circle",  //"circle", "square", "cross", "none"
					// markerColor: LblBmarkerColor,
					color: mColorBarEven,
					markerBorderColor: "#ccc",
					})
			};
		}
			// if (temp == 1)  {
				// console.log("tik", i);
				// console.log("Нечет dpsOdd.length", dpsOdd.length);
				// console.log("Нечет OddLength", OddLength);
				if (dpsOdd.length > OddLength) {
					// console.log("Нечет >");
					dpsOdd.shift();
				};
				if (dpsEven.length > EvenLength) {
					dpsEven.shift();
					// console.log("Чет >");
				};
				
//##############################################################################
				// console.log(i,digit[i],"");
				// console.log("EvenBlue OddRed  dpsebor.length", dpsebor.length);
				// console.log("OddBlue EvenRed  dpsober.length", dpsober.length);
				if (dpsebor.length > dpseborLength){
					dpsebor.shift();
					// console.log(i,digit[i],"Чет синий");
				};
				if (dpsober.length > dpsoberLength){
					dpsober.shift();
					// console.log(i,digit[i],"Чет синий");
				};
				if (dpsebor2.length > dpseborLength){
					dpsebor2.shift();
					// console.log(i,digit[i],"Чет синий");
				};
				if (dpsober2.length > dpsoberLength){
					dpsober2.shift();
					// console.log(i,digit[i],"Чет синий");
				};
//##############################################################################
				// console.log("tik", i);
				// console.log("чёт синий dpsBlueEven.length", dpsBlueEven.length);
				// console.log("чёт синий bEvenLength", bEvenLength);
				// console.log("нечёт красный dpsRedOdd.length", dpsRedOdd.length);
				// console.log("нечёт красный rOddLength", rOddLength);
				if (dpsBlueEven.length > bEvenLength){
					dpsBlueEven.shift();
					// console.log(i,digit[i],"Чет синий");
				};
				if (dpsRedEven.length > rEvenLength){
					dpsRedEven.shift();
					// console.log(i,digit[i],"Чет красный");
				};
				if (dpsBlueOdd.length > bOddLength){
					dpsBlueOdd.shift();
					// console.log(i,digit[i],"Нечет синий");
				};
				if (dpsRedOdd.length > rOddLength){
					dpsRedOdd.shift();
					// console.log(i,digit[i],"Нечет красный");
				};
			// }
			dps_digit.push({
				x: xDigit,
				y: yDigit,
				indexLabel: digit[i],
				indexLabelFontWeight: "bold",
				indexLabelFontSize: 18,
				markerType: "circle",
				markerColor: mColorDigit,
				markerBorderColor: "#ccc",
				 });
			dps_red.push({
				x: xDigit,
				// y: yDigitRevPos,
				y: parseFloat(digit[i]),
				indexLabel: digit[i],//lblDigit1,
				//indexLabelFontWeight: "bold",
				indexLabelFontSize: 18,
				indexLabelFontColor: fontCol,//fontCol цвет красных цифр ни нижнем графике
				indexLabelPlacement: "inside",// lblPlace,
				color: colorBlueRed,
				markerBorderColor: "#ccc",
				});
			dps_blue.push({
				x: xDigit,
				// y: yDigitRevneg,
				y: parseFloat(digit[i]),
				indexLabel: digit[i],//lblDigit2,
				indexLabelFontWeight: "bold",
				indexLabelFontSize: 18,
				indexLabelFontColor: fontCol,//fontCol цвет синих цифр ни нижнем графике
				indexLabelPlacement: "inside",//lblPlace,
				color: colorBlueRed,
				markerBorderColor: "#ccc",
				});
			}
			if(dps_digit.length > cnt+1) {
				while(dps_digit.length != cnt) {
					dps_digit.shift();
				}
			 }
			if(dps_red.length > cnt+1) {
				while(dps_red.length != cnt) {
					dps_red.shift();
				}
			}
			if(dps_blue.length > cnt+1) {
				while(dps_blue.length != cnt) {
					dps_blue.shift();
				}
			}
			chart_Odd_Even.render();
			chartDigit.render();
			chartSZPR.render();
			chartEven.render();
			chartOdd.render();
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
			if (digit[19] - digit[20] == 1 || digit[19] - digit[20] == -1){
					document.querySelector("#arrow_up > span:nth-child(1)").innerHTML = "&#241";
					toggleArrow("#arrow_up",1,"Start");
					document.querySelector("#arrow_down > span:nth-child(1)").innerHTML = "&#242";
					toggleArrow("#arrow_down",1,"Start");
				start =0
				ready = 1;
					}
					if (start == 1) {
					document.querySelector("#arrow_up > span:nth-child(1)").innerHTML = "&#241";
					toggleArrow("#arrow_up",1,"Wait");
					document.querySelector("#arrow_down > span:nth-child(1)").innerHTML = "&#242";
					toggleArrow("#arrow_down",1,"Wait");
					} if (start == 1) {
				document.querySelector("#arrow_up > span:nth-child(1)").classList.remove("Arrow_Bg_Start");
				document.querySelector("#arrow_down > span:nth-child(1)").classList.remove("Arrow_Bg_Start");
				} if (start == 5) {
				document.querySelector("#arrow_up > span:nth-child(1)").classList.remove("Arrow_Bg_Wait");
				document.querySelector("#arrow_down > span:nth-child(1)").classList.remove("Arrow_Bg_Wait");
					start =0;
					ready = 0;
			}
		////////////////////
		};
	};
};
chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: false,
	theme: "light2",
	title: {
		fontColor: "red",
		text: "mod_0.3.17",
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
chart_Odd_Even = new CanvasJS.Chart("chartContainerAxisCord", {
	animationEnabled: false,
	theme: "light2",
	// title: {padding: {
		 // right: 0,
		 // left: 0
	 // },
		// titleFontSize: 0,
		// text: ""
	// },
	// backgroundColor: "#F5DEB3",
    subtitles: [{
    	text: "Ось координат",		
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
		// titleFontSize: 0,
		labelFontSize: 10,
		interval: 1,
		gridThickness: 1,
		gridDashType: "dash",
		tickLength: 0,
		lineThickness: 1,
		maximum: 20.5,
		minimum: 0.5
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:12,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-12,
			color:"#fff0f5",
			}
			],valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		interval: 1,
		maximum: 12.5,
		minimum: -12.5,
		labelFontSize: 10,
		gridThickness: 1,
		gridDashType: "dash",
		// tickLength: 0,
		// lineThickness: 1
	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [
/* 	{
		type: "line",
		color: "black",
		// lineDashType: "dash",
		showInLegend: true,
		name: "Чс и Нк black",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "yellow",
		markerSize: 12,
		dataPoints: dpsebor// Чс и Нк EvenBlue OddRed
	},
	{
		type: "line",
		color: "green",
		showInLegend: true,
		name: "Нс Чк green",
		// lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "green",
		markerSize: 12,
		dataPoints: dpsober// Нс Чк OddBlue EvenRed
	}, */
	{
		type: "line",
		lineThickness: 1,
		lineDashType: "dash",
		showInLegend: true,
		name: "Even Чёт",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		color: "#F08080",
		dataPoints: dpsEven
	},
	{
		type: "line",
		lineThickness: 1,
		showInLegend: true,
		name: "Odd Нечет",
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		dataPoints: dpsOdd
	}]
});
chartDigit = new CanvasJS.Chart("chartContainerDigit", {
	theme: "light2",
	animationEnabled: false,
    subtitles: [{
    	text: "Ось СЗ/ПР 2",		
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
		// titleFontSize: 0,
		labelFontSize: 10,
		interval: 1,
		gridThickness: 1,
		gridDashType: "dash",
		tickLength: 0,
		lineThickness: 1,
		maximum: 20.5,
		minimum: 0.5
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:12,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-12,
			color:"#fff0f5",
			}
			],valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		interval: 1,
		maximum: 11,
		minimum: -0.5,
		labelFontSize: 10,
		gridThickness: 1,
		gridDashType: "dash",
		// tickLength: 0,
		// lineThickness: 1
	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		color: "black",
		lineThickness: 1,
		lineDashType: "dash",
		showInLegend: true,
		name: "Чс и Нк black",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "yellow",
		markerSize: 12,
		dataPoints: dpsebor2// Чс и Нк EvenBlue OddRed
	},
	{
		type: "line",
		color: "green",
		lineThickness: 1,
		showInLegend: true,
		name: "Нс Чк green",
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "green",
		markerSize: 12,
		dataPoints: dpsober2// Нс Чк OddBlue EvenRed
	}]
});
chartSZPR = new CanvasJS.Chart("chartContainerSZPR", {
	theme: "light2",
	animationEnabled: false,
    subtitles: [{
    	text: "Ось СЗ/ПР",		
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
		// titleFontSize: 0,
		labelFontSize: 10,
		interval: 1,
		gridThickness: 1,
		gridDashType: "dash",
		tickLength: 0,
		lineThickness: 1,
		maximum: 20.5,
		minimum: 0.5
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:12,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-12,
			color:"#fff0f5",
			}
			],valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		interval: 1,
		maximum: 12.5,
		minimum: -12.5,
		labelFontSize: 10,
		gridThickness: 1,
		gridDashType: "dash",
		// tickLength: 0,
		// lineThickness: 1
	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		color: "black",
		// lineDashType: "dash",
		lineThickness: 0.6,
		showInLegend: true,
		name: "Чс и Нк black",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "yellow",
		markerSize: 12,
		dataPoints: dpsebor// Чс и Нк EvenBlue OddRed
	},
	{
		type: "line",
		color: "green",
		lineThickness: 0.6,
		// lineDashType: "dash",
		showInLegend: true,
		name: "Нс Чк green",
		
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "green",
		markerSize: 12,
		dataPoints: dpsober// Нс Чк OddBlue EvenRed
	},
		{
		type: "line",
		lineDashType: "dash",
		showInLegend: true,
		lineThickness: 1,
		name: "Even Чёт",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		color: "#F08080",
		dataPoints: dpsEven
	},
	{
		type: "line",
		showInLegend: true,
		name: "Odd Нечет",
		lineThickness: 1,
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		dataPoints: dpsOdd
	}]
});
chartEven = new CanvasJS.Chart("chartContainerDigitEven", {
	animationEnabled: false,
	theme: "light2",
	// title: {padding: {
		 // right: 0,
		 // left: 0
	 // },
		// titleFontSize: 0,
		// text: ""
	// },
	// backgroundColor: "#F5DEB3",
    subtitles: [{
    	text: "Ось тренда",		
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
		// titleFontSize: 0,
		labelFontSize: 10,
		interval: 1,
		gridThickness: 1,
		gridDashType: "dash",
		tickLength: 0,
		lineThickness: 1,
		maximum: 20.5,
		minimum: 0.5
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:12,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-12,
			color:"#fff0f5",
			}
			],valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		interval: 1,
		maximum: 11,
		minimum: -0.5,
		labelFontSize: 10,
		gridThickness: 1,
		gridDashType: "dash",
		// tickLength: 0,
		// lineThickness: 1
	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		color: "black",
		lineThickness: 1,
		lineDashType: "dash",
		showInLegend: true,
		name: "ЧС чёрный пунктир",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "yellow",
		markerSize: 12,
		dataPoints: dpsBlueEven//чёт синий
	},
	{
		type: "line",
		color: "black",
		lineThickness: 1,
		// lineDashType: "dash",
		showInLegend: true,
		name: "НК чёрная линия",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "yellow",
		markerSize: 12,
		dataPoints: dpsRedOdd//нечёт красный
	},
	{
		type: "line",
		color: "Chocolate",
		lineThickness: 1,
		// lineDashType: "dash",
		showInLegend: true,
		name: "НС Chocolate линия",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "green",
		markerSize: 12,
		dataPoints: dpsBlueOdd//нечёт синий
	},
	{
		type: "line",
		color: "Chocolate",
		lineThickness: 1,
		lineDashType: "dash",
		showInLegend: true,
		name: "ЧК Chocolate пунктир",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "green",
		markerSize: 12,
		dataPoints: dpsRedEven//чёт красный
	}]
});
chartOdd = new CanvasJS.Chart("chartContainerDigitOdd", {
	theme: "dark1",
	toolTip: {
		enabled: true,
		animationEnabled: true,
		// borderColor: "#ccc",
		// borderThickness: 1,
		// fontColor: "#000",
		// content: "{y}"
			},
	axisX: {
		includeZero: false,
		// titleFontSize: 0,
		labelFontSize: 1,
		interval: 1,
		gridThickness: 0,
		// gridDashType: "dash",
		tickLength: 0,
		lineThickness: 1,
		maximum: 20.5,
		minimum: 0
	},
	axisY: {
/* 		stripLines:[
		{
			startValue:0,
			endValue:12,
			color:"#c7fcec",
		},
		{
			startValue:0,
			endValue:-12,
			color:"#fff0f5",
		}
		], */
		valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		// interval: 1,
		maximum: 1,
		minimum: 0,
		labelFontSize: 0,
		gridThickness: 0,
		// gridDashType: "dash",
		// tickLength: 0,
		// lineThickness: 1

	},
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [
	{
		type: "stackedColumn100",
		// bevelEnabled: true,
		dataPoints: dps_blue
	},
	{
		type: "stackedColumn100",
		// bevelEnabled: true,
		dataPoints: dps_red
	}]
});
}, false);