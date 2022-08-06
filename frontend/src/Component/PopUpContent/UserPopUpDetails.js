import { Container, Typography } from "@mui/material";
import React from "react";

export default function UserPopUpDetails({ data }) {
  return (
    <Container sx={{ p: 1 }} s>
      <Typography component="div" variant="h5">
        {data.firstName} {data.lastName}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Email:{data.email}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Date Of Birth:{data.dateOfBirth}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Mobile:{data.mobile}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Status:{data.status ? "New" : "Old"}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Account Type:{data.accountType}
      </Typography>
    </Container>
  );
}
