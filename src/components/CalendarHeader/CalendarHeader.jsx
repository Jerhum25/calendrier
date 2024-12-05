import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./calendarHeader.scss";

const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

function CalendarHeader() {
  const [curentMonth, setCurentMonth] = useState(new Date().getMonth());
  const [curentYear, setCurentyear] = useState(new Date().getFullYear());
  
  function nextMonth(e) {
    if (curentMonth >= months.length - 1) {
      setCurentMonth(0);
      setCurentyear(curentYear + 1)
    } else {
      setCurentMonth(curentMonth + 1);
    }
  }
  function previousMonth(e) {
    if (curentMonth <= 0) {
      setCurentMonth(months.length - 1);
      setCurentyear(curentYear - 1)
    } else {
      setCurentMonth(curentMonth - 1);
    }
  }

  return (
    <div className="calendarHeaderContainer">
      <FaChevronLeft className="chevronLeft" onClick={previousMonth} />
      <p>
        {months[curentMonth]} {curentYear}
      </p>
      <FaChevronRight className="chevronRight" onClick={nextMonth} />
    </div>
  );
}

export default CalendarHeader;
