import * as React from 'react';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
//import { TableCell } from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ActionItems from './actionitem/ActionItems'
import TrainingModalDetails from './TrainingModalDetails';
import TableHeader from './TableHeader';
// import useStore from '../../lib/store'
import { Badge } from '@mantine/core';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import useTranings from '../../hooks/useTrainings'
import { fetchAllTrainingData, fetchTrainingDataByStatus } from '../../lib/trainingrequestsBE';

{// const handleClick = (event, cellValues) => {
    //     console.log(cellValues.row);
    // };

    // const handleCellClick = (param, event) => {
    //     event.stopPropagation();
    // };

    // const handleRowClick = (param, event) => {
    //     event.stopPropagation();
    // };
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {}
    })
);


const columns = [
    { field: 'MangerName', headerName: 'Manger Name', width: 180 },
    { field: 'gsllead', headerName: 'GSL Lead ', width: 180 },
    { field: 'trainingName', headerName: 'Training Name', width: 180 },
    { field: 'priority', headerName: 'Priority', width: 180 },
    { field: 'DeliveryType', headerName: 'Delivery Type', width: 180 },
    {
        field: 'status',
        headerName: 'Status',
        width: 180,
        renderCell: (cellValues) => {
            let statusColor = 'blue'; // Default color for unknown status values

            // Determine the badge color based on the status value
            switch (cellValues.value) {
                case 'InProgress':
                    statusColor = 'yellow';
                    break;
                case 'approved':
                    statusColor = 'green';
                    break;
                // Add more cases for other status values and their corresponding colors
                // case 'other_status':
                //     statusColor = 'other_color';
                //     break;
                default:
                    statusColor = 'blue';
            }

            return (
                <Badge style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} color={statusColor}>
                    <Brightness1Icon fontSize='sm' style={{ margin: '1px', padding: '1px', marginTop: '1px', alignItems: 'center' }} color={statusColor} />
                    {cellValues.value}
                </Badge>
            );
        },
    },
    {
        field: 'Actions',
        headerName: '',
        width: 180,
        renderCell: (cellValues) => {
            return (
                <ActionItems requestId={cellValues.row.RequestID} />
            );
        }
    },
    {
        field: 'viewmore',
        headerName: '',
        width: 180,
        renderCell: (cellValues) => {
            return <TrainingModalDetails />;
        }
    },


];


export default function DataTable({ TableName, requestType }) {
    //import requests from zustand store
    //const { TrainingRequests, isLoading, updateTrainingRequests } = useTranings()
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const [btnFlag, setBtnFlag] = useState(false)
    const [selectedRows, setSelectedRows] = useState([]);
    const [rows, setRows] = useState([]);
    const [selectedRequestsIds, setSelectedRequestsIds] = useState([]);
    const [loading, setLoading] = useState(false)


    const fetchData = () => {
        setLoading(true);
        if (TableName === "All Requests") {
            // If RoleToBeSent is "Admin," convert it to lowercase
            // const modifiedTableName = TableName.replace(' Requests', '').toLowerCase();
            fetchAllTrainingData(requestType)
            .then((data) => {
                // Extract the trainingRequests array from the response data
                const trainingData = data.trainingRequests;
                console.log(trainingData)
                // Map the users to the desired format
                const updatedRows = trainingData.map((request, index) => ({
                    id: index + 1,
                    RequestID: request._id, // You can use a unique identifier here
                    MangerName: request.mangerName,
                    gsllead: request.GSLName,
                    trainingName: request.trainingName,
                    priority: request.priority,
                    DeliveryType: request.deliverytype,
                    status: request.status.split('-')[0].toLowerCase(),
                    Actions: '',
                    viewmore: ''
                }));
                // Update the rows state with the mapped data
                setRows(updatedRows);
            })
            .catch((error) => {
                console.error('Error fetching training data:', error);
            });
            setLoading(false)
} else {
            const modifiedTableName = TableName.replace(' Requests', '-admin');
            fetchTrainingDataByStatus(requestType,modifiedTableName)
                .then((data) => {
                    // Extract the trainingRequests array from the response data
                    const trainingData = data.trainingRequests;
                    console.log(trainingData)
                    // Map the users to the desired format
                    const updatedRows = trainingData.map((request, index) => ({
                        id: index + 1,
                        RequestID: request._id, // You can use a unique identifier here
                        MangerName: request.mangerName,
                        gsllead: request.GSLName,
                        trainingName: request.trainingName,
                        priority: request.priority,
                        DeliveryType: request.deliverytype,
                        status: request.status.split('-')[0].toLowerCase(),
                        Actions: '',
                        viewmore: ''
                    }));
                    // Update the rows state with the mapped data
                    setRows(updatedRows);
                })
                .catch((error) => {
                    console.error('Error fetching training data:', error);
                });
            setLoading(false)
        }
    }


    const handleRowSelection = (params) => {
        console.log(params.selectionModel)
        const selectedRowIds = params.selectionModel;
        setSelectedRows(selectedRowIds);
    };
    const handleRowSelectionModelChange = (newRowSelectionModel) => {
        // Update the rowSelectionModel with the selected row indices
        setRowSelectionModel(newRowSelectionModel);

        const selectedRequestsIds = newRowSelectionModel
            .map((selection) => rows[selection]) // Access selected rows
            .filter((row) => row) // Filter out undefined rows
            .map((row) => row.RequestID); // Extract userIds
        //  const selectedUserIds = newRowSelectionModel.map((index) => rows[index].userId);

        // Update the rowSelectionModel with the selected user IDs
        setSelectedRequestsIds(selectedRequestsIds);
        // Update the btnFlag based on the selectedUserIds
        setBtnFlag(selectedRequestsIds.length > 0);
    };

    useEffect(() => {
        fetchData();

        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(fetchData, 1000);

        return () => {
            clearInterval(pollInterval); // Clean up the interval when the component unmounts
        };
    }, [TableName]);

    const isButtonDisabled = selectedRows.length === 0;
    console.log(isButtonDisabled)

    console.log(rowSelectionModel);
    console.log(btnFlag)
    console.log(selectedRequestsIds)
    return (
        <Card sx={{ minWidth: 275 }}>
            <div style={{ height: 'auto', width: '100%', boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>

                <TableHeader TableName={TableName} btnFlag={btnFlag} requestids={selectedRequestsIds}/>

                <DataGrid
                    className='datagrid'
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    enableColumnActions={true}
                    onRowSelectionModelChange={handleRowSelectionModelChange}
                    rowSelectionModel={rowSelectionModel}
                >
                </DataGrid>

            </div>
        </Card>
    );
} 