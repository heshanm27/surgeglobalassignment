import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import NavBar from "../../Component/NavBar/NavBar";
import { useEffect, useState } from "react";
import CustomPasswordInput from "../../Component/PasswordInput/CustomPasswordInput";
import { Box } from "@mui/system";

const initialValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
};
export default function UserDetailsForm() {
  const [errors, setErrors] = useState(initialValues);
  const [values, setValues] = useState(initialValues);

  /**
   *
   *@description this function is used to handle the change of the input fields
   * @param Event  default event object
   */
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //validate email
  const validate = () => {
    let temp = {};
    temp.firstName = values.firstName ? "" : "Please enter first name";
    temp.lastName = values.lastName ? "" : "Please enter last name";
    temp.dateOfBirth = values.dateOfBirth ? "" : "Please enter date of birth";
    temp.mobile =
      (/^\d{10}$/.test(values.mobile)
        ? ""
        : "Please enter valid mobile number") ||
      (values.mobile ? "" : "Please enter mobile number");
    temp.password = values.password ? "" : "Please enter password";
    temp.confirmPassword =
      (values.password === values.confirmPassword
        ? ""
        : "Password and confirm password do not match") ||
      (values.confirmPassword ? "" : "Please enter confirm password");

    setErrors({
      ...temp,
    });

    console.log(temp);
    // //if all the proprties valid to the function that provide in every() it will return true  or if one fail it return false
    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    if (validate()) {
    }
  };

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Stack direction="column" justifyContent="center">
          <Paper sx={{ p: 5, mt: 5 }}>
            <Stack direction="column">
              <Typography align="center" variant="h4" color="primary">
                Profile Details
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1, padding: { xs: 1, sm: 3 } }}
              >
                <Grid container spacing={5} sx={{ mt: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      onChange={handleChanges}
                      value={values.firstName}
                      autoComplete="given-name"
                      variant="standard"
                      error={errors.firstName ? true : false}
                      helperText={errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      onChange={handleChanges}
                      value={values.lastName}
                      autoComplete="family-name"
                      variant="standard"
                      error={errors.lastName ? true : false}
                      helperText={errors.lastName}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="mobile"
                      name="mobile"
                      label="Mobile"
                      onChange={handleChanges}
                      value={values.mobile}
                      type="tel"
                      fullWidth
                      autoComplete="tel"
                      variant="standard"
                      error={errors.mobile ? true : false}
                      helperText={errors.mobile}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      autoFocus={true}
                      id="dateOfBirth"
                      name="dateOfBirth"
                      label="Date Of Birth"
                      onChange={handleChanges}
                      value={values.dateOfBirth}
                      placeholder="Date Of Birth"
                      fullWidth
                      type="date"
                      variant="filled"
                      error={errors.dateOfBirth ? true : false}
                      helperText={errors.dateOfBirth}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomPasswordInput
                      values={values}
                      error={Boolean(errors.password)}
                      errorsMsg={errors.password}
                      setValues={setValues}
                      handleChanges={handleChanges}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomPasswordInput
                      title="Confirm Password"
                      label="confirmPassword"
                      values={values}
                      error={Boolean(errors.confirmPassword)}
                      errorsMsg={errors.confirmPassword}
                      customvalue={values.confirmPassword}
                      setValues={setValues}
                      handleChanges={handleChanges}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LoadingButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 1 }}
                      size="large"
                      loadingPosition="center"
                    >
                      Update Profile
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </>
  );
}
