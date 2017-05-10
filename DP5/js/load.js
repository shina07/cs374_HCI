
var treadMill = {"set_1" : ["10", "50"], };

var routine1 = {"exercise_1" : {"bodypart" : "cardio", "name" : "treadmill", "sets" : {"set_1" : ["10", "50"], }}};
var routine2 = {"exercise_1" : {"bodypart" : "chest", "name" : "Barbell Incline Bench Press Medium-Grip", "sets" : {"set_1" : ["10", "8"], "set_2" : ["10", "8"], "set_3" : ["10", "8"], }}, "exercise_2" : {"bodypart" : "chest", "name" : "Incline Dumbell Press", "sets" : {"set_1" : ["10", "8"], "set_2" : ["10", "8"], "set_3" : ["10", "8"], }}};
var routine3 = {"exercise_1" : {"bodypart" : "tricep", "name" : "Bench Press", "sets" : {"set_1" : ["30", "15"], "set_2" : ["30", "15"], "set_3" : ["30", "15"], }}, "exercise_2" : {"bodypart" : "tricep", "name" : "Body Tricep Press", "sets" : {"set_1" : ["20"], "set_2" : ["20"], "set_3" : ["20"], }}};

add_panel (1, "Cardio Routine", routine1);
add_panel (2, "Daily Chest", routine2);
add_panel (3, "Triceps", routine3);

function add_panel (index, routine_name, args) {
	var group = document.getElementById("load_preview");

	var panel = document.createElement("div");
	panel.classList.add("panel");

	var panel_heading = document.createElement("div");
	panel_heading.classList.add("panel-heading");

	var panel_title = document.createElement("h4");
	panel_title.classList.add("panel-title");

	var routine = document.createElement("a");
	routine.setAttribute("data-toggle", "collapse");
	routine.setAttribute("data-parent", "#load_preview");
	routine.setAttribute("href", "#routine_" + index.toString());
	routine.innerHTML = routine_name + '<span class="pull-right glyphicon glyphicon-triangle-bottom" style="color:blue"></span>';

	panel_title.appendChild(routine);
	panel_heading.appendChild(panel_title);

	var routine_index = document.createElement("div");
	routine_index.setAttribute("id", "routine_" + index.toString())
	routine_index.classList.add("panel-collapse");
	routine_index.classList.add("collapse");

	var panel_body = document.createElement("div");
	panel_body.classList.add("panel-body");

	var keys = Object.keys(args);
	for (var i = 0; i < keys.length; i++) {
		panel_body.appendChild(add_exercise(args[keys[i]]));

		if (i != keys.length - 1) {
			var newline = document.createElement("br");
			panel_body.appendChild(newline);
		}
	}
	
	var loadbtn = document.createElement("button");
	loadbtn.classList.add("btn");
	loadbtn.classList.add("btn-info");
	loadbtn.setAttribute("type", "button");
	loadbtn.setAttribute("style", "float:right");
	loadbtn.innerHTML = "Load";
	panel_body.appendChild(loadbtn);
	
	routine_index.appendChild(panel_body);

	panel.appendChild(panel_heading);
	panel.appendChild(routine_index);

	group.appendChild(panel);
}

function add_exercise (args) {
	var bodypart = args["bodypart"];
	var name = args["name"];
	var sets = args["sets"];

	var exercise = document.createElement("h4");
	exercise.innerHTML = name;

	var keys = Object.keys(sets);
	for (var i = 0; i < keys.length; i++) {
		var set = document.createElement("h4");
		set.innerHTML = add_set(bodypart, name, sets[keys[i]]);
		exercise.appendChild(set);
	}

	return exercise;
}

function add_set (bodypart, exercise_name, args) {

	var tags = data[bodypart][exercise_name];

	if (args.length != tags.length)
		console.log ("SOMETHING WRONG");

	var innerHTML = "";
	for (var i = 0; i < args.length; i++) {
		if (tags[i] === "reps")
			innerHTML += args[i] + " reps";
		else if (tags[i] === "speed")
			innerHTML += args[i] + " km/h";
		else if (tags[i] === "time")
			innerHTML += args[i] + " min";
		else if (tags[i] === "weight")
			innerHTML += args[i] + " kg";

		if (i != args.length)
			innerHTML += " "
	}

	return innerHTML;

}