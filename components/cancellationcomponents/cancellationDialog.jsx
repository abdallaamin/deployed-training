import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/joy/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Edit from '../../public/icons/edit.png'
import { IconButton } from '@mui/material';
import Image from 'next/image';

//,boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',style={{ width: '417px' , height:'294px' }}

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // setDateFrom(dateFrom)
        // setDateTo(dateTo)
    };

    return (
        <div >
            <IconButton srx={{ paddingLeft: '10px' }} onClick={handleClickOpen}>
                <Image src={Edit} />
            </IconButton>
            <Dialog open={open} onClose={handleClose} scroll='body' width='417px' height='294px'>
                <DialogTitle>Training  Requests Submission Cycle</DialogTitle>
                <div style={{ margin: '25px', gap: '15px'}}>
                    <TextField
                        sx={{paddingRight :'15px',}}
                        id="name"
                        label="Available From"
                        type="date"
                        value={dateFrom}
                        
                    />
                    <TextField
                        id="name"
                        label="to"
                        type="date"
                        value={dateTo}
                        
                    />
                </div>
                <DialogActions sx={{gap:'15px', justifyContent:'space-around'}}>
                    <Button onClick={handleClose} color='transparent' sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Dismiss</Button>
                    <Button onClick={handleClose} color="danger" sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}