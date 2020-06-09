import React, {useState} from 'react'

import styles from './Gate.module.css'

export default function Gate(props) {
    return (
        <div className={styles.container}>
            <h2>This is a part two of your turn!, this comp also takes data from its props and change the value.</h2>
            {props.isOpen ? 
                <h1>The door is open</h1>: 
                <h1>The door is closed </h1>}
        </div>
    )
}