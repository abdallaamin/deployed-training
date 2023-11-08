import React from 'react'
import VarLayout from './VarLayout'
import CancellationTabs from '../../components/cancellationcomponents/CancellationTabs'



const Training = () => {
    return (
        <VarLayout>
            <div style={{ width: "auto", flex: 1, display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px', paddingTop: '11px', flexDirection: 'column' }}>
                <CancellationTabs  />

            </div>
        </VarLayout>
    )
}

export default Training