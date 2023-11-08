import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function TrainingForm() {
    const [Status, setStatus] = React.useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div class="maincontainer">
            <div  className='gridcontainer' style={{
                padding: '40px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)', /* Creates 4 equal-width columns */
                gridGap: '15px',
            }}>
            <div class="grid-1" style={{
                width:'100%',
                padding: '20px',
                textAlign: 'center',
            }}>
                <FormControl sx={{ m: 1, minWidth: 300 }} size="large">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={Status}
                        label="status"
                        onChange={handleChange}
                    >
                        <MenuItem value={'Active'}>Active</MenuItem>
                        <MenuItem value={'InActive'}>InActive</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div class="grid-2" style={{
                width:'100%',
                padding: '20px',
                textAlign: 'center',
            }}>
                <TextField
                    sx={{ paddingRight: '15px', m: 1, minWidth: 300 }}
                    id="name"
                    label="start date"
                    type="date"
                />
            </div>

            <div class="grid-3" style={{
                width: '100%',
                padding: '20px',
                textAlign: 'center',
            }}>

                <TextField
                    sx={{ paddingRight: '15px', m: 1, minWidth: 300 }}
                    id="name"
                    label="End Date"
                    type="date"

                />

            </div>
            <div style={{
                width:'100%',
                padding: '20px',
                textAlign: 'center',
            }}>
                    <TextField id="outlined-basic" placeholder="Type numberof hours" label="Training Hours" variant="outlined" 
                    sx={{ paddingRight: '15px', m: 1, minWidth: 300 }}
                />
            </div>
            
            </div>
            <div>
                <TextField sx={{ marginLeft: '55px'  , minWidth:'700px' , paddingBottom:'40px'}}
                id="outlined-multiline-static"
                    label="comments"
                    multiline
                    rows={4}
                    placeholder="Type your comments here" 
                    size='lg'
    
                    />
            </div>
        </div>

        


    );
}