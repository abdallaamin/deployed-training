import React from 'react'
import styles from '../../styles/manger.module.css'
import { Button } from '@mui/joy'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NewAdhocRequestForm from './NewAdhocRequestForm';
import NewTrainingRequestForm from './NewTrainingRequestForm';

const VarWelcomeBar = () => {
    return (
        <div className={styles.welcomemaincontainer}>

            <div className={styles.welcometopcontainer}>
                <div className={styles.welcomeleftcontainer}>
                    <div className={styles.welcomtitle}>Hello Kareem  👋</div>
                    <div className={styles.welcomemessage}>Welcome in Training Automation Tool</div>
                </div>

                <div className={styles.welcomerightcontainer}>
                    <NewAdhocRequestForm />
                    <NewTrainingRequestForm/>
                </div>
            </div>

            <div className={styles.welcomedowncontainer}>
                <hr className={styles.divider} />
            </div>
        </div>
    )
}

export default VarWelcomeBar