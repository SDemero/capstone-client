import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Card} from "react-bootstrap";

class ExerciseInfo extends Component {
    render(){
        return(
            <div className="Info">
                <ListGroup>
                    <ListGroupItem variant="info">
                    <Card.Title>{this.props.name}</Card.Title>
                    <label>Equipment: {this.props.equipment}</label>
                    <label>Description: {this.props.description}</label>

                </ListGroupItem>
                    
                </ListGroup>
                <br></br>
            </div>
        )
    }
}
export default ExerciseInfo;