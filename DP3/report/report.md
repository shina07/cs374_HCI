# Human Computer Interaction

### DP 3: Paper Prototyping


<div style="text-align:center" markdown="1">
<img src="resources/title.png">
</div>


<br></br>
#### ***[Participants]***
participant #1
- Born in 1999, Male, recently joined to workout club in KAIST
- Exercise experience:
	- Registered gymnasium for personal training during the winter vacation for the last year of high school
	- About a month of rest, and joined to KAIST workout club
- Experience of recording workout status
	- First time after joined the club
	- Doesn’t know what to write down at the beginning
	- Just write down on paper.
	- For each workout section, record sets, reps, and amount (mostly weights)

participant #2
- Born in 1996, male, recently joined to workout club in KAIST
- Exercise experience
	- Lightly worked out 2 years ago, while leaving of absence from school
	- Doing exercise in dormitory gym in fits and starts
- Experience of recording workout status
	- First time after joined the club
	- He is using workout report template provided by the club
	- The cell size for table in the template is too small for him.

participant #3
- Born in 1994, male, chief staff for training in the workout club in KAIST
- considered as EXTREME USER
- Exercise experience
	- Has been doing exercise 6 days per week for 4.5 years.
- Experience of recording workout status
	- Has been written down all the workout report for 4 years.
	- Recently quit writing down since he felt he doesn’t need that anymore.

<br></br>
#### ***[Briefing]***

Since we had tested three Korean users, we carried out user testing with briefing and tasks written in Korean. Therefore, we leave our briefing and tasks in both Korean and English version to include the scripts that had been actually used in our actual testing.

Our team is planning to do a simple test for people who are learning exercise systematically or recording workout contents for management of personal training. This test will spend about 15 minutes, and the result will not be exposed to anywhere other than reflection on UI design. We deeply appreciate your time for this test, and are welcome to hear any positive and negative comments on the UI design for the testing.
The test that will be done now is about experiencing mobile web interface designed to reduce down the tiresomeness of writing down workout contents while doing exercise. Our team is under consideration of designing UI optimized to record workout routine and result easy and fast. Since the project is in the beginning, the user testing is not taking place with its designated environment of actual workout session, so please imagine that you are currently working out now.

Now, test begins

저희는 운동을 체계적으로 배우고 있거나 자기관리를 목적으로 본인의 운동 내역을 기록하고 계신 분들께 간단한 테스트를 진행하고자 합니다. 본 테스트의 소요 시간은 15분 내외이며, 결과에 대해 사용자 테스트 외 목적으로 사용되는 일이 없으니 안심하시고, 긴장하지 않은 상태에서 테스트에 임해주시면 됩니다. 귀중한 시간을 내주셔서 감사 드리고, 테스트를 마친 뒤에 떠오르는 생각이 있으시면 긍정적인 의견, 부정적인 의견 상관없이 자유롭게 이야기해주시면 감사 드리겠습니다.

오늘 해보실 테스트는 웨이트트레이닝 운동 중 본인의 운동 내용을 기록할 때에 번거로움을 최대한 줄여보려는 시도에서 출발한 모바일 웹 인터페이스입니다. 저희 팀은 쉽고 빠르게 복잡한 운동 루틴을 기록할 수 있는 디자인을 고민 중에 있습니다. 프로젝트 초기 단계이기 때문에 아직까지는 실제로 운동을 하면서 테스팅을 진행하지는 않습니다만, 본인이 운동을 하고 있는 중이라는 상상을 하면서 테스팅을 해주시면 감사 드리겠습니다.

그럼 테스팅을 시작하겠습니다.


<br></br>
#### ***[Tasks]***

In English:

1. Select and add exercises.
	a. Select exercises for today and add to exercise schedule.
    b. Schedules for today: body part focusing on: chest muscle, exercise: Barbell Bench Press
	c. Weight: 10 kg, reps: 10 times, 2 sets

