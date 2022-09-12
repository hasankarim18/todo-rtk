import React from 'react'
import classes from './Ui.module.css'

const Success = ({ message, onClose }) => {
    return (
        <div className={classes.success} >
            <span onClick={onClose} > X </span>
            <div>

            </div>
            <p>   Success or error message </p>
        </div>
    )
}

export default Success