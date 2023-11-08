import React from 'react'
import Styles from '../../styles/manger.module.css'
import TopBar from '../../components/manger components/TopBar'
import VarWelcomeBar from '../../components/manger components/VarWelcomeBar'



const Layout = ({ children }) => {
    return (
        <div className={Styles.mangermaincontainer}>
            <TopBar />
            <VarWelcomeBar />
            <main>{children}</main>
        </div>

    )
}

export default Layout