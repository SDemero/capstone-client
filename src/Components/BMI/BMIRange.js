import React, {Component} from 'react';
import {Card, ListGroupItem, ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class BMIRange extends Component{
   constructor(props){
      super(props);

      this.state = {
            Risks: [],
            Diet: [],
            Exercises: [],
            category: "Risks",
            bmi: this.props.userBMI,
            plan: "",
       }

   }
    async componentDidMount(){
        this.forceUpdate();
        let plan = "";
        if (this.state.bmi.toFixed(1) < 18.5){
            plan = "Underweight"
        }
        else if (this.state.bmi.toFixed(1) > 18.4 && this.state.bmi.toFixed(1) < 25.0){
            plan = "Average"
        }
        else if (this.state.bmi.toFixed(1) > 24.9) {
            plan = "Overweight"
        }
    let url = await axios.get(`http://localhost:8080/api/fitnessPlan/${plan}`)
        this.setState({
            Risks: url.data[0].risks, 
            Diet: url.data[0].dietOptions, 
            Exercises: url.data[0].exercises})
        this.setState({plan: plan});
   }

   render(){ 
        return(
        <div className="BMIscrollbar">

               <Card bg={"info"}  border={"primary"} text={"danger"}>
                    <Card.Header><Card.Title> Health Info</Card.Title></Card.Header>
                    <Card.Body>
                        <ListGroup >
                            <Card.Title> Risks </Card.Title>
                                {this.state.Risks.map((item) => {
                                    return (
                                        <ListGroupItem >{item}</ListGroupItem>
                                    );       
                                })}
                        </ListGroup><br></br>

                        <ListGroup>
                            <Card.Title> Diet Options </Card.Title>
                                {this.state.Diet.map((item) => {
                                    return (
                                        <ListGroupItem>{item}</ListGroupItem>
                                    );       
                                })}
                        </ListGroup><br></br>

                        <ListGroup>
                            <Card.Title> Recommended Exercises </Card.Title>
                                {this.state.Exercises.map((item) => {
                                    return (
                                        <ListGroupItem>{item}</ListGroupItem>
                                    );       
                                })}
                        </ListGroup>

                     </Card.Body>
                </Card>
            </div>  
       );
   }
}
export default BMIRange;