import React from 'react'
import styles from '../../styles/manger.module.css'
import { Button } from '@mui/joy'
import SpocModalDetails from './SpocRequestDetails'



const  SpocTrainingCard = () => {
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
                    <SpocModalDetails />

                </div>
                <div className={styles.cardcontent}>

                    <div className={styles.cardrow}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.cardrowtitle}>Manger Name</div>
                            <div className={styles.cardrowvalue} >Example</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.cardrowtitlestatus}>creation date</div>
                            <div className={styles.cardrowvaluestatus} >18/1/2023</div>
                        </div>
                    </div>

                    <div className={styles.cardrow}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.cardrowtitle}>Proposed Delivery Type</div>
                            <div className={styles.cardrowvalue} >External</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className={styles.cardrowtitlestatus}>status</div>
                            <div className={styles.cardrowvaluestatus} >submitted</div>
                        </div>
                    </div>

                </div>
            </div>


            <div style={{
                width: '635px',
                borderRadius: '5px',
                marginBottom: '25px',
                display:'flex' ,flexDirection:'row',justifyContent:'space-between'}}>
                
                <Button color='transparent' component="span" size='lg' sx={{ color: '#C13131', border: '1px solid #C13131', width: '260px', marginRight: '20px' }}>
                    Reject
                </Button>
            <Button color='danger' component="span" size='lg' sx={{ marginRight: '15px', backgroundColor: '#BE0000',width:'260px' }}>
                    Approve
                </Button>
            </div>

        </div>
    )
}

export default SpocTrainingCard