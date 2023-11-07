import React from "react";
import Register from "./Register";
import { useState, useEffect } from "react";

function getFormValues() {
  const storedValues = localStorage.getItem("FormValues");
  if (!storedValues)
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  return JSON.parse(storedValues);
}

const RegisterForm = () => {
  //persisting form values
  const [initialValues, setInitialValues] = useState(getFormValues);
  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    localStorage.setItem("FormValues", JSON.stringify(initialValues), [
      formValues,
    ]);
  });

  const submitForm = () => {
    let a = document.querySelector("#name").value;
    let b = document.querySelector("#email").value;
    let c = document.querySelector("#pass").value;
    let d = document.querySelector("#confirm-pass").value;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (a == null || a == "") {
      document.getElementById("label").textContent = "*Name Must Be Filled Out";
      return false;
    } else if (b == null || b == "") {
      document.getElementById("label").textContent =
        "*Email Must Be Filled Out";
      return false;
    } else if (!b.match(validRegex)) {
      document.getElementById("label").textContent = "*Invalid Email";
      return false;
    } else if (c == null || c == "") {
      document.getElementById("label").textContent =
        "*Password Must Be Filled Out";
      return false;
    } else if (d == null || d == "") {
      document.getElementById("label").textContent =
        "*Password Must Be Filled Out";
      return false;
    } else if (c != d) {
      document.getElementById("label").textContent =
        "*Passwords Does Not Match";
      return false;
    } else if (a > 5) {
      alert("hello");
    } else {
      let e = document.getElementById("label");
      e.textContent = "Successfully Registered";
      e.classList.remove("red");
      e.style.color = "green";
    }
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };
  return (
    <Register
      field1="Enter Name"
      field2="Email Address"
      field3="Enter New Password"
      field4="Confirm Password"
      field3Type="password"
      field4Type="password"
      BtnText="Submit"
      onChangeName={(e) =>
        setInitialValues({ ...initialValues, name: e.target.value })
      }
      onChangeEmail={(e) =>
        setInitialValues({ ...initialValues, email: e.target.value })
      }
      onChangePass={(e) =>
        setInitialValues({ ...initialValues, password: e.target.value })
      }
      onChangeConfirmPass={(e) =>
        setInitialValues({ ...initialValues, confirmPassword: e.target.value })
      }
      BtnClick={submitForm}
    />
  );
};

export default RegisterForm;
