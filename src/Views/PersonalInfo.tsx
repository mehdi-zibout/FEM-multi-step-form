import Button from "../Components/Button";
import Steps from "../Components/Steps";
import TextInput from "../Components/TextInput";
const personalInfoFields = [
  { fieldName: "Name", placeholder: "e.g. Stephen King" },
  { fieldName: "Email Address", placeholder: "e.g. stephenking@lorem.com" },
  { fieldName: "Phone Number", placeholder: "e.g. +1 234 567 890" },
];
const PersonalInfo = () => {
  return (
    <div className="">
      <div className="mt-[6.2rem] rounded-2xl tablet:mt-0 tablet:relative bg-white w-[21.4375rem] h-[23.5rem] py-7 px-6  tablet:w-[58.75rem] tablet:h-[37.5rem] tablet:pl-[24rem] tablet:py-[3.5rem]">
        <div className="hidden tablet:absolute tablet:block top-[2.72%] left-[2%] bg-no-repeat bg-[url('./assets/bg-sidebar-desktop.svg')] w-[17.125rem] h-[35.5rem] py-10 px-8">
          <Steps />
        </div>

        <div className="">
          <h1 className="tablet:text-xl font-bold text-[1.5rem]">
            Personal info
          </h1>
          <p className="text-l text-grey tablet:pb-9 pb-4">
            Please provide your name, email address, and phone number.
          </p>
          {personalInfoFields.map((field) => {
            return (
              <div className="pb-3 tablet:pb-6" key={field.fieldName}>
                <TextInput {...field} />
              </div>
            );
          })}
          <div className="hidden tablet:flex justify-end items-center px-[6.5rem] pt-[3rem]">
            <Button>Next Step</Button>
          </div>
        </div>
      </div>
      <div className="bg-white tablet:hidden w-screen h-[4.5rem] absolute bottom-0 left-0 flex justify-end items-center px-4">
        <Button>Next Step</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
