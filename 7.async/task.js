class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		
		if (this.alarmCollection.some(signal => signal.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback,
			time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(signal => signal.time !== time);
	}

	getCurrentFormattedTime() {
		let currentTime = new Date().toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
		return currentTime;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		const newInterval = setInterval(() => {
			let currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(elem => {
				if (elem.time === currentTime && elem.canCall) {
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