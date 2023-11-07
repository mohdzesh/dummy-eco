import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

function getLoginValues() {
  const storedValues = localStorage.getItem("Email");
  if (!storedValues)
    return {
      email: "",
    };
  return JSON.parse(storedValues);
}
function getLoginValue() {
  const storedValues = localStorage.getItem("Pass");
  if (!storedValues)
    return {
      pass: "",
    };
  return JSON.parse(storedValues);
}

const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  const a = "mahyan@gmail.com";
  const b = "12345";
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  useEffect(() => {
    localStorage.setItem("Email", JSON.stringify(email), [email]);
  });
  useEffect(() => {
    localStorage.setItem("Pass", JSON.stringify(pass), [pass]);
  });

  // console.log(initialValues);

  const submitForm = async (e) => {
    e.preventDefault();
    setUser({ email: email, pass: pass });
    if (email == null || email == "") {
      document.getElementById("label").textContent =
        "*Email Must Be Filled Out";
      return false;
    } else if (pass == null || pass == "") {
      document.getElementById("label").textContent =
        "*Password Must Be Filled Out";
      return false;
    } else if (!email.match(validRegex)) {
      document.getElementById("label").textContent = "*Invalid Email";
      return false;
    }
    // setFormValues((prevFormValues) => [...prevFormValues, initialValues]);

    if (email == a && pass == b) {
      navigate("/123");
    } else {
      document.getElementById("label").textContent =
        "*Incorrect Login Credentials";
    }
  };

  return (
    <div className="adminLogin">
      <LoginForm
        email="Enter Email Address"
        value1={email}
        // onChangeEmail={(e) =>
        //   setInitialValues({ ...initialValues, email: e.target.value })
        // }
        onChangeEmail={(e) => {
          setEmail(e.target.value);
        }}
        password="Enter Password"
        value2={pass}
        onChangePass={(e) => {
          setPass(e.target.value);
        }}
        // onChangePass={(e) =>
        //   setInitialValues({ ...initialValues, password: e.target.value })
        // }
        onsubmit={submitForm}
      />
    </div>
  );
};

export default Login;
