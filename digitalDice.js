// ONE DICE//
// ONE DICE//
// ONE DICE//
function oneDice(){
	var diceOne = document.getElementById('diceOne').style.border = '';
	var diceTwo = document.getElementById('diceTwo').style.border = '';
	var diceThree = document.getElementById('diceThree').style.border = '';
	var diceFour = document.getElementById('diceFour').style.border = '';
	var diceFive = document.getElementById('diceFive').style.border = '';
	var diceSix = document.getElementById('diceSix').style.border = '';

	var spanTotalNumber1 = document.getElementById('spanTotalNumber1');
	spanTotalNumber1.innerText = '';

	roll1dice();
}

function roll1dice(){
	var dice1 = parseInt(Math.random() * 6)+1;

	var diceOne = document.getElementById('diceOne');
	var diceTwo = document.getElementById('diceTwo');
	var diceThree = document.getElementById('diceThree');
	var diceFour = document.getElementById('diceFour');
	var diceFive = document.getElementById('diceFive')
	var diceSix = document.getElementById('diceSix');

	if(dice1 == '1'){
		diceOne.style.border = '6px solid red';
	}
	if(dice1 == '2'){
		diceTwo.style.border = '6px solid red';
	} 
	if(dice1 == '3'){
		diceThree.style.border = '6px solid red';
	}
	if(dice1 == '4'){
		diceFour.style.border = '6px solid red';
	}
	if(dice1 == '5'){
		diceFive.style.border = '6px solid red';
	}
	if(dice1 == '6'){
		diceSix.style.border = '6px solid red';
	}
		diceSeven.style.border = '';
		diceEight.style.border = '';
		diceNine.style.border = '';
		diceTen.style.border = '';
		diceEleven.style.border = '';
		diceTwelve.style.border = '';
	
	var sum = dice1;

	var spanTotalNumber1 = document.getElementById('spanTotalNumber1');

	spanTotalNumber1.innerText = 'One Dice: '+sum;

	var spanTotalNumber2 = document.getElementById('spanTotalNumber2');
	spanTotalNumber2.innerText = '';
	var spanTotalNumber3 = document.getElementById('spanTotalNumber3');
	spanTotalNumber3.innerText = '';
}

// TWO DICE//
// TWO DICE//
// TWO DICE//
function twoDice(){

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

	var spanTotalNumber2 = document.getElementById('spanTotalNumber2');
	spanTotalNumber2.innerText = '';

	roll2dice();
}

function roll2dice(){

	var dice1 = parseInt(Math.random() * 6)+1;

	var dice2 = parseInt(Math.random() * 6)+1;

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

	if(dice1 == '1'){
		diceOne.style.border = '6px solid green';
	}
	if(dice1 == '2'){
		diceTwo.style.border = '6px solid green';
	} 
	if(dice1 == '3'){
		diceThree.style.border = '6px solid green';
	}
	if(dice1 == '4'){
		diceFour.style.border = '6px solid green';
	}
	if(dice1 == '5'){
		diceFive.style.border = '6px solid green';
	}
	if(dice1 == '6'){
		diceSix.style.border = '6px solid green';
	}
	if(dice2 == '1'){
		diceSeven.style.border = '6px solid green';
	}
	if(dice2 == '2'){
		diceEight.style.border = '6px solid green';
	}
	if(dice2 == '3'){
		diceNine.style.border = '6px solid green';
	}
	if(dice2 == '4'){
		diceTen.style.border = '6px solid green';
	}
	if(dice2 == '5'){
		diceEleven.style.border = '6px solid green';
	}
	if(dice2 == '6'){
		diceTwelve.style.border = '6px solid green';
	}

	var sum = dice1 + dice2;

	var spanTotalNumber2 = document.getElementById('spanTotalNumber2');

	spanTotalNumber2.innerText =  'Two Dice: '+sum;

	var spanTotalNumber1 = document.getElementById('spanTotalNumber1');
	spanTotalNumber1.innerText = '';
	var spanTotalNumber3 = document.getElementById('spanTotalNumber3');
	spanTotalNumber3.innerText = '';
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

	var spanTotalNumber3 = document.getElementById('spanTotalNumber3');
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
		diceOne.style.border = '6px solid blue';
	}
	if(dice1 == '2'){
		diceTwo.style.border = '6px solid blue';
	} 
	if(dice1 == '3'){
		diceThree.style.border = '6px solid blue';
	}
	if(dice1 == '4'){
		diceFour.style.border = '6px solid blue';
	}
	if(dice1 == '5'){
		diceFive.style.border = '6px solid blue';
	}
	if(dice1 == '6'){
		diceSix.style.border = '6px solid blue';
	}
	if(dice2 == '1'){
		diceSeven.style.border = '6px solid blue';
	}
	if(dice2 == '2'){
		diceEight.style.border = '6px solid blue';
	}
	if(dice2 == '3'){
		diceNine.style.border = '6px solid blue';
	}
	if(dice2 == '4'){
		diceTen.style.border = '6px solid blue';
	}
	if(dice2 == '5'){
		diceEleven.style.border = '6px solid blue';
	}
	if(dice2 == '6'){
		diceTwelve.style.border = '6px solid blue';
	}
	if(diceLast == '1'){
		diceThirteen.style.border = '6px solid blue';
	}
	if(diceLast == '2'){
		diceFourteen.style.border = '6px solid blue';
	}
	if(diceLast == '3'){
		diceFifteen.style.border = '6px solid blue';
	}
	if(diceLast == '4'){
		diceSixteen.style.border = '6px solid blue';
	}
	if(diceLast == '5'){
		diceSeventeen.style.border = '6px solid blue';
	}
	if(diceLast == '6'){
		diceEightneen.style.border = '6px solid blue';
	}

	var sum = dice1 + dice2 + diceLast;

	var totalNumber3 = document.getElementById('totalNumber3');

	totalNumber3.innerText =  'Three Dice: '+sum;

	var spanTotalNumber1 = document.getElementById('spanTotalNumber1');
	spanTotalNumber1.innerText = '';
	var spanTotalNumber2 = document.getElementById('spanTotalNumber2');
	spanTotalNumber2.innerText = '';
}