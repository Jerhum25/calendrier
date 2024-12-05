import React from "react";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import "./calendar.scss";

function Calendar(props) {
  return (
    <div className="calendarContainer">
      {/* <CalendarHeader /> */}
      <CalendarGrid />
    </div>
  );
}

export default Calendar;
