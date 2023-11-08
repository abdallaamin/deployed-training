import { useState } from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import Edit from '../../public/icons/edit.png'
// import { IconButton } from '@mui/material';
// import Image from 'next/image';
import Link from '@mui/material/Link';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Input, TextInput } from '@mantine/core';
import { DeleteSingleUser } from '../../../lib/userrequestBE';

export default function DeleteUsersModal({ userId, onDeleteUser }) {
    const [open, setOpen] = useState(false);
    // const [userName, setUserName] = useState();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleDelete = async () => {
        try {
            // Call the DeleteSingleUser function with the user's ID
            const deleterespons = await DeleteSingleUser(userId);
            console.log('success deleting userId:', userId);
            console.log('success deleting respons:', deleterespons);

            // Call the onDeleteUser function passed from the parent component
            onDeleteUser(userId);
        } catch (error) {
            console.error('Error deleting user:', error);
        } finally {
            handleClose(); // Close the menu whether the request succeeds or fails
        }
    };


    return (
<>
            <Button color="transparent" size="sm" sx={{ paddingLeft: '10px' }}
                variant="plain" onClick={handleClickOpen} >
                Delete
            </Button>
            <Dialog  open={open} onClose={handleClose} scroll='body' width='250px' height='294px' >
                <DialogTitle xs={{ color: 'red', }}>Hi  Abdalla ,</DialogTitle>
                <DialogContent style={{ margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2>You Will delete a user <br /> from the table </h2>
                    <p> Are You Sure you want to proceed<br /> this action ?</p>
                </DialogContent>
                <DialogActions sx={{ gap: '15px', justifyContent: 'space-around' }}>
                    <Button onClick={handleClose} color='transparent' sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Dismiss</Button>
                    <Button onClick={handleDelete} color="danger" sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}