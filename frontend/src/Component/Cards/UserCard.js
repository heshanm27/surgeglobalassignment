import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function UserCard({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Paper sx={{ mt: 5 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ p: 2 }}>
          <Typography component="div" variant="h5">
            {data.firstName} {data.lastName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Email:{data.email}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            dateOfBirth:{data.dateOfBirth}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mobile:{data.mobile}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            status:{data.status ? "New" : "Old"}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            accountType:{data.accountType}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="next">
            <EditIcon />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
}
