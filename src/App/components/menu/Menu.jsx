import React from 'react'
import cn from 'classnames'
import classes from './menu.module.scss'
import { useState } from 'react'
import { MenuButton } from '../../UI/menu_button/MenuButton'
import { NavItems } from './NavItems'

export const Menu = () => {
    const [toggle, setToggle] = useState(true)

    const toggleHeandler = () => {
        setToggle(!toggle)
    }

    let active_cls = classes.menu_container

    if (!toggle) {
        active_cls = cn(active_cls, classes.close)
    }

    return(
    <div className={active_cls} >
        <div 
            className={classes.btn_conteiner}
            onClick={toggleHeandler}
        >
            <p className={classes.title}>MENU</p>
            <div className={classes.menu_button_position}>
                <MenuButton 
                toggleHeandler={toggleHeandler} 
                toggleState={toggle}
                />
                    
            </div>
        </div>
        <NavItems toggleState={toggle} />
    </div>
    )
} 