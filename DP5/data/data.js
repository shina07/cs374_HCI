var data = {
    "Treadmill" : ["speed", "time"],
    "Bicycle" : ["speed", "time"],
    "Barbell Incline Bench Press Medium-Grip" : ["weight", "reps"],
    "Incline Dumbell Press" : ["weight", "reps"],
    "Barbell Bench Press" : ["weight", "reps"],
    "Barbell Press" : ["weight", "reps"],
    "Dumbbell Bench Press" : ["weight", "reps"],
    "Bench Press" : ["weight", "reps"],
    "Body Tricep Press" : ["reps"],
    "Bench Press" : ["weight", "reps"],
    "Bent Arm Pullover" : ["weight", "reps"],
    "Decline Bench Press" : ["weight", "reps"],
    "Incline Bench Press" : ["weight", "reps"],
    "Wide Grip Bench Press" : ["weight", "reps"],
    "Wide Grip Decline Bench Press" : ["weight", "reps"],
    "Wide Push Ups" : ["weight", "reps"],
    "Push Ups 3" : ["weight", "reps"],
    "Chest Dips" : ["weight", "reps"],
    "Close Triceps Pushup" : ["weight", "reps"],
    "Push Up With Feet On An Exercise Ball" : ["weight", "reps"],
    "One Armed Biased Push Up" : ["weight", "reps"],
    "Flat Bench Cable Flys" : ["weight", "reps"],
    "Cable Crossover" : ["weight", "reps"],
    "Incline Cable Flyes" : ["weight", "reps"],
    "One Arm Bench Press" : ["weight", "reps"],
    "One Arm Flat Bench Flys" : ["weight", "reps"],
    "Dumbbell Flys" : ["weight", "reps"],
    "Dumbbell Decline Flys" : ["weight", "reps"],
    "Incline Flys" : ["weight", "reps"],
    "Incline Flys With A Twist" : ["weight", "reps"],
    "Decline Dumbbell Bench Press" : ["weight", "reps"],
    "Incline Press" : ["weight", "reps"],
    "Hammer Grip Incline Bench Press" : ["weight", "reps"],
    "Smith Incline Bench Press" : ["weight", "reps"],
    "Butterfly Machine" : ["weight", "reps"],
    "Incline Chest Press" : ["weight", "reps"],
    "Smith Bench Press" : ["weight", "reps"],
    "Seated Bench Press" : ["weight", "reps"],
    "Decline Chest Press" : ["weight", "reps"],
    "Barbell Front Raises" : ["weight", "reps"],
    "Military Shoulder Press" : ["weight", "reps"],
    "Barbell Upright Rows" : ["weight", "reps"],
    "Barbell Shrugs" : ["weight", "reps"],
    "Hang Cleans" : ["weight", "reps"],
    "Cable Upright Rows" : ["weight", "reps"],
    "Cable Shrugs" : ["weight", "reps"],
    "Cable Seated Rear Lateral Raise" : ["weight", "reps"],
    "Bent Over Cable Lateral Raises" : ["weight", "reps"],
    "Cable Front Raises" : ["weight", "reps"],
    "Dumbbell Lateral Raises" : ["weight", "reps"],
    "Dumbbell Front Raises 2" : ["weight", "reps"],
    "Lying One Arm Rear Lateral Raise" : ["weight", "reps"],
    "Dumbbell Raise" : ["weight", "reps"],
    "Lying Rear Lateral Raise" : ["weight", "reps"],
    "Dumbbell Upright Row" : ["weight", "reps"],
    "Cuban Press" : ["weight", "reps"],
    "Arnold Press" : ["weight", "reps"],
    "Iron Cross" : ["weight", "reps"],
    "One Arm Upright Row" : ["weight", "reps"],
    "Dumbbell Shoulder Press" : ["weight", "reps"],
    "Dumbbell Shrugs" : ["weight", "reps"],
    "Shoulder Press Machine" : ["weight", "reps"],
    "Smith Machine Upright Row" : ["weight", "reps"],
    "Smith Machine Shrugs" : ["weight", "reps"],
    "Reverse Grip Bent Over Rows" : ["weight", "reps"],
    "One Arm Side Deadlift" : ["weight", "reps"],
    "Romanian Deadlift" : ["weight", "reps"],
    "Barbell Deadlift" : ["weight", "reps"],
    "Bent Arm Pullover" : ["weight", "reps"],
    "Barbell Rear Delt Row" : ["weight", "reps"],
    "Barbell Clean" : ["weight", "reps"],
    "Good Mornings" : ["weight", "reps"],
    "Dumbbell Deadlift" : ["weight", "reps"],
    "Dumbbell Clean" : ["weight", "reps"],
    "Dead Lifts 2" : ["weight", "reps"],
    "Rear Deltoid Row" : ["weight", "reps"],
    "Lying One Arm Rear Lateral Raise" : ["weight", "reps"],
    "Lying Rear Lateral Raise" : ["weight", "reps"],
    "Wide Grip Lat Pull Down" : ["weight", "reps"],
    "Close Grip Front Lat Pull Down" : ["weight", "reps"],
    "Cable Seated Rows" : ["weight", "reps"],
    "V Bar Pull Down"  : ["weight", "reps"],
    "Straight Arm Push Down" : ["weight", "reps"],
    "Cable Seated Rear Lateral Raise" : ["weight", "reps"],
    "Bent Over Cable Lateral Raises" : ["weight", "reps"],
    "Underhand Pull Downs" : ["weight", "reps"],
    "Dead Lifts" : ["weight", "reps"],
    "Smith Machine Rear Deltoid Row" : ["weight", "reps"],
    "Good Mornings 2" : ["weight", "reps"],
    "Body Row" : ["weight", "reps"],
    "Narrow Parallel Frip Chin Ups" : ["weight", "reps"],
    "Chin Ups" : ["weight", "reps"],
    "Gironda Sternum Chins" : ["weight", "reps"],
    "Climbers Chin Up" : ["weight", "reps"],
    "Hyperextensions" : ["weight", "reps"],
    "Reverse Triceps Bench Press" : ["weight", "reps"],
    "Jm Press" : ["weight", "reps"],
    "Lying Triceps Press" : ["weight", "reps"],
    "Narrow Grip Bench Press" : ["weight", "reps"],
    "Old School Reverse Extensions" : ["weight", "reps"],
    "Incline Triceps Extension 2" : ["weight", "reps"],
    "Standing Overhead Triceps Extension"  : ["weight", "reps"],
    "Seated Overhead Triceps Extension" : ["weight", "reps"],
    "Seated Bent Over One Arm Triceps Extension" : ["weight", "reps"],
    "Standing One Arm Triceps Extension" : ["weight", "reps"],
    "Triceps Kickback" : ["weight", "reps"],
    "Decline Triceps Extension" : ["weight", "reps"],
    "Tate Press" : ["weight", "reps"],
    "Incline Triceps Extension" : ["weight", "reps"],
    "Lying Triceps Extension 2" : ["weight", "reps"],
    "Lying Triceps Extension Across Face" : ["weight", "reps"],
    "Single Arm Supinated Triceps Extension"  : ["weight", "reps"],
    "Single Arm Pronated Triceps Extension" : ["weight", "reps"],
    "Seated Triceps Press"  : ["weight", "reps"],
    "Lying Supine Two Arm Triceps Extension" : ["weight", "reps"],
    "One Arm Triceps Extension" : ["weight", "reps"],
    "Decline Ez Bar Triceps Extension" : ["weight", "reps"],
    "Triceps Pushdown With V Bar" : ["weight", "reps"],
    "Standing Triceps Extension" : ["weight", "reps"],
    "Standing One Arm Low Pulley Triceps Extension" : ["weight", "reps"],
    "Kneeling Concentration Triceps Extension" : ["weight", "reps"],
    "Triceps Pushdown With Rope" : ["weight", "reps"],
    "One Arm Tricep Extension" : ["weight", "reps"],
    "Low Triceps Extension" : ["weight", "reps"],
    "Kneeling Triceps Extension" : ["weight", "reps"],
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