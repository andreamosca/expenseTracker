import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Nessuna spesa trovata</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          onDeleteItem={() => props.onDelete(item)}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
