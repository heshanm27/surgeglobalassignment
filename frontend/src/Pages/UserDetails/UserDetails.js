import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Pagination,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import NoteCard from "../../Component/Cards/NoteCard";
import AddNotePopUpForm from "../../Component/PopUpContent/AddNotePopUpForm";
import CustomePopUp from "../../Component/PopUp/CustomePopUp";
import { useState } from "react";
import { publicRequest } from "../../DefaultAxios/defultaxios";
import { useSelector } from "react-redux";
import NavBar from "../../Component/NavBar/NavBar";
import CustomSnackBar from "../../Component/CustomSnackBar/CustomSnackBar";
import CloseIcon from "@mui/icons-material/Close";
export default function UserDetails() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("Daring Mary McCallister");
  const { userInfo } = useSelector((state) => state.user);
  const handleOpen = () => {
    setOpen(true);
  };

  //customer snackbar props
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "error",
    title: "",
  });

  const fetchData = async () => {
    setLoading(true);
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      const { data } = await publicRequest.get(
        `note?page=${page}&search=${search}`,
        axiosConfig
      );
      console.log(data.notes);
      setLoading(false);
      setNotes(data.notes);
      setCount(data.notesCount);
    } catch (err) {
      console.log(err);
      setNotify({
        isOpen: true,
        message: err.response.data.msg,
        type: "error",
        title: "Error",
      });
    }
  };

  const handleChange = async (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    fetchData();
  }, [page, search, open]);
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ backgroundColor: "White" }}>
        <Stack direction="row" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 } }}>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={8} style={{ textAlign: "center" }}>
                    <FormControl fullWidth variant="standard">
                      <InputLabel htmlFor="standard-adornment-search">
                        Search User
                      </InputLabel>
                      <Input
                        id="standard-adornment-search"
                        placeholder="Search by Title"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <Tooltip title="Search">
                              <IconButton
                                aria-label="search function"
                                onClick={() => {
                                  setSearch("");
                                }}
                              >
                                {search.length === 0 ? (
                                  <SearchIcon />
                                ) : (
                                  <CloseIcon />
                                )}
                              </IconButton>
                            </Tooltip>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button variant="contained" onClick={handleOpen}>
                        {" "}
                        Add Note
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 }, mt: 5 }}>
                <Typography color="primary" variant="h4" align="center">
                  Notes{" "}
                </Typography>
                {notes &&
                  notes.map((item, index) => (
                    <NoteCard
                      data={item}
                      key={index}
                      setOpen={setOpen}
                      setNotify={setNotify}
                    />
                  ))}
                {notes && notes.length === 0 && (
                  <Typography
                    sx={{ mt: 5 }}
                    variant="body2"
                    align="center"
                    color="info"
                  >
                    No data to show{" "}
                  </Typography>
                )}
                {loading && (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 5 }}
                  >
                    <CircularProgress width="100px" color="primary" />
                  </Stack>
                )}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mt: 5 }}
                >
                  {/**Pagination Component */}
                  <Pagination
                    size="small"
                    color="primary"
                    count={count}
                    page={page}
                    defaultPage={page}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Stack>
        <CustomSnackBar notify={notify} setNotify={setNotify} />
        {/**CusomePopup call with props */}
        <CustomePopUp open={open} setOpen={setOpen} title={"Create new note"}>
          <AddNotePopUpForm data={{}} setOpen={setOpen} setNotify={setNotify} />
        </CustomePopUp>
      </Container>
    </>
  );
}
