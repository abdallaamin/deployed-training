import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/joy/Button';
import styles from './cancellation.module.css'
import { CardActionArea, CardActions } from '@mui/material';
import CancelAccordion from './CancelAccordion';
import TraningModal from '../TrainingComponents/TrainingModalDetails'
import { fetchAllCancellationData, fetchCancellationData } from '../../lib/cancelrequestsBE';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
// import useCancellation from '../../hooks/useCancellation'

export default function BasicCard({ TabName }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (TabName === "all") {
            fetchAllCancellationData()
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.error('Error fetching cancellation data:', error);
                });
        } else {
            fetchCancellationData(TabName)
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    console.error('Error fetching Cancellation data:', error);
                });
        }
    }, [TabName]);

    function getStatusColor(status) {
        switch (status) {
            case 'approved':
                return 'green'; // Green for approved
            case 'rejected':
                return 'red'; // Red for rejected
            default:
                return 'orange'; // Yellow for others
        }
    }

    
    return (
        <>
            {data.map((cancellationRequest , index) => (
                <div key={cancellationRequest.index}>
                    <div style={{
                        display: 'flex',
                        paddingTop: '25px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '24px', color: '#999999'
                    }}> Date of sending request :
                        <div style={{ paddingLeft: '5px', color: 'black' }}>{new Date(cancellationRequest.createdon).toISOString().split('T')[0].split('-').reverse().join('/')}</div>
                    </div>
                    <Card
                        key={cancellationRequest._id}
                        sx={{ minWidth: 275, height: 225, borderRadius: '10px', boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.25)', marginTop: '15px' }}
                    >
                        <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', }}>
                            <div className={styles.topdetails}>
                                <div className={styles.titlecontainer}>
                                    <div className={styles.title}>{cancellationRequest.originalRequestId.trainingName}</div>
                                    <div className={styles.training}>P1</div>
                                </div>
                                <div className={styles.mangercontainer}>
                                    <div className={styles.mangername} >Manager Name</div>
                                    <div className={styles.mangervalue}>{cancellationRequest.mangerName}</div>
                                </div>
                                <div className={styles.leadcontainer}>
                                    <div className={styles.mangername}>GSL Lead</div>
                                    <div className={styles.mangervalue}>{cancellationRequest.originalRequestId.GSLName}</div>
                                </div>
                                <div className={styles.requestcontainer}>
                                    <div className={styles.mangername} >Request Status</div>
                                    <div style={{ fontWeight: 'bold', color: getStatusColor(cancellationRequest.status) }}>
                                        {cancellationRequest.status}
                                        </div>
                                </div>
                                {cancellationRequest.status === 'pending' && (
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>
                                        <Button color="danger">Apprrove</Button>
                                    </div>
                                    <div>
                                        <Button color='transparent'>Reject</Button>
                                    </div>
                                </div>
                                )}
                                {cancellationRequest.status === 'approved' && (
                                    <div style={{ display: 'flex', flexDirection: 'row' , alignItems:"center" , gap:'5px' , paddingTop:'8px' }}>
                                        <CheckCircleIcon size="25" style={{fill:"green" }} />
                                            <h3 style={{ color: 'green'}} >Approved</h3>
                                    </div>
                                )}
                                {cancellationRequest.status === 'rejected' && (
                                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: "center", gap: '5px', paddingTop: '8px' }}>
                                        <CancelIcon size="25" style={{ fill: "red" }} />
                                            <h3 style={{ color: 'red' }} >Rejected</h3>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        <div className={styles.divider}>
                        </div>
                        <CardActionArea sx={{ minWidth: 275, borderRadius: '10px', }}>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px' }}>
                                <div>
                                    <CancelAccordion cancellationReason={cancellationRequest.cancellationReason} />
                                </div>
                                <div>
                                    <TraningModal />
                                </div>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </>
    );
}
