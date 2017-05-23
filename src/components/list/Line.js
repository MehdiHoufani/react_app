/**
 * Created by MedProd on 24/05/2017.
 */
import React, {Component} from 'react';

class Line extends Component{
constructor(props){
    super(props);
    this.state = {
        name : props.name === ""?"none": props.name,
    }

};

    render(){
        return <li>{this.state.name}</li>
    }
}

export default Line;