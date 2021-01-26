import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class navbar extends Component{
    constructor(props){
        super(props);

        this.state = {
            buttonClicked: false
    }

    this.Clicked = this.Clicked.bind(this);

    }

    Clicked = () => {
        this.setState({buttonClicked: true})
    }

    render(){
        if (buttonClicked === true)
        return(
            <div className="vertical-menu">
                <Link to= "/"> Home </Link> <br></br>
            </div>
        )
        return(
            <button onClick={this.Clicked}> > </button>
        )
    }
}

export default navbar;