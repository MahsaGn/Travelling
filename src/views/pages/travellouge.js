import React from 'react'
import Header from '../components/header'
import * as travellougeAction from '../../core/sortPlace/sortPlace_action'

class Travellouge extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        let id = window.location.pathname.split('/')[2]
        console.log("travellouge id is ",id)
        this.props.travellouge(id)
    }
    render(){
        return(
            <div>
                <Header/>
                <div id="travellouge">
                    <div id="travellouge_content">
                        <h3 id="travellouge_content_title">{this.props.info.title}</h3>
                        <p id="travellouge_content_text">{this.props.info.description}</p>
                    </div>
                    <div id="travellouge_images">
                        <img id="travellouge_image" src={this.props.info.image1}/>
                        <img id="travellouge_image" src={this.props.info.image2}/>
                        <img id="travellouge_image" src={this.props.info.image3}/>
                    </div>
                </div>
            </div>
        )
    }
} 
const mapStateToProps = (state) => {
    return{
      info : state.travellouge_reducer.travellouge_info,
      ifTravellouge: state.travellouge_reducer.ifTravellouge
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        travellouge : (travellouge_id) => dispatch(travellougeAction.travellouge(travellouge_id))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Travellouge);
