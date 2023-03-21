import { useState } from "react";
import Deposits from "./components/Deposits";
import NewExpense from "./components/NewExpense";
import Balance from "./components/Balance";

function App() {
  const [deposit, setDeposit] = useState("");
  const [deposits, setDeposits] = useState([]);
  const [expense, setExpense] = useState("");
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    setDeposits((prev) => [...prev, deposit]);
    setDeposit("");
    console.log(deposits);
  }

  function getTotal() {
    const sum = deposits.reduce((a, b) => {
      return a + parseInt(b);
    }, 0);
    setTotal(sum);
  }

  return (
    <div className="App">
      <Deposits
        calculateTotal={calculateTotal}
        deposit={deposit}
        setDeposit={setDeposit}
      />
      <NewExpense />
      <Balance getTotal={getTotal} total={total} />
    </div>
  );
}

export default App;
