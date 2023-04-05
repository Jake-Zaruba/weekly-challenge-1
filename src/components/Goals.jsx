import { useState } from "react";
import Goal from "./Goal";

export default function Goals(goal, setGoal) {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal((prev) => !prev);
  }

  return (
    <>
      <div className="new-expense-container">
        <button onClick={() => toggleModal()}>Add goal</button>
        <div className="goal-modal">
          <div className="goal-modal-overlay"></div>
          <div className="goal-modal-form">
            <input
              type="text"
              value={goal.goalName}
              onChange={(e) => setGoal({ ...goal, goalName: e.target.value })}
              placeholder="Goal Name"
            />
            <button onClick={() => toggleModal()}></button>
          </div>
        </div>
        <Goal />
      </div>
    </>
  );
}
