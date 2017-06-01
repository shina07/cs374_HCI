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

In the studio session, we expressed our intention of carrying out user testing without any tutorial or training, since we thought intuitive UI is one of the strengths of our prototype. However, it was possible to observe that users cannot easily distinguish the difference between “ADD Button” and “CONFIRM Button” at the end of addition part, from the first two user testing. Our team intentionally placed those buttons at the end of addition for consecutive addition of sets and confirm at the end, but the label and UI design was not intuitive enough for user to catch the feature immediately. Thus, we explained the difference of the feature of the two buttons, and decided to inform the last test user about the functionality difference of the two buttons from the beginning. We structured this session contents in order to serve as tutorial.

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

Our team is planning to show out our gratitude towards participants by giving our starbucks or equivalent gifticon as we did in the previous user testings. (paper & low-fi prototypes)

> (...)

## Session observations

Our team went through a series of user testing, including three representative users. Short description and observation for each participant are written below.

### Participant 1

> **Junhwan, Choi**
>
> [youtube link](https://www.youtube.com/watch?v=qLfDViR6CWM) of screen captures video during the testing
>
> He is the current president of KAIST fitness club, LINE. At first glance, you might think that he is not likely to be fit to our target user population since our team put more weight on exercise beginners rather than experts. But before considering whether user is a novice or not, we are targeting users who want to keep their exercises recorded and users who want to conduct their exercise more systematically. In that point of view, he is the apt person who we are looking for. He takes exercise, 3 hours everyday, never missed any of his body parts. and also writes down what he does although he has already become an expert. Moreover, he is training new members in fitness club which allows him to concern more about exercise beginners. Most importantly, he is the one who checks every club member’s weekly workout notes. Therefore he understands how annoying the recording is, and agrees that our service really is of utility value.

#### Observations

- He sometimes doesn't tap 'NEXT' button before starting next set.
- He changes 'repetition' during exercising a lot. We have thought that many users will plan strictly, but he plans roughly and change details after each set of workout.
- He doesn't focus on the text. There are two buttons 'Add more set' and 'Go to main' after finishing all the sets, but he doesn't read the text and tap what he doesn't want.
- It takes a lot of time to add plans. He doesn't find the name of workout fast.
- He taps plan buttons in list instead of header. (These two buttons have same function.)
- He does well in using the timer for break time.
- He uses a large value of weight. To reach 62kg from 20kg, he taps + button 42 times.
- He doesn't plan all the workout he will do today, but plan one workout.

#### Interview

- It needs adding 'super set', which has various workouts in one routine.
- There are data for workout name already, but I think it is not good. It would be better if I can add workout to data.
- I think that recent plans should be in the top of the screen, but it is in the bottom.
- For timer, count-down seems better than count-up. I can save clicks if the timer is count-down.
- Rather than overwriting everything by the loaded contents, it seems better to append the loaded contents after what was already there previously.

### Participant 2

> **gunho, Park**
>
> [youtube link](https://www.youtube.com/watch?v=QWcvg062k-Q) of screen captures video during the testing

#### Observations

- He wonders the difference of 'add' and 'confirm' buttons.
- He taps the picture instead of workout name in 'add' page.
- He wants to plan the next workout during the break time. But the user cannot do anything during the break time in our service.

#### Interview

- Count-down timer seems better than count-up timer.
- How about showing timer smaller so that I can add next plans while timer is running?
- Timer for break time looks like a sub function, but it is overemphasized.
- There is a timer between sets, but not between workouts.
- Weight of Workouts using cable is large, but tapping buttons to change value one by one is tired.

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

- How about changing order of 'next' button and timer? I think it is better that 'next' button appears and then the timer is shown.
- I could type number directly when I add a plan, but I couldn't do when I edit it.
- The timer should be shown when 'add more set' button appears.
- Height of buttons is too small.

## Usability lessons



## Studio reflections

- The video or audio recording is better than just taking photo.

> Most of users didn’t want to be recorded in video or taken some photos, so we recorded the display of smartphone by using recording application for video.

- How would you take the user testing?

> We tested our users in real environment which means that the users did exercises in health club as usually they do.

## Plan for iteration
