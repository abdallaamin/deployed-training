import React from 'react'
import Button from '@mui/joy/IconButton';
import Link from '@mui/material/Link';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';


{
    //handleClickOpen('body')
}

const FinalExportBtn = () => {
    return (
        <Button component={Link} onClick={()=>console.log('clicked')} color="danger" size="md"
            variant="plain" xs={{ color: 'red' , }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <FileDownloadRoundedIcon />
                Export
            </div>
        </Button>
    )
}

export default FinalExportBtn