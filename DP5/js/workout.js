function ready_func() {
	url = get_url_params()
	parsing_url(url)
	get_from_firebase(user_id, date, plan_id, set_num);
}

function setup_progress() {
	// set the progress ratio which is in firebase
	$(".progress-bar").css('width', progress_cnt/total * 100 + '%')
	$(".progress_text").html(
		"TOTAL PROGRESS : <span>"+progress_cnt+" / "+total+"</span>")
}

function setup_workout() {
	// name, video, set count, property
	$('.workout_name').prepend('<span>'+workout_name+'</span>');
	$('.workout_video iframe').attr("src", "https://www.youtube.com/embed/L5U5l3eFfnQ")
	$('.workout_set span').text(set_num+" / "+plans.setNum)
	
	for (var i=0; i < set_info.length; i++) {
		$('.workout_edit').append(
			`<div class="workout_edit_wrap">
				<div class="workout_property">`
					+`Weight`+
				`</div>
				<div class="btn-group" rold="group">
					<button type="button" class="btn btn-info count_down"><span class="glyphicon glyphicon-minus"></span></button>
					<button type="button" class="btn btn-default" disabled><b>`+set_info[i]+`</b></button>
					<button type="button" class="btn btn-info count_up"><span class="glyphicon glyphicon-plus"></span></button>
				</div>
				<div class="workout_unit">`
					+`kg`+
				`</div>
			</div>`)
	}

	if (set.done) {
		$('.workout_done').css('display', "none");
		$('.workout_dummy').css('display', "none");
	}
}

function done() {
	var changed_list = []
	var changed = false
	var ref = database.ref("PLANS/"+user_id+"/"+date+"/"+plan_id+"/sets/set"+set_num)
	var elemList = $('.btn-default')

	$('.btn-default').each(function(index) {
		changed_list[index] = $(this).text()
	})

	for (var i=0; i<elemList.length; i++) {
		if (changed_list[i] != set_info[i]){
			changed = true
			break
		}
	}

	ref.update({
		done: true,
		changed: changed,
		value: "[" + changed_list[0] + "," + changed_list[1] + "]"
	})

	ref = database.ref("PLANS/"+user_id+"/"+date)
	ref.update({
		Progress_cnt: progress_cnt+1
	})

	var location = document.location.href.split("?")[0]
	if (plans.setNum == set_num){
		plan_id += 1
		set_num = 0
	}
	if (total-1 != progress_cnt) {
		location += "?userId="+user_id+"&date="+date+"&planId="+plan_id+"&setId="+set_num+"&total="+total
		document.location.href = location	
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
		done()
	})

	$('.count_up').click(function(e) {
		change_workout_val(1, this)
	})

	$('.count_down').click(function(e) {
		change_workout_val(-1, this)
	})
}

function parsing_url(url) {
	user_id = parseInt(url.userId)
	date = url.date
	plan_id = parseInt(url.planId)
	set_num = parseInt(url.setId)+1
	total = parseInt(url.total)
}

function get_from_firebase(user_id, date, plan_id, set_num) {
	// get data that have some depth from firebase
	var ref = database.ref("PLANS/"+user_id+"/"+date)
	ref.once("value", function(data) {
		progress_cnt = data.val().Progress_cnt
		plans = data.val()[plan_id]
		workout_name = plans.workout_name
		set = plans["sets"]["set"+set_num]
		set_info = JSON.parse(set.value)

		setup_progress();
		setup_workout();
		set_click_event();
	})
}

var timerID = -1
var current_time = 0

var url = {}
var user_id = -1
var date = ""
var plan_id = -1
var set_num = -1
var totla = -1
var progress_cnt = -1

var plans = {}
var set = {}
var set_info = []
var workout_name = ""


$(document).ready(ready_func)