import "./App.css";
import { CityProvider } from "./contexts/CityContext";
import CityInput from "./components/CityInput";
import Wheater from "./components/Wheater";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <CityInput />
        <Wheater />
      </CityProvider>
    </div>
  );
}

export default App;
