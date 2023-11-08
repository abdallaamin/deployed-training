import React from 'react'
// import { useEffect, useState } from 'react'
import Layout from './Layout'
// import { PostData } from '../../utils/integrationbe';
// import UserList from '../../components/StoreUserData'
// import TrainingsList from '../../components/StoreRequestsData'
// import CancellationList from '../../components/StoreCancellationData'


{
    // useEffect(() => {
    //     async function trialpostData() {
    //         try {
    //             const postData = await PostData();
    //             setDataresponse(postData);
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error('Error posting data:', error);
    //         }
    //     }
    //     trialpostData()
    // }, []);
}
{
    // <h1>getting SWR with Zustand </h1>
    //                 <UserList />
    //                 <h2>Training Requests</h2>
    //                 <TrainingsList />
    //                 <h2>Cancellation request list </h2>
    //                 <CancellationList/>
}

const settings = () => {
    // const [data, setData] = useState(null);
    // const [dataresponse, setDataresponse] = useState(null);
    return (
        <Layout>
            <div style={{ width: "auto", flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', paddingTop: '35px' }}>
                <div>
                    settings page 
                </div>
            </div>
        </Layout>
    )
}

export default settings
