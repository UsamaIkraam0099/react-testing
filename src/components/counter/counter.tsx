import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1 role="count-element">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="number"
        name="ampunt"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};
