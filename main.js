var drank = "niks";
var fris = 0;
var bier = 0;
var wijn = 0;
var niks = 0;
var prijs = 0;
var aantal = 0;
var snacks = 0;

//start de bestelling.
function start() {
	
//berekent de totaal prijs en laat het zien.
function _prijs() {
	prijs = Number(fris) * 2 + Number(bier) * 3 + Number(wijn) * 3.5 + Number(snacks) * (Number(aantal) * 0.5 );
	alert("Uw totaalprijs is \u20ac" +prijs+"");
	drank = "niks"
}

//bestelt drank
function _fris() {
	fris = prompt("Hoeveel " +drank+ " had u gewilt?");
	drank = "niks";
}

function _bier() {
	bier = prompt("Hoeveel " +drank+ " had u gewilt?");
	drank = "niks";
}

function _wijn() {
	wijn = prompt("Hoeveel " +drank+ " had u gewilt?");
	drank = "niks";
}

//laat de klant bestellen
while(drank != "stop"){
	drank = prompt("Welke bestelling wilt u toevoegen? Fris voor \u20ac2,-, bier voor \u20ac3,-, wijn voor \u20ac3,50 of een lekkere snack?");
	if (drank == "fris") {
		_fris();
	}

	else if (drank == "bier") {
		_bier();
	}
	
	else if (drank == "wijn") {
		_wijn();
	}

//laat de klant bitterballen bestellen.
	else if (drank == "snack") {
		aantal = prompt("Hoeveel bitterballen wilt u toevoegen (8 voor \u20ac4,- of 16 voor \u20ac8,-)?");
		if (aantal == 8 || aantal == 16) {
			snacks = prompt("Hoeveel bitterbalschalen van " +aantal+ " stuks wilt u bestellen?");
		}
		//als de klant iets invuld wat niet kan, komt deze error
		else{ 
		alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
		}
		drank = "niks";
	}

	//laat je de prijs zien
	else if (drank == "stop") {
		_prijs();
	}

	//error als de klant dom bezig is
	else if (drank != "niks" || "stop"){
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		drank = "niks";
	}
}
}