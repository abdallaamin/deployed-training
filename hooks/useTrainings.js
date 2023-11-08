import useSWR from 'swr'
import fetcher from '../lib/fetcher';
import { useState, useEffect } from 'react';


const useTranings = () => {
    const { data, error, isLoading } = useSWR(`${API_PREFIX}/trainingrequests?requestType=standard`, fetcher);
    const [trainingRequestsData, setTrainingRequestsData] = useState([]);
    
    useEffect(() => {
        if (data) {
            setTrainingRequestsData(data);
        }
    }, [data]);

    const updateTrainingRequests = (newTrequest) => {
        setTrainingRequestsData((prevTrequest) => [...prevTrequest, newTrequest]);
    };

    return {
        TrainingRequests: trainingRequestsData,
        error,
        isLoading,
        updateTrainingRequests
    }
}

export default useTranings