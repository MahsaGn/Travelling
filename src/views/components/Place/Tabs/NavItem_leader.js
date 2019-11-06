import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/style.css';
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