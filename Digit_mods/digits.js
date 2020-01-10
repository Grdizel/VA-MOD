window.addEventListener('load', function() {
var ws,b,rnd,spot,time,dps_spot,dps_digit,dps_red,dps_blue,dpsEven,dpsOdd,ready,stripLinesValue,xd,digit,cnt,random,id,lng,str,chart,xVal,yVal,mType,mColor,rndMenu;
var OddLength, EvenLength, bEvenLength, bOddLength, rEvenLength, rOddLength, temp = 0, temp_Odd=0, temp_Even=0, tdgbEven=0, tdgbOdd=0, tdgrEven=0, tdgrOdd=0;
var colRev1, colRev2, lblDigit1, lblDigit2, yDigitRevPos, yDigitRevneg, StartSignal, LblSize, LblBGcolor, LblBmarkerSize, LblBmarkerColor, fontCol, lblPlace;
var dgb = [], dgr = [], dgbEven = [], dgbOdd = [], dgrEven = [], dgrOdd = [], dpsrEven = [], dpsbEven = [], dpsbOdd = [], dpsrOdd = [];
var posrodd, posbodd, posreven, posbeven;

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
				if(((parseFloat(digit[i+1]) & 1)==1) && ((parseFloat(digit[i]) & 1)==0) && (parseFloat(digit[i-1])==0) && ((digit[i])==((digit[i+1])+1)) && (digit[i+1]>=5)) {
					digit[i]== "10"
					console.log(i,digit[i])
					console.log(i,(spot[i]))
				}else if(((parseFloat(digit[i+1]) & 1)==0) && ((parseFloat(digit[i]) & 1)==1) && (parseFloat(digit[i-1])==0) && ((digit[i])==((digit[i+1])+1)) && (digit[i+1]>=6)) {
					digit[i]== "10"
					console.log(i,digit[i])
					console.log(i,(spot[i]))
				}
		if (spot[i] > spot[i+1]) {
			var mWmColorDigit = "#29abe2";//цвет цифр в верхнем графике
		} else if(spot[i] < spot[i+1]) {
			var mWmColorDigit = "#c03";//цвет цифр в верхнем графике
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
								mSize = 10
								mType = "square"
							}else if ((fi >= 7) && (spot[fi-2] > spot[fi-7])){
								mColor = "red" //красный квадратик
								mSize = 10
								mType = "square"
							} else {
								mColor = "black"; //чёрный треугольник
								mSize = 10
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
				toggleDigit(i,"up");
				mColorBarEven = "#4169E1";//цвет второго графика синие столбики
				mColorBarOdd = "#4682B4";//цвет третьего графика синие столбики
				var mColorDigit = "#29abe2";//цвет четвёртого графика синие столбики
				} else if(spot[i-1] > spot[i]) {
					toggleDigit(i,"down");
					mColorBarEven = "#DC143C";//цвет второго графика красные столбики
					mColorBarOdd = "#CD5C5C";//цвет третьего графика красные столбики
					var mColorDigit = "#c03";//цвет четвёртого графика красные столбики
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
			LblBmarkerColor = "yellow";
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
		if (i==20) {
			temp = 1;
			// console.log(dpsOdd.length, " Odd Нечет " );
			OddLength = temp_Odd;
			// console.log(dpsEven.length, " Even Чет " );
			EvenLength = temp_Even;
			// console.log('Odd Н', temp_Odd, 'Even Ч', temp_Even);
			bEvenLength = tdgbEven;
			// console.log('tdgbEven Even ЧС', tdgbEven);
			// console.log(dpsbEven.length, "dpsb Even Чет синие" );
			bOddLength = tdgbOdd;
			rEvenLength = tdgrEven;
			rOddLength = tdgrOdd;
			temp_Odd = 0;
			temp_Even = 0;
			tdgbEven=0;
			tdgbOdd=0;
			tdgrEven=0;
			tdgrOdd=0;
		}
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

				dpsbOdd.push({//нечёт синий
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
				dpsrOdd.push({//нечёт красный
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
				dpsbEven.push({//чёт синий
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
				dpsrEven.push({//чёт красный
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
				// console.log("tik", i);
				// console.log("чёт синий dpsbEven.length", dpsbEven.length);
				// console.log("чёт синий bEvenLength", bEvenLength);
				// console.log("нечёт красный dpsrOdd.length", dpsrOdd.length);
				// console.log("нечёт красный rOddLength", rOddLength);
				if (dpsbEven.length > bEvenLength ) {
					dpsbEven.shift();
					// console.log(i,digit[i],"Чет синий");
				};
				if (dpsrEven.length > rEvenLength ) {
					dpsrEven.shift();
					// console.log(i,digit[i],"Чет красный");
				};
				if (dpsbOdd.length > bOddLength ) {
					dpsbOdd.shift();
					// console.log(i,digit[i],"Нечет синий");
				};
				if (dpsrOdd.length > rOddLength ) {
					dpsrOdd.shift();
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
				y: yDigitRevPos,
				indexLabel: lblDigit1,
				//indexLabelFontWeight: "bold",
				indexLabelFontSize: 18,
				indexLabelFontColor: fontCol,// цвет красных цифр ни нижнем графике
				indexLabelPlacement: lblPlace,
				color: colRev1,
				markerBorderColor: "#ccc",
				});
			dps_blue.push({
				x: xDigit,
				y: yDigitRevneg,
				indexLabel: lblDigit2,
				indexLabelFontWeight: "bold",
				indexLabelFontSize: 18,
				indexLabelFontColor: fontCol,// цвет синих цифр ни нижнем графике
				indexLabelPlacement: lblPlace,
				color: colRev2,
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
		text: "mod_0.3.8",
		fontSize: 10,
	},
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
		minimum: 0.5,
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
		lineThickness: 1
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:10,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-10,
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
		showInLegend: true,
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
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		dataPoints: dpsOdd
	}]
});
chartEven = new CanvasJS.Chart("chartContainerDigitEven", {
/* 	animationEnabled: false,
	theme: "light2",
	title: {padding: {
	right: 0,
	left: 0
	},
		titleFontSize: 0,
		text: ""
	},
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
		titleFontSize: 0,
		labelFontSize: 0,
		gridThickness: 0,
		tickLength: 0,
		lineThickness: 1
	},dataPointMaxWidth: 50,
	axisY: {stripLines:[
			{
			startValue:-0.05,
			endValue:0.05,
			color:"black",
			}
			],valueFormatString:"#000",
		includeZero: false,
		titleFontSize: 0,
		labelFontSize: 0,
		gridThickness: 0,
		tickLength: 0,
		lineThickness: 0
	},
	// data: [{
		// type: "line",
		// labelFontFamily: "Arial,sans-serif",
		// lineColor: "#ccc",
		// lineThickness: 0,
		// markerType: "none",
		// markerSize: 6,
		// markerBorderThickness: 0,
		// dataPoints: dpsEven
	// }] */
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
		lineThickness: 1
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:10,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-10,
			color:"#fff0f5",
			}
			],valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		interval: 1,
		maximum: 11,
		minimum: -0,
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
		showInLegend: true,
		name: "чёт синий",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		color: "#4682B4",
		dataPoints: dpsbEven
	},
	{
		type: "line",
		color: "#FA8072",
		showInLegend: true,
		name: "нечёт красный",
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		dataPoints: dpsrOdd
	}]
});
chartOdd = new CanvasJS.Chart("chartContainerDigitOdd", {
/* 	animationEnabled: false,
	theme: "light2",
	title: {padding: {
		right: 0,
		left: 0
	},
		titleFontSize: 0,
		text: ""
	},
	toolTip: {
		enabled: true,
		animationEnabled: true,
		color: "#6699FF",
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		content: "{y}"
		},
	axisX: {
		includeZero: false,
		titleFontSize: 0,
		labelFontSize: 0,
		gridThickness: 0,
		tickLength: 0,
		lineThickness: 1
	},dataPointMaxWidth: 50,
	axisY: {stripLines:[
			{
			startValue:-0.05,
			endValue:0.05,
			color:"black",
			}
			],valueFormatString:"#000",
		includeZero: false,
		titleFontSize: 0,
		labelFontSize: 0,
		gridThickness: 0,
		tickLength: 0,
		lineThickness: 1
	},dataPointMaxWidth: 50,
	// data: [{
		// type: "line",
		// labelFontFamily: "Arial,sans-serif",
		// lineColor: "#ccc",
		// markerType: "none",
		// markerSize: 6,
		// markerBorderThickness: 0,
		// dataPoints: dpsOdd
	// }] */
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
		lineThickness: 1
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:10,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-10,
			color:"#fff0f5",
			}
			],valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		interval: 1,
		maximum: 11,
		minimum: 0,
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
		color: "#1E90FF",
		showInLegend: true,
		name: "нечёт синий",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		dataPoints: dpsbOdd
	},
	{
		type: "line",
		color: "#F08080",
		showInLegend: true,
		name: "чёт красный",
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerSize: 5,
		dataPoints: dpsrEven
	}]
});
//////
/* chartDigit = new CanvasJS.Chart("chartContainerDigit", {
	animationEnabled: false,
	theme: "dark1",
	title: {padding: {
		right: 0,
		left: 0
	},
		titleFontSize: 0,
		text: ""
	},
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
		titleFontSize: 0,
		labelFontSize: 0,
		gridThickness: 0,
		tickLength: 0,
		lineThickness: 1
	},dataPointMaxWidth: 50,
	axisY: {
		// stripLines:[
			// {
				// value:1,
				// opacity: 50,
				// thickness:2,
				// color:"red",
				// value:100,
				// opacity: 50,
				// thickness:2,
				// color:"blue"
			// }
			// ],
		valueFormatString:"#000",
		includeZero: false,
		titleFontSize: 0,
		labelFontSize: 0,
		gridThickness: 0,
		tickLength: 0,
		lineThickness: 1
	},dataPointMaxWidth: 50,
	data: [{
		labelFontFamily: "Arial,sans-serif",
		type: "stackedColumn100",//stackedColumn100
		lineColor: "#ccc",
		markerType: "none",
		markerBorderThickness: 0,
		dataPoints: dps_red
	}, {
		labelFontFamily: "Arial,sans-serif",
		type: "stackedColumn100",//stackedColumn100
		lineColor: "#ccc",
		markerType: "none",
		markerBorderThickness: 0,
		dataPoints: dps_blue
	}]
}); */
chartDigit = new CanvasJS.Chart("chartContainerDigit", {
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
		lineThickness: 1
	},
	axisY: {stripLines:[{
			startValue:0,
			endValue:10,
			color:"#c7fcec",
			},
			{
			startValue:0,
			endValue:-10,
			color:"#fff0f5",
			}
			],valueFormatString:"#000",
		includeZero: false,
		// titleFontSize: 5,
		// label: digit[i],
		interval: 1,
		maximum: 11,
		minimum: 0,
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
		color: "#4682B4",
		showInLegend: true,
		name: "чёт синий",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "yellow",
		markerSize: 20,
		dataPoints: dpsbEven
	},
	{
		type: "line",
		color: "#FA8072",
		showInLegend: true,
		name: "нечёт красный",
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "yellow",
		markerSize: 20,
		dataPoints: dpsrOdd
	},
	{
		type: "line",
		color: "#1E90FF",
		showInLegend: true,
		name: "нечёт синий",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "green",
		markerSize: 20,
		dataPoints: dpsbOdd
	},
	{
		type: "line",
		color: "#F08080",
		showInLegend: true,
		name: "чёт красный",
		lineDashType: "dash",
		markerType: "circle",  //"circle", "square", "cross", "none"
		markerColor: "green",
		markerSize: 20,
		dataPoints: dpsrEven
	}]
});
}, false);