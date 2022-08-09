import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper, Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import NavBar from "../../Component/NavBar/NavBar";
import CustomPasswordInput from "../../Component/PasswordInput/CustomPasswordInput";

export default function UserDetailsForm() {
  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Stack direction="column" justifyContent="center">
          <Paper sx={{ p: 5, mt: 15 }}>
            <Stack direction="column">
              <Typography align="center" variant="h4" color="primary">
                Profile Details
              </Typography>
              <Grid container spacing={5} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12}></Grid>
                <Grid item xs={12}>
                  <LoadingButton size="medium" variant="contained" fullWidth>
                    disabled
                  </LoadingButton>
                </Grid>
              </Grid>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </>
  );
}
