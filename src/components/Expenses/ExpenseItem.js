import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "src/components/UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [sTitle, setTitle] = useState(props.title);
  const handleClick = () => {
    setTitle("Aggiornato");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{sTitle}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      {/* <button onClick={handleClick}>Cambia titolo</button> */}
    </Card>
  );
}

export default ExpenseItem;
