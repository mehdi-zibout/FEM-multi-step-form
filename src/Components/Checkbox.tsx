import { useState } from "react";

type CheckboxProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkbox = ({ isActive, setIsActive }: CheckboxProps) => {
  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className={`w-5 h-5 rounded-[4px] flex justify-center items-center ${
        isActive ? "bg-purple" : "border-[1px] border-lightGrey rounded-[4px]"
      }`}
    >
      <svg
        className={`${!isActive && "hidden"}`}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="9"
        viewBox="0 0 12 9"
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="m1 4 3.433 3.433L10.866 1"
        />
      </svg>
    </button>
  );
};

export default Checkbox;
