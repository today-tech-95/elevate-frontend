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
        <NavLink to="/mentor">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentor"||location.pathname ==="/mentor/profile"}
          >
            <ListItemIcon>
              <HomeOutlinedIcon
                className={
                  location.pathname === "/mentor"||location.pathname ==="/mentor/profile" ? "text-[#2467F6]" : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              className={
                location.pathname === "/mentor"||location.pathname ==="/mentor/profile"? "text-[#2467F6]" : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentor/messages">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentor/messages"}
          >
            <ListItemIcon>
              <MessageOutlinedIcon
                className={
                  location.pathname === "/mentor/messages"
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Messages"
              className={
                location.pathname === "/mentor/messages" ? "text-[#2467F6]" : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentor/appointments">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentor/appointments"}
          >
            <ListItemIcon>
              <CalendarTodayOutlinedIcon
                className={
                  location.pathname === "/mentor/appointments"
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Appointments"
              className={
                location.pathname === "/mentor/appointments"
                  ? "text-[#2467F6]"
                  : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentor/progress">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentor/progress"}
          >
            <ListItemIcon>
              <SignalCellularAltOutlinedIcon
                className={
                  (location.pathname === "/mentor/progress") === 3
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Progress"
              className={
                (location.pathname === "/mentor/progress") === 3
                  ? "text-[#2467F6]"
                  : ""
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/mentor/settings">
          <ListItemButton
            style={{ borderRadius: "5px" }}
            selected={location.pathname === "/mentor/settings"}
          >
            <ListItemIcon>
              <SettingsOutlinedIcon
                className={
                  location.pathname === "/mentor/settings"
                    ? "text-[#2467F6]"
                    : ""
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              className={
                location.pathname === "/mentor/settings" ? "text-[#2467F6]" : ""
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
