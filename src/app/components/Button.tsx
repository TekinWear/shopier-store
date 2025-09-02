import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition ${className}`}
    >
      {children}
    </button>
  );
}
