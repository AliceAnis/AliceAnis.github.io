"use strict"

function StopWatch(display, displayMilli) {

	var interval = null;
	var lastTime = 0;
	var time = 0;

	this.start = function() {
		
		if (!this.isRunning) {			
			lastTime = Date.now();			
			interval = setInterval(ticker.bind(this), 10);			
			this.isRunning = true;
		}
	}

	this.stop = function() {
		
		if (this.isRunning) {
			clearInterval(interval);
			lastTime = 0;
			this.isRunning = false;
		}
	}

	this.clear = function() {		
		
		clearInterval(interval);
		time = 0;
		renderTime(formatTime(time));
		lastTime = 0;
		this.isRunning = false;

	}

	function ticker() {
		var now = Date.now()
		var delta = now - lastTime;
		time += delta;
		renderTime(formatTime(time));
		lastTime = now;
	}

	function formatTime(timestamp) {
		var time = new Date(timestamp);
		var hours = time.getUTCHours();
    	var minutes = time.getMinutes();
    	var seconds = time.getSeconds();
    	var milliseconds = time.getMilliseconds();
    	
    	if (milliseconds < 10) {
    		milliseconds = '00' + milliseconds
    	} else if (milliseconds < 100) {
    		milliseconds = '0' + milliseconds
    	}

    	if (seconds < 10) {
    		seconds = '0' + seconds;
    	}
    	if (minutes < 10) {
    		minutes = '0' + minutes;
    	}
    	if (hours < 10) {
    		hours = '0' + hours;
    	}

    	return {
    		hours: hours,
    		minutes: minutes,
    		seconds: seconds,
    		milliseconds: milliseconds
    	};
	}

	function renderTime(time) {
		display.innerText = time.hours + ' : ' + time.minutes + ' : ' + time.seconds;
		displayMilli.innerText = time.milliseconds;
	}
}