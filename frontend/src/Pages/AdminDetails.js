import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Pagination,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import UserCard from "../Component/Cards/UserCard";

export default function AdminDetails() {
  const data = {
    id: "U20001",
    firstName: "Nimal",
    lastName: "Perera",
    email: "example@example.com",
    dateOfBirth: "2000.12.12",
    mobile: "+94717083178",
    status: false,
    accountType: "user",
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ backgroundColor: "White" }}>
        <Stack direction="row" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 } }}>
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Search User
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    placeholder="Search by name, email, id"
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip title="Search">
                          <IconButton aria-label="toggle password visibility">
                            <SearchIcon />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 }, mt: 5 }}>
                {new Array(10).fill().map((item, index) => (
                  <UserCard data={data} key={index} />
                ))}

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mt: 5 }}
                >
                  <Pagination
                    size="small"
                    count={10}
                    variant="outlined"
                    shape="rounded"
                  />
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
