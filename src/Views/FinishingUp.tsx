import Button from "../Components/Button";
import Steps from "../Components/Steps";
import { StepProps } from "../Components/Steps";
import { StateType } from "../App";
import { useState } from "react";
import ThankYou from "./ThankYou";

type AddonsViewProps = {
  state: StateType;
} & StepProps;
const FinishingUp = ({ state, step, setStep }: AddonsViewProps) => {
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="">
      <div
        className={`drop-shadow-md mt-[6.2rem] rounded-2xl tablet:mt-0 tablet:relative bg-white w-[21.4375rem]  ${
          confirmed ? "py-[4.93rem]" : "py-7"
        } px-6  tablet:w-[58.75rem] tablet:h-[37.5rem] tablet:pl-[24rem] tablet:py-[3.5rem]`}
      >
        <div className="hidden tablet:absolute tablet:block top-[2.72%] left-[2%] bg-no-repeat bg-[url('./assets/bg-sidebar-desktop.svg')] w-[17.125rem] h-[35.5rem] py-10 px-8">
          <Steps step={step} />
        </div>
        {confirmed ? (
          <ThankYou />
        ) : (
          <div className="">
            <h1 className="tablet:text-xl font-bold text-[1.5rem]">
              Finishing up
            </h1>
            <p className="text-l text-grey tablet:pb-9 pb-4">
              Double-check everything looks OK before confirming.
            </p>
            <div className="bg-veryLightGrey rounded-lg p-4 tablet:px-6 tablet:py-4 tablet:w-[28.125rem]">
              <div
                className={`flex justify-between items-center pb-3 tablet:pb-6 ${
                  (state.addons[0] || state.addons[1] || state.addons[2]) &&
                  "border-b-[1px] border-grey border-opacity-20"
                }`}
              >
                <div className="">
                  <h1 className="text-[0.875rem] tablet:text-l font-medium text-denim">
                    {state.plan === 0
                      ? "Arcade"
                      : state.plan === 1
                      ? "Advanced"
                      : "Pro"}{" "}
                    ({state.isYearly ? "Yearly" : "Monthly"})
                  </h1>
                  <button
                    className="underline text-grey text-[0.875rem] hover:text-purple"
                    onClick={() => setStep && setStep(2)}
                  >
                    Change
                  </button>
                </div>
                <h1 className="text-[0.875rem] tablet:text-l font-bold text-denim">
                  $
                  {(state.plan === 0 ? 9 : state.plan === 1 ? 12 : 15) *
                    (state.isYearly ? 10 : 1)}
                  /{state.isYearly ? "yr" : "mo"}
                </h1>
              </div>
              {state.addons[0] && (
                <div className="flex justify-between items-center my-3 tablet:my-4">
                  <h2 className="text-grey text-[0.875rem]">Online service</h2>
                  <h2 className="text-denim text-[0.875rem]">
                    +${1 * (state.isYearly ? 10 : 1)}/
                    {state.isYearly ? "yr" : "mo"}
                  </h2>
                </div>
              )}
              {state.addons[1] && (
                <div className="flex justify-between items-center my-3 tablet:my-4">
                  <h2 className="text-grey text-[0.875rem]">Larger storage</h2>
                  <h2 className="text-denim text-[0.875rem]">
                    +${2 * (state.isYearly ? 10 : 1)}/
                    {state.isYearly ? "yr" : "mo"}
                  </h2>
                </div>
              )}
              {state.addons[2] && (
                <div className="flex justify-between items-center my-3 tablet:my-4">
                  <h2 className="text-grey text-[0.875rem]">
                    Customizable Profile
                  </h2>
                  <h2 className="text-denim text-[0.875rem]">
                    +${2 * (state.isYearly ? 10 : 1)}/
                    {state.isYearly ? "yr" : "mo"}
                  </h2>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mt-6  tablet:my-4 tablet:w-[28.125rem] px-4">
              <h2 className="text-grey text-[0.875rem]">Total (per month)</h2>
              <h2 className="text-purple text-xl text-[1rem] tablet:text-[1.125rem] ">
                $
                {((state.plan === 0 ? 9 : state.plan === 1 ? 12 : 15) +
                  (state.addons[0] ? 1 : 0) +
                  (state.addons[1] ? 2 : 0) +
                  (state.addons[2] ? 2 : 0)) *
                  (state.isYearly ? 10 : 1)}
                /{state.isYearly ? "yr" : "mo"}
              </h2>
            </div>

            <div className="hidden tablet:flex justify-between items-center pt-[3rem] -ml-8 mr-20">
              <Button isGhost onClick={() => setStep && setStep(step - 1)}>
                Go Back
              </Button>

              <Button
                onClick={() => {
                  setConfirmed(true);
                  console.log(state);
                }}
                className="bg-purple hover:bg-[#928CFF]"
              >
                Confirm
              </Button>
            </div>
          </div>
        )}
      </div>
      {!confirmed && (
        <>
          <div className="bg-white tablet:hidden w-screen h-[4.5rem] absolute bottom-0 left-0 flex justify-between items-center px-4">
            <Button isGhost onClick={() => setStep && setStep(step - 1)}>
              Go Back
            </Button>
            <Button
              onClick={() => {
                setConfirmed(true);
                console.log(state);
              }}
              className="bg-purple hover:bg-[#928CFF]"
            >
              Confirm
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default FinishingUp;
