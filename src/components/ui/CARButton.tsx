import React from 'react';

interface CARButtonProps {
  text: string;
  className?:string;
}

const CARButton: React.FC<CARButtonProps> = ({ text,className }) => {
  return (
    <button
      className={`${className} px-3   
        active:shadow-2xl hover:bg-primary/85 hover:animate-press hover:duration-1000 font-medium active:animate-press p-1 bg-button-gradient text-white rounded-md`}
    >
      {text}
    </button>
  );
};

export default CARButton;
