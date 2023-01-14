import React from 'react'
import classes from './menuButton.module.scss'

export const MenuButton = ({toggleHeandler, toggleState}) => {

    return(
        <div
            onClick={toggleHeandler}
            className={classes.hamburger}
        >
            <span className={classes.stick} ></span>
            <span className={classes.stick}></span>
            <span className={classes.stick}></span>
        </div>
    )
}