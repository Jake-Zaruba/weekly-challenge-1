import { BrowserRouter, Routes, Route } from "react-router-dom";
import Balance from "./components/Balance";
import Deposits from "./components/Deposits";

export default function Whiteboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Dashboard}>
          <Route index path="balance" element={<Balance />} />
          <Route path="deposits" element={<Deposits />} />
          <Route path="expenses" element={<Expenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
