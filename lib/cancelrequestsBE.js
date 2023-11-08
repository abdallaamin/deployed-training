import axios from 'axios';



export async function fetchAllCancellationData() {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        {
            
        }


        const response = await axios.post('http://localhost:3900/api/cancellationrequests', requestBody, {
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


export async function fetchCancellationData(status) {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        {
            "status": status
        }


        const response = await axios.post('http://localhost:3900/api/cancellationrequests', requestBody, {
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