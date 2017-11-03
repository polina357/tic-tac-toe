var tracker = {
	content: [], // массив с содержимым полей
	count: 0 // счётчик ходов
};

function computer() {
	var el,
		i;

	do {
		i = getRandomInt();
		el = document.querySelector("#div" + i);
	} while (el.hasChildNodes()); // получает случайное число, пока div не будет пуст
	el.insertAdjacentHTML("afterBegin", "<span>X</span>");
	tracker.content[i] = "X";
	tracker.count++;
	checkTheWinner();
	document.getElementById("butt").disabled = true;
}

function getRandomInt() {
	return Math.floor(Math.random() * 9) + 1;
}

function user(event) {
	var el = event.target,
		i,
		check = true; // проверяет ходит ли компьютер

	if (el.hasChildNodes()) {
		alert("Ячейка занята");
	} else {
		el.insertAdjacentHTML("afterBegin", "<span>O</span>");
		i = Number(el.getAttribute("id").slice(-1));
		tracker.content[i] = "O";
		tracker.count++;
		check = checkTheWinner();
		if (check) {
			computer();
		}
	}
}

function checkTheWinner() {
	if (tracker.content[1] === tracker.content[2] && tracker.content[2] === tracker.content[3] && tracker.content[1] !== undefined) {
		alert(tracker.content[1] + " wins!");
		return false;
	}
	if (tracker.content[4] === tracker.content[5] && tracker.content[5] === tracker.content[6] && tracker.content[4] !== undefined) {
		alert(tracker.content[4] + " wins!");
		return false;
	}
	if (tracker.content[7] === tracker.content[8] && tracker.content[8] === tracker.content[9] && tracker.content[7] !== undefined) {
		alert(tracker.content[7] + " wins!");
		return false;
	}
	if (tracker.content[1] === tracker.content[5] && tracker.content[5] === tracker.content[9] && tracker.content[1] !== undefined) {
		alert(tracker.content[1] + " wins!");
		return false;
	}
	if (tracker.content[3] === tracker.content[5] && tracker.content[5] === tracker.content[7] && tracker.content[3] !== undefined) {
		alert(tracker.content[3] + " wins!");
		return false;
	}
	if (tracker.count === 9) {
		alert("Draw!");
	} // add a function which shows a winner
}