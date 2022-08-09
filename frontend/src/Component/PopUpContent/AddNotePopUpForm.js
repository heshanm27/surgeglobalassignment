import { Box, Button, Stack, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";

const initialValues = {
  title: "",
  discription: "",
};
export default function AddNotePopUpForm({ data }) {
  if (data) {
    initialValues.title = data.title;
    initialValues.discription = data.discription;
  }
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState("");
  const [pendding, setPendding] = useState(false);
  //validate textfiled
  const validate = () => {
    let temp = {};
    temp.title = values.title ? "" : "Please enter note title";
    temp.discription = values.discription
      ? ""
      : "Please enter note discription";

    setErrors({
      ...temp,
    });
    // //if all the proprties valid to the function that provide in every() it will return true  or if one fail it return false
    return Object.values(temp).every((x) => x == "");
  };

  /**
   *
   *@description this function is used to handle the change of the input fields
   * @param Event  default event object
   */
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    if (validate()) {
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1, padding: { xs: 1, sm: 3 } }}
    >
      <Stack direction="column" spacing={3}>
        <TextField
          id="outlined-multiline-flexible"
          name="title"
          label="Note Title"
          value={values.title}
          onChange={handleChanges}
          error={errors.title ? true : false}
          helperText={errors.title}
          multiline
        />
        <TextField
          id="Inputdescription"
          name="discription"
          label="Note Description"
          value={values.discription}
          error={errors.discription ? true : false}
          helperText={errors.discription}
          onChange={handleChanges}
          multiline
          rows={10}
          variant="outlined"
        />

        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
          loading={pendding}
          size="large"
          loadingPosition="center"
        >
          {Boolean(data.title) ? "Update Note" : "Add Note"}
        </LoadingButton>
      </Stack>
    </Box>
  );
}
