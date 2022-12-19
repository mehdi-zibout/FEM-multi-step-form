import Card from "./Card";

type PlanProps = {
  title: string;
  avatar: JSX.Element;
  monthlyPrice: number;
  isYearly: boolean;
  isActive?: boolean;
};
const Plan = ({
  title,
  avatar,
  monthlyPrice,
  isYearly,
  isActive,
}: PlanProps) => {
  return (
    <Card
      isActive={isActive}
      className="w-[18.43rem] h-[6.18rem] tablet:w-[8.5rem] tablet:h-[10rem] flex justify-start items-start tablet:flex-col tablet:justify-between tablet:items-start p-4"
    >
      <div className="">{avatar}</div>
      <div className="pl-[0.875rem] tablet:pl-0 flex flex-col justify-start items-start ">
        <div className="capitalize text-denim font-medium text-l">{title}</div>
        <div className="text-grey text-[0.875rem]">
          ${isYearly ? `${monthlyPrice * 10}/yr` : `${monthlyPrice}/mo`}
        </div>
        {isYearly && <div className="text-denim text-s">2 months free</div>}
      </div>
    </Card>
  );
};

export default Plan;
