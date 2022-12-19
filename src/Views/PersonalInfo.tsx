import { useForm } from "react-hook-form";
import Button from "../Components/Button";
import Steps from "../Components/Steps";
import TextInput from "../Components/TextInput";
import { StepProps } from "../Components/Steps";
import { ActionType } from "../logic/reducer";
type FormData = {
  name: string;
  email: string;
  phone: string;
};
const personalInfoFields: {
  id: "name" | "email" | "phone";
  placeholder: string;
  fieldName: string;
}[] = [
  { id: "name", fieldName: "Name", placeholder: "e.g. Stephen King" },
  {
    id: "email",
    fieldName: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    id: "phone",
    fieldName: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
  },
];

const PersonalInfo = ({
  step,
  setStep,
  dispatch,
  personalData,
}: StepProps & {
  personalData: { name: string; email: string; phone: string };
  dispatch: React.Dispatch<ActionType>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    dispatch({
      type: "ADD_PERSONAL_INFORMATION",
      payload: data,
    });
    setStep && setStep(step + 1);
  });
  return (
    <div className="">
      <div className="drop-shadow-md mt-[6.2rem] rounded-2xl tablet:mt-0 tablet:relative bg-white w-[21.4375rem] h-[23.5rem] py-7 px-6  tablet:w-[58.75rem] tablet:h-[37.5rem] tablet:pl-[24rem] tablet:py-[3.5rem]">
        <div className="hidden tablet:absolute tablet:block top-[2.72%] left-[2%] bg-no-repeat bg-[url('./assets/bg-sidebar-desktop.svg')] w-[17.125rem] h-[35.5rem] py-10 px-8">
          <Steps step={step} />
        </div>

        <div className="">
          <h1 className="tablet:text-xl font-bold text-[1.5rem]">
            Personal info
          </h1>
          <p className="text-l text-grey tablet:pb-9 pb-4">
            Please provide your name, email address, and phone number.
          </p>
          <form onSubmit={onSubmit} id="form">
            {personalInfoFields.map((field) => {
              const { id, fieldName, placeholder } = field;
              return (
                <div className="pb-3 tablet:pb-6" key={id}>
                  <TextInput
                    rhf={register(id, {
                      required: "This field is required",
                      pattern:
                        id === "name"
                          ? {
                              value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                              message: "Please write your full name.",
                            }
                          : id === "email"
                          ? {
                              value: /\S+@\S+\.\S+/,
                              message: "Incorrect format!",
                            }
                          : {
                              value:
                                /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
                              message: "Incorrect format!",
                            },
                    })}
                    fieldName={fieldName}
                    placeholder={placeholder}
                    defaultValue={personalData?.[id] ?? ""}
                    error={errors[id]?.message as string}
                  />
                </div>
              );
            })}
            <div className="hidden tablet:flex justify-end items-center px-[6.5rem] pt-[3rem]">
              <Button type="submit">Next Step</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-white tablet:hidden w-screen h-[4.5rem] absolute bottom-0 left-0 flex justify-end items-center px-4">
        <Button type="submit" form="form">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
