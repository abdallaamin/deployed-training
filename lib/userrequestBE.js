import axios from 'axios';

{
    // [
    // {
    //     name: "Dep Management SPOC2",
    //         email: "dms2@vodafone.com",
    //             departmentName: "Department of Management",
    //                 status: "active"
    // },
    // {
    //     name: "Dep Management SPOC3",
    //         email: "dms3@vodafone.com",
    //             departmentName: "Department of Management",
    //                 status: "inactive"
    // }

    //     ]
}

// export async function PostDataToEndpoint(data, endpoint) {
//     try {
//         let url;
//         let loggerMail;

//         switch (endpoint) {
//             case "Admins":
//                 url = `${API_PREFIX}/users/addAdmins`;
//                 loggerMail = 'superAdmin1@vodafone.com';
//                 break;
//             case "SPOCS":
//                 url = `${API_PREFIX}/users/addSPOCs`;
//                 loggerMail = 'admin3@vodafone.com';
//                 break;
//             case "Managers":
//                 url = `${API_PREFIX}/users/addManagers`;
//                 loggerMail = 'admin3@vodafone.com';
//                 break;
//             default:
//                 throw new Error('Invalid endpoint');
//         }

//         const response = await axios.post(url, data, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'loggerMail': loggerMail,
//             },
//         });

//         // Handle the response as needed (optional).
//         return response.data;
//     } catch (error) {
//         // Handle errors (optional).
//         throw error;
//     }
// }
// export async function PostAll(data,role) {
//     try {
//         // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL where you want to send the data.
//         const response = await axios.post(`http://localhost:3900/api/users/${role}`, data, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'loggerMail': 'superAdmin1@vodafone.com',
//             },
//         });

//         // Handle the response as needed (optional).
//         return response.data
//     } catch (error) {
//         // Handle errors (optional).
//         throw error
//     }
// };

export async function PostMultiAdmins(data) {
    try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL where you want to send the data.
        const response = await axios.post(`${API_PREFIX}/users/addAdmins`, data, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'superAdmin1@vodafone.com',
            },
        });

        // Handle the response as needed (optional).
        return response.data
    } catch (error) {
        // Handle errors (optional).
        throw error
    }
};
export async function PostMultiSPOCS(data) {
    try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL where you want to send the data.
        const response = await axios.post(`${API_PREFIX}/users/addSPOCs`, data, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });

        // Handle the response as needed (optional).
        return response.data
    } catch (error) {
        // Handle errors (optional).
        throw error
    }
};
export async function PostMultiManagers(data) {
    try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL where you want to send the data.
        const response = await axios.post(`${API_PREFIX}/users/addManagers`, data, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });

        // Handle the response as needed (optional).
        return response.data
    } catch (error) {
        // Handle errors (optional).
        throw error
    }
};

export async function DeleteSingleUser(userId) {
    try {
        // Create a JSON object with the specified format
        const requestBody = 
        [
            userId,
        ];


        const response = await axios.post(`${API_PREFIX}/users/deleteusers`, requestBody , {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'superAdmin1@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};

//for bulk actions 
export async function DeleteBulkUsers(usersId) {
    try {
        // Create a JSON object with the specified format
        const requestBody = usersId


        const response = await axios.post(`${API_PREFIX}/users/deleteusers`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'superAdmin1@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};

export async function updateBulkUsers(usersId ,status) {
    try {
        const requestBody =
        {
            "userIds":usersId,
            "newStatus": status
        };

        const response = await axios.post(`${API_PREFIX}/users/updatestatus`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'superAdmin1@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};


//add single Admin
export async function AddNewSingleAdmin(adminName, adminEmail) {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        [{
            "name": adminName,
            "email": adminEmail,
            "status": "active",
            "role":"admin"
        }]

        const response = await axios.post(`${API_PREFIX}/users/addAdmins`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'superAdmin1@vodafone.com',
            },
        });
        return response.data

    } catch (error) {
        throw error
    }
};
//add single 
export async function AddNewSingleSPOC(userName, userEmail) {
    try {
        const requestBody =
        [{
            "name": userName,
            "email": userEmail,
            "status": "active"
        }]
        const response = await axios.post(`${API_PREFIX}/users/addSPOCs`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};

//add single Managaer
export async function AddNewSingleManager(userName, userEmail) {
    try {
        const requestBody =
            [{
                "name": userName,
                "email": userEmail,
                "status": "active"
            }]

        const response = await axios.post(`${API_PREFIX}/users/addManagers`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};


//with pagination

// for fetching spoc and manger data dynamicly by RoleInDeparment filter
export async function fetchUsersDataByRoleInDep(userRole) {
    try {
        const requestBody =
        {
            "roleInDepartment": userRole
        }
        const response = await axios.post(`${API_PREFIX}/users/?page=1&limit=14`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};

// for fetching admins data dynamicly by Role filter
export async function fetchAdminsDataByRole(userRole) {
    try {

        const requestBody =
        {
            "role": userRole
        }
        const response = await axios.post(`${API_PREFIX}/users/?page=1&limit=14`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'admin3@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};

// for fetching admins data dynamicly by Role filter
export async function updateUserStatus(userID) {
    try {
        const requestBody =
        {
            "userIds": [userID],
            "newStatus": "inactive"
        }
        const response = await axios.post(`${API_PREFIX}/users/updatestatus`, requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'loggerMail': 'superAdmin1@vodafone.com',
            },
        });
        return response.data
    } catch (error) {
        throw error
    }
};

