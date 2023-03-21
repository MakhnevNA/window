function timer(deadline) {
	

	function timeToDeadline() {
		let days, hours, minutes, seconds;
		const time = Date.parse(deadline) - Date.parse(new Date());


		if (time <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(time / (1000 * 60 * 60 * 24)),
			hours = Math.floor((time / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((time / (1000 * 60)) % 60),
			seconds = Math.floor((time / 1000) % 60);
		}

		
		
		return {
			'total': time,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}



	
	function setTimer(deadline) {
		const days = document.querySelector('#days'),
			hours = document.querySelector('#hours'),
			minutes = document.querySelector('#minutes'),
			seconds = document.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);
		
		updateClock()
		
		function updateClock() {
			
			const t = timeToDeadline(deadline);

			function getZero(num) {
				if (num >= 0 && num < 10) {
					return `0${num} `;
				} else {
					return num;
				}
			}
			
			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);


			if (t.total <= 0) {
				clearInterval(timeInterval);
			}

		}
		
	}

	setTimer(deadline);

	



	

	




}

export default timer;