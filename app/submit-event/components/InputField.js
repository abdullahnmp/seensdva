import React from 'react';

const InputField = ({ placeholder, type, name, value, onChange }) => {
  const inputClass =
    "w-full px-6 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] font-space-grotesk";

  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClass}
      />
    </div>
  );
};

export default InputField;