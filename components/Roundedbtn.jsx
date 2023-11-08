import React from 'react'
import IconButton from '@mui/joy/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Roundedbtn = () => {

    const handleDownload =() =>{
        console.log('download started')
    }
    return (
        <IconButton onClick={handleDownload} aria-label="download" variant="solid" color="danger" sx={{ height:'55px', width:'55px',borderRadius:'50%'}}> 
            <FileDownloadIcon sx={{color:'white'}}/>
        </IconButton>
    )
}

export default Roundedbtn