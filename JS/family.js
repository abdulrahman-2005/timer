const messages = {
	dodo: "هلاوالله يابو n  wef qw efqw efqwef qwefqwefrwq fq wefret erth er ther tي، هع هع هع هع هاااو",
	body: "اهلا ومرحبا بك يا حاج عازمي، شنو أخيارك حلو",
	jehan: "",
	fatema: "",
	mozo: "",
	soso: "",
	osha: "",
	hagar: "",
};

let locked = true;

tryToPass()
function tryToPass() {
	let getPassword = prompt("الرقم السري ''دوس ok لو مش عارف''");
	if (getPassword.valueOf() === "aaa") {
		locked = false;
	}
}


if (hours < 12) {
    alert("مبروك 42 ةعقبال 100 سنة")
    alert("مبروك 42 ةعقبال 100 سنة")
}


function openMessage(sender, direction) {
	let messageEl = document.getElementById(sender);
	if (locked === false) {
		messageEl.classList.add("open");
		messageEl.innerHTML = `
    <p>
        <img src="images/${sender}.jpg" alt="" class="${direction}"/>
        ${messages[sender]}
    </p>
    <button class="inner" style="float: ${direction} top"onclick="playSound(${sender})">رسالة صوتية 🔊🔊</button>`;
	} else {
		alert(`هاها، لسة فاضل ${days} ايام`);
	}
}

function playSound(sender) {
	audio.pause();
	let audio = new Audio(`audio/${sender}.mp3`);
	audio.play();
}
