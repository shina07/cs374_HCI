
// load_exercise ();
exercise = {};

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

	var tags = data[exercise_name];

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

// function load_exercise () {

// 	var LoadRef = database.ref("LOAD");

// 	LoadRef.once("value", function(data) {

// 		var routines = data.val();
// 		var keys = Object.keys(data.val());
// 		var count = 0;

// 		for (var i = 0; i < keys.length; i++)
// 		{
// 			var obj = routines[keys[i]];
// 			if (obj["userId"] == 1)
// 			{
// 				count += 1;
// 				add_panel(count, obj["name"], obj["routine"]);
// 			}
// 		}
// 	});
// }

function add_test_data () {
	var LoadRef = database.ref("LOAD");

	LoadRef.push({
		"name" : "Cardio Routine",
		"userId" : 1,
		"routine" : {"exercise_1" : {"bodypart" : "cardio", "name" : "treadmill", "sets" : {"set_1" : ["10", "50"], }}},
	});

	LoadRef.push({
		"name" : "Daily Chest",
		"userId" : 1,
		"routine" : {"exercise_1" : {"bodypart" : "chest", "name" : "Barbell Incline Bench Press Medium-Grip", "sets" : {"set_1" : ["10", "8"], "set_2" : ["10", "8"], "set_3" : ["10", "8"], }}, "exercise_2" : {"bodypart" : "chest", "name" : "Incline Dumbell Press", "sets" : {"set_1" : ["10", "8"], "set_2" : ["10", "8"], "set_3" : ["10", "8"], }}},
	});

	LoadRef.push({
		"name" : "Triceps",
		"userId" : 1,
		"routine" : {"exercise_1" : {"bodypart" : "tricep", "name" : "Bench Press", "sets" : {"set_1" : ["30", "15"], "set_2" : ["30", "15"], "set_3" : ["30", "15"], }}, "exercise_2" : {"bodypart" : "tricep", "name" : "Body Tricep Press", "sets" : {"set_1" : ["20"], "set_2" : ["20"], "set_3" : ["20"], }}},
	});
}







function load_exercise() {
	var LoadRef = database.ref("PLANS");

	LoadRef.once("value", function(data) {

		var userid = get_url_params ()["userid"];
		var routines = data.val()[userid];
		//var keys = Object.keys(data.val());
		var dates = Object.keys(routines);
		var count = 0;

		for (var i = 0; i < dates.length; i++)
		{
			//console.log(dates[i] + " "	+ routines[dates[i]])
			var routine = routines[dates[i]]
			exercise[dates[i].toString()] = JSON.stringify(routine);
		}
		console.log(exercise);

		var today = new Date()
		year = today.getFullYear();
		month = today.getMonth() + 1;

		var events = {}

		for (var i = 0; i < dates.length; i++)
		{
			console.log(dates[i] + ":     " + exercise[dates[i]]);
			var numbers = {};
			numbers["number"] = 1;
			console.log(numbers);
			events[dates[i]] = numbers;
		}
		//console.log("events: " + events);

	    $(".responsive-calendar").responsiveCalendar({
			time: year + '-' + month,
			events: events,
			startFromSunday : true,
			allRows : false,
			//onDayClick : load_date (event),
	    });
	});
}

function load_date (event) {
	console.log(event);
}

// Generated by CoffeeScript 1.6.1

/*!
  # Responsive Celendar widget script
  # by w3widgets
  #
  # Author: Lukasz Kokoszkiewicz
  #
  # Copyright © w3widgets 2013 All Rights Reserved
*/

$(document).ready(function () {
	// var today = new Date()
	// year = today.getFullYear();
	// month = today.getMonth() + 1;

	load_exercise ();
	// var events = {}
	// for (var i = 0; i < exercise.length; i++)
	// {
	// 	events[exercise[i].toString()] = {
	// 		"number" : 1,
	// 	};
	// }
	// console.log("events: " + events);

 //    $(".responsive-calendar").responsiveCalendar({
	// 	time: year + '-' + month,
	// 	events: {

	// 	},
 //    });
});

