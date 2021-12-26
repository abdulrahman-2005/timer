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



function openMessage(sender, direction) {
	let messageEl = document.getElementById(sender);
	messageEl.classList.add("open");
	messageEl.innerHTML = `
    <p>
        <img src="dodo.jpg" alt="" class="${direction}"/>
        ${messages[sender]}
    </p>
    <button class="inner" style="float: ${direction}"onclick="playSound(${sender})">🔊</button>`;
}


function playSound(sender){
    audio.pause()
    let audio = new Audio(`audio/${sender}.mp3`);
    audio.play();
}