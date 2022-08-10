import {
  Box,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomePopUp from "../PopUp/CustomePopUp";
import AddNotePopUpForm from "../PopUpContent/AddNotePopUpForm";
import ConfirmPopUp from "../PopUp/ConfirmPopUp";
import { publicRequest } from "../../DefaultAxios/defultaxios";
import { useSelector } from "react-redux";
export default function NoteCard({ data, setNotify, setRefetch, refetch }) {
  //default states
  const [open, setOpenmodel] = useState(false);
  const { userInfo } = useSelector((state) => state.user);

  //confirm dialog states
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
    onConfirm: () => {},
  });

  //handle open CustomePopUp
  const handleOpen = () => {
    setOpenmodel(true);
  };

  //Api call to delete note with id
  const deleteNote = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      const { data: deleteNoted } = await publicRequest.delete(
        `note/${data._id}`,
        axiosConfig
      );
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false,
      });
      setNotify({
        isOpen: true,
        message: "Note deleted SuccessFuly",
        type: "success",
        title: "success",
      });
      //rerun useEffect in the userDetails file then api call to get the updated list of notes
      setRefetch(!refetch);
    } catch (err) {
      setNotify({
        isOpen: true,
        message: err.response.data.msg,
        type: "error",
        title: "Error",
      });
    }
  };

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
            <IconButton aria-label="next" color="info" onClick={handleOpen}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            {/* onclick to open confirm dialog  */}
            <IconButton
              aria-label="delete popup"
              color="error"
              onClick={() =>
                setConfirmDialog({
                  isOpen: true,
                  title: "Delete Note",
                  subTitle: "Are you sure you want to delete this note?",
                  onConfirm: () => {
                    deleteNote();
                  },
                })
              }
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      {/* custome pop up with props need to pass the data and open state */}
      <CustomePopUp open={open} setOpen={setOpenmodel} title={"Update Note"}>
        <AddNotePopUpForm
          data={data}
          setOpen={setOpenmodel}
          setNotify={setNotify}
          setRefetch={setRefetch}
          refetch={refetch}
        />
      </CustomePopUp>
      <ConfirmPopUp
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
        refetch={refetch}
      />
    </Paper>
  );
}
