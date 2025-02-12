import React, { ReactNode, ChangeEvent, MouseEventHandler } from "react";

// Card Component
interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-lg p-4 ${className}`}>{children}</div>
);

// CardContent Component
interface CardContentProps {
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ children }) => <div>{children}</div>;

// Button Component
interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-xl ${className}`}>
    {children}
  </button>
);

// Input Component
interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder = "", value, onChange, className = "" }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-2 rounded-lg border border-gray-300 ${className}`}
  />
);

// Textarea Component
interface TextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ value, onChange, className = "" }) => (
  <textarea
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-2 rounded-lg border border-gray-300 ${className}`}
  />
);

// Separator Component
interface SeparatorProps {
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ className = "" }) => (
  <hr className={`border-t border-gray-200 ${className}`} />
);
