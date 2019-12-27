import React from 'react'
import '../styles/style.css'
import { connect } from 'react-redux'


class actionCard extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("user logi state", this.props.logged_in)
        if (this.props.logged_in == true)
            window.location.replace(`/${this.props.url}`)
        else
            window.location.replace(`/authentication`)
    }

    render() {
        return (
            <div onClick={this.handleClick} className="action_card">
                <img className="action_card_backimg" src={this.props.backPic} />
                <img className="action_card_logo" src={this.props.hoverPic} />
                <p className="action_card_title" gutterBottom variant="h6" component="h1">
                    {this.props.title}
                </p>
                <p className="action_card_disc" variant="body2" color="textSecondary" component="p">
                    {this.props.discriptions}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        logged_in: state.login_reducer.logged_in,

    }
}
export default connect(mapStateToProps)(actionCard)