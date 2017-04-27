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


***Justification for Design Choices***

1> Build prototype  as if our digital prototype were a series of ‘tutorial’
→ We’ve made our digital prototype by emulating the previous paper prototype, with the feedbacks we have earned from several users. But one noticeable thing in our prototype is the fact that we included sky-blue boxes which indicate testers to be informed about what they should do with our prototype. Those are not what design project description required us to make but we thought they are nice as they can function as ‘index cards’ used in paper prototype. Since they don’t directly describe how to walkthrough, we don’t think those boxes are lowering our prototype quality. It turned out they are actually helpful for us to carry out testing with users although they make our prototype slightly different from what the real webpage actually would be.

2> Grid-type selection
→ Rather than showing lists of exercise names, we featured layers of grids. Since there are a lot of different exercises, it would be annoying if we don’t manage the list of exercises seriously. We therefore adopted index structure on body parts and exercise types so that user can select one of exercise by clicking two or three times.

3> Scrollable oneth & tenth digits
→ This is the one we agonized a lot in order to improve usability. The value of attributes can vary but if this has to be chosen manually, using method such as pressing up/down buttons or scrolling a single scrollable range, user has to put much effort on each value. By dissecting the oneth and tenth digit, we allowed user to select wide range of integer value for each attribute of exercises. We believe that our decision has improved in terms of efficiency and provide a big reason for user to facilitate.

4> ADD and Confirm discrimination
→ This feature is made in order to support our feasible user to keep “set” variable for each exercise. Note that one can do his/her many sets of exercise but each set can be composed of different weight and reps. Thus if we only provide the user to put how many sets he/she will do, that does not make sense.
 
5> Reason for ‘Check All’ button for exercise sets
→ Our team contemplated the issue that some users could not a lot because this could be the most important observation among those from paper prototyping tests. As we tested multiple users, some testers were frustrated and raised question about the purpose of recording. They wondered WHEN exactly the user select up one’s exercise record, either before starting up the exercise as ‘plan’ or after exercise has been done. Genuinely, it was a controversy that some people want those to be set before the exercise thus the user can simply click them as ‘Done’ during workout. Others want those attributes to be set after exercise because those weight, reps and set attributes can often be changed. In order to satisfy different users with different perspectives, we stick to our method as to keep attributes of exercises as ‘plan’ so that we can also keep consistency in way analogous to the function of loading pre-defined workout routines, but added ‘select all’ button on each exercise on the list. Therefore, the user who adds exercise to the list after they actually finishes few sets of exercise can also use our service without any awkwardness.

6> Swipe edit/delete & Focus after check
→ We agreed that if user use our service with mobile browser, swiping is rather reasonable way to change a set’s status. Thus we put edit/delete function in swiped set.




***Things not selected by the team***

1> Limited Selectable items
→ After one decides to add a new workout, grid elements indicating each body part are featured. At this moment, we did not make all of them possible to be selected in our prototype. We believed that if we can build one body part among many different body parts, we can easily make others similarly. In other words, we reckoned that making those rather similar buttons are redundant but time consuming so we avoided featuring them all. We announce tester to select one of ‘chest’ exercises 

2> Omit supporting user-defined exercises 
→ After selecting ‘chest’, eight different exercises are shown and ninth grid is a button with plus(+) object positioned on its center. This smells like the user might can add user’s own. Yes, the button shows a popup if user clicks it but currently the prototype does not allow user to add or utilize user’s own exercise. Yet feature is needed if it were a real service, we thought it’s not really worthy at this point. We tried to focus on adding one of exercise, but it’s not necessarily be the user-driven one.

3> Changing default attributes for each exercise not supported
→ After selecting one chest exercise, amount for weight and reps are shown as default. We excluded the method that let user possible to edit which attribute to be kept. We thought that the feature is needed but we believe there’s not much usability issue for that, so we excluded it.

4> Timer
→ We examined that every target user we tested stressed that they do care about the time interval they’re resting in between sets of exercises. Thus we put the timer which appears right after the user clicks and changes a state of a set of exercise to ‘Done’. Timer should be counted until user starts next set. However we did not make our timer functional yet, due to technical issue. 

5> Hard-coded data
→ When user records multiple sets of exercise in Task1, every attributes for each set have different proto.io variables in order to hold values to be used in the other screens. Since we did not care any about internal design, variables are hard coded and each set retains more than 4 variables. In addition, user cannot add more than 5 sets since we blocked the action of adding set after set 5.

