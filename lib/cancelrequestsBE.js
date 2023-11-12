import axios from 'axios';

const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX;



export async function fetchAllCancellationData() {
    try {
        // Create a JSON object with the specified format
        const requestBody =
        {
            
        }


        const response = await axios.post(`${API_PREFIX}/cancellationrequests`, requestBody, {
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


        const response = await axios.post(`${API_PREFIX}/cancellationrequests`, requestBody, {
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