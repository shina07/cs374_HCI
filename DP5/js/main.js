$('#menu_btn').click(function() {
	$('#header_menu').toggle(100)
});

$('.load_btn').click(function() {
	$('#header_menu').toggle(100)
});

$(document).ready(function() {
	$('#back_btn').click(function() {
		parent.history.back()
		return false
	});
});

function add_plan () {
	var PlanRef = database.ref("PLANS");

	PlanRef.once("value", function(data) {

		var plans = data.val();
		console.log(plans);
	});
}

var test = {"bodypart" : "chest", "name" : "Barbell Bench Press", "sets" : {"set_1" : {"value" : ["10", "50"], "original_value" : ["10", "50"], "done" : "True"}, "set_2" : {"value" : ["10", "50"], "original_value" : ["10", "50"], "done" : "False"},}};
var test2 = {"bodypart" : "chest", "name" : "Dumbbell Bench Press", "sets" : {"set_1" : {"value" : ["10", "50"], "original_value" : ["10", "40"], "done" : "True"}, "set_2" : {"value" : ["10", "50"], "original_value" : ["10", "50"], "done" : "False"},}};

var plansWorkout = new Array()
var plansSet = new Array()
var indexCnt = 1;

read_plans();
//add_exercise (1, test);
//add_exercise (2, test2);
//add_button();

function read_plans() {
	var userid = 1;
	var d = new Date();
	var today = d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate();

	var planRef = database.ref("PLANS/" + userid + "/" + today)
	planRef.once('value').then(function(data) {
		var plans = data.val()
		for (var i = 0; i < plans.length; i++) {
			read_plans2(userid, today, i)
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
					"original_value" : JSON.parse(plans3.original_value),
					"done" : plans3.done
				}
				sets["set_" + (++count)] = json
				plansSet.push({
					name: plans2.workout_name,
					changed: plans3.changed,
					done: plans3.done,
					original_value: plans3.original_value,
					value: plans3.value,
					order: j
				})
				if (count == plans2.setNum) {
					var input = {
						"bodypart" : "",
						"name" : plans2.workout_name,
						"sets" : sets
					}
					console.log(input)
					add_exercise(indexCnt++, input)
				}
			})
		}
	})
}

var index = 0
var test2 = {"bodypart" : "chest", "name" : "Dumbbell Bench Press", "sets" : {"set_1" : {"value" : ["10", "40"], "original_value" : ["10", "50"], "done" : "True"}, "set_2" : {"value" : ["10", "40"], "original_value" : ["10", "50"], "done" : "False"},}};

add_exercise (1, test);
add_exercise (2, test2);

add_plan ();

function add_exercise (index, args) {
	var main_wrap_id = "#main_plan";

	var name = args["name"];
	var sets = args["sets"];

	var id = "plan_" + index.toString();

	var div = jQuery('<div/>', {
		class : "workout_list_name",
		id : id,
	});
	div.appendTo($(main_wrap_id));
	div.append('<span>' + name + '</span>');

	var keys = Object.keys(sets);
	for (var i = 0; i < keys.length; i++) {
		add_set (main_wrap_id, name, sets[keys[i]]);
	}
}

function add_button () {
	var html = '<a href="pages/add_body_part.html/userId=1" class="btn btn-info btn-lg add_plan_btn"><span class="glyphicon glyphicon-plus"></span> Add</a>'
	$(html).appendTo($("#main_plan"));
}

function add_set (main_id, exercise_name, args) {
	var tags = data[exercise_name];
		add_set (main_wrap_id, bodypart, name, sets[keys[i]]);
	}
}

function add_set (main_id, bodypart, exercise_name, args) {
	var tags = data[bodypart][exercise_name];
	var values = args["value"];
	var original = args["original_value"];
	var done = args["done"];

	if (values.length != tags.length)
		console.log("SOMETHING WRONG");

	var id = "set_" + (index++).toString();

	var class_name = "";
	var same = values.toString() === original.toString();

	if (same && done === "False")
		class_name = "workout_list_default";
	else if (same && done === "True")
		class_name = "workout_list_success";
	else if (!same && done === "True")
		class_name = "workout_list_edited";
	else
		class_name = "workout_list_default";
	else if (!same && done === "False")
		class_name = "workout_list_failed";

	var div = jQuery('<div/>', {
		class : "workout_list_one " + class_name,
	});
	div.appendTo($(main_id));

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
			span += " ";
	}

	div.append('<span>' + span + '</span>');
}