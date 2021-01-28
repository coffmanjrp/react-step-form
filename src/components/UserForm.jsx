import { useState } from 'react';
import { FormUserDetails, FromPersonalDetails, Confirm, Success } from './';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [inputState, setInputState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  });

  const { firstName, lastName, email, occupation, city, bio } = inputState;
  const values = { firstName, lastName, email, occupation, city, bio };

  // Proceed to next setStep
  const nextStep = () => {
    setStep(step + 1);
  };

  // Proceed to previous setStep
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle fields changed
  const handleChange = (input) => (e) => {
    setInputState({
      ...inputState,
      [input]: e.target.value,
    });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FromPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      return;
  }
};

export default UserForm;
