type ButtonProps = { isGhost?: boolean } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button = ({ isGhost, className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-[6rem] h-10 ${
        isGhost
          ? "bg-none text-grey hover:text-denim"
          : "bg-denim text-white hover:bg-[#164A8A]"
      } rounded-[4px] text-m tablet:text-l tablet:w-[7.6rem] tablet:h-12 font-medium tablet:font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
