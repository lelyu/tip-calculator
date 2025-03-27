"use client";
import { FaGithub } from "react-icons/fa";
import Card from "./ui/card";
import Input from "./ui/input";
import { useState } from "react";

export default function Home() {
  const [billAmount, setBillAmount] = useState("100");
  const [customTip, setCustomTip] = useState("15");
  const [people, setPeople] = useState("1");

  return (
    <>
      <h1 className="flex justify-between items-center ml-4 mr-4 text-2xl font-bold mb-2">
        <span>Tip Calculator & Bill Splitter</span>
        <a href="https://github.com/lelyu/tip-calculator">
          <FaGithub />
        </a>
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-2">
        <Input
          id="bill-amount"
          label="Enter Bill Amount:"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
        <Input
          id="custom-tip"
          label="Enter Custom Tip Percentage (%):"
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)}
        />
        <Input
          id="num-people"
          label="Number of people:"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <Card
          tip_percentage={customTip}
          bill_amount={billAmount}
          num_people={people}
        />
        <Card
          tip_percentage={"18"}
          bill_amount={billAmount}
          num_people={people}
        />
        <Card
          tip_percentage={"20"}
          bill_amount={billAmount}
          num_people={people}
        />
        <Card
          tip_percentage={"22"}
          bill_amount={billAmount}
          num_people={people}
        />
        <Card
          tip_percentage={"25"}
          bill_amount={billAmount}
          num_people={people}
        />
      </div>
    </>
  );
}
