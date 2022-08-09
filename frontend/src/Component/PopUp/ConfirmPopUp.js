import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";

import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";

export default function ConfirmPopUp(props) {
  const theme = useTheme();
  const titleIcon = {
    backgroundColor: theme.palette.error.contrastText,
    color: theme.palette.error.dark,
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  };
  const dialogStyls = {
    padding: theme.spacing(4),
    position: "absolute",
    top: theme.spacing(5),
  };
  const { confirmDialog, setConfirmDialog } = props;
  return (
    <Dialog open={confirmDialog.isOpen} sx={dialogStyls}>
      <DialogTitle sx={{ textAlign: "center" }}>
        <IconButton disableRipple sx={{ titleIcon }} size="large">
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="error"
          onClick={confirmDialog.onConfirm}
        >
          Yes
        </Button>
        <Button
          variant="outlined"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
