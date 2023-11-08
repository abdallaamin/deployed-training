import React from 'react'
import Styles from '../../styles/manger.module.css'
import TopBar from '../../components/spoc components/TopBar'
import MainWelcomeBar from '../../components/spoc components/MainWelcomeBar'



const Layout = ({ children }) => {
    return (
        <div className={Styles.mangermaincontainer}>
            <TopBar/>
            <MainWelcomeBar />
            <main>{children}</main>
        </div>

    )
}

export default Layout