import React from 'react'
import classes from './Ui.module.css'

const Success = ({ message, onClose }) => {
    return (
        <div className={classes.error} >
            <span onClick={onClose} > X </span>
            <div>

            </div>
            <p>   {message} </p>
        </div>
    )
}

export default Success