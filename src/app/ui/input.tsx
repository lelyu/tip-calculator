"use client";
import React, { useState } from "react";

type InputProps = {
  id: string;
  label: string;
  value: string;
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
  const [touched, setTouched] = useState(false);

  const isValidNumber = value.trim() === "" || !isNaN(Number(value));

  return (
    <div className="flex flex-col ml-4 mr-4 mt-2">
      <label
        htmlFor={id}
        className="mb-1 font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e);
          if (!touched) setTouched(true);
        }}
        className={`border p-3 rounded-lg focus:outline-none transition duration-150 ease-in-out ${
          !isValidNumber && touched
            ? "border-red-500 focus:ring-2 focus:ring-red-500"
            : "border-gray-300 focus:ring-2 focus:ring-blue-500"
        }`}
      />
      {!isValidNumber && touched && (
        <p className="text-red-500 text-sm mt-1 dark:text-red-400">
          Please enter a valid number.
        </p>
      )}
    </div>
  );
}
