import React, { useState } from 'react';
const Pill: React.FC<{ label: string }> = ({ label }) => {
  const [isActive, setIsActive] = useState(false);
  
  const baseClasses = "text-sm px-4 py-2 rounded-full cursor-pointer transition-all duration-200 border whitespace-nowrap shadow-sm";
  const activeClasses = "bg-blue-600 border-blue-600 text-white font-semibold transform scale-105";
  const inactiveClasses = "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={() => setIsActive(!isActive)}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
};

export default Pill;