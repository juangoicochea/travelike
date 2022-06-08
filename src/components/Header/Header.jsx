import React from "react"
import styles from './Header.module.css'
import Navbar from "../Navbar/Navbar"

const Header = ( {parentCallback} ) => {

    return (
        <>
            <div className={`${styles.container} ${styles.desktop}`}>
                <span>Travelike</span>
                <Navbar parentCallback={parentCallback} />
                <span>IT Globers</span>
            </div>
            <div className={`${styles.container} ${styles.mobile}`}>
                <span>Travelike</span>
                <div className={styles.mobileCol}>
                    <Navbar parentCallback={parentCallback} />
                    <span>IT Globers</span>
                </div>
            </div>
        </>
    )
}

export default Header