import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/joy/IconButton';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import NewTrainingFormContent from './NewTrainingFormContent'
//,boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',style={{ width: '417px' , height:'294px' }}

export default function NewTrainingRequestForm() {
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        < >
            <Button startDecorator={<AddCircleOutlineIcon />} onClick={handleClickOpen} color='danger' component="span" sx={{ marginRight: '15px' }}>
                Training Request
            </Button>
            <Dialog
                fullWidth
                maxWidth='sm'
                open={open} onClose={handleClose} scroll='body' height='294px'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >

                <DialogTitle id="scroll-dialog-title" sx={{
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '20px',
                    lineHeight: '25px',
                    color: '#BE0000',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            Submit New Training Request
                        </div>

                        <IconButton onClick={handleClose} color='transparent'><CloseOutlinedIcon /></IconButton>
                    </div>

                </DialogTitle>

                <DialogContent dividers={'paper'}>

                    <NewTrainingFormContent />

                </DialogContent>


                <DialogActions sx={{ gap: '15px', justifyContent: 'space-around' }}>
                    <Button onClick={handleClose} color='transparent' sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Dismiss</Button>
                    <Button onClick={handleClose} color="danger" sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}