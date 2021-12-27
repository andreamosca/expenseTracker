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
      {props.items.filter(item => item.date.getFullYear() === Number(year)).map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