6> Loading - user cannot store
→ Until now, user can retrieve workout routines from predefined plan but there’s no feature allowing user to set exercises and their attributes manually. We assumed that user already had made up routines before when loading workouts in our Task 3. Not yet been implemented but this is one of the important user-driven issue (One told us he really need a function of loading routines into list because he always do almost same routines), we’ll manage this issue in upcoming project.

<br></br>
Additional instructions for digital prototype:

When you access to the above link, distributed version of proto.io will be loaded and blank page containing a “blue plus circle” button. This is the very first page where user keeps track on his/her workout ‘plan’.
In digital prototype, we featured as if one plans his/her workouts and can change conditions of each set to either done or delete with simple one-click.
Tasks are serialized and description for each tasks are embedded in our prototype. Tester can follow the instructions written.
Feature not covered in our three tasks are timer and ‘select all’ button. Those are described above about the reason why they are needed and why they are not yet fully implemented.
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

- They tapped the arrow icons instead of dragging numbers to change the number of weight and reps. (P1, P2, P3) - criticality : high

We will change the interface of changing number. The possible ways can be like typing directly and tapping + or – number, similar with android alarm clock.

- He (one of testers for user-testing) tapped for a while the plan that should be edited instead of swiping it. (P1) - criticality : high

Swiping to delete might be acceptable, but swiping to edit is not easy to detect. We will change this interface in the way that users can edit a plan by tapping it.

- He tapped + button to load a workout routine. (P1) - criticality : high

“Load routine” is one of the key features in our service, but it is hidden in the menu bar. We will move this button to the main screen.

- User kept tapping the preview button and then tapped following popup to load a workout routine. (P2) - criticality : high

If user can add title or tag to routines, the preview button is unnecessary. Then we can remove preview button.

- Sometimes the user just want to do the exercise as much as he can, so he wanted to add exercise task without reps (P1) - criticality : medium

We may need to add “free” option before number 0 and set it as default, so that users can add the exercise without any number.

- They didn’t know there was timer function. (P1, P2, P3) - criticality : medium

Timer is too small and its color is similar with background color so that it is not easy to notice. We will make timer more visible and then test its usability again. All of our participants said that they always use timer while break time between each workout.

- He felt difficult to know each exercise when he added a workout plan. He suggested to show pictures and descriptions for each workout.

We better to include some symbolic picture for each exercise. However, we still need to test this again after we add the pictures, since even the picture is possible to be not effective.

- Setting weight and reps every time is a waste of time. He suggested flexible default values which system recommends to user. (P3) - criticality : low
- It takes a lot of time to drag number. (P1, P2, P3) - criticality : medium
- He saw “Calendar” button and asked why this button doesn’t work. We didn’t make this function in lo-fi prototype, but he really wanted calendar. (P3) - criticality : low

We have planned showing calendar and will add it later.


<br></br>

#### ***[Paper vs Digital]***


- Types of usability issues

Learnability of paper prototyping is lower than one of digital prototyping. Because digital prototyping uses the real devices, it can show the components like UI button, input field and text box more easily while paper prototyping has limit to do that.

Efficiency of paper prototyping is also very low because the user must wait until the facilitator completes some actions. During waiting time, the user tends to lose focus to our UI and as a result not to recognize what he or she should do at next step.

In paper prototyping, there is no possibility that errors can occur because only some actions is allowed for user to use, so safety of paper prototyping is much higher than digital prototyping where the user can act not intentionally and crash the prototyping so we have to refresh entire digital prototyping.

- Participant’s reaction and expectation

User can easily acts like using real service since he/she uses real device like pc or smartphone. For example, our participants didn’t “swipe” a plan to delete it in paper prototype test, but two of three participants naturally swipe in digital prototype test. Also, they were burdened to press any region (even though it looks clickable) in paper, but in digital prototyping they feel more comfortable to click anything that seems to be able to be clicked. They just do trial and error in easy mind for digital prototyping.

- Summarize what changes we made in the digital prototype based on the feedback from paper prototype testing

Below table shows the previous observations when we’d faced with paper prototyping tests and the ways we had manipulated with those problems. Most of the issues pointed out in the paper prototype were dealt in our digital prototype. Descriptions for those reflections follows:


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



