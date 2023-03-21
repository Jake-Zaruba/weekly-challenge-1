import { useState } from "react";
import Deposits from "./components/Deposits";
import NewExpense from "./components/NewExpense";
import Balance from "./components/Balance";

function App() {
  const [deposit, setDeposit] = useState(0);
  const [deposits, setDeposits] = useState([]);
  const [expense, setExpense] = useState(0);

  function calculateTotal() {
    setDeposits((prev) => [...prev, deposit]);
    setDeposit("");
    console.log(deposits);
  }

  function getTotal() {
    deposits.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  return (
    <div className="App">
      <Deposits
        calculateTotal={calculateTotal}
        deposit={deposit}
        setDeposit={setDeposit}
      />
      <NewExpense />
      <Balance getTotal={getTotal} />
    </div>
  );
}

export default App;
