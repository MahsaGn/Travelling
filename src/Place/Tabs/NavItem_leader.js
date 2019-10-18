import React from 'react'
import NavItem_info from './NavItem_info'
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';
import NavItems from './NavItems'
import { CardImg,CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { runInThisContext } from 'vm';

export default class NavItem_leader extends React.Component{

    constructor(props){
      super(props);
    }

    render(){
        return(
          <div>
          <Card id="leader_card">
          <CardImg top src={this.props.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.username}</CardTitle>
            <CardText>{this.props.rate}</CardText>            <CardText>
            </CardText>
          </CardBody>
        </Card>
        <Card id="leader_card">
        <CardImg top src={this.props.img} alt="Card image cap" />
          <CardBody>
          <CardTitle>{this.props.username}</CardTitle>
            <CardText>{this.props.rate}</CardText>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
        <Card id="leader_card">
        <CardImg top src={this.props.img} alt="Card image cap" />
          <CardBody>
          <CardTitle>{this.props.username}</CardTitle>
            <CardText>{this.props.rate}</CardText>            <CardText>
            </CardText>
          </CardBody>
        </Card>
        </div>
        );
    }
}