(function() {

  	(function($) {
	    "use strict";
	    var Calendar, opts, spy;
	    Calendar = function(element, options) {
			var time;
			this.$element = element;
			this.options = options;
			this.weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
			this.time = new Date();
			this.currentYear = this.time.getFullYear();
			this.currentMonth = this.time.getMonth();
			if (this.options.time) {
				time = this.splitDateString(this.options.time);
				this.currentYear = time.year;
				this.currentMonth = time.month;
			}
			this.initialDraw();
			return null;
	    };
	    Calendar.prototype = {
			addLeadingZero: function(num) {
				if (num < 10) {
					return "0" + num;
				} else {
					return "" + num;
				}
			},
			applyTransition: function($el, transition) {
				$el.css('transition', transition);
				$el.css('-ms-transition', '-ms-' + transition);
				$el.css('-moz-transition', '-moz-' + transition);
				return $el.css('-webkit-transition', '-webkit-' + transition);
			},
			applyBackfaceVisibility: function($el) {
		        $el.css('backface-visibility', 'hidden');
		        $el.css('-ms-backface-visibility', 'hidden');
		        $el.css('-moz-backface-visibility', 'hidden');
		        return $el.css('-webkit-backface-visibility', 'hidden');
			},
			applyTransform: function($el, transform) {
		        $el.css('transform', transform);
		        $el.css('-ms-transform', transform);
		        $el.css('-moz-transform', transform);
		        return $el.css('-webkit-transform', transform);
			},
			splitDateString: function(dateString) {
		        var day, month, time, year;
		        time = dateString.split('-');
		        year = parseInt(time[0]);
		        month = parseInt(time[1] - 1);
		        day = parseInt(time[2]);
		        return time = {
					year: year,
					month: month,
					day: day
		        };
	      	},
	      	initialDraw: function() {
	        	return this.drawDays(this.currentYear, this.currentMonth);
	      	},
	      	editDays: function(events) {
	        	var dateString, day, dayEvents, time, _results;
	        	_results = [];
	        	for (dateString in events) {
	          		dayEvents = events[dateString];
					this.options.events[dateString] = events[dateString];
					time = this.splitDateString(dateString);
					day = this.$element.find('[data-year="' + time.year + '"][data-month="' + (time.month + 1) + '"][data-day="' + time.day + '"]').parent('.day');
					day.removeClass('active');
					day.find('.badge').remove();
					day.find('a').removeAttr('href');
					if (this.currentMonth === time.month || this.options.activateNonCurrentMonths) {
						_results.push(this.makeActive(day, dayEvents));
					} else {
						_results.push(void 0);
					}
	        	}
	        	return _results;
	      	},
			clearDays: function(days) {
				var dateString, day, time, _i, _len, _results;
				_results = [];
				for (_i = 0, _len = days.length; _i < _len; _i++) {
					dateString = days[_i];
					delete this.options.events[dateString];
					time = this.splitDateString(dateString);
					day = this.$element.find('[data-year="' + time.year + '"][data-month="' + (time.month + 1) + '"][data-day="' + time.day + '"]').parent('.day');
					day.removeClass('active');
					day.find('.badge').remove();
					_results.push(day.find('a').removeAttr('href'));
				}
				return _results;
			},
			clearAll: function() {
				var day, days, i, _i, _len, _results;
				this.options.events = {};
				days = this.$element.find('[data-group="days"] .day');
				_results = [];
				for (i = _i = 0, _len = days.length; _i < _len; i = ++_i) {
					day = days[i];
					$(day).removeClass('active');
					$(day).find('.badge').remove();
					_results.push($(day).find('a').removeAttr('href'));
				}
				return _results;
			},
			setMonthYear: function(dateString) {
				var time;
				time = this.splitDateString(dateString);
				this.currentMonth = this.drawDays(time.year, time.month);
				return this.currentYear = time.year;
			},
			prev: function() {
				if (this.currentMonth - 1 < 0) {
					this.currentYear = this.currentYear - 1;
					this.currentMonth = 11;
				} else {
					this.currentMonth = this.currentMonth - 1;
				}
					this.drawDays(this.currentYear, this.currentMonth);
					if (this.options.onMonthChange) {
						this.options.onMonthChange.call(this);
				}
				return null;
			},
			next: function() {
				if (this.currentMonth + 1 > 11) {
					this.currentYear = this.currentYear + 1;
					this.currentMonth = 0;
				} else {
				  	this.currentMonth = this.currentMonth + 1;
				}
				this.drawDays(this.currentYear, this.currentMonth);
				if (this.options.onMonthChange) {
				  	this.options.onMonthChange.call(this);
				}
					return null;
				},
				curr: function() {
					this.currentYear = this.time.getFullYear();
					this.currentMonth = this.time.getMonth();
					this.drawDays(this.currentYear, this.currentMonth);
					if (this.options.onMonthChange) {
						this.options.onMonthChange.call(this);
				}
				return null;
			},
			addOthers: function(day, dayEvents) {
				var badge;
				if (typeof dayEvents === "object") {
					if (dayEvents.number != null) {
						badge = $("<span></span>").html(dayEvents.number).addClass("badge");
					if (dayEvents.badgeClass != null) {
						badge.addClass(dayEvents.badgeClass);
					}
						day.append(badge);
					}
						if (dayEvents.url) {
						day.find("a").attr("href", dayEvents.url);
					}
				}
				return day;
			},
			makeActive: function(day, dayEvents) {
				var classes, eventClass, i, _i, _len;
				if (dayEvents) {
				  if (dayEvents["class"]) {
				    classes = dayEvents["class"].split(" ");
				    for (i = _i = 0, _len = classes.length; _i < _len; i = ++_i) {
				      eventClass = classes[i];
				      day.addClass(eventClass);
				    }
				  } else {
				    day.addClass("active");
				  }
				  day = this.addOthers(day, dayEvents);
				}
				return day;
			},
			getDaysInMonth: function(year, month) {
				return new Date(year, month + 1, 0).getDate();
			},
			drawDay: function(lastDayOfMonth, yearNum, monthNum, dayNum, i) {
				var calcDate, dateNow, dateString, day, dayDate, pastFutureClass;
				day = $("<div></div>").addClass("day");
				dateNow = new Date();
				dateNow.setHours(0, 0, 0, 0);
				dayDate = new Date(yearNum, monthNum - 1, dayNum);
				if (dayDate.getTime() < dateNow.getTime()) {
					pastFutureClass = "past";
				} else if (dayDate.getTime() === dateNow.getTime()) {
					pastFutureClass = "today";
				} else {
					pastFutureClass = "future";
				}
				day.addClass(this.weekDays[i % 7]);
				day.addClass(pastFutureClass);
				dateString = yearNum + "-" + this.addLeadingZero(monthNum) + "-" + this.addLeadingZero(dayNum);
				if (dayNum <= 0 || dayNum > lastDayOfMonth) {
					calcDate = new Date(yearNum, monthNum - 1, dayNum);
					dayNum = calcDate.getDate();
					monthNum = calcDate.getMonth() + 1;
					yearNum = calcDate.getFullYear();
					day.addClass("not-current").addClass(pastFutureClass);
					if (this.options.activateNonCurrentMonths) {
						dateString = yearNum + "-" + this.addLeadingZero(monthNum) + "-" + this.addLeadingZero(dayNum);
					}
				}
				day.append($("<a>" + dayNum + "</a>").attr("data-day", dayNum).attr("data-month", monthNum).attr("data-year", yearNum));
				if (this.options.monthChangeAnimation) {
					this.applyTransform(day, 'rotateY(180deg)');
					this.applyBackfaceVisibility(day);
				}
				day = this.makeActive(day, this.options.events[dateString]);
				return this.$element.find('[data-group="days"]').append(day);
			},
			drawDays: function(year, month) {
				var currentMonth, day, dayBase, days, delay, draw, firstDayOfMonth, i, lastDayOfMonth, loopBase, monthNum, multiplier, thisRef, time, timeout, yearNum, _i, _len;
				thisRef = this;
				time = new Date(year, month);
				currentMonth = time.getMonth();
				monthNum = time.getMonth() + 1;
				yearNum = time.getFullYear();
				time.setDate(1);
				firstDayOfMonth = this.options.startFromSunday ? time.getDay() + 1 : time.getDay() || 7;
				lastDayOfMonth = this.getDaysInMonth(year, month);
				timeout = 0;
				if (this.options.monthChangeAnimation) {
					days = this.$element.find('[data-group="days"] .day');
					for (i = _i = 0, _len = days.length; _i < _len; i = ++_i) {
						day = days[i];
						delay = i * 0.01;
						this.applyTransition($(day), 'transform .5s ease ' + delay + 's');
						this.applyTransform($(day), 'rotateY(180deg)');
						this.applyBackfaceVisibility($(day));
						timeout = (delay + 0.1) * 1000;
					}
				}
				dayBase = 2;
				if (this.options.allRows) {
					loopBase = 42;
				} else {
					multiplier = Math.ceil((firstDayOfMonth - (dayBase - 1) + lastDayOfMonth) / 7);
					loopBase = multiplier * 7;
				}
				this.$element.find("[data-head-year]").html(time.getFullYear());
				this.$element.find("[data-head-month]").html(this.options.translateMonths[time.getMonth()]);
				draw = function() {
					var dayNum, setEvents;
					thisRef.$element.find('[data-group="days"]').empty();
					dayNum = dayBase - firstDayOfMonth;
					i = thisRef.options.startFromSunday ? 0 : 1;
					while (dayNum < loopBase - firstDayOfMonth + dayBase) {
						thisRef.drawDay(lastDayOfMonth, yearNum, monthNum, dayNum, i);
						dayNum = dayNum + 1;
						i = i + 1;
					}
					setEvents = function() {
					    var _j, _len1;
					    days = thisRef.$element.find('[data-group="days"] .day');
					    for (i = _j = 0, _len1 = days.length; _j < _len1; i = ++_j) {
					    	day = days[i];
							thisRef.applyTransition($(day), 'transform .5s ease ' + (i * 0.01) + 's');
					    	thisRef.applyTransform($(day), 'rotateY(0deg)');
					    }
					    if (thisRef.options.onDayClick) {
					      thisRef.$element.find('[data-group="days"] .day a').click(function() {
					        return thisRef.options.onDayClick.call(this, thisRef.options.events);
					      });
					    }
					    if (thisRef.options.onDayHover) {
							thisRef.$element.find('[data-group="days"] .day a').hover(function() {
								return thisRef.options.onDayHover.call(this, thisRef.options.events);
							});
						}
					    if (thisRef.options.onActiveDayClick) {
					    	thisRef.$element.find('[data-group="days"] .day.active a').click(function() {
					        	return thisRef.options.onActiveDayClick.call(this, thisRef.options.events);
					    	});
					    }
					    if (thisRef.options.onActiveDayHover) {
					    	return thisRef.$element.find('[data-group="days"] .day.active a').hover(function() {
					        	return thisRef.options.onActiveDayHover.call(this, thisRef.options.events);
					    	});
					    }
					};
					return setTimeout(setEvents, 0);
				};
				setTimeout(draw, timeout);
				return currentMonth;
			}
	    };
	    $.fn.responsiveCalendar = function(option, params) {
			var init, options, publicFunc;
			options = $.extend({}, $.fn.responsiveCalendar.defaults, typeof option === 'object' && option);
			publicFunc = {
		        next: 'next',
		        prev: 'prev',
		        edit: 'editDays',
		        clear: 'clearDays',
		        clearAll: 'clearAll',
		        getYearMonth: 'getYearMonth',
		        jump: 'jump',
		        curr: 'curr'
			};
			init = function($this) {
		        var data;
		        options = $.metadata ? $.extend({}, options, $this.metadata()) : options;
		        $this.data('calendar', (data = new Calendar($this, options)));
				if (options.onInit) {
					options.onInit.call(data);
				}
		        return $this.find("[data-go]").click(function() {
					if ($(this).data("go") === "prev") {
						data.prev();
					}
					if ($(this).data("go") === "next") {
						return data.next();
					}
		        });
		    };
			return this.each(function() {
		        var $this, data;
		        $this = $(this);
		        data = $this.data('calendar');
		        if (!data) {
		          	init($this);
		        } else if (typeof option === 'string') {
					if (publicFunc[option] != null) {
						data[publicFunc[option]](params);
					} else {
						data.setMonthYear(option);
					}
		        } else if (typeof option === 'number') {
		        	data.jump(Math.abs(option) + 1);
		        }
		        return null;
	    	});
	    };
	    $.fn.responsiveCalendar.defaults = {
			translateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			events: {},
			time: void 0,
			allRows: true,
			startFromSunday: false,
			activateNonCurrentMonths: false,
			monthChangeAnimation: true,
			onInit: void 0,
			onDayClick: void 0,
			onDayHover: void 0,
			onActiveDayClick: void 0,
			onActiveDayHover: void 0,
			onMonthChange: void 0
	    };
	    spy = $('[data-spy="responsive-calendar"]');
	    if (spy.length) {
			opts = {};
			if ((spy.data('translate-months')) != null) {
				opts.translateMonths = spy.data('translate-months').split(',');
			}
			if ((spy.data('time')) != null) {
				opts.time = spy.data('time');
			}
			if ((spy.data('all-rows')) != null) {
				opts.allRows = spy.data('all-rows');
			}
			if ((spy.data('start-from-sunday')) != null) {
				opts.startFromSunday = spy.data('start-from-sunday');
			}
			if ((spy.data('activate-non-current-months')) != null) {
				opts.activateNonCurrentMonths = spy.data('activate-non-current-months');
			}
			if ((spy.data('month-change-animation')) != null) {
				opts.monthChangeAnimation = spy.data('month-change-animation');
			}
			return spy.responsiveCalendar(opts);
	    }
	})(jQuery);

}).call(this);
