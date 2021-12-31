const messages = {
	dodo: "كل سنة❤️❤️ وانت طيب يا بابا",
	body: "❤️❤️كل سنة وانت طيب يا دادي، وربنا يخليك لينا❤️❤️",
	jehan: "مش عارفة، كل عام وانت طيب❤️❤️",
	fatema: "❤️كل سنة وانت طيب يا بابي",
	mozo: "باباااا، بحبك، ههه❤️❤️",
	soso: "❤️❤️بحيك يا بابا موت قد كل الدنيا❤️❤️",
	osha: "كل عام ❤️ وانت بخير ❤️ يا ابتي",
	hagar: "هخ خ خ خ خ، ايه يا بابا❤️",
	khalid: "رسالة خالد"
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

function openMessage(sender, direction) {
	let messageEl = document.getElementById(sender);
	if (locked === false) {
		messageEl.classList.add("open");
		messageEl.innerHTML = `
    <p>
        <img src="images/${sender}.jpg" alt="" class="${direction}"/>
        ${messages[sender]}
    </p>
    <button class="inner" style="float: ${direction} top"onclick="playSound('${sender}')">رسالة صوتية 🔊🔊</button>`;
	} else {
		alert(`هاها، لسة فاضل ${days} ايام`);
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
