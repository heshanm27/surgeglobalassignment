import {
  AppBar,
  Avatar,
  Box,
  Container,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavBar({ children }) {
  const theme = useTheme();

  //react-router-dom Location hook for get pathname
  const location = useLocation();

  //State for menu open and path changes
  const [path, setPath] = useState(true);
  const [open, setOpen] = useState(false);

  //hadnle popup menu
  const handleClose = () => {
    setOpen(!open);
  };

  //hide Navbar in Signin and SignUp pages
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/signin") {
      setPath(false);
    }
  }, [location.pathname]);

  return (
    <>
      {path && (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  flexGrow: 1,
                  justifyContent: "space-around",
                }}
              >
                LOGO
              </Typography>
              <Stack direction="row">
                <IconButton sx={{ p: 0 }} onClick={handleClose}>
                  <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
                    H
                  </Avatar>
                </IconButton>
              </Stack>
              <Menu
                id="fade-menu"
                sx={{ mt: -3 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </Container>
        </AppBar>
      )}
      <Box sx={{ mt: 2 }}>
        {/*children is the content of the page*/}
        {children}
      </Box>
    </>
  );
}
