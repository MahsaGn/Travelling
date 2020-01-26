import * as React from "react";
import * as ReactDOM from "react-dom";
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
  WorkWeek,
  Week,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective
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
export default class schedualer extends React.Component {
  constructor() {
    super(...arguments);
    this.data = extend([], scheduleData, null, true);
  }
  onEventClick(args) {
    let event = this.scheduleObj.getEventDetails(args.element);
    this.appendElement(event.Subject + '<hr>');
  }
  appendElement(html) {
    let span = document.createElement('span');
    span.innerHTML = html;
    let log = document.getElementById('EventLog');
    log.insertBefore(span, log.firstChild);
  }
  onClick() {
    document.getElementById('EventLog').innerHTML = '';
  }
  render() {
    console.log("data is",this.data)
    return (
      <div>
        <p className="actions_text">تقویم کاری لیدر</p>

        <ScheduleComponent

          readonly={false}
          firstDayOfWeek={6}
          height="95vh"
          selectedDate={new Date(2018, 1, 15)}
          currentView="Day"
          eventSettings={{ dataSource: this.data }} eventClick={this.onEventClick.bind(this)}>
          <ViewsDirective>
            <ViewDirective option="Week" startHour="07:00" endHour="15:00" />
          </ViewsDirective>
          <Inject services={[Week]} />
        </ScheduleComponent>
      </div>
    );
  }
}
