type StepProps = { id: number; title: string; isActive?: boolean };

const Step = ({ id, title, isActive }: StepProps) => {
  return (
    <div className="flex items-center">
      <div
        className={`rounded-full w-8 h-8  text-xl text-[0.875rem] flex justify-center items-center ${
          isActive
            ? "bg-skyBlue text-denim"
            : "border-white border-[1px] text-white"
        }`}
      >
        {id}
      </div>
      <div className="hidden tablet:block pl-6">
        <div className="text-lightBlue text-[0.75rem] ">STEP {id}</div>
        <div className="font-bold text-[0.875rem] text-white">
          {title.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Step;
