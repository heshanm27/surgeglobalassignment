import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function CustomPasswordInput({
  title,
  label,
  error,
  errorsMsg,
  values,
  customvalue,
  setValues,
  handleChanges,
}) {
  //handel input password type
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel error={errorsMsg ? true : false} htmlFor="password">
        {title ? title : "Password"}
      </InputLabel>
      <OutlinedInput
        autoComplete="current-password"
        id={label ? label : "password"}
        name={label ? label : "password"}
        label={label ? label : "password"}
        type={values.showPassword ? "text" : "password"}
        value={values ? customvalue : values.password}
        onChange={handleChanges}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText error={error}>{errorsMsg}</FormHelperText>
    </FormControl>
  );
}
