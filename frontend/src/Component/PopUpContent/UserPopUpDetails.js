import { Container, Typography } from "@mui/material";
import React from "react";

//user popup details component
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
        Date Of Birth:
        {data.dateOfBirth
          ? `${new Date(data.dateOfBirth).getFullYear()}/${new Date(
              data.dateOfBirth
            ).getMonth()}/${new Date(data.dateOfBirth).getDay()}`
          : "N/A"}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        {data.mobile ? "Mobile-:" + data.mobile : "Mobile-:Not Available"}
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
