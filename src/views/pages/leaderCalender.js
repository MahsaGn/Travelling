
import '../styles/input-moment.less';
import '../styles/app.less';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputMoment from 'input-moment';
import packageJson from '../../../package.json';

class leaderCalender extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            moment: "",
            m: moment()
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleChange = m => {
        this.setState({ m });
    };

    handleSave = () => {
        console.log('saved', this.state.m.format('llll'));
    };


    handleClick() {
        window.location.replace(`/travellouge/${this.props.info.id}`)
    }

    render() {
        return (
            <div >

                <h1>
                    {packageJson.name}: {packageJson.version}
                </h1>
                <h2>{packageJson.description}</h2>
                <form>
                    <div className="input">
                        <input type="text" value={this.state.m.format('llll')} readOnly />
                    </div>
                    <InputMoment
                        moment={this.state.m}
                        onChange={this.handleChange}
                        minStep={5}
                        onSave={this.handleSave}
                    />
                </form>

            </div>
        )
    }
} export default leaderCalender