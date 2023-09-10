'use client';

import { useState } from "react";
import { useUserContext } from "@/context/UserContext";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

 
  const [submitResult, setSubmitResult] = useState("");

  const [loginAttempts, setLoginAttempts] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  
  const {currentUser, handleUpdateUser} = useUserContext(); 

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setLoginAttempts(loginAttempts+1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setLoginAttempts(loginAttempts+1);
    } else if (!emailRegex.test(userEmail)) {
        setSubmitResult("Email failed regular expression match");
        setLoginAttempts(loginAttempts+1);
    } else {
      setSubmitResult("Successful login.");
      setLoginAttempts(0);
      setFormSubmitted(true);
      handleUpdateUser({ email: userEmail, name: userName });
    }
  };

  if (currentUser.email) return (
    <><p>Welcome {currentUser.name}!</p>
    <button onClick={() => handleUpdateUser({})}>Log Out</button>
    </>
  );

  else if (loginAttempts >= 5) return <p>Login attempts exceeded, stop hacking!</p>

  return (
    <div className="LoginForm componentBox">
        <form onSubmit={handleSubmit}>

            <div className="formRow">
            <label>
                Name:
                <input type="text" value={userName} name="userName"
                    onChange={(e) => setUserName(e.target.value)}/>
            </label>
            </div>

            <div className="formRow">
            <label>
                Email Address:
                <input type="text" value={userEmail} name="userEmail"
                    onChange={(e) => setUserEmail(e.target.value)}/>
            </label>
            </div>

            <div className="formRow">
            <label>
                Password:
                <input type="password" value={userPassword} name="password"
                    onChange={(e) => setUserPassword(e.target.value)}/>
            </label>
            </div>

            <button>Log In</button>
            <p>{submitResult}</p>
        </form>
    </div>
  );
}

export default LoginForm;