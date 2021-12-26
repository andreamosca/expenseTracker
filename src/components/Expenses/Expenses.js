import React, { useState } from "react";
import Card from "src/components/UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");
  const handleYearSelection = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onYearSelection={handleYearSelection} />
      {props.items.map((prop) => (
          <ExpenseItem
            key={prop.id}
            title={prop.title}
            amount={prop.amount}
            date={prop.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
