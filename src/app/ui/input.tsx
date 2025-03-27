"use client";
import React from "react";

type InputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function Input({
  id,
  label,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div className="flex flex-col m-4">
      <label htmlFor={id} className="mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
      />
    </div>
  );
}
