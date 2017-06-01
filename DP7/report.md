# DP7 : User Testing

## Written protocol

### Instructions for preparation

#### Place

**Health club at KAIST** (Anywhere users prefer is OK)

The reason why the place of experiment is a health club is that we can focus the user’s actual usage for our application in real environment without any interference by unfriendly situation.

#### Expected time for each participants

About **30minutes**, not included interview time. (It is very loosely appropriated so that users don't have to care about the time limit.)

#### Recording

Using smartphone, we record the entire session that users take the experiment on video.

#### Individual roles

1 facilitator and 3 observers (Except facilitator and one observer who record the participant, the others should take a distance to the user in order for user to concentrate their workout.)

**Facilitator** : Seunghee

**Observers** : Minyeong, Taesoo, Hyeongcheol

#### URL

URL of our prototype is [here](https://project-oh-hack-nyun-4a19e.firebaseapp.com).

> URL : https://project-oh-hack-nyun-4a19e.firebaseapp.com

#### Environment

All users must the same device for testing. Don’t let users use their own device. Prepare one of laptop or mobile device before. We highly recommend to use mobile device not laptop unless there is some problem.

- In mobile **[Recommended]** - Chrome.
- In laptop - Chrome browser. Only using mobile mode in development tool(shortcut: F12). Toggle device toolbar(shortcut: Ctrl + Shift + M) and select "Galaxy S5" at leftmost dropdown menu in device toolbar header.

#### Accounts for test

The ID must be made before the experiment depending on the user’s unique number like student ID. So, collect the student ID or some unique number (not just ordering) for “userID” space.

The reason why we don’t use just the order number for “userID” is that users don’t have to know which order they take the experiment. This might affect to the user’s mentality. So we should avoid the ordering effect.

> ID : test_userID / PW : 1234

#### Pre-dataset

There should be pre-dataset in test account.

> 3 past days, 2-3 workouts for each day, 3-6 sets for each workout, no plan at the day.

### Introduction

> Your workout is a real training session only if you have specific goals, a planned vision of progress and a way to measure your results. From this reason, some people record their workouts. However, tracking workouts is an annoying task Our team focused on **How to Track Your Workouts in the Simplest, Most Effective Way Possible**.
>
> MACHOKE - your workout note - is designed for providing technical aids to reduce the troublesomeness of recording workout results and to make the process of tracking each exercise details easier.
>
> And we want to test the usability of our product by this user testing, and get some feedbacks.

### Informed consent

> I confirm that the participant was given an opportunity to ask questions about the user testing, and all the questions asked by the participant have been answered correctly and to the best of my ability. I confirm that the individual has not been coerced into giving consent, and the consent has been given freely and voluntarily.
>
> print the name of researcher/person talking to the consent: O O O

### Turorial or training



### Task list

#### **Task 1**: Log in and add new plans

> First, you can log in our service with this given test acount, ID is 'test' and password is '1234'. Next, in the main screen, please tap 'add new workout' button, and add plans you want to do.

#### **Task 2**: Complete workout plans

> If you fininshed to add plans, select one of the plans and start exercising. Please tell us if you have any difficulties until you do all the plans.

#### **Task 3**: Load previous plans

> You can load a list of plans you have done before. Open the calendar, and then, try to load plans you did on 29. May.

### Questionnaires

#### Overall

- Give us a short comment, review or anything that comes in your mind, please.
- Did you find our service useful? If so, which features or aspects were impressive?
- Was our overall design (including buttons, header, front page, etc) looked fancy enough?
- Is there anything you need while doing exercise, which is beyond our service?

#### Adding plan

- Was there any inconvenience while adding new workout plan? If so, let us know so that we can improve our service.

#### Daily plan list & Recording exercises

- How did you like our list view which showed each one's daily routine?
- Was there any notable inconvenience while doing an exercise with our UI?
- How was our timer which showed your rest interval between sets? Was it learnable?

#### Loading workout routines from calendar

- How do you often do workout routime that is similar to the one you'd done in the past?
- How did you like our calendar? Was there any good or bads?
- Did you find any inconvenience while loading?

### Debrief prompt

Our team is planning to show out our gratitude towards paricipants by giving our starbucks or equivalent gifticon as we did in the previous user testings. (paper & low-fi prototypes)

> (...)

## Session observations

> Participants: Who are they? How did you recruit them? Why are they representative target users? Add brief demographic, context information about each participant that is relevant to your interface.

> Use at least one photo or sketch for each participant and provide a summary description of each session (e.g., What was unique about this participant? Main takeaway from this participant?).

### Participant 1

> **Joonhwan, Choi**
>
> [youtube link](https://www.youtube.com/watch?v=qLfDViR6CWM) of screen captures video during the testing

#### Observations

- He sometimes didn't tap 'NEXT' button before starting next set.
- He changes 'repetition' during exercising a lot. We have thought that many users will plan strictly, but he plans roughly and change details after each set of workout.
- He doesn't focus on the text. There are two buttons 'Add more set' and 'Go to main' after finishing all the sets, but he doesn't read the text and tap what he doesn't want.
- It takes a lot of time to add plans. He doesn't find the name of workout fast.
- He taps plan buttons in list instead of header. (These two buttons have same function.)
- He does well in using the timer for break time.
- He uses a large value of weight. To reach 62kg from 20kg, he taps + button 42 times.
- He doesn't plan all the workout he will do today, but plan one workout.

#### Interview

### Participant 2

> **geonho, Park**
>
> [youtube link](https://www.youtube.com/watch?v=QWcvg062k-Q) of screen captures video during the testing

#### Observations

- He wonders the difference of 'add' and 'confirm' buttons.
- He taps the picture instead of workout name in 'add' page.
- He wants to plan the next workout during the break time. But the user cannot do anything during the break time in our service.

#### Interview

### Participant 3

> **daehyeong, Lee**
>
> [youtube link](https://www.youtube.com/watch?v=TIMOxgBq7p8) of screen captures video during the testing

#### Observations

- He types the number of weight directly, not using + or - buttons.
- He sometimes misses tapping 'next' button.
- He taps image of button when adding plans, but it doesn't work.
- He only adds one set for one workout, then uses 'add more set' until it is finished.

#### Interview

## Usability lessons



## Studio reflections

- The video or audio recording is better than just taking photo.

> Most of users didn’t want to be recorded in video or taken some photos, so we recorded the display of smartphone by using recording application for video.

- How would you take the user testing?

> We tested our users in real environment which means that the users did exercises in health club as usually they do.

## Plan for iteration
