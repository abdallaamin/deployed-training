import { Tabs } from '@mantine/core';
import VarSearchCard from '../VarSearchCard'
import DataTable from '../TrainingComponents/Table'


const styles = {

    maincontainer: {
        padding: '23px',
        width: '100%'
    },
    tabTitle: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '28px',
        color: '#A4A2A2'
    }
}

const AdhocTabs= () => (
    <div style={styles.maincontainer}>
        <Tabs defaultValue="All" color="red" >
            <Tabs.List >
                <Tabs.Tab value="All" style={styles.tabTitle}>
                    All
                </Tabs.Tab>
                <Tabs.Tab value="New" style={styles.tabTitle}>
                    New
                </Tabs.Tab>
                <Tabs.Tab value="Inprogress" style={styles.tabTitle}>
                    Inprogress
                </Tabs.Tab>
                <Tabs.Tab value="Approved" style={styles.tabTitle}>
                    Approved
                </Tabs.Tab>
                <Tabs.Tab value="scheduled" style={styles.tabTitle}>
                    Scheduled
                </Tabs.Tab>
                <Tabs.Tab value="completed" style={styles.tabTitle}>
                    Completed
                </Tabs.Tab>
                <Tabs.Tab value="canceled" style={styles.tabTitle}>
                    Canceled
                </Tabs.Tab>
                <Tabs.Tab value="rejected" style={styles.tabTitle}>
                    Rejected
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="All" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='All Requests' requestType="adhoc" />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="New" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='New Requests' requestType="adhoc" />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="Inprogress" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='Inprogress Requests' requestType="adhoc" />
                </div>
            </Tabs.Panel>
            <Tabs.Panel value="Approved" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='Approved Requests' requestType="adhoc" />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="scheduled" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='scheduledRequests' requestType="adhoc" />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="completed" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='completed Requests' requestType="adhoc" />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="canceled" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='canceled Requests' requestType="adhoc" />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="rejected" pt="xs">
                <VarSearchCard />
                <div style={{ paddingTop: '20px' }}>
                    <DataTable TableName='rejected Requests' requestType="adhoc" />
                </div>
            </Tabs.Panel>

        </Tabs>
    </div>
);

export default AdhocTabs;