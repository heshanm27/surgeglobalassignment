import { Container, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Container sx={{ mt: 12 }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h1" color="primary">
          Error 404
        </Typography>
        <Typography variant="h5" color="primary">
          Page not found
        </Typography>
        <Link href="/" variant="body1" color="primary">
          Go to Home
        </Link>
      </Stack>
    </Container>
  );
}
