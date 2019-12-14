import React from 'react'
import PlaceCard from '../components/placeCard'
import { connect } from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane, Button } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import '../styles/style.css'
import * as searchedPlaceAction from '../../core/searchedPlace/searchedPlace_action';
class searchedPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "",
            searchedVal: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.onSearchClick = this.onSearchClick.bind(this)
    }

    async componentWillMount() {
        var searchedVal = window.location.pathname.split('/')[2]
        console.log("in searchplace", searchedVal)
        let activeTab = localStorage.getItem('activeTab')
        let option = localStorage.getItem('option')
        await this.props.toggle(activeTab, option)
        await this.props.searchedPlace(searchedVal)
        console.log(this.props.activeTab)
        if (this.props.searchedPlaceLoaded) {
            this.setState({
                searchedVal: this.state.searchedVal,
                info: this.props.info.map((d) => {
                    return <PlaceCard
                        title={d.title}
                        src={d.image1}
                        id={d.id} />
                })
            })
        }
        console.log("after await", this.props.info)
    }

    onSearchClick() {
        localStorage.setItem("activeTab", this.props.activeTab)
        localStorage.setItem("option", this.props.option)
        localStorage.setItem("searched", this.state.searchedVal)
        if (this.state.searchedVal != "")
            window.location.replace(`/places/${this.state.searchedVal}`)
        else
            window.location.replace(window.location.href)
    }

    handleChange(e) {
        this.setState({
            searchedVal: e.target.value
        })
    }

    render() {

        return (
            <div>
                <Header />
                <div className="searching_option">
                    <SortPlaceBar activeTab={this.state.activeTab} toggle={this.toggle} />
                    <div className="searchBar_searchPlace">
                        <input className="search_input" onChange={this.handleChange} value={this.state.searchedVal} type="text" />
                        <Button className="search_button" onClick={this.onSearchClick}>جست و جو</Button>
                    </div>
                </div>
                <br /><br /><br /><br />
                <TabContent activeTab={this.state.activeTab}>
                    <TabContent tabId={this.state.activeTab} />
                    <TabPane id="sort_option" tabId={this.state.activeTab}>
                        {this.state.info}
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        searchedPlaceLoaded: state.searchedPlace_reducer.searchedPlaceLoaded,
        info: state.searchedPlace_reducer.places_info,
        option: state.searchedPlace_reducer.sortPlace_option,
        activeTab: state.searchedPlace_reducer.activeTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (activeTab, option) => dispatch(searchedPlaceAction.change_navTab(activeTab, option)),
        searchedPlace: (searched_val, activeTab, option) => dispatch(searchedPlaceAction.searchedPlace(searched_val, activeTab, option)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchedPlace);


