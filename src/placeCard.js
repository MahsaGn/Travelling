import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './searchBar.css'
export default class placeCard extends React.Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        window.location.replace(`/place/${this.props.id}`)
    }
    render(){
        return(
            <div>
                <Card className="card">
                <img className="place_card_img" src={this.props.src}/>
                    <Typography className="place_card_title" gutterBottom variant="h6" component="h1">
                        {this.props.title}
                    </Typography>
                    <Typography className="place_card_disc" variant="body2" color="textSecondary" component="p">
                    {this.props.discriptions}    </Typography>
                    <Button onClick={this.handleClick} size="small" color="primary">
                    نمایش اطلاعات
                    </Button>
                </Card>
            </div>
        )
    }
}