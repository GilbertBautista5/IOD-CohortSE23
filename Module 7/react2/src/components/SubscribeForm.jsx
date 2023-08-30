import { useState } from "react";
import { useFormInput } from "../hooks/useForminput";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");
  // similar state variables mapped to form inputs

 // const [firstName, setFirstName] = useState("Mary");
  //const [email, setEmail] = useState("mary@poppins.com");

  const [firstNameProps, firstNameReset] = useFormInput("Mary");
  const [emailProps, emailReset] = useFormInput("mary@poppins.com");
  const [contactProps, contactReset] = useFormInput();

  // similar handler functions
//   const handleNameChange = (e) => setFirstName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  
  function handleSubscribe() {
    // setFirstName("");
    firstNameReset();
    emailReset();
    contactReset();

    setStatus("Thanks for subscribing!");
  }
  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: {/* form inputs with similar props */}
        <input value={firstNameProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input value={emailProps} />
      </label>
      <label>
        Contact:
        <input value={contactProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
