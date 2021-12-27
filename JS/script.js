const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 jan 2022";

let days;
let hours;
let mins;
let seconds;

function countdown() {
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;

	days = Math.floor(totalSeconds / 3600 / 24);
	hours = Math.floor(totalSeconds / 3600) % 24;
	mins = Math.floor(totalSeconds / 60) % 60;
	seconds = Math.floor(totalSeconds) % 60;

	daysEl.textContent = formatTime(days);
	hoursEl.textContent = formatTime(hours);
	minsEl.textContent = formatTime(mins);
	secondsEl.textContent = formatTime(seconds);
	if (seconds < 0) {
		daysEl.textContent = "00"
		hoursEl.textContent =  "00"
		minsEl.textContent = "00"
		secondsEl.textContent =  "00"
	}
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