2. For the added exercises, try editing, deleting the task, or marking them as completed
	a. Do exercise following the schedule
    b. Mark as complete if the exercise task is done, and change the task if it is stopped
    c. Try deleting all the tasks marked as completed with reset button

3. Load workout routines (workout sets which had been done before)
	a. Reload all workout sets saved before
	b. Reload exercise schedule: abdominal muscle exercise routine 1
	c. Try completing all the tasks in the reloaded schedule.


In Korean:

1. 운동 선택해서 추가
	A. 운동 목록 중 오늘 할 운동을 골라 운동 계획에 추가해보세요
	B. 오늘 할 운동 부위: 가슴, 오늘 할 운동 이름: Barbell Bench Press
	C. Weight: 10kg, Reps: 10 times, Sets: 2

2. 추가된 운동에 대해 운동 후 완료처리/수정 혹은 삭제 지시
	A. 계획에 맞게 운동을 진행해보세요
	B. 운동을 마무리 한 경우 완료, 중도에 멈춘 경우 내역 수정
	C. 운동 마무리 후 운동 계획들을 리셋해보세요

3. 운동 루틴들 (기존에 했던 운동들의 저장 항목들) 불러오기
	A. 기존에 저장했던 운동들에 대한 저장 항목들을 불러와보세요
	B. 불러올 운동: 복근운동 routine 1
	C. 운동 진행을 마무리 해보세요


#### ***[Prototype]***

<div style="text-align:center" markdown="1">
<img src="resources/prototype 1.jpg" width="40%">
</div>

In the beginning, our UI simply shows two tab like selectors and one button each of which indicates list for all kinds of exercises, personal plan for one’s exercise and reloading option for previously saved workout patterns.

<div style="text-align:center" markdown="1">
<img src="resources/prototype 2.png" width="40%"><img src="resources/prototype 3.png" width="40%">
</div>

For the first task, user starts with pressing ‘목록’ in the very first view. Each grids indicate which part to choose for. Let’s say we pressed ‘가슴’.
After choosing which part of the body to be stimulated, we can choose an item from grids indicating exercises that are classified under that part of the body. Let’s say we chose ‘Barbell bench press’.


<div style="text-align:center" markdown="1">
<img src="resources/prototype 4.jpg" width="40%"><img src="resources/prototype 5.jpg" width="40%">
</div>

A pop-up for adding the exercise to personal plan shows up and user can select weight as well as reps on that popped up page. Note that we separated tenth digit and ones place that user can select weight and reps within little clicks or touches. Note that Reps stands for repetitions.

When ADD button is pressed, a set is added to one’s workout plan. Note that the number of button clicks indicate the number of sets the workout has been planned. This ‘each-click-for-setting-sets’ feature was designed because it is common that each workout set can be consists of different combinations of weight and reptitions.


<div style="text-align:center" markdown="1">
<img src="resources/prototype 6.jpg" width="40%">
</div>

After additions, those attempts are reflected in plan section. The user now can check or modify the number of repetitions. If the number of repetitions has been diminished and then checked, the bar would be colored differently, indicating that user could not finish the workout plan.


<div style="text-align:center" markdown="1">
<img src="resources/prototype 1_load.png" width="40%">
</div>

If the room for plan is empty, we provide a special feature, namely ‘불러오기’ so that user can retrieve past record settings(or patterns). Let’s say the button is being pressed.


<div style="text-align:center" markdown="1">
<img src="resources/prototype 7.png" width="40%"><img src="resources/prototype 8.jpg" width="40%">
</div>

List shows up which holds the records the user had been recorded before with date or the workout pattern which is manually subscribed. Let’s say the first element is being pressed.

After that, those pre defined exercise lists are now inserted in plan page so that user can again check or modify the number of repetitions.



<br></br>
#### ***[Observations]***

Since our tasks are not designed respectively, it was not easy to separate all the observation by tasks, so we wrote down our observations in the order of task sequences.

