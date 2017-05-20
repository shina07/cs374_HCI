$('#menu_btn').click(function() {
	$('#header_menu').toggle(100)
});

$('.load_btn').click(function() {
	$('#header_menu').toggle(100)
});

var test = {"bodypart" : "chest", "name" : "Barbell Bench Press", "sets" : {"set_1" : {"value" : ["10", "50"], "original_value" : ["10", "50"], "done" : "True"}, "set_2" : {"value" : ["10", "50"], "original_value" : ["10", "50"], "done" : "False"},}};
var test2 = {"bodypart" : "chest", "name" : "Dumbbell Bench Press", "sets" : {"set_1" : {"value" : ["10", "50"], "original_value" : ["10", "40"], "done" : "True"}, "set_2" : {"value" : ["10", "50"], "original_value" : ["10", "50"], "done" : "False"},}};

var plansWorkout = new Array()
var plansSet = new Array()
var indexCnt = 1;

var link_userId = -1;

$(document).ready(function() {
	var link_userId = getUrlParameter('userId');

	read_plans();

	$('a').each(function() {
		var link = $(this).attr('href')
		link += ('?userId=' + link_userId)
		$(this).attr('href', link)
	});
});

function read_plans() {
	var param = get_url_params ();
	var userid = getUrlParameter('userId');
	var d = new Date();
	var today = d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate();

	var planRef = database.ref("PLANS/" + userid + "/" + today)
	planRef.once('value').then(function(data) {
		var plans = data.val()
		if (plans == null)
			$('.no_plans').text('There is no plans today.')
		for (var key in plans) {
			if (key == "Progress_cnt") {
				continue;
			}
			read_plans2(userid, today, key)
		}
	})
}

function read_plans2(userid, today, i) {
	var count = 0;
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
					//"original_value" : JSON.parse(plans3.original_value),
					"done" : plans3.done
				}
				sets["set_" + (++count)] = json
				plansSet.push({
					name: plans2.workout_name,
					changed: plans3.changed,
					done: plans3.done,
					//original_value: plans3.original_value,
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

var index = 0

function add_exercise (index, args, userid, today, ix) {
	var main_wrap_id = "#main_plan";

	var name = args["name"];
	var sets = args["sets"];

	var id = "plan_" + index.toString();

	jQuery('<div/>', {
		class : "workout_list_name",
		id : id,
	}).appendTo($(main_wrap_id));

	$('#' + id).append('<span>' + name + '</span>');

	var keys = Object.keys(sets);
	for (var i = 0; i < keys.length; i++) {
		add_set (main_wrap_id, name, sets[keys[i]], userid, today, ix, i);
	}
}

function add_set (main_id, exercise_name, args, userid, today, ix, iy) {
	var tags = data[exercise_name];
	var values = args["value"];
	var original = args["original_value"];
	var done = args["done"];

	var id = "set_" + (index++).toString();

	var class_name = "";
	var same = args["done"];//values.toString() === original.toString();
	if (same && done === "False")
		class_name = "workout_list_default";
	else if (same && done === "True")
		class_name = "workout_list_success";
	else if (!same && done === "True")
		class_name = "workout_list_success";
	else if (!same && done === "False")
		class_name = "workout_list_failed";
	else
		class_name = "workout_list_default";

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

	$('#' + id).append('<span>' + span + '</span>');
	//$('#' + id).on('click',function() {
	//	var link = document.location.toString().split("main.html")[0] + 'pages/workout.html'
	//	link += '?userId='+userid+'&date='+today+'&planId='+ix+'&setId='+iy+'&total='+index
	//	document.location.href = link
	//});

	$('.no_plans').css('display', 'none');
}

// http://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};