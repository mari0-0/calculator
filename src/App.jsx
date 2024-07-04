import "./styles.css";
import CalculatorHead from "./components/CalculatorHead";
import CalculatorBody from "./components/CalculatorBody";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    mainValue: "0",
    secondaryValue: "0",
    displayValue: "0",
  });
  return (
    <div className="flex-col">
      <CalculatorHead values={values} />
      <CalculatorBody values={values} setValues={setValues} />
    </div>
  );
}

export default App;
