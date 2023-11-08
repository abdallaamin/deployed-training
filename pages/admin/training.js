import React from 'react'
import { useState } from 'react';
import VarLayout from './VarLayout'
import RequestCycleDateModal from '../../components/TrainingComponents/RequestCycleDateModal.jsx'
import CustTabs from '../../components/maintabs/MantineTrainingTabs'
import  useTranings from '../../hooks/useTrainings'

// import fetcher from '../../lib/fetcher';
// import useSWR from 'swr';

const Training = () => {
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);

    // Callback function to update dateFrom and dateTo
    const handleDateChange = (newDateFrom, newDateTo) => {
        setDateFrom(newDateFrom);
        setDateTo(newDateTo);
    };


    return (
        <VarLayout>
            <div style={{ width: "auto", flex: 1, display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px', paddingTop: '11px', flexDirection: 'column' }}>
                <div style={{
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '14px', lineHeight: '20px', paddingBottom: '30px', paddingRight: '10px'
                }}>
                    <div style={{display:'flex',flexDirection:'row' , gap:'10px' , alignItems:'center'}}>
                        <div style={{color:'#767474'}}>
                            Requests Life Cycle From {' '}
                            {dateFrom ? dateFrom.format('DD/M') : 'N/A'} To  {dateTo ? dateTo.format('DD/M') : 'N/A'}
                        </div>
                        <RequestCycleDateModal dateFrom={dateFrom} dateTo={dateTo} onDateChange={handleDateChange} />
                    </div>
                </div>
            </div>
            
            <CustTabs/>

        </VarLayout>
    )
}

export default Training

