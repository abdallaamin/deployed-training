import React from 'react'
import styles from '../../styles/manger.module.css'
import { Button } from '@mui/joy'
import TrainingModalDetails from './TrainingRequestDetails'

import CancellationForm from './CancellationForm'

const  TrackTrainingCard = () => {
    return (
        <div className={styles.cardwrapper}>
            <div style={{
                marginTop: '25px',
                display: 'flex',
                width: '635px',
                height: 'auto',
                flexDirection: 'column'
            }}>
                <div className={styles.cardheader}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                            color: '#4A4D4E',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '20px',
                        }}>
                            Training Name
                        </div>

                        <div style={{
                            color: '#000',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeigh : '600',
                            lineHeight: '28px',
                        }}>
                            Become UX Designer Nano Degree Program.
                        </div>
                    </div>
                    <TrainingModalDetails />

                </div>
                <div className={styles.cardcontent}>

                    <div className={styles.cardrow}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.cardrowtitle}>creation date</div>
                            <div className={styles.cardrowvalue} >18/1/2023</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column'  }}>
                            <div className={styles.cardrowtitlestatus}>status</div>
                            <div className={styles.cardrowvaluestatus} >submitted</div>
                        </div>
                    </div>

                    <div className={styles.cardrow}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.cardrowtitle}>Proposed Delivery Type</div>
                            <div className={styles.cardrowvalue} >External</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.cardrowtitle}>Proposed External Delivery</div>
                            <div className={styles.cardrowvalue} >Udacity</div>
                        </div>
                    </div>

                </div>
            </div>


            <div>
                <CancellationForm />
            </div>

        </div>
    )
}

export default TrackTrainingCard