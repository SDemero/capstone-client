import React, {Component} from 'react';
import {Card, ListGroupItem, ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class BMIRange extends Component{
   constructor(props){
      super(props);

      this.state = {
            risk: [],
            diet: [],
            work: [],
            category: "Risks"
       }
   }

    async componentDidMount() {
        let plan = "";
        if (this.props.userBMI < 18.5 ){
            plan = "Underweight"
        }
        else if (this.props.userBMI >= 18.5 && this.props <= 24.9){
            plan = "Average"
        }
        else {
            plan = "Overweight"
        }
    let url = await axios.get(`http://localhost:8080/api/fitnessPlan/${plan}`) 
        this.setState({
            risk: url.data[0].risks, 
            diet: url.data[0].dietOptions, 
            work: url.data[0].exercises})
   }
   
   render(){
       return(
            <div>
               <Card text={"danger"}>
                    <Card.Header ><Card.Title > Health Info</Card.Title></Card.Header>
                    <Card.Body>
                        <DropdownButton variant="info" id="dropdown-item-button" title={this.state.category}>
                            <Dropdown.Item as="button" eventKey="risk" onSelect={(eventKey) => this.handleSelect(eventKey)}> Risks </Dropdown.Item>
                            <Dropdown.Item as="button" eventKey="diet" onSelect={(eventKey) => this.handleSelect(eventKey)}> Diet Options </Dropdown.Item>
                            <Dropdown.Item as="button" eventKey="work" onSelect={(eventKey) => this.handleSelect(eventKey)}> Recommended Exercises </Dropdown.Item>
                        </DropdownButton>


                      {/* <ListGroup>
                          <ListGroupItem> 
                          <Card.Title> Risks </Card.Title>
                                {this.state.risk.map((item) => {
                                    return (
                                        <ListGroupItem>{item}</ListGroupItem>
                                    );       
                                })}
                            </ListGroupItem>
                        </ListGroup>

                        <ListGroup>
                          <ListGroupItem> 
                          <Card.Title> Diet Options </Card.Title>
                                {this.state.diet.map((item) => {
                                    return (
                                        <ListGroupItem>{item}</ListGroupItem>
                                    );       
                                })}
                            </ListGroupItem>
                        </ListGroup>
                 
                        <ListGroup>
                          <ListGroupItem> 
                          <Card.Header> Recommended Exercises </Card.Header>
                                {this.state.work.map((item) => {
                                    return (
                                        <ListGroupItem>{item}</ListGroupItem>
                                    );       
                                })}
                            </ListGroupItem>
                        </ListGroup> */}

                     </Card.Body>
                </Card>
            </div>  
       );
   }
}
export default BMIRange;