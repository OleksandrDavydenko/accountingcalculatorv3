import React, { useState } from 'react';
import classes from './valueAddedTax.module.scss';
import {VATPercents} from './vatConfig'

import { Dropdown } from '../../UI/Dropdown/Dropdown';
import checkValue from '../../utils/checkValue';
import calculateVAT from './calculateVAT'


export const ValueAddedTax = () => {

    const [activePercent, setActivePercent] = useState(20);

    //'бумеранг', получаю значение со стейта c компонента дропдаун.
    const changedData = (percent) => {
        setActivePercent(percent)
    }

    let [config, setPConfig] = useState({ withoutVAT: "", VAT: "", withVAT: "", activePercent: activePercent });
    
    function handleWithoutVAT(event) {
        const checkedValue = checkValue(event.target.value)
        setPConfig(calculateVAT({ withoutVAT: checkedValue, activePercent}))
        console.log({ withoutVAT: checkedValue });
    }
     function handleVAT(event) {
        const checkedValue = checkValue(event.target.value)
        setPConfig(calculateVAT({ VAT: checkedValue, activePercent }))
        console.log({ VAT: checkedValue });
     }
    function handlewithVAT(event) {
        const checkedValue = checkValue(event.target.value)
        setPConfig(calculateVAT({ withVAT: checkedValue, activePercent }))
        console.log({ withVAT: checkedValue });
    }




return (
    <div >
        <h1>Розрахунок ПДВ</h1>
        <div className={classes.form_container}>
            <div className={classes.title_box}>
                <h6 className={classes.title}>%ПДВ:</h6>
            </div>
            <Dropdown
                changeData={changedData}
                VATPercents={VATPercents}
                value={activePercent}
            />
            <div className={classes.title_box}>
                <h6 className={classes.title}>Сума, без ПДВ:</h6>
            </div>          
            <input 
                type="text"
                placeholder="0.00"
                className={classes.input_view}
                value={config.newWithoutVAT || ""}
                onChange={handleWithoutVAT} 
            />
            <div className={classes.title_box}>
                <h6 className={classes.title}>Сума ПДВ:</h6>
            </div>          
            <input 
                type="text"
                placeholder="0.00"
                className={classes.input_view}
                value={config.newVAT || ""}
                onChange={handleVAT} 
            />
            <div className={classes.title_box}>
                <h6 className={classes.title}>Загальна сума, з ПДВ:</h6>
            </div>          
            <input 
                type="text"
                placeholder="0.00"
                className={classes.input_view}
                value={config.newWithVAT || ""}
                onChange={handlewithVAT} 
            />
            </div>
    </div>
)
}
