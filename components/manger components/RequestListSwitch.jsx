import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function RequestListSwitch() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton srx={{ paddingLeft: '10px' }} onClick={handleClick}>
                <ArrowDropDownIcon size={30} style={{ color: '#BE0000', MarginTop: '8px' }} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                width={'270px'}
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
                <MenuItem onClick={handleClose}> Track Training Requests</MenuItem>
                <MenuItem onClick={handleClose}> Track Ad hoc Requests</MenuItem>
            </Menu>
        </div>
    );
}