let wynik = 0
let czas = 30
let wyrazenie = ["^[0-9]$", "^[0-9]\-[3-7]\=[0-9]", "^wyraz$", "^[1-2]$", "[3-9]{4}\-[1-9]\=[4-7]{2}", "^regex$", "^szczebrzeszyn$", "^[1-6]\-[5-7]\=[2-3]"]
const guzik = () => {
	if(document.getElementById("przycisk").value == "Start") {;
		document.getElementById("przycisk").value = "Zatwierdź";
		document.getElementById("wzor").innerText = wyrazenie[wynik];
		let interval = setInterval(() => {
			czas -= 1;
			document.getElementById("stoper").innerText = czas + "s";
			if(czas == 0) {
				clearInterval(interval);
				document.getElementById("stoper").innerHTML = `<h1>Koniec gry<br>Wynik: ${wynik}</h1>`;
				document.getElementById("przycisk").disabled = true;
				document.getElementById("wzor").style.display = "#ffffff";
				document.getElementById("rozwiazanie").style.background = "#ffffff";
				document.getElementById("rozwiazanie").value = "";
			}
		}, 1000)
	}else if(document.getElementById("przycisk").value == "next") {
		document.getElementById("przycisk").value = "wyślij";
		document.getElementById("rozwiazanie").style.background = "#ffffff";
		document.getElementById("rozwiazanie").value = "";
		document.getElementById("wzor").innerText = wyrazenie[wynik];
	}else {
		if(RegExp(document.getElementById("wzor").innerText).test(document.getElementById("rozwiazanie").value)) {
			document.getElementById("rozwiazanie").style.background = "#00cd00";
			wynik += 1;
			document.getElementById("przycisk").value = "next";
		}else {
			document.getElementById("rozwiazanie").style.background = "#e30003";
		}
	}
}