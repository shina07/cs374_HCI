# DP6 : Hi-fi Prototyping

## POV

As it is stated in [DP3](https://github.com/shina07/cs374_HCI/blob/master/DP3/report/report.md) and [DP4](https://github.com/shina07/cs374_HCI/blob/master/DP4/report/report.md), we will focus on people who want to record their exercises while they are working out. Throughout several interviews, it was possible to note that recording of an exercise is annoying and inconvenient regardless of writing devices either papers or smartphones. These people have the needs of doing so easier and faster. The reason why it is hard to be done is because each exercise needs different attributes to record, and since these values depend on the nature of exercise, writing them down is hard to be done uniformly. Most of muscle exercises would contain weight, reps(=repetitions), sets and interval(=resting period between each set, unit=seconds), but cardio exercise or abs routine(=abdominal muscle exercise) need different attributes to record. Moreover, yet one is doing an exercise for instance, bench press, with the same number of reps and weight, intensity and stimulated muscle parts would be vary enormously depending on one’s gripping method, gripping width, bench slope and position of one’s feet. Another point we have found was, it turned out that people are actually feeling hard to name each exercise which can be a hinderance to recording. Having been considering its complexity, we need to catch at some compromising point, but with our UI, we want to face with, and deal with the difficulties the user currently has. Many issues were covered and will be dealt in the iterative process of our design.

## Target users

Our target users would be anyone who wants to keep their exercises during their workout. But we are feeling safe to narrow our target a bit, specifically to someone who has not been long starting systematic workouts. After interviewing with KAIST fitness professor SeokHee Kim and KAIST fitness club’s training manager GunHo Park, we noticed that novice users are more likely to keep their exercise records rather than exercise experts. In that point of view, we focused our system to be more friendly to users who are not knowing well about workouts.

## Tasks

Main tasks featured in our hi-fi prototype are,

1. Adding workout plans to each user’s daily workout list by navigating through body part, tool to be used and the type of exercise to be chosen as well as attributes to be set for that exercise by the user.
2. Conducting exercises listed in daily workout list by clicking those items. It is assumed a user to use this feature while doing actual exercise. For user convenience,
3. Loading workout routines that has been conducted and saved in our service system. Thereby user does not have to add every single numbers and set of exercises but by clicking workouts shown in calendar, things would be pasted to the user’s workout plan list.
4. Visualizing the recorded items in order for user to be encouraged, and are able to check how they are getting better.
5. Signing in and up so that our service system can save individual information and records privately.

## Implementation Notes

#### URL of your prototype

To use our prototype, please click [this](https://project-oh-hack-nyun-4a19e.firebaseapp.com). We used [Firebase Hosting](https://firebase.google.com/docs/hosting) for uploading our prototype.

>URL : https://project-oh-hack-nyun-4a19e.firebaseapp.com

#### URL of your Git repository

To read our code, please click [this](https://github.com/shina07/cs374_HCI/tree/master/DP5).

>URL : https://github.com/shina07/cs374_HCI/tree/master/DP5

#### Libraries and frameworks

we used [jQuery](https://jquery.com), [bootstrap](http://getbootstrap.com), [firebase](https://firebase.google.com), [responsive calendar](http://w3widgets.com/responsive-calendar), [highcharts](https://www.highcharts.com).

#### Lessons from heuristic evaluation

We received many feedbacks from [heuristic evaluation](https://docs.google.com/spreadsheets/d/1hqnocjjT2g3WJcOJRWqTdF28ysC2qcNI-DYOdAHFUoQ/edit#gid=282922788) in the class, and picked 8 important usability issues.

1. Using workout name only is difficult to know what it is. It would be better to use picture for each workout.
2. It is hard to find what should the user do at the first page. It would be better to give an instruction for the first-comer.
3. The cards for the exercises are too close to each other. Please try to show them in neat and simple way.
4. I couldn’t notice that the name of each exercise is clickable. Please give the names more affordances to let users know that they could be clicked.
5. It seems that your team gives 2-layered classification of routines. However, as there was no indicator of ‘layer’ or depth, so please use different design for different layer or include guide on this issue.
6. How about adding the recommended weight and reps for each exercise?
7. Is there any necessity for abbreviating repetitions to Reps?
8. On adding workout plan, some cards are selectable and some are not, but they look all the same.

## Representative screenshots

## Individual Reflections

## Studio Reflections

You can go [here](https://docs.google.com/document/d/1Ti5ADdcaYSER7k4I_McWusfxXzvpgzDOh0VF05OcKIg/edit) and read DP6 feedbacks.