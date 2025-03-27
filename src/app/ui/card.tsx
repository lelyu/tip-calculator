"use client";

export default function Card({
  bill_amount,
  tip_percentage,
}: {
  bill_amount: number;
  tip_percentage: number;
}) {
  const total_tip = bill_amount * tip_percentage * 0.01;
  return (
    <div className="first:bg-blue-200 flex-auto border-2 border-gray-300 p-4 m-4">
      <h1>{tip_percentage} %</h1>
      <hr />
      <h1>Tip: {Math.trunc(total_tip * 100) / 100}</h1>
      <h1>Total: {Math.trunc((total_tip + bill_amount) * 100) / 100} </h1>
    </div>
  );
}
