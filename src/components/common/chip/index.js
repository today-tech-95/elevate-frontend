import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

const AvatarChips =({imagrUrl,name,setOpen,openNotifications,count})=>{

  return (
    <div className="flex justify-between gap-5">
    <IconButton aria-label={notificationsLabel(100)} onClick={()=>setOpen(!openNotifications)}>
      <Badge badgeContent={count} color="error" >
        <CircleNotificationsIcon className=" text-white" />
      </Badge>
    </IconButton>
    <Stack direction="row" spacing={1} className="cursor-pointer" >
    <Chip
    className="bg-white" 
    style={{backgroundColor:"white"}}
    avatar={<Avatar alt="Natacha" src={imagrUrl} />}
    label={name}
    variant="outlined"
  />
  </Stack>
  </div>
  );
}

export default AvatarChips