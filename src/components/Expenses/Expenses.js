import React, { useState } from "react";
import Card from "src/components/UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");
  const handleYearSelection = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(year)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onYearSelection={handleYearSelection} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
