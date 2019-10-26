import React from 'react'
import NavItem_info from './NavItem_info'
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';
import NavItems from './NavItems'
import { CardImg,CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { runInThisContext } from 'vm';
import Axios from 'axios';
import LeaderCard from './leaderCard'

export default class NavItem_leader extends React.Component{

    constructor(props){
      super(props);
      this.state={
        leaders:[]
      }
    }
    componentWillMount(){
      Axios.get('url')
      .then(datas=>{
        console.log(datas)
        this.setState({
          leaders : datas.map((data)=><LeaderCard info={data}/>)
        })
      })
    }

    render(){
        return(
          <div>
            {LeaderCard}
          </div>
        );
    }
}