1. There is no way to count the time when a user has exercised or has taken a break with the intervals. (P2)
	a. [Criticality] Major
	b. [Solution] Add some functions to check the time the user exercise or take a break.

2. Hard to show the way to delete the one set in the list. (P2)
	a. [Criticality] Minor
	b. [Solution] Make the list button to seem movable. Then, users will try to swipe when they want to delete one set.

3. Users can’t know the number of sets already done in the list. (P2)
	a. [Criticality] Minor
	b. [Solution] Show remaining set number and completed set number at the last set.

4. Participant clicked “Load” button when he should click “Show list” button. It’s confusing to seem to do similar function. (P3)
	a. [Criticality] Minor
	b. [Solution] Change the label of “Show list” button into “New”.

5. There are no other variations except kg and reps. (P1)
	a. [Criticality] Major
	b. [Solution] Add more variations like time, velocity, pose status, etc.

6. Users can’t know how many he added the sets to the list. (P1)
	a. [Criticality] Major
	b. [Solution] Give the user feedback when the user add a set to list by showing how many the user add next to ADD buttons.

7. Users have to change all of remaining set details, kg or reps, when they completed the exercise partially. (P1)
	a. [Criticality] Major
	b. [Solution] Remaining set need to be adjusted according to the number which the user does complete indeed.

8. Participant  thought that the process of “Add” was not a process of planning but a process of completion. (P3)
	a. [Criticality] Minor
	b. [Solution] Actually, it doesn't seem to matter if users add a plan and then complete it immediately. It depends on which way the user prefers. But it would be better if we change the label of “Add” button into “Add plans”.

9. Users can’t change the kg detail when they think it is too hard or too easy to exercise with that kg. (P3)
	a. [Criticality] Minor
	b. [Solution] To add editable section also at kg detail.

10.	Participant clicked “plans” button while it was already “plans” screen. Maybe the indication of the current state is weak. (P3)
	a. [Criticality] Minor
	b. [Solution] Make the tab more visible to recognize where the tab is now. 


<br></br>
#### ***[Individual Reflections]***

Interviewee 1

- Facilitator - SH Yoon
- Computer - MY Yang
- Observer 1 - HC Moon
- Observer 2 - TS Lim

Interviewee 2

- Facilitator - TS Lim
- Computer - HC Moon
- Observer 1 - MY Yang
- Observer 2 - SH Yoon

Interviewee 3

- Facilitator - SH Yoon
- Computer - HC Moon
- Observer 1 - MY Yang

**MY Yang**

Difficulties
Computer with P1 : I was embarrassed when the user did something unintended, and the most uncomfortable thing was that I cannot talk anything when the participant tried a function we didn't implement. I felt the need to prepare error messages for actions we cannot do and to show prototype more intuitively.
Observer with P2, P3 : It was the hardest to be busy when the facilitator's speed was faster than my writing speed. And I know that observers should be quiet and just observe user's behavior, but just observing without saying was a little frustrated. But considering after test, I thought this role allocation is essential.

Pros
I was surprised at the fact that I could find problems which all four of team members didnt think of at a small cost. Because there is no target user in our team, we designed interfaces with thinking like "it wiil be convenient to use". But I learned that real users think differently from us through paper prototype testing. And we have to change most of UI from the result of prototype testing, but if we prepared the actual web interface, it would be hard to change than paper prototype.

Cons
The biggest problem seems that the paper prototype looks different from the actual devices like computer and smartphone. Our team made a mobile web interface to easily record workouts on smartphones as a paper prototype, and decided that the way to delete a record is swiping it. (and most of mobile application would use this.) But paper prototype was hard to express that affordance.
Also, simple functions such as confirm, close and select buttons were easy to make. But dynamic functions like numeric change or name change were hard to show through paper prototype. Fortunately, there were not many in our prototype, but I learned the importance of "wizard" while prototype testing.

