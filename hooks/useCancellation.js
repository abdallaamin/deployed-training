import useSwr from 'swr'
import fetcher from '../lib/fetcher';
import { useState, useEffect } from 'react';

const useCancellation = () => {
    const { data, error, isLoading } = useSwr(`${API_PREFIX}/cancellationrequests`, fetcher);
    const [cancellationData, setCancellationData] = useState([]);
    
    
    useEffect(() => {
        if (data) {
            setCancellationData(data);
        }
    }, [data]);

    const updateCancellations = (newcancellation) => {
        setCancellationData((prevCancellation) => [...prevCancellation, newcancellation]);
    };

    return {
        CancellationRequests: cancellationData,
        error,
        isLoading,
        updateCancellations
    }
}

export default useCancellation