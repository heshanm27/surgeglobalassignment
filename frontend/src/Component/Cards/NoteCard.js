import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function NoteCard({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Paper sx={{ mt: 5 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ p: 2 }}>
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            align="justify"
            sx={{ mt: 2 }}
          >
            {data.discription}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="next" color="info">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="play/pause" color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
}
