# DP7 : User Testing

## Written protocol

### Instructions for preparation

#### Place

**Fitness center at KAIST** (Anywhere users prefer is OK)

The reason why the place of experiment is a fitness center is that we can focus the user’s actual usage for our application in real environment without any interference by unfriendly situation.

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

> Your workout is a real training session only if you have specific goals, a planned vision of progress and a way to measure your results. From this reason, some people record their workouts. However, tracking workouts is an annoying task. Our team focused on **How to Track Your Workouts in the Simplest, Most Effective Way Possible**.
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

Because we will test the users who do their workouts, we will not specify the detail of plans. workout name, number of sets, weight and repetitions all depend on the participants. Then, we can observe usability issues like if they can find workouts they will do easily, and if they plan and exercise, or exercise and plan.

> First, you can log in our service with this given test acount, ID is 'test' and password is '1234'. Next, in the main screen, please tap 'add new workout' button, and add plans you want to do.

#### **Task 2**: Complete workout plans

This task is closely connected with task 1. After the users add all the plans, they can open 'exercising' page by tapping a plan. It includes video help, progress bar, editing plans, and timer.

> If you fininshed to add plans, select one of the plans and start exercising. Please tell us if you have any difficulties until you do all the plans.

#### **Task 3**: Load previous plans

We will use our test accounts because the participants doesn't have any history. There already exists pre-dataset, so users can experience how to load previous plans.

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

<br/>
## Session observations

Our team went through a series of user testing, including three representative users. Short description and observation for each participant are written below.

### Participant 1

