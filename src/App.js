import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [bill, setBill] = useState(0);
  const [myRating, setMyRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  return (
    <div className="container">
      <h1>TIP CALCULATOR</h1>
      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentage rating={myRating} OnSetRating={setMyRating}>
        How did you like the service
      </SelectPercentage>

      <SelectPercentage rating={friendRating} OnSetRating={setFriendRating}>
        How did your friend like the service
      </SelectPercentage>

      <Output myRating={myRating} friendRating={friendRating} bill={bill} />
      <Reset
        onSetBill={setBill}
        onSetMyRating={setMyRating}
        onSetFriendRating={setFriendRating}
      />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
        placeholder="0"
      />
    </div>
  );
}

function SelectPercentage({ rating, OnSetRating, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={rating} onChange={(e) => OnSetRating(e.target.value)}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>Okay(5%)</option>
        <option value={10}>Good(10%)</option>
        <option value={20}>Amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ myRating, friendRating, bill }) {
  let tip = 0;

  function calcuateTotal() {
    tip = ((Number(myRating) + Number(friendRating)) / 100) * Number(bill);
    let total = tip + Number(bill);
    console.log(bill, myRating, friendRating);
    console.log(total);
    return total;
  }

  return (
    <p>
      Yout Pay ₹ {calcuateTotal()} (₹{bill} + {tip} tip)
    </p>
  );
}

function Reset({ onSetBill, onSetMyRating, onSetFriendRating }) {
  function reset() {
    onSetBill(0);
    onSetMyRating(0);
    onSetFriendRating(0);
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
