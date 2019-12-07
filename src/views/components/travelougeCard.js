import React from 'react'
import '../styles/searchBar.css'
export default class placeCard extends React.Component{
    constructor(){
        super()
        this.state={
            title : "اصفهان",
            image1: "1.png",
            text : "vjifbjjoijfboiebji bouhburgjhb jhto uhtuih giutghkfporig09 5kvdlj gu98rgu gjirejg u839g qij8iuj jgiorj gioaj gaiojiajgijrgioj gijarpiar jprijg paj iajh iaj haij",
            username:"mahsa"
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        window.location.replace(`/travelouge/${this.props.id}`)
    }
    render(){
        return(
            <div id="travelloufe_card">
                <div id="travelloufe_card_img_div">
                <img id="travelloufe_card_img" src={this.state.image1} alt={this.state.title}/>
                </div>
                <div id="travelloufe_card_div">
                    <div>
                        <h4 id="travelloufe_card_h1"> {this.state.title}</h4>
                        <p id="travelloufe_card_p">{this.state.text}</p>
                        <p id="travelloufe_card_writer">نوشته شده توسط:{this.state.username}</p>
                    </div>
                    <button id="travelloufe_card_button" onClick={this.handleClick}>ادامه مطلب</button>
                </div>
             </div>
        )
    }
}