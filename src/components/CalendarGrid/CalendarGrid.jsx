import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./calendarGrid.scss";

function CalendarGrid() {
  const [curentMonth, setCurentMonth] = useState(new Date().getMonth());
  const [curentYear, setCurentyear] = useState(new Date().getFullYear());
  const [lastDayMonth, setLastDayMonth] = useState();
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
  const days = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];
  const dayNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42,
  ];

  function nextMonth(e) {
    if (curentMonth >= months.length - 1) {
      setCurentMonth(0);
      setCurentyear(curentYear + 1);
    } else {
      setCurentMonth(curentMonth + 1);
    }
  }

  function previousMonth(e) {
    if (curentMonth <= 0) {
      setCurentMonth(months.length - 1);
      setCurentyear(curentYear - 1);
    } else {
      setCurentMonth(curentMonth - 1);
    }
  }

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }  
  
  const [firstDay, setFirstDay] = useState();
  const notDayMonth = document.querySelectorAll(".day");
  
  useEffect(() => {
    const day1 = new Date(curentYear, curentMonth, 1).getDay();
    if (day1 === 0) {
      // console.log("dimanche");
      setFirstDay(6);
    } else if (day1 === 1) {
      // console.log("lundi");
      setFirstDay(0);
    } else if (day1 === 2) {
      // console.log("mardi");
      setFirstDay(1);
    } else if (day1 === 3) {
      // console.log("mercredi");
      setFirstDay(2);
    } else if (day1 === 4) {
      // console.log("jeudi");
      setFirstDay(3);
    } else if (day1 === 5) {
      // console.log("vendredi");
      setFirstDay(4);
    } else if (day1 === 6) {
      // console.log("samedi");
      setFirstDay(5);
    }
    
    setLastDayMonth(getLastDayOfMonth(curentYear, curentMonth));
    
    notDayMonth.forEach((item) => {
      if (parseInt(item.textContent) <= 0 || parseInt(item.textContent) > lastDayMonth) {
        // console.log(item.textContent);
        item.style.backgroundColor = "lightgrey";
        item.textContent = "";
      } else {
        item.style.backgroundColor = "initial";
      }
      // console.log(typeof(parseInt(item.textContent)));
    });
  }, [curentMonth, curentYear, notDayMonth, lastDayMonth]);

  return (
    <>
      <div className="calendarHeaderContainer">
        <FaChevronLeft className="chevronLeft" onClick={previousMonth} />
        <p>
          {months[curentMonth]} {curentYear}
        </p>
        <FaChevronRight className="chevronRight" onClick={nextMonth} />
      </div>
      <div className="calendarGridContainer">
        {days.map((item, index) => (
          <div className="nameDay" key={index}>
            {item}
          </div>
        ))}
        {dayNumber.map((item, index) => (
          <div className="day" key={index}>
            {item - firstDay}
          </div>
        ))}
      </div>
    </>
  );
}

export default CalendarGrid;
