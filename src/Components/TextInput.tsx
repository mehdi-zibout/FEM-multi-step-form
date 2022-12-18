type TextInputType = {
  fieldName: string;
  error?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = ({ fieldName, error, ...props }: TextInputType) => {
  return (
    <label htmlFor={fieldName}>
      <span className="flex justify-between  pb-2">
        <span className="block text-m">{fieldName}</span>
        {error && (
          <span className="block text-m font-bold text-red">{error}</span>
        )}
      </span>
      <input
        type="text"
        name={fieldName}
        id={fieldName}
        className={`focus:outline-none w-[18.5rem] tablet:w-[28.125rem] h-10 tablet:h-12 rounded-[4px] block px-4 py-3 ${
          error ? "border-red" : "border-borderColor"
        } border-[1px] focus:border-[1px] placeholder:text-grey  placeholder:text-m placeholder:text-[0.93rem] placeholder:font-medium ${
          error ? "focus:border-red" : "focus:border-purple"
        } `}
        {...props}
      />
    </label>
  );
};

export default TextInput;
