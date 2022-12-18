import Card from "./Card";
import Checkbox from "./Checkbox";

type AddonsProps = {
  title: string;
  subtitle: string;
  price: number;
  isYearly?: boolean;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const Addons = ({
  title,
  subtitle,
  price,
  isYearly,
  isActive,
  setIsActive,
}: AddonsProps) => {
  return (
    <Card
      isActive={isActive}
      className="flex justify-start  px-4 tablet:px-6 items-center w-[18.43rem] h-[3.875rem] tablet:w-[28.125rem] tablet:h-[5.06rem] "
    >
      <div className="">
        <Checkbox isActive={isActive} setIsActive={setIsActive} />
      </div>
      <div className="pl-4  tablet:pl-6 ">
        <div className="capitalize text-denim text-m tablet:text-l font-medium tablet:font-medium">
          {title}
        </div>
        <div className="capitalize text-grey text-s tablet:text-[0.93rem]">
          {subtitle}
        </div>
      </div>
      <div className="text-purple text-s tablet:text-[0.93rem] ml-auto ">
        {isYearly ? `+$${price * 10}/yo` : `+$${price}/mo`}
      </div>
    </Card>
  );
};

export default Addons;
