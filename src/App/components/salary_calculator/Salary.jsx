import React from 'react';
import classes from './salary.module.scss';
import { useState } from 'react';
import checkValue from '../../utils/checkValue';
import calculateValue from './calculateValue';

 export const Salary = () => {
  
     let [config, setPConfig] = useState({newDirtySalary: '', newPureSalary: '', newPdfo: '', newMilitaryTax: ''});
  
     function handleChangeDirty(event) {
        const checkedValue = checkValue(event.target.value)
        setPConfig(calculateValue({ dirtySalary: checkedValue }))
        console.log(calculateValue({ dirtySalary: checkedValue }));
    }

     function handleChangePure(event) {
        const checkedValue = checkValue(event.target.value)
        setPConfig(calculateValue({pureSalary: checkedValue}))
     }
     
     function handleChangePdfo(event) {
        const checkedValue = checkValue(event.target.value)
        setPConfig(calculateValue({ pdfo: checkedValue }))
        console.log(calculateValue({ pdfo: checkedValue }));
     }

     function handleMilitaryTax(event) {
        const checkedValue = checkValue(event.target.value)
        setPConfig(calculateValue({ militaryTax: checkedValue }))
        console.log(calculateValue({ militaryTax: checkedValue }));
     }


    return (
        <div >
            <h1>Розрахунок заробітної плати</h1>
            <div className={classes.form_container}>
                <div className={classes.title_box}>
                    <h6 className={classes.title}>Оклад:</h6>
                </div>
                <input
                    placeholder="0.00"
                    type="text" 
                    className={classes.input_view}
                    value={config.newDirtySalary}
                    onChange={handleChangeDirty} 
                />
                <div className={classes.title_box}>
                    <h6 className={classes.title}>На руки:</h6>
                </div>          
                <input 
                    type="text"
                    placeholder="0.00"
                    className={classes.input_view}
                    value={config.newPureSalary}
                    onChange={handleChangePure} 
                />
                <div className={classes.title_box}>
                    <h6 className={classes.title}>Податок з доходу фізичних осіб:</h6>
                </div>          
                <input 
                    type="text"
                    placeholder="0.00"
                    className={classes.input_view}
                    value={config.newPdfo}
                    onChange={handleChangePdfo} 
                />
                <div className={classes.title_box}>
                    <h6 className={classes.title}>Військовий збір:</h6>
                </div>          
                <input 
                    type="text"
                    placeholder="0.00"
                    className={classes.input_view}
                    value={config.newMilitaryTax}
                    onChange={handleMilitaryTax} 
                />
             </div>
        </div>
    )
}
