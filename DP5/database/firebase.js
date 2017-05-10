
var config = {
    "apiKey": "AIzaSyB1H8jWROny2A98DsiFjAHdDs8m6tfZigo",
    "databaseURL": "https://project-oh-hack-nyun-4a19e.firebaseio.com/"
};

firebase.initializeApp(config);

var database = firebase.database();

// USAGE:
// var UsersRef = database.ref("USERS");