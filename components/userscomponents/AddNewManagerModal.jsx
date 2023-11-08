import { useState } from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
// import Edit from '../../public/icons/edit.png'
// import { IconButton } from '@mui/material';
// import Image from 'next/image';
import Link from '@mui/material/Link';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Input, TextInput } from '@mantine/core';
import { AddNewSingleManager } from '../../lib/userrequestBE.js'

export default function AddNewManagerModal() {

    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleAddUser = async () => {
        try {
            const response = await AddNewSingleManager(userName, userEmail);
            console.log('API response:', response)
            setOpen(false);
            // Reset input fields
            setUserName('');
            setUserEmail('');
        } catch (error) {
            // Handle error
            console.error('Error adding a new user:', error);
        }
    };

    return (
        <div >
            <Button component={Link} onClick={handleClickOpen} color="danger" size="md"
                variant="plain" xs={{ color: 'red', }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: '5px' }}>
                    <AddBoxOutlinedIcon />
                    Add New Manager
                </div>
            </Button>
            <Dialog open={open} onClose={handleClose} scroll='body' width='417px' height='294px'>
                <DialogTitle xs={{ color: 'red' }}>Add New Manager</DialogTitle>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '25px', gap: '25px' }}>
                    <TextInput label="User Name" placeholder="Type User Name"
                        required value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <TextInput label="User Email" placeholder="Type User Email"
                        required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <DialogActions sx={{ gap: '15px', justifyContent: 'space-around' }}>
                    <Button onClick={handleClose} color='transparent' sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Dismiss</Button>
                    <Button onClick={handleAddUser} color="danger" sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}