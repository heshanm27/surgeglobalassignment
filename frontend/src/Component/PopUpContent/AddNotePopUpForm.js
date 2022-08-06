import { Stack, TextField } from "@mui/material";
import React from "react";
export default function AddNotePopUpForm() {
  return (
    <Stack direction="column">
      <TextField id="outlined-multiline-flexible" label="Multiline" multiline />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="standard"
      />
    </Stack>
  );
}
