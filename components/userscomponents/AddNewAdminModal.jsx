import { useState } from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Link from '@mui/material/Link';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { TextInput } from '@mantine/core';
import { AddNewSingleAdmin } from '../../lib/userrequestBE'

export default function AddNewAdminModal() {

    const [open, setOpen] = useState(false);
    const [adminName, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleAddUser = async () => {
        try {
            const response = await AddNewSingleAdmin(adminName, adminEmail);
            console.log('API response:', response)
            setOpen(false);
            // Reset input fields
            setAdminName('');
            setAdminEmail('');
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
                    Add New Admin
                </div>
            </Button>
            <Dialog open={open} onClose={handleClose} scroll='body' width='417px' height='294px'>
                <DialogTitle xs={{ color: 'red' }}>Add New Admin</DialogTitle>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '25px', gap: '25px' }}>
                    <TextInput label="Admin Name" placeholder="Type Admin Name"
                        required value={adminName} onChange={(e) => setAdminName(e.target.value)} />
                    <TextInput label="Admin Email" placeholder="Type Admin Email"
                        required value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                </div>
                <DialogActions sx={{ gap: '15px', justifyContent: 'space-around' }}>
                    <Button onClick={handleClose} color='transparent' sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Dismiss</Button>
                    <Button onClick={handleAddUser} color="danger" sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}