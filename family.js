const messages = {
	dodo: "هلا asd asd fadhf liajshdlf kjhaslkdjf hkljasdhfkljsadhlkf  والله يابوي، هع هع هع هع هاااو",
	body: "",
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
        <img src="${sender}.jpg" alt="" class="${direction}"/>
        ${messages[sender]}
    </p>`;
}
