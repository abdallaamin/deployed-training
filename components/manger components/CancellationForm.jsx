import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/joy/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/joy/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Radio, Group } from '@mantine/core';

//,boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',style={{ width: '417px' , height:'294px' }}

export default function CancellationForm() {
    const [open, setOpen] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <Button color='danger' component="span" size='lg' onClick={handleClickOpen} sx={{
                width: '635px',
                height: '44px',
                borderRadius: '5px',
                marginBottom: '25px',
                backgroundColor: '#BE0000',
            }}>
                Send Cancellation Request
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
                    fontWeight: '700',
                    fontSize: '24px',
                    lineHeight: '32px',
                    color: '#BE0000',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            Cancel Training Request
                        </div>

                        <IconButton onClick={handleClose} color='transparent'><CloseOutlinedIcon /></IconButton>
                    </div>

                </DialogTitle>

                <DialogContent >
                    <div style={{
                    margin:'15px',
                    color: '#767474',
                    width: '444px',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '28px',
                    }}>
                        We’re sorry to see you cancel your training. To help us improve, we have a short question for you before you leave us.
                    </div>

                    <div style={{ margin: '15px'}}>
                        <Radio.Group
                            name="reason"
                            label="Why are you cancelling your training ?"
                        >
                            <Group mt="xs">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                                <Radio value="digitally" label="Its fulfilled digitally" color="red" />
                                <Radio value="internally" label="Its fulfilled internally" color="red" />
                                <Radio value="nolonger required" label="Its No longer required" color="red" />
                                <Radio value="other" label="Other" color="red" />
                                </div>
                                </Group>
                        </Radio.Group>
                    </div>


                </DialogContent>


                <DialogActions sx={{ display:'flex' ,justifyContent:'center'}}>
                    <Button onClick={handleClose} color="danger" sx={{ padding: '8px 55px', width: '455px', height: '50px', fontSize: '20px',fontStyle: 'normal',fontWeight: '700',lineHeight: '28px' }}>Send Request</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}