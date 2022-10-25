// import React, { useState } from "react";
import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem(props) {
  //   const costDate = new Date(2021, 2, 12);
  //   const costDescription = "Холодильник";
  //   const costAmount = 999.99;
  // const [description, setDescription] = useState(props.description);

  // const changeDescriptionHandler = () => {
  //   setDescription("New cost!");
  //   console.log("Click");
  // };
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date}></CostDate>
        <div className="cost-item__description">
          <h2 className="title">{props.description}</h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={changeDescriptionHandler}>Изменить описание</button> */}
      </Card>
    </li>
  )
}

export default CostItem;
