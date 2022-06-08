import React from "react"
import styles from './Navbar.module.css'
import Button from "./Button/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'

const info = [
    { id: '1', name: 'Vivair' },
    { id: '2', name: 'Avianca' },
    { id: '3', name: 'Copa' },
    { id: '4', name: 'Latam' },
    { id: '5', name: 'Wingo' },
    { id: '6', name: 'EasyFly' }
]

const Navbar = ( {parentCallback} ) => {

    return (
        <>
            <div className={`${styles.container} ${styles.desktop}`}>
                <ul>
                    {
                        info.map(e => (
                            <Button 
                                key={e.id}
                                id={e.id} 
                                name={e.name}
                                parentCallback={parentCallback}
                            />
                        ))
                    }
                </ul>
            </div>
            <div className={`${styles.container} ${styles.mobile}`}>
                    &nbsp; <FontAwesomeIcon icon={faBars} />
                    <ul>
                    {
                        info.map(e => (
                            <Button 
                                key={e.id}
                                id={e.id} 
                                name={e.name}
                                parentCallback={parentCallback}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Navbar