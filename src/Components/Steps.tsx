import Step from "./Step";

const steps = [
  { id: 1, title: "your info" },
  { id: 2, title: "select plan" },
  { id: 3, title: "add-ons" },
  { id: 4, title: "summary" },
];

const Steps = () => {
  return (
    <>
      {steps.map((step) => (
        <Step
          className="pr-4 tablet:pr-0 tablet:pb-8"
          key={step.id}
          {...step}
        />
      ))}
    </>
  );
};

export default Steps;
