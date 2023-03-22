import { useState } from "react";
import Deposits from "./components/Deposits";
import NewExpense from "./components/NewExpense";
import Balance from "./components/Balance";

function App() {
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [deposit, setDeposit] = useState("");
  const [deposits, setDeposits] = useState([]);

  function addDeposit() {
    if (!deposit) {
      return alert("Add a deposit");
    }
    console.log(deposit);
    setDeposits((prev) => [...prev, deposit]);
    getTotal();
    setDeposit("");
    console.log(deposits);
  }

  function addExpense() {
    if (!expense) {
      return alert("Add an expense");
    }
    setExpenses((prev) => [...prev, expense]);
    getTotal();
    setExpense("");
    console.log(expenses);
  }

  function getTotal() {
    const sum = deposits.reduce((a, b) => {
      return a + parseInt(b);
    }, 0);
    const difference = expenses.reduce((a, b) => {
      return a + parseInt(b);
    }, 0);
    setTotal(sum + difference);
  }

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
      <Balance getTotal={getTotal} total={total} />
    </div>
  );
}

export default App;
