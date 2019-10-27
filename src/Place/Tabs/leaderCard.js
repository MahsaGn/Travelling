import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';
import { CardImg,CardBody, Card, Button, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom'
export default class NavItem_leader extends React.Component{
    constructor(props){
        super(props)
        this.showProfile = this.showProfile.bind(this)
    }

    render(){
        return(
            <Card id="leader_card">
            <CardImg top src={this.props.info.img} alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.info.username}</CardTitle>
              <Link to={{pathname: `/leaderProfile/${this.info.username}`,
            data : {info: this.info.username}}}>
                  <Button>نمایش جزئیات</Button>
            </Link>
            </CardBody>
          </Card>
        );
    }
}
