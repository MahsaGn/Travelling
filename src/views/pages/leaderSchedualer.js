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

export default class schedualer extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 2,
        Subject: "Free",
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
        IsAllDay: false,
        Status: "Completed",
        Priority: "High"
      }
    ];
  }
  render() {
    return (
      <div>
        <p className="actions_text">تقویم کاری لیدر</p>

        <ScheduleComponent
          height="550px"
          selectedDate={new Date(2018, 1, 15)}
          currentView="Day"
          eventSettings={{
            dataSource: this.data,
            fields: {
              id: "Id",
              subject: { name: "Subject" },
              isAllDay: { name: "IsAllDay" },
              startTime: { name: "StartTime" },
              endTime: { name: "EndTime" }
            }
          }}
        >
          <ViewsDirective>
            <ViewDirective option="Week" startHour="07:00" endHour="15:00" />
          </ViewsDirective>
          <Inject services={[Week]} />
        </ScheduleComponent>
      </div>
    );
  }
}
