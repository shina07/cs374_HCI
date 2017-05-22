var data = {
    "Treadmill" : ["speed", "time"],
    "Bicycle" : ["speed", "time"],
    "Barbell Incline Bench Press Medium-Grip" : ["weight", "reps"],
    "Incline Dumbell Press" : ["weight", "reps"],
    "Barbell Bench Press" : ["weight", "reps"],
    "Barbell Press" : ["weight", "reps"],
    "Dumbbell Bench Press" : ["weight", "reps"],
    "Bench Press" : ["weight", "reps"],
    "Body Tricep Press" : ["reps"]
};

var unit = {
    "speed" : "km/h",
    "time" : "min",
    "weight" : "kg",
    "reps" : "times"
}

var add_workout = {
    "CHEST" : {
        "Flat" : {
            "Barbell":{}
        },
        "Decline" : {
            "Barbell Bench Press" : {
                "rec": ["weight", "reps"]
            }
        },
        "Incline" : {

        },
        "Machine":{}

    },
    "SHOULDER" : {

    },
    "BACK" : {

    },
    "TRICEPS" : {

    },
    "BICEPS" : {

    },
    "ABS" : {

    },
    "LEGS" : {

    },
    "CARDIO" : {

    }

};