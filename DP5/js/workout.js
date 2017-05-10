function ready_func() {
	setup_progress();
	set_click_event();
}

function setup_progress() {
	// set the progress ratio which is in firebase
	$(".progress-bar").css('width', 12/25 * 100 + '%')
}

function setup_workout_info() {
	// set value in workout-info
}

function done() {
	// success one set of exercise and
	// invoke timer function
	console.log("done!")
}

function timer(breaktime) {
	// if the time becomes 00:00,
	// change status from time-on to time-over
	console.log("timer started...")
	var min = Math.floor(breaktime / 60)
	var sec = breaktime % 60

	$('.time-on')

	if (min == 0 && sec == 0) {
		clearInterval(timerID)
	}
}

function toggle_video() {
	// toggle youtube frame
	$(".workout_video").slideToggle("slow")
	$("#show_video").toggle()
	$("#hide_video").toggle()
}

function set_click_event() {
	$('#show_video, #hide_video').on('click', toggle_video)
	$('.done').click(function() {
		done()
		var breaktime = 60;
		var timerID = setInterval(timer(breaktime), 1000)
	})
}

function get_from_firebase(user_info, depth, data_form) {
	// get data that have some depth from firebase
}

$(document).ready(ready_func)
console.log("asdf")