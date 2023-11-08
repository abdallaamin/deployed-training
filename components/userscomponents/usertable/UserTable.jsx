import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import UserActionItems from './UserActionItems'
import UserTableHeader from './UserTableHeader';
import { Badge } from '@mantine/core';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { DeleteSingleUser, fetchAdminsDataByRole, fetchUsersDataByRoleInDep } from '../../../lib/userrequestBE';
// import Link from '@mui/material/Link';
// import { MenuItem } from '@mui/material';
//import { TableCell } from '@mui/material';
// import useStore from '../../../lib/store.js';

{
    // {
    //     PostResponseUsers && (
    //         <div>
    //             <h2>PostResponseUsers:</h2>
    //             <pre>{JSON.stringify(PostResponseUsers, null, 2)}</pre>
    //         </div>
    //     )
    // }
}

{
    // PostResponseUsers = PostResponseUsers.filter(item => item !== null);
    // let ParsedUsersResponse = PostResponseUsers.map(item => JSON.parse(item));



    // const rows = PostResponseUsers.map((item, index) => ({
    //     id: index + 1,
    //     AdminName: item.name,
    //     AdminEmail: item.email,
    //     status: item.status.charAt(0).toUpperCase() + item.status.slice(1),
    //     Actions: ''
    // }));


    // Update the rows state when PostResponseUsers changes


}


//important
{
    // useEffect(() => {
    //     // Check if PostResponseUsers is defined and not null
    //     if (PostResponseUsers && PostResponseUsers.length > 0) {
    //         // Parse JSON strings to objects and filter out null entries
    //         const parsedUsers = PostResponseUsers
    //             .map((user) => JSON.parse(user))
    //             .filter((user) => user !== null);

    //         // Map the parsed users to the desired format
    //         const updatedRows = parsedUsers.map((user, index) => ({
    //             id: index + 1,
    //             userId: user._id,
    //             AdminName: user.name,
    //             AdminEmail: user.email,
    //             status: user.status.charAt(0).toUpperCase() + user.status.slice(1),
    //             Actions: (
    //                 <UserActionItems
    //                     userId={user._id}
    //                     onDeleteUser={handleDeleteUser}
    //                 />
    //             ),
    //         }));

    //         setRows(updatedRows);
    //     }
    // }, [PostResponseUsers]);

    //Callback to handle user deletion
    // const handleDeleteUser = async (userId) => {
    //     try {
    //         // Perform the delete operation (use your DeleteSingleUser function)
    //         await DeleteSingleUser(userId);

    //         // Remove the deleted user from the PostResponseUsers state
    //         PostResponseUsers((prevUsers) =>
    //             prevUsers.filter((user) => {
    //                 const parsedUser = JSON.parse(user);
    //                 return parsedUser._id !== userId;
    //             })
    //         );
    //     } catch (error) {
    //         // Handle errors (optional)
    //         console.error('Error deleting user:', error);
    //     }
    // };
}
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {}
    })
);

