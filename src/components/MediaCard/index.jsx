import React from 'react'

import styles from './MediaCard.module.css'

export default function MediaCard(props) {
    return (
        <div className={styles.container}>
            <h2>This is a part one of your turn!, this card takes data from its props</h2>
            <div className={styles.card}>
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <img className={styles.image} src={props.imgUrl} alt={`${props.name} image`}/>
            </div>
        </div>
    )
}