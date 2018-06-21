// funkcja rozpoczynająca grę
function startGame() {
	//wyczyszczenie pól w tabeli
	for(var i=1; i<=9;i=i+1){
		clearBox(i);
	}
	//deklaracja który gracz zaczyna
	document.turn = "X";
	if (Math.random()< 0.5){
		document.turn = "O";
	}
	//przypisanie null do zwycięzcy + komunikat który gracz zaczyna grę
	document.winner = null;
	setMessage("Rozpoczyna gracz " + document.turn+"!")
}
//komunikaty nad planszą
function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

/*funkcja sprawdza czy mamy zwycięzcę i jeżeli jest to blokuje 
dalsze ruchy wpisuje też O lub X do pustych pól
sprawdza czy pole jest pełne i blokuje wpisanie tam innego znaku
wraz z wyświetleniem komunikatu
*/
function nextMove(square) {
	if (document.winner !=null){
		setMessage(document.winner + " wygrał już grę!");
	}else if (square.innerText==""){
		square.innerText = document.turn;
		switchTurn();
	}else {
		setMessage("To pole jest już używane!!!");
	}
}

/*funkcja wyświetla komunikat ze zwycięzcą i blokuje dalsze ruchy
zmienia też tury gracza oraz wyświetla odpowiednie komunikaty
*/
function switchTurn () {
	if (checkForWinner(document.turn)){
		setMessage("Gratulacje, " + document.turn + " !		Wygrałeś!!");
		document.winner = document.turn;
	}else if(document.turn =="X"){
		document.turn = "O";
		setMessage("Tura gracza " + document.turn +"!");
	}else {
		document.turn = "X";
		setMessage("Tura gracza " + document.turn +"!");
	}
}

//funkcja definiuje kombinacje zwycięstwa rozgtywki
function checkForWinner(move){
	var result = false;
	if (checkRow(1,2,3, move) ||
		checkRow(4,5,6, move) ||
		checkRow(7,8,9, move) ||
		checkRow(1,4,7, move) ||
		checkRow(2,5,8, move) ||
		checkRow(3,6,9, move) ||
		checkRow(1,5,9, move) ||
		checkRow(3,5,7, move)) {
			result = true;
	}
	return result;
}

//funkcja sprawdza czy występują jednakowe znaki jako kombinacja 3 pól
function checkRow(a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
		result=true;
	}
	return result;
}

//funkcja pobiera id pól w tabeli
function getBox(number){
	return document.getElementById("s"+number).innerText;
}

//funkcja wypełnia pole o danym id pustą wartością 
function clearBox(number){
	document.getElementById("s"+number).innerText = "";
}