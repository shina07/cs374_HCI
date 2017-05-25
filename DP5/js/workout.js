function ready_func() {
	url = get_url_params()

	if (url == undefined)
	{
		$('.param_err').css("display", "block")
		$('.loading').css("display", "none")
		return
	}

	if (url.total == 0)
	{
		$('.no_plan').css("display", "block")
		$('.loading').css("display", "none")
	}
	else if (Object.keys(url).length != 5)
	{
		$('.param_err').css("display", "block")
		$('.loading').css("display", "none")
	}
	else
	{
		parsing_url(url)
		get_from_firebase(user_id, date, plan_id, set_num)
	}
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
					+data[workout_name][i]+
				`</div>
				<div class="btn-group" rold="group">
					<button type="button" class="btn btn-info count_down"><span class="glyphicon glyphicon-minus"></span></button>
					<button type="button" class="btn btn-default" disabled><b>`+set_info[i]+`</b></button>
					<button type="button" class="btn btn-info count_up"><span class="glyphicon glyphicon-plus"></span></button>
				</div>
				<div class="workout_unit">`
					+unit[data[workout_name][i]]+
				`</div>
			</div>`)
	}

	if (set.done) {
		$('.workout_done').css('display', "none");
		$('.workout_dummy').css('display', "none");
		$('.count_down').remove();
		$('.count_up').remove();
	}
}

function done() {
	var changed_list = []
	var ref = database.ref("PLANS/"+user_id+"/"+date+"/"+plan_id+"/sets/set"+set_num)

	$('.btn-default').each(function(index) {
		changed_list[index] = $(this).text()
	})

	ref.update({
		done: true,
		value: "[" + changed_list[0] + "," + changed_list[1] + "]"
	})

	ref = database.ref("PLANS/"+user_id+"/"+date)
	ref.update({
		Progress_cnt: progress_cnt+1
	})
}

function go_next() {
	var location = document.location.href.split("?")[0]
	if (plans.setNum == set_num){
		plan_id += 1
		set_num = 0
	}
	location += "?userId="+user_id+"&date="+date+"&planId="+plan_id+"&setId="+set_num+"&total="+total
	document.location.href = location
}

function timer() {
	current_time += 1
	var min = Math.floor(current_time / 60)
	min = min < 10 ? "0" + min : min + ""
	var sec = current_time % 60
	sec = sec < 10 ? "0" + sec : sec + ""

	if (min >= 1 && sec > 30)
	{
		$('#timer').css('color', 'orange')
	}
	else if (min >= 2)
	{
		$('#timer').css('color', 'red')
	}

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
		if (set_num != plans.setNum)
		{
			timerID = setInterval("timer()", 1000)
		}
		else if (progress_cnt != total-1)
		{
			$('#done_wrap').css("display", "block")
			$('#rest_wrap').css("display", "none")
			$('#allDone').css("display", "none")
			$('#next').css("display", "none")
			$('#gotoList').css("display", "block")
			$('#addSet').css("display", "block")
		}
		else
		{
			$('#done_wrap').css("display", "block")
			$('#rest_wrap').css("display", "none")
			$('#setDone').css("display", "none")
			$('#next').css("display", "none")
			$('#gotoList').css("display", "block")
			$('#addSet').css("display", "block")			
		}
		
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
		go_next()
	})

	$('#gotoList').click(function() {
		var location = document.location.href
		var index = location.lastIndexOf("pages")
		done()
		if (total-1 == progress_cnt)
		{
			var ref = database.ref("PLANS/"+user_id+"/"+date)
			ref.update({completed : true})
		}
		location = location.substr(0,index) + "main.html?userId=" + user_id
		document.location.href = location
	})

	$('#addSet').click(function() {
		var ref = database.ref("PLANS/"+user_id+"/"+date+"/"+plan_id+"/sets")
		var param_list = []

		$('.btn-default').each(function(index) {
			param_list[index] = $(this).text()
		})

		ref.child("set"+(set_num+1).toString()).set({
			done: false,
			value: "["+param_list[0]+","+param_list[1]+"]",
		})
		plans.setNum += 1
		ref = database.ref("PLANS/"+user_id+"/"+date+"/"+plan_id)
		ref.update({
			setNum : plans.setNum
		})
		total += 1
		ref = database.ref("PLANS/"+user_id+"/"+date)
		ref.update({
			Total_cnt: total
		})

		$('#done_wrap').css("display", "none")
		$('#rest_wrap').css("display", "block")
		$('#addSet').css("display", "none")
		$('#gotoList').css("display", "none")
		$('#next').css("display", "block")

		timerID = setInterval("timer()", 1000)
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

		$('.loading').css("display", "none")
		$('.workout_one').css("display", "block")
	})
}

var timerID = -1
var current_time = 0

var url = {}
var user_id = -1
var date = ""
var plan_id = -1
var set_num = -1
var total = -1
var progress_cnt = -1

var plans = {}
var set = {}
var set_info = []
var workout_name = ""


$(document).ready(ready_func)