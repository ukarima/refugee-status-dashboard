import * as React from "react";

function Input({ mode }) {
  return (
    <select>
      <option value="">Select {mode}</option>
      <option value="paris">Paris</option>
      <option value="london">London</option>
      <option value="athens">Athens</option>
      <option value="madrid">Madrid</option>
    </select>
  );
}

export default Input;
