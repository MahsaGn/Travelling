import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img from './1.jpg';
import './homePage.css';
import { CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


const homePage = (props) => {
  return (
    <div >
      <Button id="login">login</Button>

      <div class="row">
        <div class="column">
          <CardImg  src={img}   />
          <CardBody >
            <CardTitle >place1</CardTitle>
            <CardSubtitle>this is the place1</CardSubtitle>
            <Button  >select</Button>
          </CardBody>
        </div>
        <div class="column">
          <CardImg  src={img} />
          <CardBody>
            <CardTitle >place2</CardTitle>
            <CardSubtitle>this is the place2</CardSubtitle>
            <Button >select</Button>
          </CardBody>
         </div>
         <div class="column">
          <CardImg  src={img} />
          <CardBody>
            <CardTitle >place3</CardTitle>
            <CardSubtitle>this is the place3</CardSubtitle>
            <Button>select</Button>
          </CardBody>
          </div> 
      </div>
    </div>
  );
};

export default homePage;