import { ActionType } from "../logic/reducer";

type ToggleType = {
  isYearly: boolean;
  className?: string;
  dispatch: React.Dispatch<ActionType>;
};
const Toggle = ({ dispatch, isYearly, className }: ToggleType) => {
  return (
    <div
      className={`bg-veryLightGrey rounded-lg flex justify-center items-center w-[18.43rem]  tablet:w-[28.13rem] h-12 ${className}`}
    >
      <div className={`font-medium ${isYearly ? "text-grey" : "text-denim"}`}>
        Monthly
      </div>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_SUBSCRIPTION", payload: !isYearly });
        }}
      >
        <div
          className={` bg-denim mx-6 rounded-full w-9 h-5 flex ${
            isYearly ? "justify-end" : "justify-start"
          } items-center p-1`}
        >
          <div className="rounded-full bg-white w-3 h-3 "></div>
        </div>
      </button>

      <div className={`font-medium ${isYearly ? "text-denim" : "text-grey"}`}>
        Yearly
      </div>
    </div>
  );
};

export default Toggle;
