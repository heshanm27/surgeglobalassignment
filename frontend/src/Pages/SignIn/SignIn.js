import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomSnackBar from "../../Component/CustomSnackBar/CustomSnackBar";
import { useSelector, useDispatch } from "react-redux";
import { SignInUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import CustomPasswordInput from "../../Component/PasswordInput/CustomPasswordInput";

const initialValues = {
  email: "",
  password: "",
  showPassword: false,
};

export default function SignIn() {
  const [errors, setErrors] = useState(initialValues);
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pending, error, errorMessage, loggedIn } = useSelector(
    (state) => state.user
  );
  //customer snackbar props
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "error",
    title: "",
  });

  //validate email
  const validate = () => {
    let temp = {};
    temp.email =
      (/$^|.+@.+..+/.test(values.email) ? "" : "Please enter valid email") ||
      (values.email ? "" : "Please enter email ");
    temp.password = values.password ? "" : "Please enter password";

    setErrors({
      ...temp,
    });
    // //if all the proprties valid to the function that provide in every() it will return true  or if one fail it return false
    return Object.values(temp).every((x) => x == "");
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      dispatch(SignInUser({ email: values.email, password: values.password }));
    }
  };

  useEffect(() => {
    if (error) {
      setNotify({
        isOpen: true,
        message: errorMessage,
        type: "error",
        title: "Error",
      });
    }
    if (loggedIn) {
      navigate("/newuser");
    }
  }, [error, loggedIn]);
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper>
        <Box
          sx={{
            marginTop: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, padding: { xs: 1, sm: 3 } }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={handleChanges}
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              error={errors.email ? true : false}
              helperText={errors.email}
            />

            <CustomPasswordInput
              values={values}
              error={Boolean(errors.password)}
              errorsMsg={errors.password}
              setValues={setValues}
              handleChanges={handleChanges}
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
              loading={pending}
              size="large"
              loadingPosition="center"
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="/signIn" variant="body2">
                  Forgot password?
                  <span>{errorMessage}</span>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CustomSnackBar notify={notify} setNotify={setNotify} />
      </Paper>
    </Container>
  );
}
