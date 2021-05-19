const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

//create arrays for day and months
const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light Mode';
	}
});

function setTime() {
	const time = new Date();
	console.log(time);
	const month = time.getMonth();
	console.log('this is the month', month);
	const day = time.getDay();
	console.log('this is the day', day);
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	console.log('this is the hours', hoursForClock);
	const minutes = time.getMinutes();
	console.log('these are the minutes', minutes);
	const seconds = time.getSeconds();
	console.log('these are the seconds', seconds);
	const ampm = hours >= 12 ? 'PM' : 'AM';

	//Rotation
	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

//Map array of number
const scale = (num, in_min, in_max, out_min, out_max) => {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
setTime();
setInterval(setTime, 1000);
