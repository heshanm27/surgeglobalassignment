import {
  Button,
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
} from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import NoteCard from "../Component/Cards/NoteCard";
export default function UserDetails() {
  const data = [
    {
      title: "The Smooth Kiss",
      discription:
        "There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from. It was at that moment that she realized that there was hope in changing him.",
    },
    {
      title: "Girl of Boy",
      discription:
        "There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from. It was at that moment that she realized that there was hope in changing him.",
    },
    {
      title: "The World's Stones",
      discription:
        "There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from. It was at that moment that she realized that there was hope in changing him.",
    },
    {
      title: "The Witches of the Sword",
      discription:
        "There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from. It was at that moment that she realized that there was hope in changing him.",
    },
  ];
  return (
    <>
      <Container maxWidth="lg" sx={{ backgroundColor: "White" }}>
        <Stack direction="row" sx={{ padding: { xs: 2, sm: 5 } }}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 } }}>
                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <FormControl fullWidth variant="standard">
                      <InputLabel htmlFor="standard-adornment-search">
                        Search User
                      </InputLabel>
                      <Input
                        id="standard-adornment-search"
                        placeholder="Search by Title"
                        endAdornment={
                          <InputAdornment position="end">
                            <Tooltip title="Search">
                              <IconButton aria-label="search function">
                                <SearchIcon />
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
                      <Button variant="contained"> Add Note</Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper sx={{ padding: { xs: 2, sm: 5 }, mt: 5 }}>
                {data.map((item, index) => (
                  <NoteCard data={item} key={index} />
                ))}

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mt: 5 }}
                >
                  <Pagination
                    size="small"
                    count={10}
                    variant="outlined"
                    shape="rounded"
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
