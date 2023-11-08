import * as React from 'react';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { IconButton } from '@mui/material';
import TrainingEditForm from '../TrainingEditForm'
import { MenuList } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { UpdateTrainingStatus } from '../../../lib/trainingrequestsBE';


export default function ActionItems({ requestId }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [nestedAnchorEl, setNestedAnchorEl] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(null); // State to store selected value

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNestedAnchorEl(null);
  };

  const handleNestedClick = (event) => {
    setNestedAnchorEl(event.currentTarget);
  };
  const handleNestedItemClick = async (value) => {
    setSelectedValue(value); // Update selected value
    console.log('selectedValue', selectedValue);
    console.log('requestId', requestId);
    if (selectedValue && requestId) {
      try {
        const response = await UpdateTrainingStatus(selectedValue, requestId);
        // Handle the response here
        console.log('API response:', response);
      } catch (error) {
        // Handle any errors here
        console.error('API error:', error);
      }
    }
    handleClose(); // Close the nested menu
  };

  return (
    <div>
      <IconButton srx={{ paddingLeft: '10px' }} onClick={handleClick}>
        <MoreHorizOutlinedIcon />
      </IconButton>
      <Menu
        id="menu"
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
        <MenuItem onClick={handleNestedClick}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <div style={{ fontWeight: 'normal' }}>
              Update status
            </div>
            <ChevronRightOutlinedIcon />
          </div>
        </MenuItem>
        <MenuItem ><TrainingEditForm /></MenuItem>
      </Menu>
      <Menu
        anchorEl={nestedAnchorEl}
        open={Boolean(nestedAnchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuList>
          <MenuItem onClick={() => handleNestedItemClick('InProgress')}>InProgress</MenuItem>
          <MenuItem onClick={() => handleNestedItemClick('Approved')}>Approved</MenuItem>
          <MenuItem onClick={() => handleNestedItemClick('Scheduled')}>Scheduled</MenuItem>
          <MenuItem onClick={() => handleNestedItemClick('Completed')}>Completed</MenuItem>
          <MenuItem onClick={() => handleNestedItemClick('Canceled')}>Canceled</MenuItem>
          <MenuItem onClick={() => handleNestedItemClick('Rejected')}>Rejected</MenuItem>
        </MenuList>
      </Menu>
      {/* Add a button or event handler to trigger the API call with selectedValue
    <button onClick={() => sendSelectedValueToApi(selectedValue)}>Send to API</button> */}
    </div>
  );
}