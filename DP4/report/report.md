# Human Computer Interaction

### DP 4: Lo-fi Prototyping

<div markdown="6" style="text-align:right">
	<h4>TEAM: Oh-Hack-Nyun
    	<h6>Hyeongcheol Moon
        	Minyeong Yang
        	Seunghee Yoon
        	Taesoo Lim</h6>
    </h4>
</div>

<br></br>
#### ***[POV & Tasks]***

As it is stated in DP3, we will focus on the **people who want to record their exercises while they are working out**. Throughout several interviews, it was possible to notice that **recording of exercise record is annoying and inconvenient** regardless of writing devices such as papers or smartphones. These people would have the need of doing so easier and faster.
At this point, we want to clarify the terminology we mixed up in their usage. The first combination of terms which caused our ambiguous understanding in their difference is “workout” and “exercise”. We thought the two words are synonym, but those words actually have slightly different context. Working out and exercise both indicate the physical activities to enhance one’s body strength, but exercise usually indicates one specific activity or sports, while workout is inferring whole activity, consisting of several different exercises.
Each exercise needs different attributes to record, and these values depend on the nature of exercise. Most of muscle exercises would contain weight, reps(=repetitions), sets and interval(=resting period between each set, unit=seconds), but cardio exercise or abs routine(=abdominal muscle exercise) would need different attributes to record. These issues would be probably dealt in the process of redesigning thoroughly under our POV

<br></br>

**TASKS for prototype**

First task: Select and Add new workout plan

Alignment to POV:
Whenever a user wants to record an exercise, he/she has to select which exercise to be done, including all attributes. The user may record all of the workout contents, either before or after the workout. Since our main goal is to minimize the effort of recording the workout, this task is the most essential and primitive step to be done in our service

Description:
Since it is the most fundamental feature of our design project, it is somewhat mandatory to include as a task. One thing to point out is that user should click twice to add certain exercise: user select the body part first, and then choose the exercise corresponding to that body part (depth = 2).
Since this is lo-fi prototype, not all exercises are included and not all the categories of each exercise are specified. Some exercise may require another steps (depth >= 3). If so, we should utilize index tree figure in the selection of exercises to be added.

<br></br>

Second task: Change the state of each exercise (choose either Done/Edit/Delete)

Alignment to POV:
This task is about the feature that allows user to record fast and easier during workout. Our current prototype presumably contains many issues on usability, it is expected to find out the way to improve it.

Description:
It is assumed that exercise tasks are already selected and added in this step. Users are asked to mark the tasks as done, edit the attributes, or delete it to test the features supported by the system.

<br></br>

Third task: load previously-made workout plan

Alignment to POV:
By enabling users to save and load workout template, it is possible for user to record exercises within shorter amount of time. We noticed the fact that workout routines usually categorized by each body part, and the routines for the same body part are usually similar. By adopting the exercises and their attributes from the past records, it would be possible to minimize users’ effort for recording their exercises.

Description:
Users can load workout routines which are previously built by themselves. It is not reflected to our current prototype, but we will also allow users to choose to load from both “user-made” and “user-done”.



<br></br>
#### ***[Prototype]***

Prototyping Tool: proto.io

We chose “proto.io” as our prototyping tool for lo-fi prototyping. We had looked over all three prototyping tools suggested by the DP4 instructions: Marvel, InVision, and proto.io. Marvel seemed satisfactory considering this is the first time using it. Concepts such as screen and hotspots are quite straight forward and it was easy to make choices for “Action” and “Screen Transition”, since all these features are in graphical icons with good information scent. In case of working with InVision, it also looked acceptable to use because of its simple features and seemingly efficient UI.

However, we thought proto.io fit the best for our design aim and needs. Even though this is our first digital prototype, we still wanted to show what our service tries to achieve as much as possible. In order to fulfill our desire, proto.io seemed to be the best option for its built-in function to utilize tester’s input in rather dynamic fashion, nevertheless it requires more effort to make things work. In addition, proto.io supports “full-featured” trial for 15 days, which is enough time to finish our lo-fi prototyping, while others only support limited-feature with no time limitation. There was a limitation in the number of co-workers for most “limited-feature” tools, only proto.io let us to work all together on the same prototype page with different accounts concurrently. Moreover, other tools often required us to make all basic figures like buttons or menus into image files and import in the tool. All of basic figures, even both android and ios native, are provided in proto.io.

