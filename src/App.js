import Expenses from "./components/Expenses";

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
      <Expenses items={aExpenses}/>
    </div>
  );
}

export default App;
