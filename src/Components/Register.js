import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

const Register = (props) => {
  return (
    <div className="form admin ">
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input" className="popFonts">
          {props.field1}
        </InputLabel>
        <Input
          id="name"
          type="text"
          className="name popFonts"
          onChange={props.onChangeName}
        />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input" className="popFonts">
          {props.field2}
        </InputLabel>
        <Input
          id="email"
          type="email"
          className="name popFonts"
          onChange={props.onChangeEmail}
        />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input" className="popFonts">
          {props.field3}
        </InputLabel>
        <Input
          id="pass"
          aria-describedby="my-helper-text"
          type={props.field3Type}
          onChange={props.onChangePass}
          className="popFonts"
        />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input" className="popFonts">
          {props.field4}
        </InputLabel>
        <Input
          id="confirm-pass"
          aria-describedby="my-helper-text"
          type={props.field4Type}
          onChange={props.onChangeConfirmPass}
          className="popFonts"
        />
      </FormControl>
      <button type="submit" onClick={props.BtnClick} className="submit">
        {props.BtnText}
      </button>

      <FormHelperText id="label" className="red"></FormHelperText>
    </div>
  );
};

export default Register;
