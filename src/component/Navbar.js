import AppBar from "@mui/material/AppBar";
import React from "react";
import profileUser from "../assets/Profile-PNG-File.png";
// icon navbar
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// element
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  boxUser: {
    display: "flex",
    paddingLeft: 15,
  },
  iconsLeft: {
    fontSize: 50,
  },
  imgProfile: {
    width: 50,
    height: 50,
  },
  appbar: {
    background: "#FFFFFF",
    color: "black",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputSearch: {
    borderRadius: "200%",
    width: 300,
  },
});
export default function Navbar() {
  const classes = useStyles();
  const SearchBox = styled(TextField)(() => {
    return {
      borderRadius: 50,
    };
  });
  return (
    <AppBar className={classes.appbar} color="default">
      <Toolbar className={classes.toolbar}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <SettingsIcon className={classes.iconsLeft} />
            <NotificationsNoneIcon className={classes.iconsLeft} />
            <MailOutlineIcon className={classes.iconsLeft} />
          </Box>
          <Box className={classes.boxUser}>
            <Box sx={{ height: "50px" }}>
              <img
                src={profileUser}
                alt="profile-user"
                className={classes.imgProfile}
              />
            </Box>
            <Box>
              <Typography variant="h6" component="h5">
                Alireza Sandoghizadeh mashhadi
              </Typography>
              <Typography variant="p" component="p">
                designer
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <TextField
            variant="filled"
            label="Search"
            className={classes.inputSearch}
          >
            <Search />
          </TextField>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
