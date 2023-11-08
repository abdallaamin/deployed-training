import { useState } from 'react';
import Button from '@mui/joy/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Edit from '../../public/icons/edit.png'
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { InputLabel } from '@mui/material';
import { Label } from '@mui/icons-material';
//,boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',style={{ width: '417px' , height:'294px' }}


export default function RequestCycleDateModal(props) {
    const [open, setOpen] = useState(false);
    const { dateFrom, dateTo, onDateChange } = props;

    const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };


    return (
        <div >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <IconButton srx={{ paddingLeft: '10px' }} onClick={handleClickOpen}>
                    <Image src={Edit} />
                </IconButton>
                <Dialog open={open} onClose={handleClose} scroll='body' width='417px' height='294px'>
                    <DialogTitle xs={{color:'red'}}>Training  Requests Submission Cycle</DialogTitle>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '25px', gap: '25px' }}>
                            <DatePicker label="Available From" value={dateFrom} onChange={(newValue) => onDateChange(newValue, dateTo)} />
                            <DatePicker label="To"  value={dateTo} onChange={(newValue) => onDateChange(dateFrom, newValue)} />
                    </div>
                    <DialogActions sx={{ gap: '15px', justifyContent: 'space-around' }}>
                        <Button onClick={handleClose} color='transparent' sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Dismiss</Button>
                        <Button onClick={handleClose} color="danger" sx={{ padding: '8px 55px', width: '148px', height: '44px' }}>Save</Button>
                    </DialogActions>
                </Dialog>
            </LocalizationProvider>
        </div>
    );
}