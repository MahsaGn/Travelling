import '../styles/input-moment.less';
import '../styles/app.less';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from 'react-agenda';
//import '@lls/react-light-calendar/dist/index.css' // Default Style
import '../styles/style.css'

require('moment/locale/fa.js'); // this is important for traduction purpose

var colors = {
    'color-1': "rgba(102, 195, 131 , 1)",
    "color-2": "rgba(242, 177, 52, 1)",
    "color-3": "rgba(235, 85, 59, 1)"
}
var moment = require('moment-jalaali')
moment().format('jYYYY/jM/jD')
var now = new Date();

require('moment/locale/fr.js');
var colors = {
    'color-1': "rgba(102, 195, 131 , 1)",
    "color-2": "rgba(242, 177, 52, 1)",
    "color-3": "rgba(235, 85, 59, 1)",
    "color-4": "rgba(70, 159, 213, 1)",
    "color-5": "rgba(170, 59, 123, 1)"
}


var items = [
    {
        _id: guid(),
        name: 'Meeting , dev staff!',
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
        classes: 'color-1 color-4'
    },
    {
        _id: guid(),
        name: 'Working lunch , Holly',
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 13, 0),
        classes: 'color-2'
    },
    {
        _id: guid(),
        name: 'Conference , plaza',
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 14, 30),
        classes: 'color-4'
    },
    {
        _id: 'event-4',
        name: 'Customers issues review',
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 10, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 15, 0),
        classes: 'color-3'

    },
    {
        _id: 'event-5',
        name: 'Group activity',
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 10, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 16, 30),
        classes: 'color-4'
    },
    {
        _id: 'event-6',
        name: 'Fun Day !',
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 9, 14),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 17),
        classes: 'color-3'
    }
];

class leaderCalender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selected: [],
            cellHeight: (60 / 4),
            showModal: false,
            locale: "fa",
            rowsPerHour: 4,
            numberOfDays: 4,
            startDate: new Date()
        }
        this.handleRangeSelection = this.handleRangeSelection.bind(this)
        this.handleItemEdit = this.handleItemEdit.bind(this)
        this.zoomIn = this.zoomIn.bind(this)
        this.zoomOut = this.zoomOut.bind(this)
        this._openModal = this._openModal.bind(this)
        this._closeModal = this._closeModal.bind(this)
        this.addNewEvent = this.addNewEvent.bind(this)
        this.removeEvent = this.removeEvent.bind(this)
        this.editEvent = this.editEvent.bind(this)
        this.changeView = this.changeView.bind(this)
        this.handleCellSelection = this.handleCellSelection.bind(this)

    }

    componentDidMount() {

        this.setState({ items: items })


    }


    componentWillReceiveProps(next, last) {
        if (next.items) {

            this.setState({ items: next.items })
        }
    }
    handleItemEdit(item, openModal) {

        if (item && openModal === true) {
            this.setState({ selected: [item] })
            return this._openModal();
        }



    }
    handleCellSelection(item, openModal) {

        if (this.state.selected && this.state.selected[0] === item) {
            return this._openModal();
        }
        this.setState({ selected: [item] })

    }

    zoomIn() {
        var num = this.state.cellHeight + 15
        this.setState({ cellHeight: num })
    }
    zoomOut() {
        var num = this.state.cellHeight - 15
        this.setState({ cellHeight: num })
    }


    handleDateRangeChange(startDate, endDate) {
        this.setState({ startDate: startDate })

    }

    handleRangeSelection(selected) {


        this.setState({ selected: selected, showCtrl: true })
        this._openModal();

    }

    _openModal() {
        this.setState({ showModal: true })
    }
    _closeModal(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({ showModal: false })
    }

    handleItemChange(items, item) {

        this.setState({ items: items })
    }

    handleItemSize(items, item) {

        this.setState({ items: items })

    }

    removeEvent(items, item) {

        this.setState({ items: items });
    }

    addNewEvent(items, newItems) {

        this.setState({ showModal: false, selected: [], items: items });
        this._closeModal();
    }
    editEvent(items, item) {

        this.setState({ showModal: false, selected: [], items: items });
        this._closeModal();
    }

    changeView(days, event) {
        this.setState({ numberOfDays: days })
    }


    render() {
        let m = moment('1360/5/26', 'jYYYY/jM/jD') // Parse a Jalaali date
        m.add(1, 'jYear')
        m.format('jYYYY/jM/jD [is] YYYY/M/D') // 1360/5/26 is 1981/8/17

        m.jMonth(11)
        m.startOf('jMonth')
        var AgendaItem = function (props) {
            console.log(' item component props', props)
            return <div style={{ display: 'block', position: 'absolute', background: '#FFF' }}>{props.item.name} <button onClick={() => props.edit(props.item)}>Edit </button></div>
        }
        console.log(m.format('jYYYY/jM/jD [is] YYYY/M/D'))
        return (

            <div className="content-expanded ">

                <div className="control-buttons">
                    <button className="button-control" onClick={this.zoomIn}> <i className="zoom-plus-icon"></i> </button>
                    <button className="button-control" onClick={this.zoomOut}> <i className="zoom-minus-icon"></i> </button>
                    <button className="button-control" onClick={this._openModal}> <i className="schedule-icon"></i> </button>
                    <button className="button-control" onClick={this.changeView.bind(null, 7)}> {moment.duration(7, "days").humanize()}  </button>
                    <button className="button-control" onClick={this.changeView.bind(null, 4)}> {moment.duration(4, "days").humanize()}  </button>
                    <button className="button-control" onClick={this.changeView.bind(null, 3)}> {moment.duration(3, "days").humanize()}  </button>
                    <button className="button-control" onClick={this.changeView.bind(null, 1)}> {moment.duration(1, "day").humanize()} </button>
                </div>

                <ReactAgenda
                    minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
                    maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
                    startDate={this.state.startDate}
                    startAtTime={0}
                    endAtTime={23}
                    cellHeight={this.state.cellHeight}
                    locale="fa"
                    items={this.state.items}
                    numberOfDays={this.state.numberOfDays}
                    headFormat={"ddd DD MMM"}
                    rowsPerHour={this.state.rowsPerHour}
                    itemColors={colors}
                    helper={true}
                    //itemComponent={AgendaItem}
                    view="calendar"
                    autoScale={false}
                    fixedHeader={true}
                    onRangeSelection={this.handleRangeSelection.bind(this)}
                    onChangeEvent={this.handleItemChange.bind(this)}
                    onChangeDuration={this.handleItemSize.bind(this)}
                    onItemEdit={this.handleItemEdit.bind(this)}
                    onCellSelect={this.handleCellSelection.bind(this)}
                    onItemRemove={this.removeEvent.bind(this)}
                    onDateRangeChange={this.handleDateRangeChange.bind(this)} />
                {
                    this.state.showModal ? <Modal clickOutside={this._closeModal} >
                        <div className="modal-content">
                            <ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent} />

                        </div>
                    </Modal> : ''
                }


            </div>

        );
    }

} export default leaderCalender