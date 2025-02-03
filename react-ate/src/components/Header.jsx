import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Link,
  Drawer,
  List,
  useTheme,
} from "@mui/material";
import { logo, menuItems } from "../api/api";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext, tokens } from "../theme";

function Header() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const NavList = menuItems.map((item) => {
    return (
      <Link sx={{ p: 2 }} underline="none" key={item.id} href={item.uri}>
        {item.title}{" "}
      </Link>
    );
  });
  const DrawerList = () => {
    return (
      <Box width={250}>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem
                component="a"
                href={item.uri}
                key={item.id}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };
  return (
    <AppBar component="header" backgroundColor={colors.primaryGreen[500]}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box component="img" src={logo.src} alt={logo.alt} maxWidth="60%" />
        <Box
          component="nav"
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          {NavList}
        </Box>
        <Drawer
          sx={{
            width: "300px",
          }}
          open={open}
          onClose={toggleDrawer(false)}
        >
          {DrawerList()}
        </Drawer>
        <Button
          color="primary"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuIcon size={48} />
        </Button>
        <LightModeIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
