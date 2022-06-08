import React from "react"
import styles from './Footer.module.css'

const Footer = () => {

    return (
        <>
            <div className={styles.container}>
                <div>
                    <h2>Travelike</h2>
                </div>
                <div>
                    <span>Diseñado por: Juan Goicochea</span>
                </div>
            </div>
        </>
    )
}

export default Footer