import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { DeleteSingleUser, updateUserStatus } from '../../../lib/userrequestBE'
import DeleteUsersModal from './DeleteUsersModal';


export default function UserActionItems({ userId, onDeleteUser }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeactivate = async () => {
    if (userId) {
      try {
      const response = await updateUserStatus(userId); 
      console.log('userId', userId);
      // You can add code here to handle the success of the deactivation
        console.log('API response:', response);
    } catch (error) {
      // You can add code here to handle errors
        console.error('API error:', error);
    }
  }
    handleClose();
  };


  return (
    <div>
      <IconButton sx={{ paddingLeft: '10px' }} onClick={handleClick}>
        <MoreHorizOutlinedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleDeactivate}><PersonOffIcon sx={{ margin: '4px' }} />Deactivate</MenuItem>
        <MenuItem  > <DeleteIcon sx={{ m: '4px' }} /> <DeleteUsersModal userId={userId} onDeleteUser={onDeleteUser} /></MenuItem>
      </Menu>
    </div>
  );
}