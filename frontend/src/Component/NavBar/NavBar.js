import {
  AppBar,
  Avatar,
  Box,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../Redux/userSlice";
import { useSelector } from "react-redux";
export default function NavBar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  //anchor the pop up menu to element
  const [anchorEl, setAnchorEl] = React.useState(null);

  //hadnle popup menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //disptach redux action to logout the user
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-around" }}>
            <Typography variant="h6" noWrap>
              Surge Global
            </Typography>
            {/* added character to avatar */}
            <IconButton sx={{ p: 0 }} onClick={handleClick}>
              <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
                {userInfo.user.firstName
                  ? userInfo.user.firstName.charAt(0).toUpperCase()
                  : userInfo.user.email.charAt(0).toUpperCase()}
              </Avatar>
            </IconButton>
          </Toolbar>
          {/** Pop Up Menu for logout*/}
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
            <MenuItem onClick={handleLogout} sx={{ width: "150px" }}>
              <Typography sx={{ textAlign: "center" }}> Log Out</Typography>
            </MenuItem>
          </Menu>
        </AppBar>
      </Box>
    </>
  );
}
