import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import EquipmentPart from './EquipmentPart';
import "./Equipment.css";

class Equipment extends Component {
    constructor(props){
        super(props);

         this.state = {
            tools: { 
                Barbell: [ 
                    {
                        name: "Barbell Ab Rollout",
                        category: "Abs",
                        description: "Place a barbell on the floor at your feet. Bending at the waist, grip the barbell with a shoulder with overhand grip. With a slow controlled motion, roll the bar out so that your back is straight. Roll back up raising your hips and butt as you return to the starting position.",
                    },
                    {
                        name: "Barbell Hack Squat",
                        category: "Legs",
                        description: "Perform leg squats with barbell behind your legs.",
                    },
                    {
                        name: "BarBell Lunges",
                        category: "Legs",
                        description: "Put barbell on the back of your shoulders. Stand upright, then take the first step forward. Step should bring you forward so that your supporting legs knee can touch the floor. Then stand back up and repeat with the other leg. Remember to keep good posture.",
                    },
                ], 

                Bench: [ 
                    {
                        name: "Bench Press",
                        category: "Chest",
                        description: "Lay down on a bench, the bar should be directly above your eyes, the knees are somewhat angled and the feet are firmly on the floor. Concentrate, breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up. If you train with a high weight it is advisable to have a spotter that can help you up if you can't lift the weight on your own.",
                    },
                    {
                        name: "Benchpress Dumbbells",
                        category: "Chest",
                        description: "The movement is very similar to benchpressing with a barbell, however, the weight is brought down to the chest at a lower point. Hold two dumbbells and lay down on a bench. Hold the weights next to the chest, at the height of your nipples and press them up till the arms are stretched. Let the weight slowly and controlled down.",
                    },
                    {
                        name: "Bench Press Narrow Grip",
                        category: "Arms",
                        description: "Lay down on a bench, the bar is directly over your eyes, the knees form a slight angle and the feet are firmly on the ground. Hold the bar with a narrow grip (around 20cm.). Lead the weight slowly down till the arms are parallel to the floor (elbow: right angle), press then the bar up. When bringing the bar down, don't let it down on your nipples as with the regular bench pressing, but somewhat lower.",
                    },
                ],

                Dumbbell: [ 
                    {
                        name: "Arnold Shoulder Press",
                        category: "Shoulders",
                        description: "Very common shoulder exercise.",
                    },
                    {
                        name: "Axe Hold",
                        category: "Arms",
                        description: "Grab dumbbells and extend arms to side and hold as long as you can.",
                    },
                    {
                        name: "Benchpress Dumbells",
                        category: "Chest",
                        description: "The movement is very similar to benchpressing with a barbell, however, the weight is brought down to the chest at a lower point. Hold two dumbbells and lay down on a bench. Hold the weights next to the chest, at the height of your nipples and press them up till the arms are stretched. Let the weight slowly and controlled down.",
                    },
                ], 

                GymMat: [ 
                    {
                        name: "Crunches",
                        category: "Abs",
                        description: "Lay down on your back a soft surface, the feet are on the floor. Ask a partner or use some other help (barbell, etc.) to keep them fixed, your hands are behind your head. From this position move your upper body up till your head or elbows touch your knees. Do this movement by rolling up your back.",
                    },
                    {
                        name: "Hollow Hold",
                        category: "Abs",
                        description: "Get on a mat and lie on your back. Contract your abs, stretch your raise and legs and raise them (your head and shoulders are also be raised). Make sure your lower back remains in contact with the mat.",
                    },
                    {
                        name: "Leg Raises, Lying",
                        category: "Abs",
                        description: "Lay down on a bench and hold onto the recliner with your hands to keep you stable. Hold your legs straight and lift them till they make an angle of about 45°. Make a short pause of 1 sec. and go slowly down to the initial position. To increase the intensity you can make a longer pause of 7 sec. every 5th time.",
                    },
                ],

                InclineBench: [ 
                    {
                        name: "Incline Bench Press",
                        category: "Chest",
                        description: "To do slowly, tempo is 4010.",
                    },
                    {
                        name: "Incline Dumbbell Flye",
                        category: "Chest",
                        description: "Use inclined bench. Hold dumbbells straight out to your sides, elbows slightly bent. Bring arms together above you, keeping angle of elbows fixed.",
                    },
                    {
                        name: "Incline Dumbbell Press",
                        category: "Chest",
                        description: "Bench should be angled anywhere from 30 to 45 degrees. Be sure to press dumbbells straight upward (perpendicular to the floor).",
                    },
                ], 

                Kettlebell: [ 
                    {
                        name: "2 Handed Kettlebell Swing",
                        category: "Abs",
                        description: "Two Handed Russian Style Kettlebell swing.",
                    },
                    {
                        name: "Calf Raises",
                        category: "Calves",
                        description: "Calf raises are a method of exercising the gastrocnemius, tibialis posterior and soleus muscles of the lower leg. The movement performed is plantar flexion, a.k.a. ankle extension.",
                    },
                ],

                PullupBar: [ 
                    {
                        name: "Chin Up",
                        category: "Back",
                        description: "The chin-up (also known as a chin or chinup) is a strength training exercise. People frequently do this exercise with the intention of strengthening muscles such as the latissimus dorsi and biceps, which extend the shoulder and flex the elbow, respectively. In this maneuver, the palms are faced towards the body. It is a form of pull-up in which the range of motion is established in relation to a person's chin. ",
                    },
                    {
                        name: "Pull-ups",
                        category: "Back",
                        description: "Grab the pull up bar with a wide grip, the body is hanging freely. Keep your chest out and pull yourself up till your chin reaches the bar or it touches your neck, if you want to pull behind you. Go with a slow and controlled movement down, always keeping the chest out.",
                    },
                    {
                        name: "Row",
                        category: "Back",
                        description: "In strength training, rowing (or a row, usually preceded by a qualifying adjective — for instance a seated row) is an exercise where the purpose is to strengthen the muscles that draw the rower's arms toward the body (latissimus dorsi) as well as those that retract the scapulae (trapezius and rhomboids) and those that support the spine (erector spinae). When done on a rowing machine, rowing also exercises muscles that extend and support the legs (quadriceps and thigh muscles). In all cases, the abdominal and lower back muscles must be used in order to support the body and prevent back injury.",
                    },
                ], 

                SZBar: [ 
                    {
                        name: "Biceps Curls With SZ-bar",
                        category: "Arms",
                        description: "Hold the SZ-bar shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. Bend the arms, bringing the weight up, with a fast movement. Without pausing, let down the bar with a slow and controlled movement. Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).",
                    },
                    {
                        name: "French Press SZ-bar",
                        category: "Arms",
                        description: "Hold the SZ-bar and lay down on a flat bench in such a way that around 1/4 of your head is over the edge. Stretch your arms with the bar and bend them so that the bar is lowered. Just before it touches your forehead, push it up. Pay attention to your elbows and arms: only the triceps are doing the work, the rest of the arms should not move.",
                    },
                    {
                        name: "Military Press",
                        category: "Arms",
                        description: "On an SZ-bar grip your hands on the outside of each bend and stand with your arms straight down, palms facing your legs. Pull the bar (bending your arms at the elbow) to your chest, and the push the bar above your head (arms as straight as possible). Return the bar to your chest by dropping your arms at the elbows. Return the bar to it's origional position (stand with your arms straight down, palms facing your legs).",
                    },
                ],

                None: [ 
                    {
                        name: "Bear Walk",
                        category: "Chest",
                        description: "Rest your weight on your palms and the balls of your feet, not dissimilar to normal pushup position. Move by stepping with your R palm and L foot, then your L palm and R foot.  Basically, walk like a lumbering bear. Move as fast as you can.  Measure your reps/sets in either distance (i.e. 40 yards) or time (i.e. 45 seconds). Works your Pecs, Deltoids, Triceps, Traps, Lats, Abs and Lower Back, Hip Flexors, Quads, Glutes and Calves.",
                    },
                    {
                        name: "Bod-Ups",
                        category: "Arms",
                        description: "Assume a plank position on the ground. You should be supporting your bodyweight on your toes and forearms, keeping your torso straight. Your forearms should be shoulder-width apart. This will be your starting position. Pressing your palms firmly into the ground, extend through the elbows to raise your body from the ground. Keep your torso rigid as you perform the movement. Slowly lower your forearms back to the ground by allowing the elbows to flex. Repeat as needed.",
                    },
                    {
                        name: "Cycling",
                        category: "Legs",
                        description: "Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as cyclists, bicyclists, or bikers. Apart from two-wheeled bicycles, cycling also includes the riding of unicycles, tricycles, quadracycles, recumbent and similar human-powered vehicles. ",
                    },
                ], 
            },
            equip: "Barbell"
        }

        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect = (eventKey) => {
            this.setState({equip: eventKey})
            
    }
        
    render(){
        return(
            <div className="Equipmentscrollbar" >
            <Card bg={'light'} border={"secondary"}  text={'black'}>
                <Card.Header><Card.Title>Equipment</Card.Title></Card.Header>
                <Card.Body>
                    <DropdownButton variant="info" id="dropdown-item-button" title={this.state.equip}>
                        <Dropdown.Item as="button" eventKey="Barbell" onSelect={(eventKey) => this.handleSelect(eventKey)}> Barbell </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Bench" onSelect={(eventKey) => this.handleSelect(eventKey)}> Bench </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Dumbbell" onSelect={(eventKey) => this.handleSelect(eventKey)}> Dumbbell </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="GymMat" onSelect={(eventKey) => this.handleSelect(eventKey)}> Gym Mat </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="InclineBench" onSelect={(eventKey) => this.handleSelect(eventKey)}> Incline Bench </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Kettlebell" onSelect={(eventKey) => this.handleSelect(eventKey)}> Kettlebell </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="PullupBar" onSelect={(eventKey) => this.handleSelect(eventKey)}> Pull-up Bar </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="SZBar" onSelect={(eventKey) => this.handleSelect(eventKey)}> SZ Bar </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="None" onSelect={(eventKey) => this.handleSelect(eventKey)}> None </Dropdown.Item>
                    </DropdownButton>
                    <br></br>                  
                            
                    <EquipmentPart
                        tools = {this.state.tools}
                        equip = {this.state.equip}
                    />
                           
            
                </Card.Body>
            </Card> 
             </div>
            );
        }
}

export default Equipment;