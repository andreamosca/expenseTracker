import React, { useState } from "react";

import NewExpense from "src/components/NewExpense/NewExpense";
import Expenses from "src/components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Meccanico Moto",
    amount: 250,
    date: new Date(2021, 10, 31),
  },
  { id: "2", title: "Panino", amount: 10, date: new Date(2021, 12, 7) },
  { id: "3", title: "Computer", amount: 1000, date: new Date(2021, 11, 20) },
  { id: "4", title: "Scarpe", amount: 130, date: new Date() },
];

const App = () => {

  const [aExpenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = expense => setExpenses((prev) => [expense, ...prev]);
  
  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={aExpenses}/>
    </div>
  );
  
  // React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, {items: aExpenses})
  // );
}

export default App;
