import { useState } from "react";
let initialItems = [{ id: 1, description: "item", packed: false, quantity: 1 }];
export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 className="logo">🌴 Far Away 💼</h1>;
}

function Form({ setItems }) {
  const [quality, setQuality] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quality, packed: false };
    console.log(newItem);
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

function PackingList() {
  return (
    <div className="packinglist">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
      <div className="settings">
        <select>
          <option>sort by input order</option>
          <option>sort by description</option>
          <option>sort by packed status</option>
        </select>
        <button>clear list</button>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span
        style={
          item.packed ? { textDecoration: "line-through", color: "#fff" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
