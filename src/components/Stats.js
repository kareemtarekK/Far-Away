export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);
  if (!items.length)
    return (
      <footer className="stats">
        <em>start adding some items to your packinglist 💼</em>
      </footer>
    );
  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>you got everything ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({packedPercentage}%)
        </em>
      )}
    </footer>
  );
}
