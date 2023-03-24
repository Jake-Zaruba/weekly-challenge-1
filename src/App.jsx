import { useState } from "react";
import Deposits from "./components/Deposits";
import NewExpense from "./components/NewExpense";
import Balance from "./components/Balance";

function App() {
  const [deposit, setDeposit] = useState("");
  const [deposits, setDeposits] = useState([]);
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  function addDeposit() {
    if (!deposit) {
      return alert("Add a deposit");
    }
    setDeposits((prev) => [...prev, deposit]);
    getTotal();
    setDeposit("");
  }

  function addExpense() {
    if (!expense) {
      return alert("Add an expense");
    }
    setExpenses((prev) => [...prev, expense]);
    getTotal();
    setExpense("");
    // console.log(expenses);
  }

  function getTotal() {
    // const sum = deposits.reduce((a, b) => {
    //   return a + parseInt(b);
    // }, 0);
    // const difference = expenses.reduce((a, b) => {
    //   return a + parseInt(b);
    // }, 0);
    // const newTotal = sum + difference;
    setTotal((prev) => prev + deposit - expense * -1);
  }

  const totalExpenses = expenses.reduce((a, b) => {
    console.log(a + b);
    return a + b;
  }, 0);

  const totalDeposits = deposits.reduce((a, b) => {
    console.log(a + b);
    return a + b;
  }, 0);

  return (
    <div className="App">
      <Deposits
        addDeposit={addDeposit}
        deposit={deposit}
        setDeposit={setDeposit}
      />
      <NewExpense
        addExpense={addExpense}
        expense={expense}
        setExpense={setExpense}
      />
      <Balance
        getTotal={getTotal}
        total={total}
        totalExpenses={totalExpenses}
        totalDeposits={totalDeposits}
      />
    </div>
  );
}

export default App;
