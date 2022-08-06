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

export default function CustomePopUp({ open, setOpen, data }) {
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
      <DialogContent dividers>
        <Container maxWidth="lg" sx={{ p: 2 }} s>
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
            Date Of Birth:{data.dateOfBirth}
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
            Status:{data.status ? "New" : "Old"}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Account Type:{data.accountType}
          </Typography>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
