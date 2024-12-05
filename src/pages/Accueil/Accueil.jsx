import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import "./accueil.scss";
function Accueil(props) {
  return (
    <div className="accueilContainer">
      {/* <Header/> */}
      <Calendar />
    </div>
  );
}

export default Accueil;
