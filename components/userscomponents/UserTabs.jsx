import { Tabs } from '@mantine/core';
import UserTable from './usertable/UserTable'
import SearchCard from '../SearchCard';
// import SpocsSearchCard from '../SpocsSearchCard';
// import ManagerSearchCard from '../MangerSearchCard';


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
        color: '#A4A2A2',
    }
}

const BasicTabs = () => (
    <div style={styles.maincontainer}>
        <Tabs
            styles={() => ({
                tab: {
                    cursor: 'pointer',
                },
                active: {
                    color: 'red',
                },
            })}
            defaultValue="Admin" color="red" >
            <Tabs.List  >
                <Tabs.Tab value="Admin" style={styles.tabTitle}>
                    Admin
                </Tabs.Tab>
                <Tabs.Tab value="SPOC" style={styles.tabTitle}>
                    SPOC
                </Tabs.Tab>
                <Tabs.Tab value="Manager" style={styles.tabTitle}>
                    Manager
                </Tabs.Tab>

            </Tabs.List>

            <Tabs.Panel value="Admin" pt="xs">
                <SearchCard value="Admin" />
                <div style={{ paddingTop: '20px' }}>
                    <UserTable TableName='Admins' />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="SPOC" pt="xs">
                <SearchCard value="SPOC" />
                <div style={{ paddingTop: '20px' }}>
                    <UserTable TableName='SPOCS' />
                </div>
            </Tabs.Panel>

            <Tabs.Panel value="Manager" pt="xs">
                <SearchCard value="Manager" />
                <div style={{ paddingTop: '20px' }}>
                    <UserTable TableName='Managers' />
                </div>
            </Tabs.Panel>

        </Tabs>
    </div>
);



export default BasicTabs;