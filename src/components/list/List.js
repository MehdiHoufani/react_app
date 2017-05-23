/**
 * Created by MedProd on 23/05/2017.
 */
import React, {Component} from 'react';
import Line from './Line';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            nbLine : props.number,
    };

    function getLines(nbLine) {

        let i;

        for (i=0; i<nbLine; i++){


        }
    }


        return;
    }

    render(){

        return (
            <ul>
                <Line name = "test"/>
            </ul>
        )

    }


}


export default List;