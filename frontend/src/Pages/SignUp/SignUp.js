import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
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
import { Paper, Stack, useTheme } from "@mui/material";
import { publicRequest } from "../../DefaultAxios/defultaxios";
export default function SignUp() {
  const theme = useTheme();

  async function signIn(email) {
    const res = await publicRequest.get(`Employee/getAll`, email);
    return res;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper>
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
        <Stack direction="column" sx={{ padding: { xs: 2, sm: 3 } }}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Stack>

        <Grid
          container
          justifyContent="flex-end"
          sx={{ padding: { xs: 2, sm: 2 } }}
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