**SH Yoon**

1st role and 3rd role – difficulty as a facilitator: Because I was the one who prepared briefing and index cards indicating each tasks, I wanted to do facilitator at the beginning and I was rather confident. Since we also conducted pilot-test right before our first tester had come, I thought I was 100% ready for the user testing. But still, I had few difficulties withstanding the pressure I had to put up with, in front of our awkward and grateful participant. Whenever he does something I have never anticipated before, I was confused. The most frequent question arisen in my mind was, ‘Should I tell him this or not?’ and ‘Until which point should I have to say?’ or ‘If I tell him something, would that be okay or helpful for this test?’. Since this was usability testing, I could not pinpoint every directions but at the same time, I had to lead him to the right walkthroughs. Therefore I always had to be extra careful for every single words what I had to say. In third user test, the words I needed to say were far more clearer than before and few of things that user misbehave were laid in my prediction range. However, our third user was kind of our extreme user who has been doing workout 6 days per week for more than four years. Besides testing, he told us a lot of things that we could not consider before. While testing, he dragged out inconvenience of our service a lot so I had to help him focus on and finish the tasks we had prepared.

2nd role – difficulty as an observer: In the second user test, we switched our role and I became an observer who definitely had to be silent enough and just focused on what user actually did. However, in my case, it was really hard for me to suppress the desire to speak. I was really surprised that it turned out that this was THAT hard. I’m not blaming, no offense, but I thought our facilitator was a bit shy as well as our second participant that it was not sufficient enough for the user to be encouraged and to be spoke up aloud. Rather than observing user’s subtle behavior (Later after the test had done, I realized that I even had to check his small facial changes and voice tones, as a good observer. Sadly I couldn’t observe that well.), I just stared at, thinking some more explanations had to be indicated for user in order to perform well and say his opinion more. To be honest, I could not keep myself shut my mouth down and started speaking right after he finished our tasks.

Pros: The experience of showing up our paper prototype granted me a lot. I felt thrilled after the first participant suggested to make commit-like feature for managing “workout sets” which was the most difficult to extract good solution idea when four of us talked and discussed for days together. At first glance, our target user who does not actually know what we were doing, had came up with a great idea that we couldn’t think of. In fact, I was skeptical doing paper prototype and embarrassingly present it to other people but I realized that this actually helps.

Cons: It would be better if we had enough time for revising our paper prototype after we had gone through a user testing. The same issue had come again in the later testing that we already know. It’s more like our fault, but considering our time limitation for finishing each project, we didn’t have time to revise our prototype frequently.

**HC Moon**

Computer With P2 and P3:
I was a bit embarrassed when the user acted differently than I thought when the user was taking the task.I was frustrated because I could not explain when the user pressed or wanted some functions that was not implemented yet or could not be shown due to paper prototyping limitations. When I saw users do not know what to do in doing the task, I could definitely feel that there is the lack of UI.

Observer With P1:
It was hard to record all the user's critical incidents. If the user showed a lot of unexpected behaviors in a short time, I could not write it all down. In addition, I misunderstood the intention which the user actually wants in the UI, so that I recorded the wrong information.

Pros:
I finally realized that everything that I thought was natural when this project was started was totally wrong with user interviews and user testing. Users had a lot of diversity than we thought, and through it we have found a lot of UI issues in our project. I thought that paper prototyping was done roughly by paper, but it was really amazing that such a simple prototyping could get huge output.

Cons:
The biggest disadvantage is the limitations of paper prototyping. It is hard to express even very simple things through the paper. Also, users tend to be too awkward to paper prototyping. In fact, users did not know what to expect when they first saw the prototypes presented.

**TS Lim**

