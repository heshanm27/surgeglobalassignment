import { Box, Button, Stack, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { publicRequest } from "../../DefaultAxios/defultaxios";
const initialValues = {
  title: "",
  discription: "",
};
export default function AddNotePopUpForm({
  data,
  setOpen,
  setNotify,
  setRefetch,
  refetch,
}) {
  if (data) {
    initialValues.title = data.title;
    initialValues.discription = data.discription;
  }
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const { userInfo } = useSelector((state) => state.user);

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

  //api call for update note with id
  const updateNoteData = async () => {
    setLoading(true);
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      const { data: update } = await publicRequest.patch(
        `note/${data._id}`,

        values,
        axiosConfig
      );
      console.log(update);
      setNotify({
        isOpen: true,
        message: "Updated SuccessFuly",
        type: "success",
        title: "success",
      });
      setOpen(false);
      setLoading(false);
      setRefetch(!refetch);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setNotify({
        isOpen: true,
        message: err.response.data.msg,
        type: "error",
        title: "Error",
      });
    }
  };

  //api call  to add note for the database
  const addNoteData = async () => {
    setLoading(true);
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      const { data: update } = await publicRequest.post(
        `note`,
        {
          title: values.title,
          discription: values.discription,
          createdBy: userInfo.user._id,
        },
        axiosConfig
      );
      setLoading(false);
      setNotify({
        isOpen: true,
        message: "note added SuccessFuly",
        type: "success",
        title: "success",
      });
      setOpen(false);
      setRefetch(!refetch);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setNotify({
        isOpen: true,
        message: err.response.data.msg,
        type: "error",
        title: "Error",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    if (validate()) {
      if (data.title) {
        updateNoteData();
      } else {
        addNoteData();
      }
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
          loading={loading}
          size="large"
          loadingPosition="center"
        >
          {Boolean(data.title) ? "Update Note" : "Add Note"}
        </LoadingButton>
      </Stack>
    </Box>
  );
}
