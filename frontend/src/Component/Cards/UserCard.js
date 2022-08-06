import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CustomePopUp from "../PopUp/CustomePopUp";
import UserPopUpDetails from "../PopUpContent/UserPopUpDetails";
export default function UserCard({ data }) {
  useEffect(() => {
    console.log("User card");
    console.log(data);
  }, []);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const newdata = data;
  return (
    <motion.div whileHover={{ scale: 1.1, cursor: "pointer" }}>
      <Paper sx={{ mt: 5 }} onClick={handleOpen}>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ p: 2 }}>
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
          </Box>
        </Stack>
      </Paper>
      <CustomePopUp open={open} setOpen={setOpen}>
        <UserPopUpDetails data={data} />
      </CustomePopUp>
    </motion.div>
  );
}
