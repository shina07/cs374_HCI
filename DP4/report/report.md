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
Link: [https://pr.to/FIE74B/] [Prototype in proto.io].


<br></br>

Representative screenshots:
(screenshots after finishing prototype)

<div style="text-align:center" markdown="1">
<img src="resources/screenshot 1.png">
<el>Screenshots for Task 1</el>
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

<br></br>
#### ***[Studio Reflections]***

<br></br>
#### ***[Studio Presentation]***

<br></br>
#### ***[POV & Tasks]***

