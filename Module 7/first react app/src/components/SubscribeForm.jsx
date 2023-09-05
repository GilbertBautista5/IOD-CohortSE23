import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");

  // similar state variables mapped to form inputs
  //const [firstName, setFirstName] = useState("Mary");
  //const [email, setEmail] = useState("mary@poppins.com");

  const [firstNameProps, firstNameReset, firstNameValid] = useFormInput("Mary");
  const [emailProps, emailReset, emailValid] = useFormInput("mary@poppins.com", "email");
  const [passwordProps, passwordReset, passwordValid] = useFormInput("", "password");
  const [confirmProps, confirmReset] = useFormInput(false, "checkbox");

  // similar handler functions
  //const handleNameChange = (e) => setFirstName(e.target.value);
  //const handleEmailChange = (e) => setEmail(e.target.value);

  function handleSubscribe() {

    if (firstNameValid() && emailValid() && passwordValid()) {
        //setFirstName("");
        firstNameReset();
        //setEmail("");
        emailReset();
        passwordReset();
        confirmReset();

        setStatus("Thanks for subscribing!");
    } else setStatus("Please complete all fields");
  }

  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: {/* form inputs with similar props */}
        <input {...firstNameProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...emailProps} />
      </label>
      <label>
        Password: {/* form inputs with similar props */}
        <input {...passwordProps} />
      </label>    
      <label>
        Send confirmation?
        <input {...confirmProps} />
      </label>         
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}