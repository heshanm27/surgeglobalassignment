import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper, Stack } from "@mui/material";
import { publicRequest } from "../../DefaultAxios/defultaxios";
import LoadingButton from "@mui/lab/LoadingButton";

const initialValues = {
  email: "",
  otherErrors: "",
};

export default function SignUp() {
  const [errors, setErrors] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialValues);

  async function signIn(email) {
    const res = await publicRequest.post(`auth/signUp`, { email });
    return res;
  }

  const validate = () => {
    let temp = {};
    temp.email =
      (/$^|.+@.+..+/.test(values.email) ? "" : "Please enter valid email") ||
      (values.email ? "" : "Please enter email ");

    setErrors({
      ...temp,
    });
    // //if all the proprties valid to the function that provide in every() it will return true  or if one fail it return false
    return Object.values(temp).every((x) => x == "");
  };

  /**
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

  const handleSubmit = async (event) => {
    setErrors(initialValues);
    event.preventDefault();
    setLoading(true);
    if (validate()) {
      try {
        const res = await signIn(values.email);
        setValues(initialValues);
        setLoading(false);
      } catch (err) {
        setErrors({
          ...errors,
          otherErrors: err.response.data.msg,
        });
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper sx={{ mt: 20 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Box>
        <Stack direction="column" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={values.email}
              onChange={handleChanges}
              error={errors.email ? true : false}
              helperText={errors.email}
            />

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
              loading={loading}
              size="large"
              loadingPosition="center"
            >
              Sign Up
            </LoadingButton>
          </Box>
          {errors.otherErrors ? (
            <Typography variant="body2" color="error">
              {errors.otherErrors}
            </Typography>
          ) : (
            <span></span>
          )}
        </Stack>

        <Grid
          container
          justifyContent="flex-end"
          sx={{ padding: { xs: 2, sm: 3 } }}
        >
          <Grid item>
            <Link href="/signIn" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
