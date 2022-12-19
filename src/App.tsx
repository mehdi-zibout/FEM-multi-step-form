import { useReducer, useState } from "react";
import reducer from "./logic/reducer";
import Steps from "./Components/Steps";
import SelectPlan from "./Views/SelectPlan";
import PersonalInfo from "./Views/PersonalInfo";
import AddonsView from "./Views/AddonsView";
import FinishingUp from "./Views/FinishingUp";

export type StateType = {
  name: string;
  email: string;
  phone: string;
  plan: 0 | 1 | 2; //"arcade" | "advanced" | "pro"
  isYearly: boolean;
  addons: [boolean, boolean, boolean]; //("online service" | "larger storage" | "customizable profile")[]
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    phone: "",
    plan: 0,
    isYearly: false,
    addons: [false, false, false],
  });
  const [step, setStep] = useState(1);
  return (
    <div className="">
      <div className="absolute tablet:hidden  -z-10 top-0 left-0  bg-[url('./assets/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover w-screen h-[10.75rem] flex justify-center items-start py-8">
        <Steps step={step} setStep={setStep} />
      </div>
      {step === 1 ? (
        <PersonalInfo
          step={step}
          setStep={setStep}
          dispatch={dispatch}
          personalData={{
            name: state.name,
            email: state.email,
            phone: state.phone,
          }}
        />
      ) : step === 2 ? (
        <SelectPlan
          step={step}
          setStep={setStep}
          dispatch={dispatch}
          plan={state.plan}
          isYearly={state.isYearly}
        />
      ) : step === 3 ? (
        <AddonsView
          step={step}
          setStep={setStep}
          dispatch={dispatch}
          state={state.addons}
        />
      ) : step === 4 ? (
        <FinishingUp state={state} step={step} setStep={setStep} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
