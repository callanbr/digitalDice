function myvars(){
var dice1 = document.getElementById('dice1');
var dice2 = document.getElementById('dice2');
var dice3 = document.getElementById('dice3');
var dice4 = document.getElementById('dice4');
var dice5 = document.getElementById('dice5');
var dice6 = document.getElementById('dice6');
var dice8 = document.getElementById('dice8');
var dice7 = document.getElementById('dice7');
var dice9 = document.getElementById('dice9');
var dice10 = document.getElementById('dice10');
var dice11 = document.getElementById('dice11');
var dice12 = document.getElementById('dice12');
var dice13 = document.getElementById('dice13');
var dice14 = document.getElementById('dice14');
var dice15 = document.getElementById('dice15');
var dice16 = document.getElementById('dice16');
var dice17 = document.getElementById('dice17');
var dice18 = document.getElementById('dice18');
var dice19 = document.getElementById('dice19');
var dice20 = document.getElementById('dice20');
var dice21 = document.getElementById('dice21');
var dice22 = document.getElementById('dice22');
var dice23 = document.getElementById('dice23');
var dice24 = document.getElementById('dice24');
var dice25 = document.getElementById('dice25');
var dice26 = document.getElementById('dice26');
var dice27 = document.getElementById('dice27');
var dice28 = document.getElementById('dice28');
var dice29 = document.getElementById('dice29');
var dice30 = document.getElementById('dice30');
var spanTotalNumber1 = document.getElementById('spanTotalNumber1');
var spanTotalNumber2 = document.getElementById('spanTotalNumber2');
var spanTotalNumber3 = document.getElementById('spanTotalNumber3');
var spanTotalNumber4 = document.getElementById('spanTotalNumber4');
var spanTotalNumber5 = document.getElementById('spanTotalNumber5');
}
function removeStyleDice(){
	dice1.style.border = '';
	dice2.style.border = '';
	dice3.style.border = '';
	dice4.style.border = '';
	dice5.style.border = '';
	dice6.style.border = '';
	dice7.style.border = '';
	dice8.style.border = '';
	dice9.style.border = '';
	dice10.style.border = '';
	dice11.style.border = '';
	dice12.style.border = '';
	dice13.style.border = '';
	dice14.style.border = '';
	dice15.style.border = '';
	dice16.style.border = '';
	dice17.style.border = '';
	dice18.style.border = '';
	dice19.style.border = '';
	dice20.style.border = '';
	dice21.style.border = '';
	dice22.style.border = '';
	dice23.style.border = '';
	dice24.style.border = '';
	dice25.style.border = '';
	dice26.style.border = '';
	dice27.style.border = '';
	dice28.style.border = '';
	dice29.style.border = '';
	dice30.style.border = '';
	
}
function styleDice(){

}
function spanClear(){
	spanTotalNumber1.innerText = '';
	spanTotalNumber2.innerText = '';
	spanTotalNumber3.innerText = '';
	spanTotalNumber4.innerText = '';
	spanTotalNumber5.innerText = '';
}
function oneDice(){
removeStyleDice();
spanClear();
var rollOneDice = parseInt(Math.random() * 6)+1;
if(rollOneDice == '1'){
	dice1.style.border = '4px solid red';
}
if(rollOneDice == '2'){
	dice2.style.border = '4px solid red';
} 
if(rollOneDice == '3'){
	dice3.style.border = '4px solid red';
}
if(rollOneDice == '4'){
	dice4.style.border = '4px solid red';
}
if(rollOneDice == '5'){
	dice5.style.border = '4px solid red';
}
if(rollOneDice == '6'){
	dice6.style.border = '4px solid red';
}
spanTotalNumber1.innerText = 'One Dice: '+rollOneDice;
}

// function rollFirstDice(){
	

// 	if(this.rollOneDice == '1'){
// 		dice1.style.border = '4px solid red';
// 	}
// 	if(this.rollOneDice == '2'){
// 		dice2.style.border = '4px solid red';
// 	} 
// 	if(this.rollOneDice == '3'){
// 		dice3.style.border = '4px solid red';
// 	}
// 	if(this.rollOneDice == '4'){
// 		dice4.style.border = '4px solid red';
// 	}
// 	if(this.rollOneDice == '5'){
// 		dice5.style.border = '4px solid red';
// 	}
// 	if(this.rollOneDice == '6'){
// 		dice6.style.border = '4px solid red';
// 	}
	

// }

function twoDice(){
	styleDice();
	spanClear();
	rollSecondDice();
}

function rollSecondDice(){

rollFirstDice()
	let rollDice = parseInt(Math.random() * 6)+1;

	if(oneDice == '1'){
		dice1.style.border = '4px solid green';
	}
	if(oneDice == '2'){
		dice2.style.border = '4px solid green';
	} 
	if(oneDice == '3'){
		dice3.style.border = '4px solid green';
	}
	if(oneDice == '4'){
		dice4.style.border = '4px solid green';
	}
	if(oneDice == '5'){
		dice5.style.border = '4px solid green';
	}
	if(oneDice == '6'){
		dice6.style.border = '4px solid green';
	}
	if(twoDice == '1'){
		dice7.style.border = '4px solid green';
	}
	if(twoDice == '2'){
		dice8.style.border = '4px solid green';
	}
	if(twoDice == '3'){
		dice9.style.border = '4px solid green';
	}
	if(twoDice == '4'){
		dice10.style.border = '4px solid green';
	}
	if(twoDice == '5'){
		dice11.style.border = '4px solid green';
	}
	if(twoDice == '6'){
		dice12.style.border = '4px solid green';
	}
	var sum = oneDice + twoDice;


	spanTotalNumber2.innerText =  'Two Dice: '+sum;

	
	// spanTotalNumber1.innerText = '';

	// spanTotalNumber3.innerText = '';
}




