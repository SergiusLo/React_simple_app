import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import "./components/Costs/Costs.css";

const INITIAL_COST = [
  {
    id: "c1",
    date: new Date(2021, 2, 13),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 5, 18),
    description: "Macbook",
    amount: 1250,
  },
  {
    id: "c3",
    date: new Date(2021, 8, 23),
    description: "Jeans",
    amount: 80,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {
    setCosts((prevCost) => {
      return [cost, ...prevCost];
    });
    // console.log("app component");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