export default function UserTable({ TableName }) {
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const [btnFlag,setBtnFlag] = useState(false)
    const [rows, setRows] = useState([]);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const [loading, setLoading] = useState(false)

    
    const fetchData = () => {
        setLoading(true);
        const RoleToBeSent = TableName.slice(0, -1)
        if (RoleToBeSent === "Admin") {
            // If RoleToBeSent is "Admin," convert it to lowercase
            const roleLowercase = RoleToBeSent.toLowerCase();
            fetchAdminsDataByRole(roleLowercase)
                .then((data) => {
                    const AdminsData = data.users;
                    console.log(AdminsData);

                    // Map the admin data to the desired format
                    const updatedRows = AdminsData.map((admin, index) => ({
                        id: index + 1,
                        userId: admin._id,
                        Name: admin.name,
                        Email: admin.email,
                        status: admin.status,
                    }))

                    // Update the rows state with the mapped data
                    setRows(updatedRows);
                })
                .catch((error) => {
                    console.error('Error fetching Admins data:', error);
                });
                setLoading(false)
        } else {

            fetchUsersDataByRoleInDep(RoleToBeSent)
                .then((data) => {
                    // Extract the trainingRequests array from the response data
                    const UsersPostData = data.users;
                    console.log(UsersPostData)
                    // Map the users to the desired format
                    const updatedRows = UsersPostData.map((user, index) => ({
                        id: index + 1,
                        userId: user._id,
                        Name: user.name,
                        Email: user.email,
                        status: user.status,
                        Actions: (
                            <UserActionItems userId={user._id} onDeleteUser={handleDeleteUser} />
                        ),
                    }));
                    // Update the rows state with the mapped data
                    setRows(updatedRows);
                })
                .catch((error) => {
                    console.error('Error fetching Users data:', error);
                });
            setLoading(false)
        }
    }


    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };

    const handleDeleteUser = async (userId) => {
        try {
            // Perform the delete operation (use your DeleteSingleUser function)
            await DeleteSingleUser(userId);
            fetchData();
            // Remove the deleted user from the local state
            const updatedUsers = users.filter((user) => user._id !== userId);
            updateUser(updatedUsers);
        } catch (error) {
            // Handle errors (optional)
            console.error('Error deleting user:', error);
        }
    };

    const handleRowSelectionModelChange = (newRowSelectionModel) => {
        // Update the rowSelectionModel with the selected row indices
        setRowSelectionModel(newRowSelectionModel);

        const selectedUserIds = newRowSelectionModel
            .map((selection) => rows[selection]) // Access selected rows
            .filter((row) => row) // Filter out undefined rows
            .map((row) => row.userId); // Extract userIds
        //  const selectedUserIds = newRowSelectionModel.map((index) => rows[index].userId);

        // Update the rowSelectionModel with the selected user IDs
        setSelectedUserIds(selectedUserIds);
        // Update the btnFlag based on the selectedUserIds
        setBtnFlag(selectedUserIds.length > 0 );
    };

    useEffect(() => {
        fetchData();

        // Poll for updates every 5 seconds (adjust the interval as needed)
        const pollInterval = setInterval(fetchData, 1000);

        return () => {
            clearInterval(pollInterval); // Clean up the interval when the component unmounts
        };
    }, [TableName]);


    const columns = [
        { field: 'Name', headerName: 'Name', width: 180 },
        { field: 'Email', headerName: 'Email', width: 180 },
        {
            field: 'status',
            headerName: 'Status',
            width: 180,
            renderCell: (cellValues) => {
                let statusColor = 'blue'; // Default color for unknown status values

                // Determine the badge color based on the status value
                switch (cellValues.value) {
                    case 'active':
                        statusColor = 'green';
                        break;
                    case 'inactive':
                        statusColor = 'gray';
                        break;
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
                    <UserActionItems userId={cellValues.row.userId} onDeleteUser={handleDeleteUser} />
                );
            }
        },
    ];
    // if (rowSelectionModel) {
    //     setBtnFlag(!btnFlag);
    //     console.log(rowSelectionModel);
    // }

    console.log(rowSelectionModel);
    console.log(btnFlag) 
    console.log(selectedUserIds) 
    return (
        <Card sx={{ minWidth: 275 }}>
            <div style={{ height: 'auto', width: '100%', boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.25)', borderRadius: '5px' }}>
                <UserTableHeader TableName={TableName} btnFlag={btnFlag} UsersIds={selectedUserIds}/>

                <DataGrid
                    className='datagrid'
                    onCellClick={handleCellClick}
                    onRowClick={handleRowClick}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    onRowSelectionModelChange={handleRowSelectionModelChange}
                    rowSelectionModel={rowSelectionModel}
                    enableColumnActions={true}
                >
                </DataGrid>

            </div>
        </Card>
    );
} 