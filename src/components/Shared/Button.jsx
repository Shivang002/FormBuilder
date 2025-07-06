import React from 'react';

const Button = ({
  onClick,
  children,
  variant = 'primary',
  type = 'button',
}) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition duration-200';
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
