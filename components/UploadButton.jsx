import React from 'react'
import { useState } from 'react';
import Button from '@mui/joy/Button';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { parseExcelOrCsv } from '../lib/parseExcelOrCsv'
const UploadButton = () => {
    const [fileData, setFileData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        // Check if file is present
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const contents = e.target.result;
                // Process the file data here
                // For example, you can parse the Excel/CSV data and convert it to an array
                const dataArray = parseExcelOrCsv(contents);

                setFileData(dataArray);
            };

            reader.readAsText(file);
        }
    };
    return (
        <div>
            <Button startDecorator={<FileUploadOutlinedIcon />} color='danger'>Upload Sheet</Button>
            <input type="file" accept=".xlsx, .csv" onChange={handleFileUpload} />
            <div>{fileData}</div>
        </div>
    )
}

export default UploadButton