import { createContext, useState } from "react";
import city_data from "./cities.json";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([...city_data]);
  const [currentCity, setCurrentCity] = useState("İstanbul");

  const values = {
    cities,
    setCities,
    currentCity,
    setCurrentCity,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export default CityContext;
