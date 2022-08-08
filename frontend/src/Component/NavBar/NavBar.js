import {
  AppBar,
  Avatar,
  Box,
  Container,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function NavBar({ children }) {
  const theme = useTheme();

  //react-router-dom Location hook for get pathname
  const location = useLocation();
  const { token } = useParams();
  console.log(token);
  //State for menu open and path changes
  const [path, setPath] = useState(true);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  //hadnle popup menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //hide Navbar in Signin and SignUp pages
  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/signIn" ||
      location.pathname === "/newuser"
    ) {
      setPath(false);
    }
  }, [location.pathname]);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-around",
  });
  return (
    <>
      <Box>
        {path && (
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-around" }}>
              <Typography variant="h6" noWrap>
                LOGO
              </Typography>

              <IconButton
                sx={{ p: 0 }}
                onClick={handleClick}
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ bgcolor: theme.palette.primary.light }}>H</Avatar>
              </IconButton>
            </Toolbar>
            {/** Pop Up Menu*/}
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose} sx={{ width: "150px" }}>
                <Typography sx={{ textAlign: "center" }}> Log Out</Typography>
              </MenuItem>
            </Menu>
          </AppBar>
        )}
      </Box>
      <Box sx={{ mt: 2 }}>
        {/*children is the content of the page*/}
        {children}
      </Box>
    </>
  );
}