Yet, there are some limitations in proto.io as well. Even if it supports more than one user for each prototype project, they do not allow all users to edit simultaneously from different users. Unless the change is made from up-to-date version, the new commit of saving is aborted by the previous commit and all the changes is lost. Therefore, despite all members are working on the same project, they should work on different prototype and merge together later on.

<br></br>

Design choices

We made some noteworthy choices on which features to include and not to, and those choices are described below. We recommend looking over our digital prototype first and then check how we resolved. Our prototype can be accessed in the link below:

	[https://pr.to/FIE74B/] [Prototype in proto.io].


<br></br>

Representative screenshots:
(screenshots after finishing prototype)

<div style="text-align:center" markdown="1">
<img src="resources/screenshot 1.png">
<el style="text-align:right">Screenshots for Task 1</el>
</div>

Screenshots for Task 1

If you tap + button in the main screen, you can add  workout plans. Choosing a part of body first, and then you should select one workout in the list, which is shown in the first screenshot. The second screenshot is the screen that you can set weight and reps. If you tap “Add” button after setting number, one set will be added in below list. “Confirm” button moves the list of sets to the main screen, and it is shown as the third screenshot.

<div style="text-align:center" markdown="1">
<img src="resources/screenshot 2.png">
</div>

Screenshots for Task 2

If you swipe a plan, “Edit” and “Delete” buttons will appear. “Edit” button shows changing number interface so that you can change weight and reps. “Delete” button just delete the plan.

<div style="text-align:center" markdown="1">
<img src="resources/screenshot 3.png">
</div>

Screenshots for Task 3

If you tap right upper menu button, there will be “Load Routine” button. Then if you tap this, list of saved routines will appear. Right magnifying glass button is to show preview of its workout components, and left routine name is the button to load it. The last screenshot is after loading “Daily Abs” routine.

<br></br>

#### ***[Observations]***

<br></br>

#### ***[Paper vs Digital]***

| Summary of Changes  | Criticality  |
|---|---|
| There’s no way to count the time interval between exercises  |  Major |
| → Feature is added into the interval between two sets. Note that we examined that a number of users agreed that all they need is to track how long they rest from the end of a set until beginning of their next set. In our prototype, we assumed that a ‘counter’ starts incrementing right after user checked a set of exercise into ‘done’ but there exists remaining sets. The user can be notified how long they rest when they simply see it. Although this was not a critical aspect for progressing the tasks we had prepared, testers of our digital prototype gave a favorable comments that we have a timer in between sets.  |   |
| It seems there’s no other variations in attributes except weight and reps |  Major |
| → This is not yet fully considered since we did not feature every single exercise. In task 3 where user can load saved workout routine, weight attribute is omitted because we believed that the one is not necessary for its nature. In other words, we reflected this point in our digital prototype in passive manner. When we build a full-featured version of our service, we may need deeper analysis for each exercises, in order to determine which attributes should be deployed for each exercise.  |   |
| Users cannot know how many sets are added to the exercise plan list  | Major  |
| → This issue was carefully designed when we make our digital prototype since we thought it would be the one we have to concern a lot. In paper prototype we didn’t add any visual aid for user when one tries to add several different sets. In digital prototype, we provide a preview of added sets of exercise before they are placed in workout list. Also, we put confirm button which imparts all sets to the list we’re maintaining.  |   |
| Users have to change all of remaining sets’ attributes when they realized that they have to modify the amounts  | Major  |
| → A solution idea for this issue was suggested as if we can automatically change the attributes for the remaining sets in case when the user could not successfully finish the amount of work written in a set. If the remaining sets are planned to be tougher than the preceding set, we think it is reasonable to ask the user to change the amount for the rest to be milder. However, we agreed that we need more careful analysis for implementing this functionality to satisfy user. We thus kept this in mind, as a thing we would concern in our next design project iteration.  |   |
| It’s hard to recognize the way to delete one set among multiple sets  | Minor  |
| → Deleting a set of exercise is made in our digital prototype. To be more specific, we made it possible by adopting ‘swipe’ and press the delete button.  |   |
| User clicked load button when one should click “Show list” button (i.e. functions for each buttons are a bit confusing)  |  Minor |
| → This problem is induced because of the awkward use of taps positioned in the top side of the screen. We removed taps and only maintained add button which transit its screen to the one user can add exercise.  |   |
| Users cannot know the number of sets already done in the list  | Minor  |
| → We examined this issue which was raised from paper prototyping tests, and we will hold value for the already done sets when we build next prototype with high fidelity.   |   |
| Participants of paper prototype-testing thought that the process of “Add”, our main feature, as a process of workout completion, not a process of workout planning.  |  Minor |
| → The method we’ve dealt with was explained in the Design Choice. We did reflect the solution for this issue but we have to acknowledge that this issue has risen because our interface somewhat lacks good information scent in the process of adding exercise. Because adding exercise would be our core function as well as our core user interface, we’ll put more efforts on this problem throughout upcoming projects.  |   |
| It’s hard for user to change the weight detail when one thinks the level of difficulty is too high or low.  |  Minor |
| → We added the feature of changing the weight after the set is added to the list. We have made this work by swiping and then editing but after conducting prototype testing with digital prototype, we realized that we still need to analyze more about usability issue for this problem.  |   |
| The indication of the current state is rather weak.  | Minor  |
| → Current state comes with the tab selection but we deleted the unnecessary tab menus. We suppose this problem no longer exists.  |   |

<br></br>
#### ***[Studio Reflections]***

- I don’t know some exercise terminology like biceps, what about adding some picture?
	- Now we are considering to add some photos of human body parts for each exercise to indicate what the exercise is for
- I wish there are some photos or videos for each exercise
	- We added some explanations for exercise by including youtube link in our revised Lo-fi prototyping.
- I wish I can “type” the numbers in reps, not only scrolling up and down.
	- Feedbacks from user-testing suggests us to consider the changes in UI, and this issue is one of them. We are planning to allow both scrolling and typing in reps section, similar with android alarm clock.
- How can I go back while planning the workout? (task 1, 2, 3)
	- Actually, going back to previous page is already implemented in the current version of prototype. Our understanding of this question is to move the page back and forth with preserving the state that user changed. This would be the implementation issues.
- It is difficult to navigate through the interfaces
	- As it is mentioned above, we are considering to change our entire UI in the way of becoming more intuitive and easier to navigate, because of this kind of issues. 
- Maybe too much sub-menus. You could use a diagram of human body and make each muscle area clickable?
	- Combining this with the first feedback, we may need to add a human body image in order for user to easily choose what parts of body they want to train.
- Cursors are uncomfortable to use
	- It was quite obscure for the meaning of “cursor” in this feedback. We concluded that the cursor means what is supported from the prototyping tool we adopted, proto.io. it is, in fact, uncomfortable to use the cursor, but it would not appear in actual implementation.
- I need a DELETE button in the workout plan setting page for clicking ADD button by mistake
	- It is good point that we included the DELETE button in the page for already planned not in the planning page. We are going to add this button.
- Abs도 무게 넣고 할 수 있어요
	- Since it is low fidelity prototype, we didn’t implement all the parameter for each exercise. In fact, we are planning to support customizing for each exercise task, so users may choose whether they include the weight or not
- Guidance for each task are very helpful
	- Thanks!
- It seems the design is for training experts
	- This is perhaps because the UI is not intuitive enough. Maybe we should include more explanations, which is already suggested above. Our new design should cover this issue as well.
- 서로 다른 태스크들이 너무 균일한 인터페이스 하에서 진행됩니다. 태스크의 차이를 구분할 수 있는 id같은 것들이 존재하면 좋을 것 같아요 (eg. 색상)
	- We should think about the easily-detectable difference between each page, but this issue is also about lo-fi prototyping and testing. We should avoid this issue in revised design.
- It is not clear what the difference between done and plan is
	- We deleted “DONE BUTTON”, and added “check all” function in plans list so that the user can check the all workouts to success, instead. This action supports what we previously intended in “DONE BUTTON”, but now it is more intuitive. 
- It was hard to recognize which state, and what should I do with these contents. For these problem, I suggest you to do navigation process bar.
	- It might be critical to notice users the current state with process bar, but it was not easy to design good navigation process bar. We may include it for our revised UI in next version.



