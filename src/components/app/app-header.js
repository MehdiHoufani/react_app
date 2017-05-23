/**
 * Created by Houfani_M on 23/05/2017.
 */
import React, {Component} from 'react';
import '../../styles/app.css';
import List from '../list/List'



class AppHeader extends Component{

    render(){
        return(
            <div className="header">
            <List />
            </div>
        )
    }
}

export default AppHeader;