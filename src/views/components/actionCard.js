import React from 'react'
import Card from '@material-ui/core/Card';
import '../styles/searchBar.css'
  
export default class actionCard extends React.Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        
    }
    handleClick(){
        window.location.replace(`/${this.props.url}`)
    }

    render(){
        return(
                <Card onClick={this.handleClick} className="action_card">
                <img className="action_card_backimg" src={this.props.backPic}/>
                <img className="action_card_logo" src={this.props.hoverPic}/>    
                    <p className="action_card_title" gutterBottom variant="h6" component="h1">
                        {this.props.title}
                    </p>
                    <p className="action_card_disc" variant="body2" color="textSecondary" component="p">
                    {this.props.discriptions}</p>
                </Card>
        )
    }
}