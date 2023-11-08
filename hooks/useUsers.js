import React from 'react'
import useSwr from 'swr'
import fetcher from '../lib/fetcher';
import { useState, useEffect } from 'react';
{
    // {
    // revalidateIfStale: false,
    //     revalidateOnFocus: false,
    //         revalidateOnReconnect: false,
    // });
}

const useUsers = () => {
    const { data, error, isValidating } = useSwr('http://localhost:3900/api/users/', fetcher);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        if (data) {
            setUsersData(data);
        }
    }, [data]);

    const updateUser = (newUser) => {
        setUsersData((prevUsers) => [...prevUsers, newUser]);
    };

    return {
        users: usersData,
        error,
        isLoading: isValidating,
        updateUser,
    };
};
export default useUsers