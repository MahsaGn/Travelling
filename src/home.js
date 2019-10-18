import React from 'react'
import {Link} from "react-router-dom";
export default class Home extends React.Component{
    render(){
        return(
            <dev>
                <Link to='/authentication'>click to auth</Link>
                <br/>
                <Link to='become leader'>click to become leader</Link>
            </dev>
        );
    }
}