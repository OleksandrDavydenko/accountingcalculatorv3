import React, { useState } from "react";
import classes from './dropdown.module.scss';
import cn from 'classnames';
import { MenuButton } from '../menu_button/MenuButton';


export const Dropdown = ({ changeData, VATPercents, value }) => {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    function toggleDropdownHeandler() {
        setToggleDropdown(!toggleDropdown)
    }

     const listItems = VATPercents.map((percent) =>
        <li 
            key={percent}
            className={classes.item}
            onClick={() => changeData(percent)}
        >
            {percent + '%'}
        </li>
    ); 

    let active_cls = classes.dropdown_items;

    if (toggleDropdown) {
        active_cls = cn(active_cls, classes.active)
    }

    

    return (
        <div className={classes.dropdown_conteiner}>
            <div
                className={classes.input_view}
                onClick={toggleDropdownHeandler}
            >
                {value + '%'}
            <div className={classes.dropdown_button}>
                    <MenuButton/> 
            </div>
                <ul className={active_cls}>
                        {listItems}
                </ul>
            </div>
        </div>
    )
} 