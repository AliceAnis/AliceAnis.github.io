"use strict"

var btnStartStop = document.getElementById('start');
var btnClear = document.getElementById('clear');
var display = document.getElementById('timer_text');
var displayMilli = document.getElementById('timer_milliseconds');

var stopwatch = new StopWatch(display, displayMilli);

btnStartStop.addEventListener('click', function() {
	if (stopwatch.isRunning) {
		stopwatch.stop();
		this.innerText = 'Start';
	} else {
		stopwatch.start();
		this.innerText = 'Stop';
	}
});

btnClear.addEventListener('click', function() {
	stopwatch.clear();
	btnStartStop.innerText = 'Start';
});