import Addons from "./Components/Addons";
import Button from "./Components/Button";
import Plan from "./Components/Plan";
import Step from "./Components/Step";
import Steps from "./Components/Steps";
import TextInput from "./Components/TextInput";
import Toggle from "./Components/Toggle";
import AddonsView from "./Views/AddonsView";
import PersonalInfo from "./Views/PersonalInfo";
import SelectPlan from "./Views/SelectPlan";

function App() {
  return (
    <div className="">
      <div className="absolute tablet:hidden  -z-10 top-0 left-0  bg-[url('./assets/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover w-screen h-[10.75rem] flex justify-center items-start py-8">
        <Steps />
      </div>
      {/* <PersonalInfo /> */}
      {/* <AddonsView /> */}
      <SelectPlan />
      {/* <br />
      <Addons
        title="online service"
        subtitle="access to multiplayer games"
        price={1}
      />
      <br />
      <Plan
        isYearly
        title="arcade"
        monthlyPrice={9}
        avatar={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
              />
            </g>
          </svg>
        }
      />
      <Toggle isYearly={false} />
      <Plan
        isActive
        title="arcade"
        monthlyPrice={9}
        avatar={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
              />
            </g>
          </svg>
        }
      />
      Hello
      <div className="">
        <TextInput fieldName="Name" placeholder="e.g. Stephen King" />
      </div>
      <Button>Next Step</Button>
      <Button isGhost>Go Back</Button>
      <Step id={1} title="your info" />
      <Step id={2} title="select plan" isActive /> */}
    </div>
  );
}

export default App;
