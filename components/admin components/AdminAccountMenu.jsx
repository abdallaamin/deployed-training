import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import switchlogo from '../../public/switch.png'
import Logout from '@mui/icons-material/Logout';
import Image from 'next/image';
import Link from 'next/link';


// {
//     <ListItemIcon>
//     <Image src={switchlogo} width={20} alt="switch" height={20} />
// </ListItemIcon>
//                     Switch To SPOC View
// }

export default function AdminAccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{
                        ml: 2,
                        color: 'white',
                        paddingLeft: '1px',
                        paddingTop: '3.5px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '11px',
                        lineHeight: '20px'
                    }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32, border: '2px solid #8F251E', }}>AA</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap:'5px',
                    }}>
                        <Avatar sx={{ width: 60, height: 60 }}>AA</Avatar>
                        
                        <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#000',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '16px',
                        letterSpacing: '0.56px',
                        }}>Abdalla Amin,Vodafone
                            <div style={{
                            color: '#767474',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '16px',
                            letterSpacing: '0.48px',
                            }}>
                            abdalla.amin@vodafone.com
                            </div>
                            <div style={{
                            color: '#BE0000',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '16px',
                            letterSpacing: '0.48px',
                            }}>Admin</div>
                        </div>
                    </div>

                </MenuItem>

                <Divider />

                <MenuItem  onClick={handleClose}>
                    <Link href='/manager' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '5px',
                    }}>
                        <Avatar sx={{ width: 60, height: 60 }}>KS</Avatar>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            color: '#000',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '16px',
                            letterSpacing: '0.56px',
                        }}>Kareem Sadek ,Vodafone
                            <div style={{
                                color: '#767474',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '16px',
                                letterSpacing: '0.48px',
                            }}>
                                kareem@vodafone.com
                            </div>
                            <div style={{
                                color: '#BE0000',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '16px',
                                letterSpacing: '0.48px',
                            }}>Manager</div>
                        </div>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <Link href='/spoc' style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '5px',
                    }}>
                        <Avatar sx={{ width: 60, height: 60 }}>HS</Avatar>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            color: '#000',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '16px',
                            letterSpacing: '0.56px',
                        }}>Hoda soidan,Vodafone
                            <div style={{
                                color: '#767474',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '16px',
                                letterSpacing: '0.48px',
                            }}>
                                hoda@vodafone.com
                            </div>
                            <div style={{
                                color: '#BE0000',
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '16px',
                                letterSpacing: '0.48px',
                            }}>SPOC</div>
                        </div>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: '#8F251E' }} />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
