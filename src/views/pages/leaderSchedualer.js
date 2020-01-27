import * as React from "react";
import { connect } from 'react-redux'
import * as userProfileAction from "../../core/userProfile/userProfile_action";

import "../styles/App.css";
import "@syncfusion/ej2-base/styles/material.css";
// import "@syncfusion/ej2-react-buttons/styles/material.css";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import { extend } from '@syncfusion/ej2-base';
// import "@syncfusion/ej2-split-buttons/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";
import {
  ScheduleComponent,
  Week,
  Inject,
  ViewsDirective,
  ViewDirective
} from "@syncfusion/ej2-react-schedule";


class schedualer extends React.Component {
  constructor() {
    super(...arguments);
    this.data = extend([], "", null, true);
  }
  async onEventClick(args) {
    console.log("in new event", args)
    console.log(args)
    if (args.type == "DeleteAlert") {
      console.log("deleted",args.data)
      await this.props.delCalenderData(args.data)
    }
    else if (args.type == "QuickInfo") {
      console.log("data is", this.data, "end")
      if (this.props.scheduler_data == "" || !this.data.includes(args.data)) {
        await this.props.changeSchedluer(args.data)
      };//send data to back
      if (this.data != "") {
        console.log("saved", this.data)
        this.data[this.data.length - 1].Subject = "Free"
      }
    }
  }

  async componentWillMount() {
    await this.props.getCalenderData()
    console.log("data is component will mount", this.data)
    let list = []
    for (var i = 0; i < this.props.scheduler_data.length; i++) {
      let objdata = this.props.scheduler_data[i]
      let schedualerobj = {
        Subject: "Free",
        StartTime: objdata.StartTime,
        EndTime: objdata.EndTime,
        IsAllDay: false,
        Status: "Completed",
        Priority: "High"
      }
      list.push(schedualerobj)
    }
    this.data = list
  }

  render() {
    console.log("data is", this.data)
    return (
      <div>
        <p className="actions_text">تقویم کاری لیدر</p>
        <ScheduleComponent
          readonly={false}
          firstDayOfWeek={6}
          height="95vh"
          selectedDate={new Date(2020, 1, 15)}
          currentView="Day"
          eventSettings={{ dataSource: this.data }} popupClose={this.onEventClick.bind(this)}>
          <ViewsDirective>
            <ViewDirective option="Week" startHour="07:00" endHour="16:00" />
          </ViewsDirective>
          <Inject services={[Week]} />
        </ScheduleComponent>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    scheduler_data: state.userProfile_reducer.freetime_scheduler,
    scheduler_changeg: state.userProfile_reducer.freetime_changed,
    is_leader: state.userProfile_reducer.is_leader
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeSchedluer: scheduler_data =>
      dispatch(userProfileAction.changeFreeTime(scheduler_data)),
    getCalenderData: () =>
      dispatch(userProfileAction.getCalenderData()),
    delCalenderData: data =>
      dispatch(userProfileAction.delCalenderData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(schedualer);
