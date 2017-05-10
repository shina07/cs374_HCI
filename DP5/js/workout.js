function ready_func() {
	setup_progress();
	setup_workout();
	set_click_event();
}

function setup_progress() {
	// set the progress ratio which is in firebase
	$(".progress-bar").css('width', 12/25 * 100 + '%')
	$(".progress_text").html(
		"TOTAL PROGRESS : <span>"+12+" / "+25+"</span>")
}

function setup_workout() {
	// name, video, set count, property
	$('.workout_name').prepend('<span>Barbell Bench Press</span>');
	$('.workout_video iframe').attr("src", "https://www.youtube.com/embed/L5U5l3eFfnQ")
	$('.workout_set span').text(1+" / "+6)
	var length = 2;
	for (var i=0; i < length; i++) {
		$('.workout_edit').append(
			`<div class="workout_edit_wrap">
				<div class="workout_property">`
					+`Weight`+
				`</div>
				<div class="btn-group" rold="group">
					<button type="button" class="btn btn-info count_down"><span class="glyphicon glyphicon-minus"></span></button>
					<button type="button" class="btn btn-default" disabled><b>10</b></button>
					<button type="button" class="btn btn-info count_up"><span class="glyphicon glyphicon-plus"></span></button>
				</div>
				<div class="workout_unit">`
					+`kg`+
				`</div>
			</div>`)
	}
}

function timer() {
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

function change_workout_val(flag, this_) {
	// flag = 1  : count_up
	// flag = -1 : count_down
	var cur = parseInt($(this_).parent().find('.btn-default').text())
	cur = flag == 1 ? cur+1 : cur-1;
	cur = cur < 0 ? 0 : cur;
	$(this_).parent().find('.btn-default').html("<b>" + cur + "</b>")
}

function set_click_event() {
	$('#show_video, #hide_video, .glyphicon-play-circle').on('click', toggle_video)

	$('.done').click(function() {
		timerID = setInterval("timer()", 1000)
	})

	$('#back').click(function() {
		clearInterval(timerID)
		current_time = 0
		setTimeout(function() {$('#timer').text("00 : 00")}, 300)
	})

	$('#next').click(function() {
		clearInterval(timerID)
		current_time = 0
		setTimeout(function() {$('#timer').text("00 : 00")}, 300)
		location.reload()
	})

	$('.count_up').click(function(e) {
		change_workout_val(1, this)
	})

	$('.count_down').click(function(e) {
		change_workout_val(-1, this)
	})
}

function get_from_firebase(user_id, depth, data_form) {
	// get data that have some depth from firebase
}

var timerID = -1
var current_time = 0

$(document).ready(ready_func)