> **Junhwan, Choi** (Male, 22 years old)
>
> [youtube link](https://www.youtube.com/watch?v=qLfDViR6CWM) of screen captures video during the testing
>
> He is the current president of KAIST fitness club, LINE. At first glance, you might think that he is not likely to be fit to our target user population since our team put more weight on exercise beginners rather than experts. But before considering whether user is a novice or not, we are targeting users who want to keep their exercises recorded and users who want to conduct their exercise more systematically. In that point of view, he is the apt person who we are looking for. He takes exercise, 3 hours everyday, never missed any of his body parts. and also writes down what he does although he has already become an expert. Moreover, he is training new members in fitness club which allows him to concern more about exercise beginners. Most importantly, he is the one who checks every club member’s weekly workout notes. Therefore he understands how annoying the recording is, and agrees that our service really is of utility value.

#### Summary description

Frankly, the time when we first contacted Junhwan and until the last minute before the actual testing, he didn’t look happy at all. When we asked, ‘Aren’t we disrupting you?’, he responded bluntly, ‘Yes, you are, a bit’.  However, after conducting prepared tasks while doing an actual exercise, he expressed his idea actively, with his face flushed with excitement. Since he was our very first tester to be tested while doing user’s actual workout, and was murmuring in a rather brusque tone, we were indeed nervous at the beginning. However, we relieved after he showed a bright face, saying, “Overall, really nice”. In one sentence, he told us that our service seemed complicated than he thought but it will be good enough if the user get used to it.

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

> **gunho, Park** (Male, 23 years old)
>
> [youtube link](https://www.youtube.com/watch?v=QWcvg062k-Q) of screen captures video during the testing
>
> He is current training manager of KAIST fitness club, and the reasons we recruited him are almost same with the reason we described for the tester #1. Although he does not currently recording his own exercises (it’s because he is an expert, and because he prefers to do exercise extemporaneously these days, in other words, he does exercise in improvised manner), he can reflect our target user since he wrote his own for years, right after he first started his exercise.

#### Summary description

There were some issues which Gunho had pointed out when he tested our service in our prior DP: paper prototyping, but not reflected. What he had said was, he is so spontaneous that he usually not ‘plan’ how many sets he would do before an exercise starts. The issue was seriously considered but we sticked to ‘plan’ exercise sets scheme in order to reduce button clicks during exercise. Meanwhile, our service evolved much so that we can also cover user like Gunho, but we realized that we still need more concerns for those users. When we inspected, Gunho just planned only one set, saying that he would not know how many sets he would do at that moment, and added another set every time he had done with a set but wanted to do more. In fact, that’s not what we expected and sadly our user kept facing with repetitive pop-up, asking whether it’d add another set or not, before showing rest interval time. This reported issue left our team to revise some part of our UI.

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

> **daehyeong, Lee** (Male, 28 years old)
>
> [youtube link](https://www.youtube.com/watch?v=TIMOxgBq7p8) of screen captures video during the testing
>
> We have been happy to meet with Daehyeong since he was the one and only person among our previous user testers, who knows what HCI field and its research is. As an Industrial Engineering student, He has worked as a developer for 4 years as an alternative military service, he now works for an IT company NextMatch which is famous for AMANDA, the well known social dating app. He told us that he took HCI course before and has shared expansive conversation regarding our service. But that’s not the sole reason we recruited him as our third user to be tested. He is also a member of KAIST fitness club, starting from this semester and he’s currently recording all his exercises using his smartphone memo app. He disclosed that he feels annoying, each time he writes whole thing regarding exercise that has been done. Undoubtedly, he is the one who we are looking for.

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

<br/>
## Usability lessons

1. It seems to need a function to be able to add the customized exercises.

> Task 1. Low. P1
>
> One of users said that “Why is the exercises already made? Does it need to be?”. When we heard that, we can know we don’t need to give all the exercise form to user. If a user want to some exercises, then just let the user be able to make own exercise form.Because the exercise form is very simple, it won’t be problem. We only need to give basic exercise form in order for novice users to easily make their own workout records. So, we’re going to add this function to make users be able to have their customized exercises.

2. The up and down buttons for changing value is limited to just up or down only by one.

> Task 1. Medium. P1, P2
>
> This problem has been continuously raised. To fix this problem, actually we added the typing mode to change the number value for exercise parameters. But we think users felt this is not enough. Because the user is always correct, we’re going to add the up and down buttons which can add the number by 5 in add section. We hope this is enough otherwise we may have to add the +-10 buttons.

3. It is inconvenient that newly added exercise is not focused automatically. It hides below the previous added exercises.

> Task 1. Medium. P1
>
> If a user adds new sets and had a lot of sets already, the added sets may not be shown unless the user scroll down. To fix this issue, we thought two solution. One is to add new sets to the beginning of the list not the end. The other is to automatically focus the screen to current set which should be done now. The former solution might let the user confuse because the sets order and exercises order are completely different so we rejected it.

4. The default value of each exercise should be different.

> Task 1. Medium. P1
>
> We set the default number value for exercise parameters to 10. But the problem is all exercise is really different so their default parameter value should be different. To do this, we should find the adequate parameter number for default value of each exercise and set this default. This default value can be modified depending on the last value which the user set while doing exercise.

5. Images in ‘add’ looks clickable, but it doesn’t.

> Task 1. High. P2, P3
>
> In page for adding plans, there are workout names and their corresponding images. We first made these images move if the user clicks them. They are clickable, but it just show a simple animation. In user testing, we observed that participants like to click image than text because image is bigger than text. So, we decided to delete animation from the images and will change them clickable (so that it can change url).

6. There is no need that the back button in timer is big.

> Task 2. Low. P3
>
> There is ‘back’ button when the user taps ‘done’ and timer appears. Its size is same as other buttons but its color is emphasized, so it is obtrusive. However, no one used this button during user testing, and one asked why ‘back’ button exists. We realized that there is no need that the back button is emphasized, so we decided to make it smaller than now. Or we will throw this button, and add ‘x’ button, which closes the timer.

7. The readability of the description text on the timer screen is bad.

> Task 2. Low. P1
>
> In case that the user complete the whole set of one exercise, the user have to choose one of the buttons which are “Go to main” and “Add more set” button. We thought the name of button is not enough for user to recognize what the button do. So, we added a description text above buttons. But in practice, all of the users didn’t read description text. They just click one of them in not knowing what the button do. We think the reason is because of visibility of the description text. It can’t capture the focus of users. Now the color of the text is white and the size is small, so we think we should change the color and size in order to let the user read this text.

8. Second tab was not used at all.

> Task 2. Low. P1, P2, P3
>
> Second tab shows the current set which the user have to do. But most of users didn’t use second tab but just click the set in first tab, main list of workout.
We now think the reason of why users don’t care this tab is because the icon of second tab doesn’t have clear meaning. Therefore we should change the icon of second tab or add some texts below icons to give more clear meaning to user.

9. There is a timer between sets, but not between workouts.

> Task 2. Medium. P2, P3
>
> At first, we expected that if the user do all the sets for one workout, he/she would pick the next workout from the list. But our participants asked why there is no timer between workouts, and they said it is needed. So, we will add this feature soon, and there will be three buttons after the last set, ‘add more set’, ‘go to main’, and ‘next’.

10. In the page of resting interval, it would be better to go to the next set automatically after designated resting time.

> Task 2. High. P1, P2, P3
>
> Current implementation of measuring resting time is to count up from 00:00. This way of design was based on the consideration that different users might have different resting time. We basically let user to decide when to move on to the next set. What we did not notice, however, was the point that users must pick up the cellphone and press “Next Button” every time they go to the next set. This usability issue implies the necessity of “counting down” of measuring resting time, and automatically move to the next set when the count reaches to 0.

11. The user wants to do something in rest time. But now the timer occupies the entire screen so the user can’t do anything in our application during rest time.

> Task 2. High. P2
>
> There is ‘back’ button when the user taps ‘done’ and timer appears. Its size is same as other buttons but its color is emphasized, so it is obtrusive. However, no one used this button during user testing, and one asked why ‘back’ button exists. We realized that there is no need that the back button is emphasized, so we decided to make it smaller than now. Or we will throw this button, and add ‘x’ button, which closes the timer.

12. Rather than overwriting current workout lists by the loaded contents, it seems better to append the loaded contents after the current workout.

> Task 3. Medium. P1
>
> We implemented the load functionality based on the assumption that the user would load workout lists before starting workout. It is quite obvious, however, for user to suddenly think of what he/she had done before while working out, and load the workout lists with some workout done already. Otherwise, user might suffer from the consequence of deleting all the list of done exercises by loading feature, if the user doesn’t know that the loading would overwrite everything by loaded contents.

### High-level reflection



<br/>
## Studio reflections

- The video or audio recording is better than just taking photo.

> Most of users didn’t want to be recorded in video or taken some photos, so we recorded the display of smartphone by using recording application for video.

- How would you take the user testing?

> We tested our users in real environment which means that the users did exercises in the fitness center as usually they do.

- How about the users who exercise not in gym?

> It doesn’t matter. Whoever does exercise can use our application wherever they want because we just simply give the exercise forms, workout list, the previous records. Just use when you want!

<br/>
## Plan for iteration

