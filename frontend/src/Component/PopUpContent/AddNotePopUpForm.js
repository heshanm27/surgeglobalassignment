import { Button, Stack, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
export default function AddNotePopUpForm() {
  return (
    <Stack direction="column" spacing={3}>
      <TextField
        id="outlined-multiline-flexible"
        label="Note Title"
        multiline
      />
      <TextField
        id="Inputdescription"
        label="Note Description"
        multiline
        rows={10}
        variant="outlined"
      />

      <LoadingButton size="medium" variant="outlined">
        disabled
      </LoadingButton>
    </Stack>
  );
}