1st role – difficulty as an observer
At the time when I was first introduced about the role of observer, I immediately realized that the observer carries out the most important role in the user test of paper prototyping. Facilitator and computer should pay attention to interact with participants, but the observer can solely examine and report all the speeches and behaviors in the third person’s point of view. However, observer as the roll of paper prototyping should give something more than just the observed scene. I wrote down everything examined during the user testing, but I should come up with some of my insights possibly applied to our design based on users’ behaviors and reactions. Observer is the only one who write down, so my report directly becomes the result of the user testing. I should have noticed my responsibility as the observer.

2nd role – difficulty as a facilitator
My second role was the facilitator. I simply thought my role is just to give instructions for the tasks and clues when participants are stuck and don’t know what to do. Unfortunately, after I finished my role in current user testing session, I realized that observer is my vocation for this user testing. Facilitator should provoke users’ reaction while not leading user to inappropriate or designated directions. Which means, I must talk constantly to derive conative answer from users. Unless we are testing on extreme users, it is not easy to expect direct feedback on designs. Therefore, it depends on the capability of facilitator to thrive useful and active feedbacks from users. I was devoid of this sense of affordance with words.

Pros
Paper Prototyping indeed allows designers to collect users’ feedback with low costs. Some feedbacks let us to guarantee the strength of usability of designed interface, while other feedbacks give totally unexpected aspects on the usability of designed interface. Since it is proper direction to reflect - or at least consider about - all feedbacks from users, it seems much effective and efficient to cast paper prototyping rather than impassionedly debate about adding or changing the designs of certain feature in the UI.

Cons
The most critical drawback of paper prototyping would be its limitation of being made up of paper. There need some imaginations to figure out how to carry out the given tasks, since participants are, in fact, looking at the design drawn on paper. There are several affordances on web interfaces based on experiences, especially related with touch screens, but it is not quite apparent to remind common features (such as swipe) with just looking at the paper prototyping. It might be possible to design well with reflecting the characteristics of paper, but the main purpose of paper prototyping is to use minimum resources to get users feedback so that it would be preposterous.
Another weakness of paper prototyping is that the result depends on the facilitator’s capability of provoking reactions and feedbacks from users. In fact, this holds for most of things in our life. Users never give direct feedback on design or features. Facilitator should ask and talk consistently to provoke desired feedbacks, which I don’t have enough ability on. 

<br></br>
#### ***[Studio Reflections]***

Since we changed the topic of our project after studio session, we don’t have to reflect studio feedbacks here.

We accepted TA’s opinion that our previous project idea is hard to be further prototyped, tested and implemented because our target user, doctor, is somewhat unreachable. The result for the reflection is revisiting DP1 and DP2 in order to find someone’s feasible but earnest, real needs and insights.

<br></br>

Our team had begun with redesigning a communicating situation where patient who often visit Dermatological Clinic wants to ask questions or gets report about treatment progress. Thus our team submitted DP1 and DP2 focusing on patient’s POV.

However, we failed to keep track on real user’s “genuine needs” and our outcome seemed uninteresting as well as transparent. Therefore, we decided to transit our viewpoint from ‘patient’ to ‘doctor’ after we carefully read through the comments from previously conducted interview with doctor.

We successfully discovered needs from doctor’s point of view. Specifically, we tried to focus on doctor who is considering to adopt service system to communicate but running out of time. We aimed to make conducive service which allows doctor to respond within 30 seconds for any question arisen from patients.

We had gone through DP1 and DP2 again and then built paper prototype considering doctor’s point of view. Unfortunately, our effort had not been viewed good enough since we cannot actually meet our target user at any time we want. The user we had chosen (a doctor who really wants to communicate with patients through online web) exists but is somewhat unreachable.

That’s why we had to visit ‘Health Care Center’ in KAIST and asked one of the nursing staff for testing our paper prototype. And acknowledging that it’d be hard to continuously meet and ask for further ui testings if we set our target user as a special group among doctors, we thought we could get help from the center for the upcoming design projects although we needed to change our project’s point of view again a bit.

