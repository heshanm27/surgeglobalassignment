import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
export default function UserCard({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <motion.div whileHover={{ scale: 1.1, cursor: "pointer" }}>
      <Paper sx={{ mt: 5 }}>
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
    </motion.div>
  );
}
