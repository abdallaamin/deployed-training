import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Button } from '@mui/joy'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import * as xlsx from 'xlsx'
import Papa from 'papaparse';
import { PostMultiAdmins } from '../lib/userrequestBE';
import useStore from '../lib/store';

// function ShowData({ fileData }) {
//     return (
//         <div>
//             {fileData.map((data, index) => (
//                 <div key={index}>
//                     <p>Name: {data.name}</p>
//                     <p>Email: {data.email}</p>
//                     <p>Department Name: {data.departmentName}</p>
//                     <p>Status: {data.status}</p>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// }
export default function AltUploadAdmins() {
    const [fileData, setFileData] = useState(null);
    // const uploadedUsers = useStore((state) => state.uploadedUsers)
    // const setUploadedUsers = useStore((state) => state.setUploadedUsers);
    // const setPostResponseUsers = useStore((state) => state.setPostResponseUsers);


    const parseExcelOrCsv = (contents, fileName) => {
        const isExcel = fileName.endsWith('.xlsx');
        const dataArray = [];

        if (isExcel) {
            const workbook = xlsx.read(contents, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const excelData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

            //Convert Excel data to array format
            excelData.forEach((row) => {
                const rowData = row.map((cell) => cell.toString());
                dataArray.push(rowData);
            });
        } else {
            const csvData = Papa.parse(contents, { header: false }).data;

            // Remove the last row if it's empty (often happens with CSVs)
            if (csvData[csvData.length - 1].length === 1 && !csvData[csvData.length - 1][0]) {
                csvData.pop();
            }

            // Convert CSV data to array format
            csvData.forEach((row) => {
                const rowData = row.map((cell) => cell.toString());
                dataArray.push(rowData);
            });
        }

        return dataArray;
    };


    //Convert Excel data to desired format
    const transformData = (dataArray) => {
        console.log(dataArray)
        // Check if dataArray is not an array, and if so, parse it again to convert it into an array
        if (!Array.isArray(dataArray)) {
            dataArray = JSON.parse(dataArray);
        }

        // Ensure that dataArray is an array of arrays (rows)
        if (!Array.isArray(dataArray[0])) {
            throw new Error("Invalid data format. Expected an array of arrays.");
        }
        const headerRow = dataArray[0]; // Get the first element as the header row
        console.log(dataArray)
        // Map each data row (excluding the header row) to the desired format

        // Map each data row to the desired format
        const transformedData = dataArray.slice(1).map((row) => {
            return {
                name: row[0],
                email: row[1],
                departmentName: "Department of Engineering",//headerRow[0].split(' ')[0]
                status: row[2],
            };
        });

        return transformedData;
    }




    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const contents = e.target.result;
                //const dataArray = parseExcelOrCsv(contents, file.name);
                //const excelJson = parseExcelOrCsv(contents, file.name)
                const dataArray = parseExcelOrCsv(contents, file.name);
                // const jsonDataParsed = JSON.parse(dataArray)
                const transformedJsonData = transformData(dataArray);
                //setFileData(dataArray);
                console.log(JSON.stringify(transformedJsonData));
                setFileData(transformedJsonData)
                // setUploadedUsers(transformedJsonData)
            };

            reader.readAsArrayBuffer(file);
        }
    };

    {
        // const sendData = async () => {
        //     try {
        //         const response = await axios.post(`${API_PREFIX}/users/addSPOCs`, jsonToSent);
        //         setResponse(response.data);
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // };

        // sendData();
    }
    // if (buttontext == 'Admins') return posturl = 'admin url'
    // else if (buttontext == 'SPOCS') return posturl = 'spocs url'
    // else return posturl = 'manger  url'
    // console.log(buttontext)
    const postResponse = async () => {
        try {
            const data = JSON.stringify(fileData);

            const response = await PostMultiAdmins(data);

            // Handle the response as needed (optional).
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        postResponse();
    }, [fileData]);
    {
        //const arrayOfJSON = dataArray.map((data) => JSON.stringify(data))
    }
    {
        // <TableContainer component={Paper}>
        //     < Table >
        //                 <TableHead>
        //                     <TableRow>
        //                         {response[0].map((cell, index) => (
        //                             <TableCell key={index}>{cell}</TableCell>
        //                         ))}
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {response.slice(1).map((row, index) => (
        //                         <TableRow key={index}>
        //                             {row.map((cell, index) => (
        //                                 <TableCell key={index}>{cell}</TableCell>
        //                             ))}
        //                         </TableRow>
        //                     ))}
        //                 </TableBody>
        //             </Table >
        //         </TableContainer >
    }

    //<ShowData jsonData={response} />
    return (
        <div>
            <input type="file" accept=".xlsx, .csv" onChange={handleFileUpload} style={{ display: 'none' }} id="file-upload" />
            <label htmlFor="file-upload">
                <Button startDecorator={<FileUploadOutlinedIcon />} color='danger' component="span" >
                    Upload Admins
                </Button>
                
            </label>
            
        </div>
    );
}
