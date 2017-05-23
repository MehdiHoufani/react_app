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


        return;
    }

    render(){

        function getLines(nbLine) {

            let i;
            var list = "";
            let line = "<li></li>";

            for (i=0; i<nbLine; i++){
                list+=<Line/>
            }
            return list
        }
        return (
            <ul>
                {getLines(this.state.nbLine)}
            </ul>
        )

    }


}


export default List;