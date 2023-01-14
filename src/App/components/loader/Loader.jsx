import React from 'react'
import classes from './loader.module.scss'
import logo from '../header/logo.png';


export const Loader = () => {
    return (
        <div className={classes.loader_conteiner}>
            <img 
                src={logo} 
                alt="loader"
                className={classes["App-logo"]} 
            />
        </div>
    )
}