
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
        this.state={
            changedates:[]
        }
    }

    render() {
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
                    onChange={(selections) => {
                        selections.forEach(({ start, end }) => {
                            console.log('Start:', start, 'End:', end);
                            let starts = this.state.changedates
                            starts.push(`${start},${end}`)
                            this.setState({changedates : starts})
                            console.log(this.state.changedates)
                        })
                    }}

                    height={'90vh'}
                    recurring={true}
                    availableDays={['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه','پنج‌شنبه','آدینه']}
                    availableHourRange={{ start: 0, end: 23 }}
                />
            </div>
        )
    }
} export default leaderCalender