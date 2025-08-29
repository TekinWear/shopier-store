"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-xl font-semibold text-indigo-600 border-2 border-indigo-600 
                 hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-md"
    >
      {children}
    </button>
  );
}
