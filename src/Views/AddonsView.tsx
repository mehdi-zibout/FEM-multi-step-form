import Addons from "../Components/Addons";
import Button from "../Components/Button";
import Steps from "../Components/Steps";
import { StepProps } from "../Components/Steps";
import { ActionType } from "../logic/reducer";

const addonsFields = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price: 1,
  },
  { title: "Larger storage", subtitle: "Extra 1TB of cloud save", price: 2 },
  {
    title: "Customizable profile",
    subtitle: "Custom theme on your profile",
    price: 2,
  },
];

type AddonsViewProps = {
  dispatch: React.Dispatch<ActionType>;
  state: [boolean, boolean, boolean];
} & StepProps;
const AddonsView = ({ dispatch, state, step, setStep }: AddonsViewProps) => {
  return (
    <div className="">
      <div className="drop-shadow-md mt-[6.2rem] rounded-2xl tablet:mt-0 tablet:relative bg-white w-[21.4375rem]  py-7 px-6  tablet:w-[58.75rem] tablet:h-[37.5rem] tablet:pl-[24rem] tablet:py-[3.5rem]">
        <div className="hidden tablet:absolute tablet:block top-[2.72%] left-[2%] bg-no-repeat bg-[url('./assets/bg-sidebar-desktop.svg')] w-[17.125rem] h-[35.5rem] py-10 px-8">
          <Steps step={step} />
        </div>

        <div className="">
          <h1 className="tablet:text-xl font-bold text-[1.5rem]">
            Pick add-ons
          </h1>
          <p className="text-l text-grey tablet:pb-9 pb-4">
            Add-ons help enhance your gaming experience.{" "}
          </p>
          {addonsFields.map((field, index) => {
            return (
              <div className="pb-3 tablet:pb-6" key={field.title}>
                <Addons
                  isActive={state[index]}
                  setIsActive={() =>
                    dispatch({
                      type: "PICK_ADDONS",
                      payload: index as 0 | 1 | 2,
                    })
                  }
                  {...field}
                />
              </div>
            );
          })}
          <div className="hidden tablet:flex justify-between items-center pt-[3rem] -ml-8 mr-20">
            <Button isGhost onClick={() => setStep && setStep(step - 1)}>
              Go Back
            </Button>

            <Button onClick={() => setStep && setStep(step + 1)}>
              Next Step
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white tablet:hidden w-screen h-[4.5rem] absolute bottom-0 left-0 flex justify-between items-center px-4">
        <Button isGhost onClick={() => setStep && setStep(step - 1)}>
          Go Back
        </Button>
        <Button onClick={() => setStep && setStep(step + 1)}>Next Step</Button>
      </div>
    </div>
  );
};

export default AddonsView;
