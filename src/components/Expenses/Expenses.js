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

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(year)
  );

  let expensesContent = <p>Nessuna spesa trovata</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onYearSelection={handleYearSelection} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
