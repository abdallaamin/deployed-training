import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/joy/Button';
//import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import AltUploadSPOCS from './AltUploadSPOCS'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function SpocsSearchCard() {

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
    }



    return (
        <Card sx={{ minWidth: 275, height: 95, borderRadius: '5px', boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '13px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                        <TextField
                            id="search-bar"
                            className="text"
                            variant="outlined"
                            placeholder="Search..."
                            size="small"
                            value={search}
                            onChange={handleSearch}
                            sx={{ width: 477, height: 44, paddingLeft: '12px' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton type="submit" aria-label="search">
                                            <SearchIcon style={{ fill: "#999999" }} />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Button startDecorator={<FilterAltOutlinedIcon style={{ color: '#CCCCCC' }} />} variant="outlined" style={{ color: '#6D7070', borderColor: '#CCCCCC' }}>Filter</Button>
                    </div>
                    <div style={{ position: 'absolute', right: '55px', paddingTop: '3px' }}>
                        <AltUploadSPOCS/>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}