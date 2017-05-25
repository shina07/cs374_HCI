# DP6 : Hi-fi Prototyping

## POV

As it is stated in [DP3](https://github.com/shina07/cs374_HCI/blob/master/DP3/report/report.md) and [DP4](https://github.com/shina07/cs374_HCI/blob/master/DP4/report/report.md), we will focus on people who want to record their exercises while they are working out. Throughout several interviews, it was possible to note that recording of an exercise is annoying and inconvenient regardless of writing devices either papers or smartphones. These people have the needs of doing so easier and faster. The reason why it is hard to be done is because each exercise needs different attributes to record, and since these values depend on the nature of exercise, writing them down is hard to be done uniformly. Most of muscle exercises would contain weight, reps(=repetitions), sets and interval(=resting period between each set, unit=seconds), but cardio exercise or abs routine(=abdominal muscle exercise) need different attributes to record. Moreover, yet one is doing an exercise for instance, bench press, with the same number of reps and weight, intensity and stimulated muscle parts would be vary enormously depending on one’s gripping method, gripping width, bench slope and position of one’s feet. Another point we have found was, it turned out that people are actually feeling hard to name each exercise which can be a hinderance to recording. Having been considering its complexity, we need to catch at some compromising point, but with our UI, we want to face with, and deal with the difficulties the user currently has. Many issues were covered and will be dealt in the iterative process of our design.

## Target users

Our target users would be anyone who wants to keep their exercises during their workout. But we are feeling safe to narrow our target a bit, specifically to someone who has not been long starting systematic workouts. After interviewing with KAIST fitness professor SeokHee Kim and KAIST fitness club’s training manager GunHo Park, we noticed that novice users are more likely to keep their exercise records rather than exercise experts. In that point of view, we focused our system to be more friendly to users who are not knowing well about workouts.

## Tasks

Main tasks featured in our hi-fi prototype are,

1. Adding workout plans to each user’s daily workout list by navigating through body part, tool to be used and the type of exercise to be chosen as well as attributes to be set for that exercise by the user.
>**Alignment with POV**: When user wants to record an exercise, the one has to select which exercise to be done, including its attributes. Concrete description depicting the alignment was written in DP4, profoundly.
>**Reflected target user’s needs**: According to our inspection, users are not familiar with exercise names. Thus, we added moving thumbnail pictures for graphical aid when selecting exercises for adding plan.

2. Conducting exercises listed in daily workout list after clicking items in the planned list. It is assumed a user to use this feature while doing actual exercise.
>**Alignment with POV**: After setting up a workout plan, user would conduct the actual exercises with our service UI.
>**Reflected target user’s needs**: For user convenience and for reflecting user’s needs while doing an exercise, our service system shows an ‘up counter’ for user to check the interval time they have rested. It turned out that this ‘interval time’ in between sets, are crucial for many exercise recorders, our target user.

3. Loading workout routines that has been conducted and saved in our service system. Thereby, user does not have to add every single numbers and set of exercises but by clicking workouts shown in the calendar, everything would be pasted to the user’s daily workout plan list.
>**Alignment with POV**: Whenever the user adds and conducts exercise, the list for those are also been kept in our service. Adding similar set of exercises can easily be added to daily plan list for each user.
>**Reflected target user’s needs**: Some users stressed that they are doing similar set of exercises which has been done few days ago. We thus adopted the idea, letting users to load past plans. As a result, repetitive and rather annoying additions can be prevented.

4. Visualizing the recorded items in order for user to be encouraged, and are able to check how they are getting better.
>**Alignment with POV**: After finishing a series of tasks we’re providing, we want the user to keep recording the user’s workouts regularly. This feature is provided for encouraging the user to consistently use our service, as well as allowing them to check how they are getting better. Although we do not count it as our major task to be designed, this could be a big reason for one to record his/her workouts.
>**Reflected target user’s needs**: Professor SuckHee Kim, KAIST fitness professor had once told us that our service may not be useful  than using a sheet of paper if we do not support showing overall statistics and visually impressive graphs. We will do our best in addition, trying to meet the needs for those users.

5. Signing in and up so that our service system can save individual information and records privately. This task is listed at the end because it’s not considered major, but is still important.
>**Alignment with POV**: Before everything, user sign in or sign up in order to utilize our service.
>**Reflected target user’s needs**: Not much to be mentioned for this task, but without logging in, our service would face serious safety issues.

## Implementation Notes

### URL of your prototype

To use our prototype, please click [this](https://project-oh-hack-nyun-4a19e.firebaseapp.com). We used [Firebase Hosting](https://firebase.google.com/docs/hosting) for uploading our prototype.

>URL : https://project-oh-hack-nyun-4a19e.firebaseapp.com

### URL of your Git repository

To read our code, please click [this](https://github.com/shina07/cs374_HCI/tree/master/DP5).

>URL : https://github.com/shina07/cs374_HCI/tree/master/DP5

### Libraries and frameworks

we used [jQuery](https://jquery.com), [bootstrap](http://getbootstrap.com), [firebase](https://firebase.google.com), [responsive calendar](http://w3widgets.com/responsive-calendar), [highcharts](https://www.highcharts.com).

### Lessons from heuristic evaluation

We received many feedbacks from [heuristic evaluation](https://docs.google.com/spreadsheets/d/1hqnocjjT2g3WJcOJRWqTdF28ysC2qcNI-DYOdAHFUoQ/edit#gid=282922788) in the class, and picked 8 important usability issues.

1. Using workout name only is difficult to know what it is. It would be better to use picture for each workout.
>We had noticed this problem from the paper prototype, but there were not enough image data in mid-fi prototype. So, we added images of body parts, workout, and video in hi-fi prototype.

2. It is hard to find what should the user do at the first page. It would be better to give an instruction for the first-comer.
>Certainly, “add” button in mid-fi prototype didn’t show what will be added if the user click it. It can be confused what this service is, and what should the user do at the first page. We changed the label of button to “Add new workout” and added “Load from previous” button.

3. The cards for the exercises are too close to each other. Please try to show them in neat and simple way.
4. I couldn’t notice that the name of each exercise is clickable. Please give the names more affordances to let users know that they could be clicked.
>There was a reason for us to make UI that way, but the arisen issue was reasonable. After receiving such suggestion, we updated our grid a bit.

5. It seems that your team gives 2-layered classification of routines. However, as there was no indicator of ‘layer’ or depth, so please use different design for different layer or include guide on this issue.
>This issue was the one we’d never thought about before. We dealt with this issue by making our body part selection grid more like the upper layer. This was modified by setting selection buttons holding pictures of Machoke, the representative character of our service. Since the selection buttons under grid in deeper layered classification directs each specific exercise to be chosen, they are now distinguishable. However, this seemed not fully solving the issue, we featured breadcrumb indicating which exercise is to be added.

6. How about adding the recommended weight and reps for each exercise?
>This had not yet been touched since we are not sure the optimal value for each exercises, but will be added in our final iteration step.

7. Is there any necessity for abbreviating repetitions to Reps?
>Reps are rather conventional term used to describe the number of times a user perform an exercise. The use of “reps” is thus our adjustment for choosing proper term that is world-widely used.

8. On adding workout plan, some cards are selectable and some are not, but they look all the same.
>Tools are actually not selectable while each exercise is. They are colored differently in order to be seen distinctive.

## Representative screenshots

## Individual Reflections

### Hyeong cheol

#### UI contribution

#### Difficulties

#### Implementation skill

### Seung hee

#### UI contribution

#### Difficulties

#### Implementation skill

### Tae soo

#### UI contribution

#### Difficulties

#### Implementation skill

### Min yeong

#### UI contribution

- **Logo image and title** We decided our service name to "Machoke", a character from Pokemon. And I downloaded its animated image(.gif), and made logo.
- **Header** In mid-fi prototype, we had few functions like add and show list. But we made calendar, statistics after, so I changed our header design for convenience. Our main functions are viewing today's plans, changing their states into "done", and adding or loading. I thought that they are all important and they should be runned in parallel. So I made the header into 'tap' design like kakaotalk.

#### Difficulties

#### Implementation skill

## Studio Reflections

You can go [here](https://docs.google.com/document/d/1Ti5ADdcaYSER7k4I_McWusfxXzvpgzDOh0VF05OcKIg/edit) and read DP6 feedbacks.

1. Some buttons are too small to click. (Especially in add page)
2. The function to change the order of workouts seems to need.
3. In the rest mode, buttons are too close.
4. To give alert when the rest time is too long might be good.
5. It is hard to count the weight or reps up by just one.
6. When user select the date in calendar, cannot know which date is selected.
7. Cannot delete the workout sets which have been created.
8. When done, does it need the rest time timer on the upper layer of the last 'done' set?