import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux'
import * as searchedPlaceAction from '../../core/searchedPlace/searchedPlace_action';


class sortBar_navLik extends React.Component {

    constructor(props) {
        super(props)
        this.sortPlace = this.sortPlace.bind(this)
    }

    sortPlace = async () => {
        //window.location.replace('/')
        localStorage.setItem("activeTab", this.props.number)
        localStorage.setItem("option", this.props.option)
        await this.props.toggle(this.props.number, this.props.option)
        window.location.replace(window.location.href)
    }

    render() {
        console.log(this.props.activeTab, this.props.number)
        return (
            <NavItem>
                <NavLink
                    className={classnames({ active: this.props.activeTab === this.props.number })}
                    onClick={this.sortPlace}
                >
                    {this.props.title}
                </NavLink>
            </NavItem>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        activeTab: state.searchedPlace_reducer.activeTab,
        sortPlace_option: state.searchedPlace_reducer.sortPlace_option
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (activeTab, option) => dispatch(searchedPlaceAction.change_navTab(activeTab, option)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sortBar_navLik);


