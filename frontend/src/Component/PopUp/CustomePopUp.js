import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomePopUp({ open, setOpen, children, title }) {
  const theme = useTheme();

  const displaywraper = {
    position: "absolute",
    top: 10,
  };

  const iconbtn = {
    "&.MuiIconButton-colorPrimary": {
      color: theme.palette.error.light,
    },
    "&:hover": {
      backgroundColor: "#ffcdd2",
    },
  };
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      sx={displaywraper}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Typography varient="h3">{title}</Typography>
          <IconButton
            color="primary"
            sx={iconbtn}
            onClick={() => setOpen(false)}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
