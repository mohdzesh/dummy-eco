import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

const LoginForm = (props) => {
  return (
    <div className="form login">
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input" className="popFonts">
          {props.email}
        </InputLabel>
        <Input
          id="email"
          type="email"
          className="name popFonts"
          value={props.value1}
          onChange={props.onChangeEmail}
        />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input" className="popFonts">
          {props.password}
        </InputLabel>
        <Input
          id="pass"
          aria-describedby="my-helper-text"
          type="password"
          value={props.value2}
          onChange={props.onChangePass}
          className="popFonts"
        />
      </FormControl>
      <input type="submit" onClick={props.onsubmit} className="submit" />
      <FormHelperText id="label" className="red"></FormHelperText>
    </div>
  );
};

export default LoginForm;
