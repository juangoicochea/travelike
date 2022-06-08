import React from "react"
import styles from './Button.module.css'

const Button = ( {id, name, parentCallback} ) => {

    function onTrigger(e) {
        parentCallback(e.target.name)
    }

    return (
        <>
            <div className={styles.container}>
                <li key={id}>
                    <button type='button' name={name} onClick={(e) => onTrigger(e)}>{name}</button>
                </li>
            </div>
        </>
    )
}

export default Button