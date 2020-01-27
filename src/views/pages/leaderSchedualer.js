import * as React from "react";
import axios from 'axios'
import { connect } from 'react-redux'
import * as ReactDOM from "react-dom";
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
import userProfile_api from "../../core/api/userProfile_api"
// import "@syncfusion/ej2-split-buttons/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";
import {
  ScheduleComponent,
  WorkWeek,
  Week,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
  Day
} from "@syncfusion/ej2-react-schedule";
import { isLeader_success } from "../../core/userProfile/userProfile_action";

const scheduleData = [
  {
    Id: 2,
    Subject: "Free",
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false,
    Status: "Completed",
    Priority: "High"
  },
  {
    Id: 3,
    Subject: "Free",
    StartTime: new Date(2018, 1, 15, 11, 0),
    EndTime: new Date(2018, 1, 15, 12, 30),
    IsAllDay: false,
    Status: "Completed",
    Priority: "High"
  }
];
class schedualer extends React.Component {
  constructor() {
    super(...arguments);
    this.data = extend([], scheduleData, null, true);
  }
  async onEventClick(args) {
    console.log("++++++++++++++++++++in new event")
    console.log(args)
    if (args.type == "DeleteAlert") {
      console.log("deleted")
      ;//remove data
    }
    else if (args.type == "QuickInfo") {
      if (!this.data.includes(args.data)) {
        console.log("saved",this.data)
        this.data.push(args.data)
        await this.props.changeSchedluer(args.data)
      };//send data to back
    }
    // this.props.changeSchedluer(this.data)

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
          selectedDate={new Date(2018, 1, 15)}
          currentView="Day"
          eventSettings={{ dataSource: this.data }} popupClose={this.onEventClick.bind(this)}>
          <ViewsDirective>
            <ViewDirective option="Week" startHour="07:00" endHour="15:00" />
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
      dispatch(userProfileAction.changeFreeTime(scheduler_data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(schedualer);
