import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const SideBarMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          style={{ borderRadius: "5px" }}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeOutlinedIcon className={selectedIndex===0?'text-[#2467F6]':""}/>
          </ListItemIcon>
          <ListItemText primary="Home" className={selectedIndex===0?'text-[#2467F6]':""}/>
        </ListItemButton>
        <ListItemButton
          style={{ borderRadius: "5px" }}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <MessageOutlinedIcon className={selectedIndex===1?'text-[#2467F6]':""}/>
          </ListItemIcon>
          <ListItemText primary="Messages" className={selectedIndex===1?'text-[#2467F6]':""}/>
        </ListItemButton>
        <ListItemButton
          style={{ borderRadius: "5px" }}
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <CalendarTodayOutlinedIcon className={selectedIndex===2?'text-[#2467F6]':""}/>
          </ListItemIcon>
          <ListItemText primary="Appointments" className={selectedIndex===2?'text-[#2467F6]':""}/>
        </ListItemButton>
        <ListItemButton
        style={{ borderRadius: "5px" }}
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      >
        <ListItemIcon>
          <SignalCellularAltOutlinedIcon className={selectedIndex===3?'text-[#2467F6]':""} />
        </ListItemIcon>
        <ListItemText primary="Progress" className={selectedIndex===3?'text-[#2467F6]':""}/>
      </ListItemButton>
      <ListItemButton
      style={{ borderRadius: "5px" }}
      selected={selectedIndex === 4}
      onClick={(event) => handleListItemClick(event, 4)}
    >
      <ListItemIcon>
        <SettingsOutlinedIcon className={selectedIndex===4?'text-[#2467F6]':""}/>
      </ListItemIcon>
      <ListItemText primary="Settings" className={selectedIndex===4?'text-[#2467F6]':""}/>
    </ListItemButton>
      </List>
      <Divider />
    </Box>
  );
};

export default SideBarMenu;
