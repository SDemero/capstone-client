import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import BMIRange from './BMIRange'

class BMI extends Component{
    constructor(props){
        super(props)

        this.state = {
            height: 0,
            weight: 0,
            userBMI: 0,
            flag: false,
            toggle: false
           }
    }


    handleSubmit=(event)=>{
        event.preventDefault();
        let result = (this.state.weight / this.state.height / this.state.height) * 703;
        if (result !== NaN){
            this.setState({buttonflag: true})
        }
        this.setState({userBMI: result, flag: true});
        //this.backend();
    
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    toggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
  

// async backend(){
//     let bmi = (this.state.weight/(this.state.height*this.state.height))
//     console.log("this is the weight "+this.state.weight
//         +"\n this is the height "+this.state.height+"bmi "+bmi);
    
//     await axios.put('http://localhost:8080/api/user/1',{
//         BMI: bmi
//     })
// }

    render(){
    
        return(
            <div className="BMI">
                <Card bg={'info'} border={"primary"}  text={'white'}>
                    <Card.Header><Card.Title> Find Your BMI </Card.Title></Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label> Height (in) </Form.Label>
                                <Form.Control type="number"  value={this.state.height} name="height" onChange={this.handleChange} placeholder="0" min="0"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label> Weight (lbs) </Form.Label>
                                <Form.Control type="number" value={this.state.weight} name="weight" onChange={this.handleChange} placeholder="0" min="0" step=".01"/>
                            </Form.Group>
                            <Button variant="secondary" onClick={this.handleSubmit} type="submit"> Calculate </Button>
                            {this.state.flag ?
                            <div>
                                <Form.Label>BMI: {this.state.userBMI.toFixed(1)}</Form.Label><br/>
                            </div>
                            : null}
                           
                        </Form>
                            
                    </Card.Body>
                </Card>
                <div>
                                <br/>
                                {this.state.flag ?
                                    <div>
                                    
                                        {isNaN(this.state.userBMI) ? null:
                                            <BMIRange 
                                                userBMI ={this.state.userBMI}
                                            /> 
                                        }
                                    </div>  
                               : null}
                            </div>
            </div>
        );
    }

}

export default BMI;