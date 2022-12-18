type CardProps = { isActive?: boolean } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Card = ({ isActive, children, className, ...props }: CardProps) => {
  return (
    <div
      className={`border-[1px] rounded-lg ${
        isActive
          ? "bg-veryLightGrey border-purple"
          : "bg-white border-borderColor"
      } hover:border-purple ${className} `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
