import React from 'react'
import styles from '../../styles/manger.module.css'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import RequestListSwitch from '../manger components/RequestListSwitch';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Button from '@mui/joy/Button';

const SpocTrackListHeader = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
    }
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', justifyContent: 'space-between', marginTop:'33px' }}>
                <div className={styles.tracktitle}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', }}>
                Training Requests
                <RequestListSwitch />
                </div>
                </div>
                <div style={{display:'flex',flexDirection:'row' , marginLeft:'10px'}}>
                    <TextField
                        id="search-bar"
                        className="text"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        value={search}
                        onChange={handleSearch}
                        sx={{ width: 357, height: 44, paddingRight: '30px', }}
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
                    <div style={{ width: '45px', height: "44px", marginRight: "25px" }}>
                        <Button size='md' variant="outlined" sx={{ color: '#6D7070', borderColor: '#CCCCCC' }}><FilterAltOutlinedIcon style={{ color: '#6d7070' }} /></Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SpocTrackListHeader