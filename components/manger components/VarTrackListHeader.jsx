import React from 'react'
import styles from '../../styles/manger.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import RequestListSwitch from './RequestListSwitch';

const VarTrackListHeader = () => {
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
                Track Training Requests
                <RequestListSwitch />
                </div>
                    <div style={{
                        marginTop: '10px',
                        color: '#767474',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}>Deadline for submitting requests : 12/2/2023  </div>
                </div>
                <div>
                    <TextField
                        id="search-bar"
                        className="text"
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        value={search}
                        onChange={handleSearch}
                        sx={{ width: 457, height: 44, paddingRight: '15px', }}
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
                </div>
            </div>
        </div>

    )
}

export default VarTrackListHeader