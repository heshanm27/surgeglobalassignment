import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { publicRequest } from "../../DefaultAxios/defultaxios";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomSnackBar from "../../Component/CustomSnackBar/CustomSnackBar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSelector, useDispatch } from "react-redux";
import { SignInUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
  showPassword: false,
};

export default function SignIn() {
  const [errors, setErrors] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pending, error, errorMessage, userInfo } = useSelector(
    (state) => state.user
  );
  //customer snackbar props
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "error",
  });
  //send signIn request to server
  async function signIn(email, password) {
    const res = await publicRequest.post(`auth/signIn`, { email, password });
    return res;
  }

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
      try {
        await dispatch(
          SignInUser({ email: values.email, password: values.password })
        );
        if (userInfo.user.status) {
          navigate("/newuser");
        }
        console.log(userInfo.user);
      } catch (err) {
        console.log(err);
        setNotify({
          isOpen: true,
          message: err.msg,
          type: "error",
        });
      }
    }
  };

  useEffect(() => {}, []);
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
              autoComplete="email"
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel
                error={errors.password ? true : false}
                htmlFor="password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                autoComplete="current-password"
                id="password"
                name="password"
                label="Password"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
