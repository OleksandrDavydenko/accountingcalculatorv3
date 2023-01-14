import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './navItems.module.scss';

export const NavItems = () => {
    return(
        <ul className={classes.nav_container}>
            <li className={classes.nav_element}>
                <NavLink 
                    className={classes.nav_item} 
                    exact={true} 
                    to="/"
                >Розрахунок ЗП
                </NavLink>
            </li>
            <li className={classes.nav_element}>
                <NavLink 
                    className={classes.nav_item} 
                    exact={true} 
                    to="/VAT"
                >Розрахувати ПДВ
                </NavLink>
            </li>
             <li className={classes.nav_element}>
                <NavLink 
                    className={classes.nav_item} 
                    exact={true} 
                    to="/rent"
                >Розрахунок оренди МСФЗ
                </NavLink>
            </li>
        </ul>
    )
} 