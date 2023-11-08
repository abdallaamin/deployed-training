import React from 'react'
import VarLayout from './VarLayout'
import AdhocTabs from '../../components/maintabs/adhocTabs'

const Training = () => {
    return (
        <VarLayout>
            <div style={{ width: "auto", flex: 1, display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px', paddingTop: '11px', flexDirection: 'column' }}>
                <AdhocTabs />
            </div>
        </VarLayout>
    )
}

export default Training