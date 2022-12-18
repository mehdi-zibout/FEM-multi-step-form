import Button from "./Components/Button";
import Step from "./Components/Step";
import TextInput from "./Components/TextInput";

function App() {
  return (
    <div className="">
      Hello
      <div className="">
        <TextInput
          fieldName="Name"
          placeholder="e.g. Stephen King"
          error="can't be empty"
        />
      </div>
      <Button>Next Step</Button>
      <Button isGhost>Go Back</Button>
      <Step id={1} title="your info" />
      <Step id={2} title="select plan" isActive />
    </div>
  );
}

export default App;
