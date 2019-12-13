import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/searchBar.css'
export default class actionCard extends React.Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        window.location.replace(`/place/${this.props.id}`)
    }
    render(){
        return(
                <Card className="action_card">
                <img className="action_card_backimg" src={this.props.backPic}/>
                <img className="action_card_logo" src={this.props.hoverPic}/>    
                    <Typography className="action_card_title" gutterBottom variant="h6" component="h1">
                        {this.props.title}
                    </Typography>
                    <Typography className="action_card_disc" variant="body2" color="textSecondary" component="p">
                    {this.props.discriptions}    </Typography>
                    <Button onClick={this.handleClick} size="small" color="primary">
                    نمایش اطلاعات
                    </Button>
                </Card>
        )
    }
}