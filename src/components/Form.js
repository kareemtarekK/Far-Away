import { useState } from "react";

export function Form({ items, onAddItem }) {
  const [quality, setQuality] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quality, packed: false };
    onAddItem(newItem);
    setQuality(1);
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you need for your 💼 trip?</h3>
      <select value={quality} onChange={(e) => setQuality(e.target.value)}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item....."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
