import AppBar from "@mui/material/AppBar";
import React from "react";
// icon navbar
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// element
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
const useStyles = makeStyles({
  boxUser: {
    display: "flex",
    paddingLeft: 15,
  },
  userProfile: {
    fontSize: "larger",
    paddingLeft: 10,
  },
  appbar: {
    background: "#FFFFFF",
    color: "black",
  },
});
export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} color="default">
      <Toolbar>
        <Box>
          <SettingsIcon />
          <NotificationsNoneIcon />
          <MailOutlineIcon />
        </Box>
        <Box className={classes.boxUser}>
          <Box>
            <Typography variant="h6" component="h5">
              Alireza Sandoghizadeh mashhadi
            </Typography>
            <Typography variant="p" component="p">
              designer
            </Typography>
          </Box>
          <Box sx={{ height: "50px" }}>
            <PersonIcon className={classes.userProfile} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
