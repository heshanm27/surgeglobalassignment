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
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomePopUp({ open, setOpen, children }) {
  const theme = useTheme();

  useEffect(() => {});
  const displaywraper = {
    padding: 10,
    position: "absolute",
    top: 10,
    width: "100%",
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
      maxWidth="sm"
      sx={displaywraper}
    >
      <DialogTitle>
        <div style={{ display: "flex", width: "500px" }}>
          <Typography varient="h6" component="div" style={{ flexGrow: "1" }}>
            User Details
          </Typography>
          <IconButton
            color="primary"
            sx={iconbtn}
            onClick={() => setOpen(false)}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
