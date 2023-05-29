class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		for (let i = 0; i < this.alarmCollection.length; i += 1) {
			if (time === this.alarmCollection[i].time) {
				console.warn('Уже присутствует звонок на это же время');
			}
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(signal => signal.time !== time);
	}

	getCurrentFormattedTime() {
		let currentHour = new Date().getHours();
		let currentMinute = new Date().getMinutes();
		currentHour = String(currentHour);
		currentMinute = String(currentMinute);

		if (currentHour.length < 2) {
			currentHour = '0' + currentHour;
		}

		if (currentMinute.length < 2) {
			currentMinute = '0' + currentMinute;
		}

		let currentTime = currentHour + ':' + currentMinute;
		return currentTime;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		const newInterval = setInterval(() => {
			let currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(elem => {
				if (elem.time === currentTime && elem.canCall === true) {
					elem.canCall = false;
					elem.callback();
				}
			}, 1000);
		})

		this.intervalId = newInterval;
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => item.canCall = true);
	}

	clearAlarms() {
		this.stop;
		this.alarmCollection = [];
	}
}