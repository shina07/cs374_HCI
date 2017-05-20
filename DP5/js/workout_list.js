var plansWorkout = new Array()
var plansSet = new Array()
var indexCnt = 1;

var link_userId, link_date, link_planId, link_setId, link_total
var undefinedLink = false
var firstDone = true

$(document).ready(function() {
	link_userId = getUrlParameter('userId')
	link_date = getUrlParameter('date')
	link_planId = getUrlParameter('planId')
	link_setId = getUrlParameter('setId')
	link_total = getUrlParameter('total')

	if (link_date == undefined) {
		var d = new Date();
		var today = d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate();
		link_date = today;
	}
	if (link_planId == undefined || link_setId == undefined || link_total == undefined) {
		undefinedLink = true
	}
	
	read_plans();
});

var total_cnt = 0

function read_plans() {
	var param = get_url_params ();
	var userid = getUrlParameter('userId');
	var d = new Date();
	var today = d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate();

	var planRef = database.ref("PLANS/" + userid + "/" + today)
	planRef.once('value').then(function(data) {
		var plans = data.val()
		if (plans == null)
			$(".no_plans").text("There is no plans today.")
		for (var key in plans) {
			if (key == "Progress_cnt")
				continue;
			else if (key == "Total_cnt")
				total_cnt = plans["Total_cnt"]
			read_plans2(userid, today, key)
		}
	})
}

function read_plans2(userid, today, i) {
	var count = 0
	var planRef2 = database.ref("PLANS/" + userid + "/" + today + "/" + i)
	planRef2.once('value').then(function(data) {
		var plans2 = data.val()
		plansWorkout.push(plans2.workout_name)
		for (var j = 0; j < plans2.setNum; j++) {
			var sets = {}
			var planRef3 = database.ref("PLANS/" + userid + "/" + today + "/" + i + "/sets/set" + (j+1))
			planRef3.once('value').then(function(data) {
				var plans3 = data.val()
				var json = {
					"value" : JSON.parse(plans3.value),
					"done" : plans3.done
				}
				sets["set_" + (++count)] = json
				plansSet.push({
					name: plans2.workout_name,
					done: plans3.done,
					value: plans3.value,
					order: j
				})
				if (count == plans2.setNum) {
					var input = {
						"bodypart" : "",
						"name" : plans2.workout_name,
						"sets" : sets
					}
					add_exercise(indexCnt++, input, userid, today, i)
				}
			})
		}
	})
}

function add_exercise (index, args, userid, today, ix, clickable) {
	var main_wrap_id = "#main_plan"

	var name = args["name"]
	var sets = args["sets"]

	var id = "plan_" + index.toString();

	jQuery('<div/>', {
		class : "workout_list_name",
		id : id,
	}).appendTo($(main_wrap_id))

	$('#' + id).append('<span>' + name + '</span>')

	var keys = Object.keys(sets)
	
	for (var i = 0; i < keys.length; i++) {
		add_set (main_wrap_id, name, sets[keys[i]], userid, today, ix, i);
	}
}

var indexSet = 0

function add_set (main_id, exercise_name, args, userid, today, ix, iy) {
	var tags = data[exercise_name]
	var values = args["value"]
	var original = args["original_value"]
	var done = args["done"]

	var id = "set_" + (indexSet++).toString()

	var class_name = ""
	if (done == true)
		class_name = "workout_list_success"
	else
		class_name = "workout_list_default"

	jQuery('<div/>', {
		class : "workout_list_one " + class_name,
		id : id,
	}).appendTo($(main_id));

	var span = "";
	for (var i = 0; i < values.length; i++) {
		if (tags[i] === "reps")
			span += values[i] + " reps";
		else if (tags[i] === "speed")
			span += values[i] + " km/h";
		else if (tags[i] === "time")
			span += values[i] + " min";
		else if (tags[i] === "weight")
			span += values[i] + " kg";

		if (i != args.length)
			span += " "
	}
	$('#' + id).append('<span>' + span + '</span>')

	// click a plan from list
	$('#' + id).on('click',function() {
		var link = document.location.toString().split("main.html")[0] + 'pages/workout.html'
		link += '?userId='+userid+'&date='+today+'&planId='+ix+'&setId='+iy+'&total='+total_cnt
		document.location.href = link
	});

	if (firstDone && done == false) {
		firstDone = false
		if (undefinedLink) {
			link_planId = ix
			link_setId = iy
			link_total = total_cnt
			$('.session').each(function() {
				var link = $(this).attr('href')
				link += ('?userId=' + link_userId + '&date=' + link_date + '&planId=' + link_planId + '&setId=' + link_setId + '&total=' + link_total)
				$(this).attr('href', link)
			});
		}
	}
	
	$('.no_plans').css('display', 'none');
}