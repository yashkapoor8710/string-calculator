// StringCalculator.tsx
import React, { useState } from "react";
import { add } from "./StringCalculatorHelper";

export const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    try {
      setResult(add(input));
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter numbers"
      />
      <button onClick={handleClick}>Calculate</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};
