import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img from './1.jpg';
import './homePage.css';
import { CardImg, CardBody, CardTitle, CardSubtitle, Button,ButtonGroup} from 'reactstrap';


const homePage = (props) => {
  return (
    <div align="right">
      <ButtonGroup id="bg">
        <Button  className="loginSignupButton">Login</Button> 
        <Button  className="loginSignupButton">Signup</Button>
      </ButtonGroup>
      <div class="row">
        <div class="column">
          <CardImg  src={img}/>
          <CardBody >
            <CardTitle >place1</CardTitle>
            <CardSubtitle className="cardsub">this is the place1</CardSubtitle>
            <Button className="selectButton">select</Button>
          </CardBody>
        </div>
        <div class="column">
          <CardImg  src={img} />
          <CardBody>
            <CardTitle >place2</CardTitle>
            <CardSubtitle className="cardsub">this is the place2</CardSubtitle>
            <Button className="selectButton">select</Button>
          </CardBody>
         </div>
         <div class="column">
          <CardImg  src={img} />
          <CardBody>
            <CardTitle >place3</CardTitle>
            <CardSubtitle className="cardsub">this is the place3</CardSubtitle>
            <Button className="selectButton">select</Button>
          </CardBody>
          </div> 
      </div>
      <div class="row">
        <div class="column">
          <CardImg  src={img}/>
          <CardBody >
            <CardTitle >place1</CardTitle>
            <CardSubtitle className="cardsub">this is the place1</CardSubtitle>
            <Button className="selectButton">select</Button>
          </CardBody>
        </div>
        <div class="column">
          <CardImg  src={img} />
          <CardBody>
            <CardTitle >place2</CardTitle>
            <CardSubtitle className="cardsub">this is the place2</CardSubtitle>
            <Button className="selectButton">select</Button>
          </CardBody>
         </div>
         <div class="column">
          <CardImg  src={img} />
          <CardBody>
            <CardTitle >place3</CardTitle>
            <CardSubtitle className="cardsub">this is the place3</CardSubtitle>
            <Button className="selectButton">select</Button>
          </CardBody>
          </div> 
      </div>
    </div>
  );
};

export default homePage;