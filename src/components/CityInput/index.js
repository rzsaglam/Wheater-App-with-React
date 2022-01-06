import styles from "./styles.module.css";

import { useContext } from "react";

import CityContext from "../../contexts/CityContext";

const CityInput = () => {
  const { cities } = useContext(CityContext);
  const { setCurrentCity } = useContext(CityContext);

  const onChange = (e) => {
    setCurrentCity(e.target.value);
  };

  return (
    <div className={styles.Card}>
      <select
        style={{
          width: 200,
          height: 25,
          textAlign: "center",
          backgroundColor: "#eceff1",
          margin: 10,
        }}
        name="city"
        defaultValue={"İstanbul"}
        onChange={onChange}
      >
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityInput;
