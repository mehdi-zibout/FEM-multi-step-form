type StepProps = {
  id: number;
  title: string;
  isActive?: boolean;
  className?: string;
};

const Step = ({ id, title, isActive, className }: StepProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`rounded-full w-8 h-8  font-bold text-[0.875rem] flex justify-center items-center ${
          isActive
            ? "bg-skyBlue text-denim"
            : "border-white border-[1px] text-white"
        }`}
      >
        {id}
      </div>
      <div className="hidden tablet:block pl-6">
        <div className="text-lightBlue text-[0.75rem] ">STEP {id}</div>
        <div className="font-bold text-[0.875rem] text-white tracking-[1px]">
          {title.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Step;
