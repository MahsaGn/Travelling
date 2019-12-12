import React from 'react'
import PlaceCard from '../components/placeCard'
import {connect} from 'react-redux'
import Header from '../components/header'
import { TabContent, TabPane,Button } from 'reactstrap';
import SortPlaceBar from '../components/sortBar'
import Slider, { Range } from 'rc-slider';
import '../styles/style.css'
import * as searchedPlaceAction  from '../../core/searchedPlace/searchedPlace_action';
import 'rc-slider/assets/index.css';
import mobiscroll from '@mobiscroll/react';
import { SliderComponent, SliderChangeEventArgs } from '@syncfusion/ej2-react-inputs';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

const units = ['oz', 'g', 'serving'];
let prevUnit = 'oz';
const wheel = [
    [{
        circular: false,
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    }, {
        circular: false,
        data: ['-', '1/4', '1/2', '3/4']
    }, {
        circular: false,
        data: units
    }]
];

class FilterBar extends React.Component{

    constructor(props){
        super(props);
        this.state = 
        {
            searchedVal:""
        };
        this.handleChange=this.handleChange.bind(this)
        this.onSearchClick=this.onSearchClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    async componentWillMount(){
        var searchedVal = this.props.searchedVal
        console.log("in searchplace",searchedVal)
        this.setState(
            {
                searchedVal:this.state.searchedVal
            }
        )
        console.log("after await",this.props.info)
    }

    async onSearchClick(){
        await this.props.setSearchVal(this.state.searchedVal)
        console.log("searched value is",this.props.searchedVal)
        window.location.replace(`/places/${this.props.searchedVal}`)
    }

    handleChange(e){
        this.setState(
            {
                searchedVal:e.target.value
            }
        )
    }

    handleEnter(e){
        console.log("here",e.key)
        if(e.key ==="Enter")
            this.onSearchClick(e)
    }

    validate = (event, inst) => {
        let mult = 1;
        const index = event.index;
        const currUnit = event.values[2];
        const disabled = [];

        if (currUnit == 'g' && (prevUnit == 'oz' || prevUnit == 'serving')) {
            mult = 28;
        } else if ((currUnit != 'oz' || currUnit != 'serving') && prevUnit == 'g') {
            mult = 1 / 28;
        }

        if (currUnit != 'serving') {
            disabled.push('1/4', '1/2', '3/4');
        }

        if (index == 2 && currUnit != prevUnit) {
            for (let i = 0; i < wheel[0][0].data.length; ++i) {
                wheel[0][0].data[i] = Math.round(wheel[0][0].data[i] * mult);
            }

            inst.settings.wheels = wheel;
            inst._tempWheelArray[0] = inst._tempWheelArray[0] * mult;
            inst.changeWheel({
                0: wheel[0][0]
            });

            prevUnit = currUnit;
        }return {
            disabled: [
                [], disabled, []
            ]
        }
    }

    parseValue = (val) => {
        let hasUnit = false;
        
        if (val) {
            val = val.toString().split(' ');
            hasUnit = units.indexOf(val[1]) !== -1;
            return [val[0], (hasUnit ? '' : val[1].replace('-', '')), (hasUnit ? val[1] : val[2])];
        }

        return [0, '-', 'oz'];
    }
    formatValue = (data) => {
        return (data[2] == 'serving' && data[0] == 0 && data[1] ? '' : data[0]) + (data[1] ? ' ' + data[1].replace('-', '') : '') + ' ' + data[2];
    }



    render(){
        return(
            <div className="searching_option">
                <div className="searchBar_searchPlace">
                    <input className="search_input" onChange={this.handleChange} onKeyPress={this.handleEnter} value={this.state.searchedVal} type="text"/>
                    <Slider />
                    <Range step='24'/>
                    <SliderComponent id='height_slider' min={0} max={100} value={30} />
                    <div>
                <mobiscroll.Scroller
                    display="inline"
                    type="hidden"
                    wheels={wheel}
                    validate={this.validate}
                    parseValue={this.parseValue}
                    formatValue={this.formatValue}
                    placeholder="Please Select..."
                />
            </div>
                    <Button className="search_button" onClick={this.onSearchClick}>جست و جو</Button>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        searchedVal: state.searchedPlace_reducer.searchedPlace_val
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        setSearchVal : (searched_val) => dispatch(searchedPlaceAction.setSearchVal(searched_val)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(FilterBar);
  
  
  