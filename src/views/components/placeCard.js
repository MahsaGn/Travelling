import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/searchBar.css'


export default class placeCard extends React.Component {
    
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        window.location.replace(`/place/${this.props.id}`)
    }

    render() {
        console.log("src is", this.props.src)
        return (
            <Card onClick={this.handleClick} className="card">
                <img className="place_card_img" src={this.props.src} />
                <Typography className="place_card_title" gutterBottom variant="h6" component="h1">
                    {this.props.title}
                </Typography>
                <Typography className="place_card_disc" variant="body2" color="textSecondary" component="p">
                    {this.props.discriptions}</Typography>
            </Card>
        )
    }
}