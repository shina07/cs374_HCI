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
}

function timer() {
	// if the time becomes 00:00,
	// change status from time-on to time-over
	console.log(timerID)
	
	current_time += 1
	var min = Math.floor(current_time / 60)
	min = min < 10 ? "0" + min : min + ""
	var sec = current_time % 60
	sec = sec < 10 ? "0" + sec : sec + ""

	$('#timer').text(min+" : "+sec)
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
		timerID = setInterval("timer()", 1000)
	})
	$('#back').click(function() {
		clearInterval(timerID)
		current_time = 0;
		setTimeout(function() {$('#timer').text("00 : 00")}, 300)
	})
}

function get_from_firebase(user_info, depth, data_form) {
	// get data that have some depth from firebase
}

var timerID = -1
var current_time = 0;
$(document).ready(ready_func)
console.log("asdf")