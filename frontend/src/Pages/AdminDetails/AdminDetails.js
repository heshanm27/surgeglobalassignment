import {
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

import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import UserCard from "../../Component/Cards/UserCard";
import NavBar from "../../Component/NavBar/NavBar";
import { publicRequest } from "../../DefaultAxios/defultaxios";
import { useSelector } from "react-redux";
import CustomSnackBar from "../../Component/CustomSnackBar/CustomSnackBar";
export default function AdminDetails() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
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
        `user?page=${page}&search=${search}`,
        axiosConfig
      );
      console.log(data.users);
      setLoading(false);
      setUsers(data.users);
      setCount(data.usersCount);
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
  }, [page, search, open, refetch]);
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ backgroundColor: "White" }}>
        <Stack direction="row" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
              <Paper sx={{ padding: { xs: 2, sm: 2 } }}>
                <FormControl sx={{ width: "400px" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Search User
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    placeholder="Search by name, email, id"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip title="Search">
                          <IconButton aria-label="toggle password visibility">
                            <SearchIcon />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 }, mt: 5 }}>
                <Typography color="primary" variant="h4" align="center">
                  User Details
                </Typography>

                {users &&
                  users.map((item, index) => (
                    <UserCard data={item} key={index} />
                  ))}
                {users && users.length === 0 && (
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
      </Container>
    </>
  );
}
