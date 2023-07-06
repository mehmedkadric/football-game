import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "../Assets/logo.png";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Leaderboard",
      icon: <InfoIcon />,
      path: "/leaderboard",
    },
    {
      text: "Contact",
      icon: <MailRoundedIcon />,
      path: "/contact",
    },
  ];
  return (
    <>
      <nav>
        <div className="nav-logo-container">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-links-container">
          <Link className="tab" to="/">
            Home
          </Link>
          <Link className="tab" to="/leaderboard">
            Leaderboard
          </Link>
          <Link className="tab" to="/contact">
            Contact
          </Link>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>

        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <Link to={item.path}>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
