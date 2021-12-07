import ExpenseItem from "./components/ExpenseItem";

function App() {
  const aExpenses = [
    {id: "1",title: "Meccanico Moto", amount: 250, date: new Date(2021, 10, 31)},
    {id: "2",title: "Panino", amount: 10, date: new Date(2021, 12, 7)},
    {id: "3",title: "Computer", amount: 1000, date: new Date(2021, 11, 20)},
    {id: "4",title: "Scarpe", amount: 130, date: new Date()}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={aExpenses[0].title} amount={aExpenses[0].amount} date={aExpenses[0].date}></ExpenseItem>      
      <ExpenseItem title={aExpenses[1].title} amount={aExpenses[1].amount} date={aExpenses[1].date}></ExpenseItem>      
      <ExpenseItem title={aExpenses[2].title} amount={aExpenses[2].amount} date={aExpenses[2].date}></ExpenseItem>      
      <ExpenseItem title={aExpenses[3].title} amount={aExpenses[3].amount} date={aExpenses[3].date}></ExpenseItem>      
    </div>
  );
}

export default App;
