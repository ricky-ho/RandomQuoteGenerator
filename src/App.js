import React from "react";
import QuoteBox from "./components/QuoteBox";

function App() {
  const COLORS = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
    "#957bea",
    "#2083C4",
    "#D30FD0",
    "#BBC51E",
    "#FF9713",
    "#D96B30",
  ];

  return (
    <div className="App">
      <QuoteBox colors={COLORS} />
    </div>
  );
}

export default App;
