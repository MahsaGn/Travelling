
import '../styles/input-moment.less';
import '../styles/app.less';
import moment from 'moment';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputMoment from 'input-moment';
import 'bootstrap/dist/css/bootstrap.css';
import packageJson from '../../../package.json';
import Calendar from '@lls/react-light-calendar'
import AvailableTimes from 'react-available-times';
import { DatePicker, DateTimePicker, DateRangePicker, DateTimeRangePicker } from "react-advance-jalaali-datepicker";
import '@lls/react-light-calendar/dist/index.css' // Default Style

class leaderCalender extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            changedates: [],
            pre: [
                {start: 5280,end:5340},
                {start: 7860,end:7920}
            ]
        }
    }

    render() {
        console.log(this.state.changedates)
        console.log("pre states are",this.state.pre)
        return (
            <div className="datePicker">
                <AvailableTimes
                    weekStartsOn='saturday'
                    calendars={[
                        {
                            id: 'work',
                            title: 'Work',
                            foregroundColor: '#ff00ff',
                            backgroundColor: '#f0f0f0',
                            selected: true,
                        },
                        {
                            id: 'private',
                            title: 'My private cal',
                            foregroundColor: '#666',
                            backgroundColor: '#f3f3f3',
                        },
                    ]}

                    initialSelections={this.state.pre}

                    onChange={(selections) => {
                        console.log(selections)
                        this.setState({ changedates: selections })
                        console.log(this.state.changedates)
                    }}

                    height={'90vh'}
                    recurring={true}
                    availableDays={['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'آدینه']}
                    availableHourRange={{ start: 0, end: 23 }}
                    y />
            </div>
        )
    }
} export default leaderCalender