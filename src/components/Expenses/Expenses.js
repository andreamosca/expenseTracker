import React from "react";
import Card from "src/components/UI/Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((prop) => {
        return (<ExpenseItem key={prop.id} title={prop.title} amount={prop.amount} date={prop.date} />);
      })} 
      </Card>
  );
}

export default Expenses;
