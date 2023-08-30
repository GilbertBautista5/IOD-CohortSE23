import { useState } from "react";

export function useFormInput(initialValue, type= "text") {
  // our custom hook still uses useState internally
  const [value, setValue] = useState(initialValue);

  // generic handler function to update state
  function handleChange(e) {
    setValue(e.target.value);
  }

  // generic function to reset input value
  const reset = () => setValue("");

  // object containing the state value and handler function
  // can be unpacked to set as props for input element
  const inputProps = {
    value: value,
    onChange: handleChange,
    type: type
  };

  // returns data to be used by a component
  return [inputProps, reset];
}

// Name this file useFormInput.jsx and store in a separate folder
// to your components, typically called 'hooks'
