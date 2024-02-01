import SellForm from "./SellForm";

export function SellPage({categories}) {
  return (
    <div>
      <h1>Sell page</h1>
      <SellForm categories={categories} />
    </div>
  );
}
