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
  label,
  errors,
  values,
  setValues,
  handleChanges,
}) {
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel error={errors.password ? true : false} htmlFor="password">
        {label ? label : "Password"}
      </InputLabel>
      <OutlinedInput
        autoComplete="current-password"
        id={label ? label : "password"}
        name={label ? label : "password"}
        label={label ? label : "password"}
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChanges}
        error={errors.password ? true : false}
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
      <FormHelperText error={errors.password ? true : false}>
        {errors.password}
      </FormHelperText>
    </FormControl>
  );
}
