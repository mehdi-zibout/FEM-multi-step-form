import { UseFormRegisterReturn } from "react-hook-form";

type TextInputType = {
  rhf: UseFormRegisterReturn<string>;
  fieldName: string;
  error?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = ({ fieldName, rhf, error, ...props }: TextInputType) => {
  return (
    <label htmlFor={fieldName}>
      <span className="flex justify-between pb-[3px] tablet:pb-2 w-[18.5rem] tablet:w-[28.125rem] ">
        <span className="block text-m">{fieldName}</span>
        {error && (
          <span className="block text-m font-bold text-red">{error}</span>
        )}
      </span>
      <input
        type="text"
        // name={fieldName}
        id={fieldName}
        className={`focus:outline-none w-[18.5rem] tablet:w-[28.125rem] h-10 tablet:h-12 rounded-[4px] block px-4 py-3 ${
          error ? "border-red" : "border-borderColor"
        } border-[1px] focus:border-[1px] placeholder:text-grey  placeholder:text-m placeholder:text-[0.93rem] placeholder:font-medium ${
          error ? "focus:border-red" : "focus:border-purple"
        } `}
        {...rhf}
        {...props}
      />
    </label>
  );
};

export default TextInput;