// THREE DICE//
// THREE DICE//
// THREE DICE//

function lastRoll(){

	var diceOne = document.getElementById('diceOne').style.border = '';
	var diceTwo = document.getElementById('diceTwo').style.border = '';
	var diceThree = document.getElementById('diceThree').style.border = '';
	var diceFour = document.getElementById('diceFour').style.border = '';
	var diceFive = document.getElementById('diceFive').style.border = '';
	var diceSix = document.getElementById('diceSix').style.border = '';
	var diceSeven = document.getElementById('diceSeven').style.border = '';
	var diceEight = document.getElementById('diceEight').style.border = '';
	var diceNine = document.getElementById('diceNine').style.border = '';
	var diceTen = document.getElementById('diceTen').style.border = '';
	var diceEleven = document.getElementById('diceEleven').style.border = '';
	var diceTwelve = document.getElementById('diceTwelve').style.border = '';
	var diceThirteen = document.getElementById('diceThirteen').style.border = '';
	var diceFourteen = document.getElementById('diceFourteen').style.border = '';
	var diceFifteen = document.getElementById('diceFifteen').style.border = '';
	var diceSixteen = document.getElementById('diceSixteen').style.border = '';
	var diceSeventeen = document.getElementById('diceSeventeen').style.border = '';
	var diceEighteen = document.getElementById('diceEighteen').style.border = '';

	
	spanTotalNumber3.innerText = '';

	rollLastdice();
}

function rollLastdice(){

	var dice1 = parseInt(Math.random() * 6)+1;

	var dice2 = parseInt(Math.random() * 6)+1;

	var diceLast = parseInt(Math.random() * 6)+1;

	var diceOne = document.getElementById('diceOne');
	var diceTwo = document.getElementById('diceTwo');
	var diceThree = document.getElementById('diceThree');
	var diceFour = document.getElementById('diceFour');
	var diceFive = document.getElementById('diceFive')
	var diceSix = document.getElementById('diceSix');
	var diceSeven = document.getElementById('diceSeven');
	var diceEight = document.getElementById('diceEight');
	var diceNine = document.getElementById('diceNine');
	var diceTen = document.getElementById('diceTen');
	var diceEleven = document.getElementById('diceEleven');
	var diceTwelve = document.getElementById('diceTwelve');
	var diceThirteen = document.getElementById('diceThirteen');
	var diceFourteen = document.getElementById('diceFourteen');
	var diceFifteen = document.getElementById('diceFifteen');
	var diceSixteen = document.getElementById('diceSixteen');
	var diceSeventeen = document.getElementById('diceSeventeen');
	var diceEighteen = document.getElementById('diceEighteen');

	if(dice1 == '1'){
		diceOne.style.border = '4px solid blue';
	}
	if(dice1 == '2'){
		diceTwo.style.border = '4px solid blue';
	} 
	if(dice1 == '3'){
		diceThree.style.border = '4px solid blue';
	}
	if(dice1 == '4'){
		diceFour.style.border = '4px solid blue';
	}
	if(dice1 == '5'){
		diceFive.style.border = '4px solid blue';
	}
	if(dice1 == '6'){
		diceSix.style.border = '4px solid blue';
	}
	if(dice2 == '1'){
		diceSeven.style.border = '4px solid blue';
	}
	if(dice2 == '2'){
		diceEight.style.border = '4px solid blue';
	}
	if(dice2 == '3'){
		diceNine.style.border = '4px solid blue';
	}
	if(dice2 == '4'){
		diceTen.style.border = '4px solid blue';
	}
	if(dice2 == '5'){
		diceEleven.style.border = '4px solid blue';
	}
	if(dice2 == '6'){
		diceTwelve.style.border = '4px solid blue';
	}
	if(diceLast == '1'){
		diceThirteen.style.border = '4px solid blue';
	}
	if(diceLast == '2'){
		diceFourteen.style.border = '4px solid blue';
	}
	if(diceLast == '3'){
		diceFifteen.style.border = '4px solid blue';
	}
	if(diceLast == '4'){
		diceSixteen.style.border = '4px solid blue';
	}
	if(diceLast == '5'){
		diceSeventeen.style.border = '4px solid blue';
	}
	if(diceLast == '6'){
		diceEighteen.style.border = '4px solid blue';
	}

	var sum = oneDice + twoDice + diceLast;

	

	spanTotalNumber3.innerText =  'Three Dice: '+sum;

	// var spanTotalNumber1 = document.getElementById('spanTotalNumber1');
	spanTotalNumber1.innerText = '';
	
	spanTotalNumber2.innerText = '';
}