Sadly however, not all nursing staff from the center were willing to help us. Unlike the one who joyfully tested our paper prototype before, the head nurse we encountered at the day after we did our DP3 presentation, treated us like a bothering peddler. We were thrown out of the center as if we were a stray dog and we were completely lost at that moment.

Therefore, it became inevitable for us to change the goal of our design project, entirely. After the tough exile, we could interview with Professor SUKHEE KIM by chance who manages all the works and programs in sports complex fitness center and opens courses regarding physical training. What we had talked will be followed in Observations & Interview parts in DP1 revisited.






Detailed circumstances explaining the reason why we had to alter the aim of our project is attached as appendix. You can check the whole story if we click …
We’ll start our DP3 writeup with introducing our new topic as well as revisiting DP1 & DP2.


## DP1 REVISITED
Observations & Interviews

Professor SukHee Kim - could be one of our extreme users
	Luckily, we met Professor Kim who helped us a lot by giving his own experience and earnest needs he now has. At first he scolded us a bit for being unprepared but right after, what he told us was really valuable for us to target users with crucial needs. Every semester, he opens course regarding healthcare or one’s conditioning. The thing is, he orders every enrolled students to write daily workout logs for their self-regulation or self-management. He argued that this activity - record one’s exercise by their own - is crucial for someone who newly starts exercising or who wants to keep their physical condition in more intensive way. The problem is, the recording itself is really annoying during exercise and hence, tend to be forgotten easily when someone tries to write them down afterwards. Moreover, the professor orders his students to calculate all the burned calories for each workout because he thinks it is also necessary for the students. He actually know the work he is giving out is bothering his students and thereby he told us that he needs rather convenient recording system for one’s workout contents. He also claimed that this is current issue for not only for his class students but people who want to enhance their body by utilizing systematic manage.


Needs (우리의 타겟 유저는 이런게 필요해보여!)

자신이 한 운동을 쉽고 빠르게 기록하길 원한다.
운동 일정을 계획하고 관리해줄 필요가 있다.
할 수 있는 운동을 한눈에 확인할 수 있어야 한다.
무슨 운동을 해야 하는지 잘 모르는 경우가 있다.
행한 운동에 대한 칼로리 계산을 쉽게 하길 원한다.
운동 기록이 오래 보존되길 원한다.
본인이 한 운동을 항상 기록하겠다는 굳은 다짐이(의지가) 필요하다
운동 능력이 얼마나 발전했는지 확인하길 원한다.

Needs
Our target users would have a need of
Tracking the workout easily and fast
Planning and managing exercise schedule
Checking all the options of exercise at a look (glance)
Instructing which exercise to do
Expediting calculation of calories for workout done
Preserving the records of past workout
Strong will of recording the exercise done for that day consistently
Witnessing the improvement of personal workout


Insights (해결 방법을 찾는 과정에서 신기한 걸 발견했어!)

헬스장에서 입는 트레이닝복에 주머니가 없어 기록 도구를 휴대하기 힘들다.
운동을 하면서 땀이 나면 기록이 불편해진다.
운동을 하는 사람들은 정해진 양의 운동을 계획적으로 하는 편이다.
운동 방법에 따라 정도를 세는 단위가 다르다.
단순히 운동 이름과 시행한 정도 외에도 다른 기록할 내용들이 많다.
정확한 운동 시간, 쉬는 시간을 지켜야 하는 경우가 있다.
같은 운동기구를 사용하더라도 운동을 하는 방법이 매우 다양하다.
본인의 체형 등에 따라 해야 하는 운동이 많이 다르다.
헬스장 또는 운동 동아리에서는 여러 사람의 운동 기록을 한번에 관리할 일이 많다.
대부분의 사람들은 운동 내역을 기록하는 행위 자체를 귀찮아한다.

