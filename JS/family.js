const messages = {
	dodo: "كل سنة❤️❤️ وانت طيب يا بابا",
	body: "❤️❤️كل سنة وانت طيب يا دادي، وربنا يخليك لينا❤️❤️",
	jehan: "مش عارفة، كل عام وانت طيب❤️❤️",
	fatema: "❤️كل سنة وانت طيب يا بابي",
	mozo: "باباااا، بحبك، ههه❤️❤️",
	soso: "❤️❤️بحيك يا بابا موت قد كل الدنيا❤️❤️",
	osha: "كل عام ❤️ وانت بخير ❤️ يا ابتي",
	hagar: "هخ خ خ خ خ، ايه يا بابا😆",
	khalid: "كل سنة وانت طيب يا بابا",
	donia: "كل سنة وانت طيب يا عمو🥰",
};

let locked = true;

tryToPass();
function tryToPass() {
	let getPassword = prompt("الرقم السري ''دوس ok لو مش عارف''");
	if (getPassword.valueOf() === "zemo1180") {
		locked = false;
	}
}

if (hours < 12) {
	alert("مبروك 42 ةعقبال 100 سنة");
	alert("مبروك 42 ةعقبال 100 سنة");
}

let nonVoiced = ["mozo", "soso", "hagar", "khalid"];
function included(name) {
	for (i in nonVoiced) {
		if (nonVoiced.includes(name)) {
			return false;
		} else {
			return true;
		}
	}
}
function openMessage(sender, direction) {
	let messageEl = document.getElementById(sender);
	let voiceMessage = `<button class="inner" style="float: ${direction} top"onclick="playSound('${sender}')">رسالة صوتية 🔊🔊</button>`;
	if (locked === false) {
		messageEl.classList.add("open");
		messageEl.innerHTML = `
    <p>
        <img src="images/${sender}.jpg" alt="" class="${direction}"/>
        ${messages[sender]}
    </p>
    ${included(sender) ? voiceMessage : ""}`;
	}
}

let playing = false;
let audio;
function playSound(send) {
	if (playing === true) {
		audio.pause();
	} else {
		playing = true;
	}
	audio = new Audio(`../audio/${send}.mp3`);
	audio.play();
}
