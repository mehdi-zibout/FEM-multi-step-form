import Step from "./Step";

export type StepProps = {
  step: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
};

const steps = [
  { id: 1, title: "your info" },
  { id: 2, title: "select plan" },
  { id: 3, title: "add-ons" },
  { id: 4, title: "summary" },
];

const Steps = ({ step }: StepProps) => {
  return (
    <>
      {steps.map((stepComp) => (
        <Step
          className="pr-4 tablet:pr-0 tablet:pb-8"
          key={stepComp.id}
          {...stepComp}
          isActive={step === stepComp.id}
        />
      ))}
    </>
  );
};

export default Steps;
