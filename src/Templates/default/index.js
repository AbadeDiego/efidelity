import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import Logo from "../../Assets/Efidelity.png";

import { options, optionsEmp } from "./options";
import logout from "../../services/lib/logout";

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  
  const history = useHistory();
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const optionsMenu = optionsEmp;

  const sair = () => {
    logout();
    history.push("/login");
  };
  const drawer = (
    <div style={{ backgroundColor: "rgba(111, 127, 195, 1)", height: "100%" }}>
      <Toolbar>
        <Grid container display={"flex"} textAlign="center">
          <Grid item>
            <Typography
              style={{ marginTop: "25%", marginLeft: 13, color: "#fff" }}
              variant="h6"
              gutterBottom
            >
              Bem vindo de volta!
            </Typography>
            <Typography
              style={{ marginLeft: 5, marginTop: -5, color: "#fff" }}
              variant="h4"
              gutterBottom
              onClick={() => history.push("profile")}
            >
              {localStorage.getItem("user")}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
      <List style={{ marginTop: "35%" }}>
        {optionsMenu.map((text, index) => (
          <ListItem
            onClick={() => history.push(text.path)}
            button
            key={text.name}
          >
            <ListItemText style={{ color: "#fff" }} primary={text.name} />
          </ListItem>
        ))}
      </List>
      <Grid container justifyContent="flex-start" style={{ padding: 5 }}>
        <Tooltip title={"Logout"}>
          <IconButton onClick={sair}>
            <LogoutIcon style={{ color: "#fff" }} />
          </IconButton>
        </Tooltip>
      </Grid>
      <img
        src={Logo}
        style={{ margin: 15, width: 120, height: 40, marginTop: "5%" }}
      />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: 59,
          background: "rgba(24, 23, 24, 1)",
          display: { sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
