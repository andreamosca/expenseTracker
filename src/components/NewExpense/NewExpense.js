import React from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const handleExpenseSaveData = (oSavedExpenseData) => {
    const oExpenseData = {
      ...oSavedExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(oExpenseData);
  };
  
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleExpenseSaveData} />
    </div>
  );
};

export default NewExpense;
