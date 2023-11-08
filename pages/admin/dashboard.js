import React from 'react'
import Layout from './Layout'
import BasicTabs from '../../components/userscomponents/UserTabs.jsx'


const Dashboard = () => {
    return (
        <Layout>
            <div style={{ width: "auto", flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px', paddingTop: '35px' }}>
                <BasicTabs />
            </div>
        </Layout>
    )
}

export default Dashboard