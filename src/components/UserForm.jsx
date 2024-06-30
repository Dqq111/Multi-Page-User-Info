import { useState } from "react";

import FormUserDetails from "./FormUserDetails.jsx";
import FormPersonalDetails from "./FormPersonalDetails.jsx";
import Confirm from "./Confirm.jsx";
import Success from "./Success.jsx";

export default function UserForm() {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  function nextStep() {
    const { step } = state;
    setState((prevState) => ({ ...prevState, step: step + 1 }));
  }

  function previousStep() {
    const { step } = state;
    setState((prevState) => ({ ...prevState, step: step - 1 }));
  }

  function handleChange(input) {
    return (e) => {
      setState((prevState) => ({
        ...prevState,
        [input]: e.target.value,
      }));
    };
  }

  const { step } = state;
  const { firstName, lastName, email, occupation, city, bio } = state;
  const values = { firstName, lastName, email, occupation, city, bio };

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
        <FormPersonalDetails
          nextStep={nextStep}
          previousStep={previousStep}
          handleChange={handleChange}
          values={values}
        />
      );

    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          previousStep={previousStep}
          values={values}
        />
      );

    case 4:
      return <Success />;

    default:
      return <h1>Please try again....</h1>; // Handle any unexpected step values
  }
}
