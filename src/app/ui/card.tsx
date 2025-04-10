"use client";

export default function Card({
  bill_amount,
  tip_percentage,
  num_people,
}: {
  bill_amount: string;
  tip_percentage: string;
  num_people: string;
}) {
  const total_tip = parseFloat(bill_amount) * parseFloat(tip_percentage) * 0.01;
  return (
    <div className="first:bg-blue-200 dark:first:bg-blue-400 flex-auto border-2 border-gray-300 p-4 m-4 rounded-lg">
      <h1>{tip_percentage} %</h1>
      <hr />
      <h1>Tip: {Math.trunc(total_tip * 100) / 100}</h1>
      <h1>
        Total: {Math.trunc((total_tip + parseFloat(bill_amount)) * 100) / 100}{" "}
      </h1>
      {parseInt(num_people) > 1 && (
        <h1>
          Total per person:{" "}
          {Math.trunc(
            ((total_tip + parseFloat(bill_amount)) / parseInt(num_people)) * 100
          ) / 100}
        </h1>
      )}
    </div>
  );
}
