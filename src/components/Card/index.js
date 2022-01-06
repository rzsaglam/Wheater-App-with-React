import styles from "./styles.module.css";
import React from "react";

const Card = ({ day, degree, status, icon }) => {
  const sunIcon = require("../../assets/Icons/sunIcon.png");
  const cloudIcon = require("../../assets/Icons/cloudIcon.png");
  const rainIcon = require("../../assets/Icons/rainIcon.png");
  const snowIcon = require("../../assets/Icons/snowIcon.png");

  if (status === "Rain") {
    icon = rainIcon;
  } else if (status === "Clear") {
    icon = sunIcon;
  } else if (status === "Clouds") {
    icon = cloudIcon;
  } else if (status === "Snow") {
    icon = snowIcon;
  }

  console.log(status);

  return (
    <div className={styles.Card}>
      <div className={styles.CardHeader}>{day}</div>
      <div className={styles.CardBody}>
        <img src={icon} alt="icon" />
      </div>
      <div className={styles.CardFooter}>{parseInt(degree)}°C</div>
    </div>
  );
};

export default Card;