Insights
It was possible to discover that
There is no pocket on the training shorts provided in regular gymnasium
It is irritating to write down in a sweat
People who workout usually schedule certain amount of exercise regularly
Different exercises would have different optimized format to record
Different exercises have different sets and reps for each workout session
People are asked to be punctual for interval time between sets precisely
There are a number of ways to do exercise for a single equipment
People should find out appropriate workout sequences fit to themselves referring to their body type, stamina, muscle strength, etc
Gymnasiums or health club have to manage plenty of workout records for plenty of people.
Most people feel bothered for recording breakdown of working out.


## DP2 REVISITED

POV
(USER) 운동 중간에 본인의 운동 내용을 정리해서 기록하고자 하는 사람
(NEED) 쉽고 빠르게 기록하기를 원한다
(insight) 그렇지만 운동 내역을 기록하는 행위 자체가 상당히 번거롭고 귀찮다.

POV
(USER) People who want to report their present exercises while they are working out
(NEED) Need to record in easier and faster way
(INSIGHT) Because behavior of recording is too annoying and troublesome.

Persona
현재 문제점
운동 내용을 기록하고자 하는 사람 -> functionality에 초점이 맞춰져 있음
운동을 체계적, 계획적으로 하는 사람 -> 구분이 모호함
헬스장에 다니는 사람 -> 범위가 너무 넓음
운동하는 학생들을 관리하는 교수님 -> 사실 UI를 사용하는 유저는 학생임

HMWs (문제 해결을 위해 이렇게 해보는건 어떨까?)

종이와 펜 대신에 다른 기록 도구를 사용해 보는건 어떨까?
운동을 기록하고 싶게 동기 부여를 하는건 어떨까?
기록지 양식을 직접 만들어야 하는 부담을 줄여주는건 어떨까?
누군가 대신 운동을 기록해주는건 어떨까?

Solution Ideas (우리는 이런 서비스를 만들자!)

HMW 3 : 기록지 양식을 직접 만들어야 하는 부담을 줄이자.
운동 별로 간단하고 직관적인 양식을 제공하자.
기록 항목을 사용자가 쉽게 수정할 수 있도록 하자.
기록한 내용을 토대로 사용자에게 맞춤 양식을 제공하자.
다른 사람들이 사용하고 있는 양식을 받아서 활용할 수 있도록 하자.
처음 사용자를 위한 커스터마이징 튜토리얼을 진행하자.
운동 DB를 구축하여 이름 자동완성과 그에 맞는 단위를 제공하자.
시간을 지켜야 하는 경우 초시계를 보여주자.
여러 명이 같은 양식을 지켜야 할 상황에서 사용자끼리 그룹을 구성할 수 있도록 하자.
운동 종목을 나타내는 아이콘들을 활용할 수 있도록 하자.


	HMW 2 : 운동을 기록하고 싶게 동기 부여를 해보자.
다른 사람들의 운동 기록을 볼 수 있게 하자.
기록한 내용을 시각화해서 보여주자.
장기간 운동한 내역을 토대로 통계를 제공하자.
나의 기록 변화 또는 상태를 한눈에 알려주는 이미지를 사용하자. (예: 시들시들한 풀)
운동으로 소모한 칼로리를 계산해서 보여주자.
최소한의 움직임으로 운동 진행 상황을 업데이트할 수 있도록 하자.
나의 운동 기록을 토대로 다른 운동 방법과 해야할 정도를 추천해주자.
처음 하는 운동인 경우 하는 방법과 정확한 자세 등을 알려주자.
게임 같은 시스템을 도입하여 사용자가 운동을 열심히 하면 캐릭터가 강해지도록 하자.
자신의 운동 기록을 메신저나 SNS로 쉽게 공유할 수 있도록 하자.


Three chosen solution ideas
운동별로 간단하고 직관적인 기록 양식 제공 V
기록 내용 토대로 사용자에게 맞춤 양식을 제공하자 V
칼로리 계산, 나의 상태 변화 (발전 과정) 알려주기


