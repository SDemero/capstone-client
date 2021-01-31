import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Card} from "react-bootstrap";

class EquipmentInfo extends Component {
    render(){
        return(
            <div className="Info">
                <ListGroup>
                    <ListGroupItem variant="info">
                    <Card.Title>{this.props.name}</Card.Title>
                    <label>Category: {this.props.category}</label>
                    <label>Description: {this.props.description}</label>

                </ListGroupItem>
                    
                </ListGroup>
                <br></br>
            </div>
        )
    }
}
export default EquipmentInfo;