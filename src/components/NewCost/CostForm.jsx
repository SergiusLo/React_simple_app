import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const [userInput, setUserInput] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    //  console.log(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    name: event.target.value,
    //  });
    //  setUserInput((previousState) => {
    //    return {
    //      ...previousState,
    //      name: event.target.value,
    //    };
    //  });
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    amount: event.target.value,
    //  });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    date: event.target.value,
    //  });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    // console.log(costData);
    props.onSaveCostData(costData);
    setInputName("");
    setInputDate("");
    setInputAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="">Название</label>
          <input value={inputName} type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label htmlFor="">Сумма</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="">Дата</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить Расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
