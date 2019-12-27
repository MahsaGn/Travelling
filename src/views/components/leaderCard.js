
import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import '../styles/style.css'
import 'rc-tooltip/assets/bootstrap_white.css';
export default class leaderCard extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        window.location.replace(`/leaderProfile/${this.props.info.id}`)
    }

    render() {
        console.log("leader card onfo is", this.props.info)
        return (
            <Card onClick={this.handleClick} className="card">
                <img className="leader_card_img" src={this.props.info.image1} />
                <Typography className="leader_card_name" gutterBottom variant="h6" component="h1">
                    {this.props.info.username}
                </Typography>
                <div>
                    {
                        true ? <img className="leader_card_availbility" src='/online.png' />
                            : <img className="leader_card_availbility" src='/offline.png' />
                    }
                    <Rating name="size-small" className="leader_card_rating" disabled='true' value={2} size="small" />
                </div>
            </Card>
        )
    }
}

