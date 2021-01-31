import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ExercisePart from './ExercisePart';
import "./Exercise.css";

class Exercise extends Component {
    constructor(props){
        super(props);

         this.state = {
            bodyParts: { 
                Abs: [ 
                    {
                        name: "Barbell Ab Rollout",
                        equipment: "Barbell",
                        description: "Place a barbell on the floor at your feet. Bending at the waist, grip the barbell with a shoulder with overhand grip. With a slow controlled motion, roll the bar out so that your back is straight. Roll back up raising your hips and butt as you return to the starting position.",

                    },
                    {
                        name: "Crunches With Legs Up",
                        equipment: "N/A",
                        description: "On your back, legs extended straight up, reach toward your toes with your hands and lift your shoulder blades off the ground and back.",

                    },
                    {
                        name: "Plank",
                        equipment: "N/A",
                        description: "Get into a position on the floor supporting your weight on your forearms and toes. Arms are bent and directly below the shoulder. Keep your body straight at all times and hold this position as long as possible. To increase difficulty an arm or leg can be raised while performing this exercise.",

                    },
                ], 

                Arms: [
                    {
                        name: "Axe Hold",
                        equipment: "Dumbbell",
                        description: "Grab dumbells and extend arms to side and hold as long as you can.",

                    }, 
                    {
                        name: "Push Ups",
                        equipment: "N/A",
                        description: "Start with your body streched, your hands are shoulder-wide appart on the ground. Push yourself off the ground till you strech your arms. The back is always straight and as well as the neck (always look to the ground). Lower yourself to the initial position and repeat.",

                    },
                    {
                        name: "Triceps Dips",
                        equipment: "N/A",
                        description: "Lift on parallel bars hold for 1 second, and lower slowly and control for 4 seconds, then come back with no rest.",

                    },
                ],

                Back: [ 
                    {
                        name: "Chin-ups",
                        equipment: "Pull-up bar",
                        description: "Like pull-ups but with a reverse grip (Palms facing towards you).",

                    },
                    {
                        name: "Hip Raise, Lying",
                        equipment: "N/A",
                        description: "Lying down on your back, with your feet flat on the floor. Raise your hips up evenly as high as you can and hold for as long as you can. ",

                    },
                    {
                        name: "Superman",
                        equipment: "Gym mat",
                        description: "Lay flat on your stomach with your arms extended in front of you on the ground as your legs are lying flat. Lift both your arms and legs at the same time, as if you were flying, and contract the lower back. Make sure that you are breathing and, depending on your fitness level, hold the movement for at least two to five seconds per repetition.",

                    },
                ],
                
                Calves: [
                    {
                        name: "Calf Raises",
                        equipment: "Dumbbell, Kettlebell",
                        description: "Calf raises are a method of exercising the gastrocnemius, tibialis posterior and soleus muscles of the lower leg. The movement performed is plantar flexion, a.k.a. ankle extension. ",

                    },
                    {
                        name: "Sitting Calf Raises",
                        equipment: "N/A",
                        description: "Sit on a bench for calf raises and check that the feet are half free and that you can completely stretch the calf muscles down. Pull your calves up, going as far (up) as you can. Make at the highest point a short pause of 1 or 2 seconds and go down.",

                    },
                    {
                        name: "Skipping",
                        equipment: "N/A",
                        description: "Do a single, double footed jump for each swing of the rope. Work on a smooth, rhythmical movement, bouncing lightly on the balls of your feet.",
                    },
                ],

                Chest: [ 
                    {
                        name: "Burpees",
                        equipment: "N/A",
                        description: "Jump, lay down on your chest, do a pushup then jump, repeat.",
                    },
                    {
                        name: "Incline Bench Press",
                        equipment: "Barbell, Incline bench",
                        description: "The leg extension is a resistance weight training exercise that targets the quadriceps muscle in the legs. The exercise is done using a machine called the Leg Extension Machine. There are various manufacturers of these machines and each one is slightly different. Most gym and weight rooms will have the machine in their facility. The leg extension is an isolated exercise targeting one specific muscle group, the quadriceps. It should not be considered as a total leg workout, such as the squat or deadlift. The exercise consists of bending the leg at the knee and extending the legs, then lowering them back to the original position.",
                    },
                    {
                        name: "Incline Pushups",
                        equipment: "N/A",
                        description: "Regular push with a 30 degree incline.",
                    },
                ],

                Legs: [ 
                    {
                        name: "Barbell Hack Squats",
                        equipment: "Barbell",
                        description: "Perform leg squats with barbell behind your legs.",
                    },     
                    {
                        name: "High Knees",
                        equipment: "N/A",
                        description: "Start with legs at a comfortable standing width and run in place, bringing knees to or above waist level.",
                    },
                    {
                        name: "Jumping Jacks",
                        equipment: "N/A",
                        description: "A jumping jack or star jump, also called side-straddle hop in the US military, is a physical jumping exercise performed by jumping to a position with the legs spread wide and the hands going overhead, sometimes in a clap, and then returning to a position with the feet together and the arms at the sides.",
                    },          
                ],

                Shoulders: [ 
                    {
                        name: "Lateral Raises",
                        equipment: "Dumbbell",
                        description: "Stand or sit with a dumbbell in each hand at your sides. Keep your back straight, brace your core, and then slowly lift the weights out to the side until your arms are parallel with the floor, with the elbow slightly bent.",
                    },
                    {
                        name: "Shoulder Press, Barbell",
                        equipment: "Barbell",
                        description: "Sit on a bench, the back rest should be almost vertical. Take a barbell with a shoulder wide grip and bring it up to chest height. Press the weight up, but don't stretch the arms completely. Go slowly down and repeat.",
                    },
                    {
                        name: "Wall Handstand",
                        equipment: "N/A",
                        description: "Handstand against a wall for support (chest facing wall).",
                    },
                ],
            },
            category: "Arms"
        }

        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect = (eventKey) => {
            this.setState({category: eventKey})
            
    }
        
    render(){
        return(
            <div className="scrollbar" >
            <Card bg={'light'} border={"secondary"}  text={'black'}>
                <Card.Header><Card.Title>Exercises</Card.Title></Card.Header>
                <Card.Body>
                    <DropdownButton variant="info" id="dropdown-item-button" title={this.state.category}>
                        <Dropdown.Item as="button" eventKey="Abs" onSelect={(eventKey) => this.handleSelect(eventKey)}> Abs </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Arms" onSelect={(eventKey) => this.handleSelect(eventKey)}> Arms </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Back" onSelect={(eventKey) => this.handleSelect(eventKey)}> Back </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Calves" onSelect={(eventKey) => this.handleSelect(eventKey)}> Calves </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Chest" onSelect={(eventKey) => this.handleSelect(eventKey)}> Chest </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Legs" onSelect={(eventKey) => this.handleSelect(eventKey)}> Legs </Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="Shoulders" onSelect={(eventKey) => this.handleSelect(eventKey)}> Shoulders </Dropdown.Item>
                    </DropdownButton>
                    <br></br>                  
                            
                    <ExercisePart
                        bodyParts = {this.state.bodyParts}
                        category = {this.state.category}
                    />
                           
            
                </Card.Body>
            </Card> 
             </div>
            );
        }
}

export default Exercise;