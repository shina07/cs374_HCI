
// var id = device.uuid;
// console.log(id);
add_session (1);

function add_session (userId) {
	var SessionRef = database.ref("SESSION");
	var count = 0;

	SessionRef.once("value", function(snapshot) {
		count = snapshot.val().length;
	});

	SessionRef.child(userId).set({
		"valid" : true,
	});
}

function check_session (userId) {
	var SessionRef = database.ref("SESSION");

	SessionRef.equalTo(userId).once("value", function(data) {
		var session = data.val();
		
		if (session)
			console.log("SESSION EXISTS : " + session);
		else
			console.log("SESSION NOT EXISTS");
	});
}