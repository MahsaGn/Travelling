import React from 'react'
import '../styles/searchBar.css'


export default class placeCard extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        window.location.replace(`/travelouge/${this.props.info.id}`)
    }
    
    render(){
        return(
            <div onClick={this.handleClick} id="travelloufe_card">
                <div id="travelloufe_card_img_div">
                <img id="travelloufe_card_img" src={this.props.info.image1} alt={this.props.info.title}/>
                </div>
                <div id="travelloufe_card_div">
                    <div>
                        <h4 id="travelloufe_card_h1"> {this.props.info.title}</h4>
                        <p id="travelloufe_card_p">{this.props.info.description}</p>
                        <p id="travelloufe_card_writer">نوشته شده توسط:{this.props.info.username}</p>
                    </div>
                </div>
             </div>
        )
    }
}