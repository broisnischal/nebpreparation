const countDown = () => {
	const dayLeft = document.querySelector('#day');
	const hoursLeft = document.querySelector('#hours');
	const minuteLeft = document.querySelector('#minute');
	const secondLeft = document.querySelector('#second');
	const countDate = new Date('May 30, 2022 00:00:00').getTime();
	const currentTime = new Date().getTime();
	const gap = countDate - currentTime;

	const second = 1 * 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	let days = Math.floor(gap / day);
	if (days <= 9) {
		days = `0${days}`;
	}
	let hours = Math.floor((gap % day) / hour);
	if (hours <= 9) {
		hours = `0${hours}`;
	}
	let minutes = Math.floor((gap % hour) / minute);
	if (minutes <= 9) {
		minutes = `0${minutes}`;
	}
	let seconds = Math.floor((gap % minute) / second);
	if (seconds <= 9) {
		seconds = `0${seconds}`;
	}
	if (dayLeft !== null) {
		dayLeft.innerHTML = days;
		hoursLeft.innerHTML = hours;
		minuteLeft.innerHTML = minutes;
		secondLeft.innerHTML = seconds;
	}
};

setInterval(countDown, 1000);
