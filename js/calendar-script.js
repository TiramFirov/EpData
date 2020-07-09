const date = new Date();

const renderCalendar = () => {
	const monthDays = document.querySelector('.days');

	const firstDayIndexWith0EqualSunday = date.getDay();

	let firstDayIndex;


	if (firstDayIndexWith0EqualSunday == 0) {
		firstDayIndex = 6;
	} else {
		firstDayIndex = firstDayIndexWith0EqualSunday - 1;
	}


	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	const nextDays = 7 - lastDayIndex - 1;

	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];

	document.querySelector('.date h4').innerHTML = months[date.getMonth()];
	document.querySelector('.date p').innerHTML = date.toDateString();

	let days = "";

	for (let x = firstDayIndex - 1; x > 0; x--) {
		days += `<div class="prev-date border">${prevLastDay - x + 1}</div>`
	}

	for (let i = 1; i <= lastDay; i++) {
		if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
			days += `<div class="today border">${i}</div>`
		} else {
			days += `<div class="border">${i}</div>`;
		}
		
	}

	for (let j  = 1; j <= nextDays + 1; j++) {
		days += `<div class="next-days border">${j}</div>`;
		monthDays.innerHTML = days;
	}
}



document.querySelector('.prev').addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();