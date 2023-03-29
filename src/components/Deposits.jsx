import React from "react";

export default function Deposits({
  deposit,
  setDeposit,
  addDeposit,
  description,
  setDescription,
  deposits,
}) {
  return (
    <>
      <div className="deposits-container">
        <form>
          <input
            className="value-input"
            value={deposit}
            onChange={(e) => {
              setDeposit(Math.abs(e.target.value));
            }}
            type="number"
            placeholder="$0"
          />

          <textarea
            className="text-input"
            value={description}
            onChange={(e) => {
              console.log(description);
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Description..."
          />
        </form>
        <button className="form-btn" onClick={() => addDeposit()}>
          +
        </button>
        <div className="recent-container">
          <h4>Recent</h4>
          <div id="recent-deposit">
            {deposits.length === 0 ? (
              <p>No recent deposits</p>
            ) : (
              deposits.map((item) => {
                return (
                  <div className="recent-item" key={item.id}>
                    <p>{item.description}</p>

                    <p>${item.amount}</p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
