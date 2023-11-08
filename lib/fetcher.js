import axios from 'axios';

const fetcher = async (url) => {
    const headers = {
        'loggerMail': 'admin3@vodafone.com',
    };

    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        // Handle any error here
        throw error;
    }
};

export default fetcher;
