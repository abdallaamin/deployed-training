import React from 'react'
import Layout from './Layout'
import SpocTrackListHeader from '../../components/spoc components/SpocTrackListHeader'
import SpocTrainingCard from '../../components/spoc components/SpocTrainingCard' 

const index = () => {
    return (
        <Layout>
            <SpocTrackListHeader/>
            <div style={{ width: "100%", height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'left', paddingLeft: '20px', paddingTop: '35px' }} >
                <SpocTrainingCard/>
            </div>
        </Layout>
    )
}

export default index