import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './homePage.css';
import { CardImg, CardBody, CardTitle, Button} from 'reactstrap';

class Column extends React.Component{
    constructor(props){
        super(props);
      };
    render(){
        console.log(this.props.info)
        return(
            <div className="column">
                <CardImg  src={this.props.info.image}/>
                <CardBody >
                    <CardTitle >{this.props.info.title}</CardTitle>
                    <Button className="selectButton">select</Button>
                </CardBody>
            </div>

        );
    }
}
export default Column;