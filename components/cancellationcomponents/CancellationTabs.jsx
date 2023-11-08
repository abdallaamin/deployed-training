import { useState } from 'react'
import { Tabs } from '@mantine/core';
import VarSearchCard from '../VarSearchCard';
import CancelCard from '../../components/cancellationcomponents/CancelCard'


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

export default function CancellationTabs() {

    return (
        <div style={styles.maincontainer}>
            <Tabs defaultValue="All" color="red" >
                <Tabs.List >
                    <Tabs.Tab value="All" style={styles.tabTitle}>
                        All
                    </Tabs.Tab>
                    <Tabs.Tab value="Pending" style={styles.tabTitle}>
                        Pending
                    </Tabs.Tab>
                    <Tabs.Tab value="Approved" style={styles.tabTitle}>
                        Approved
                    </Tabs.Tab>
                    <Tabs.Tab value="rejected" style={styles.tabTitle}>
                        Rejected
                    </Tabs.Tab>
                </Tabs.List>


                <Tabs.Panel value="All" pt="xs">
                    <VarSearchCard />
                    <CancelCard  TabName="all"/>
                </Tabs.Panel>

                <Tabs.Panel value="Pending" pt="xs">
                    <VarSearchCard />
                    <CancelCard TabName="pending" />
                </Tabs.Panel>

                <Tabs.Panel value="Approved" pt="xs">
                    <VarSearchCard />
                    <CancelCard TabName="approved" />
                </Tabs.Panel>

                <Tabs.Panel value="rejected" pt="xs">
                    <VarSearchCard />
                    <CancelCard TabName="rejected" />
                </Tabs.Panel>

            </Tabs>
        </div>
    )
}