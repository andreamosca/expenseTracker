import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  // const [form, setForm] = useState({
  //   "title": "",
  //   "amount": "",
  //   "date": new Date()
  // });
  const handleTitleChange = (oEvent) => {
    setTitle(oEvent.target.value);
    // setForm((prevState) => {
    //   return {...prevState, title: oEvent.target.value}
    // });
  };
  const handleAmountChange = (oEvent) => {
    setAmount(oEvent.target.value);
  };
  const handleDateChange = (oEvent) => {
    setDate(new Date(oEvent.target.value));
  };

  return (
    <form>
      <div className="new-expense__controls">
          <div className="new-expense__control">
              <label>Titolo</label>
              <input onChange={handleTitleChange} type="text"/>
          </div>
          <div className="new-expense__control">
              <label>Costo</label>
              <input onChange={handleAmountChange} type="number" min="0.01" step="0.01"/>
          </div>
          <div className="new-expense__control">
              <label>Data</label>
              <input onChange={handleDateChange} type="date" min="2019-01-01" max="2022-12-31"/>
          </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Aggiungi Spesa</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
