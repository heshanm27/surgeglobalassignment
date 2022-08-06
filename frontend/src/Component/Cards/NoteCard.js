import {
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function NoteCard({ data }) {
  return (
    <Paper sx={{ mt: 5 }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={10}>
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
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            textAlign: "center",
            display: { xs: "flex", md: "block" },
            justifyContent: "space-evenly",
          }}
        >
          <Tooltip title="Edit ">
            <IconButton aria-label="next" color="info">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="play/pause" color="error">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
}
