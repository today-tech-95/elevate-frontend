import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SideBarMenu = () => {
  const location = useLocation();

  return (
    <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        <NavLink to="/mentee">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentee"||location.pathname ==="/mentee/profile"}
          >
            <ListItemIcon>
              <HomeOutlinedIcon
                className={
                  location.pathname === "/mentee"||location.pathname ==="/mentee/profile" ? "text-[#2467F6]" : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              className={
                location.pathname === "/mentee"||location.pathname ==="/mentee/profile"? "text-[#2467F6]" : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentee/messages">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentee/messages"}
          >
            <ListItemIcon>
              <MessageOutlinedIcon
                className={
                  location.pathname === "/mentee/messages"
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Messages"
              className={
                location.pathname === "/mentee/messages" ? "text-[#2467F6]" : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentee/appointments">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentee/appointments"}
          >
            <ListItemIcon>
              <CalendarTodayOutlinedIcon
                className={
                  location.pathname === "/mentee/appointments"
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Appointments"
              className={
                location.pathname === "/mentee/appointments"
                  ? "text-[#2467F6]"
                  : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentee/progress">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentee/progress"}
          >
            <ListItemIcon>
              <SignalCellularAltOutlinedIcon
                className={
                  (location.pathname === "/mentee/progress") === 3
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Progress"
              className={
                (location.pathname === "/mentee/progress") === 3
                  ? "text-[#2467F6]"
                  : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentee/settings">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentee/settings"}
          >
            <ListItemIcon>
              <SettingsOutlinedIcon
                className={
                  location.pathname === "/mentee/settings"
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              className={
                location.pathname === "/mentee/settings" ? "text-[#2467F6]" : ""
              }
            />
          </ListItemButton>
        </NavLink>
      </List>
      <Divider />
    </Box>
  );
};

export default SideBarMenu;
