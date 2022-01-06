import styles from "./styles.module.css";

import { useContext, useEffect, useState } from "react";
import axios from "axios";

import CityContext from "../../contexts/CityContext";
import Card from "../Card";

const Wheater = () => {
  const { currentCity } = useContext(CityContext);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.collectapi.com/weather/getWeather", {
        params: {
          "data.lang": "tr",
          "data.city": currentCity,
        },
        headers: {
          authorization:
            "apikey YOUR_API_KEY",
          "content-type": "application/json",
        },
      })
      .then((data) => setForecast(data.data["result"]))
      .catch((err) => console.error(err));
  }, [currentCity]);

  return (
    <div className={styles.Wheater}>
      <div className={styles.Card}>
        {forecast.map((e, i) => (
          <Card
            key={i}
            day={e.day}
            degree={e.degree}
            status={e.status}
            icon={e.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Wheater;
