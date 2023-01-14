import React, { useState, useContext, useEffect} from 'react';
import classes from './rentCalculator.module.scss';
import { Context } from "../../../index";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Loader } from '../loader/Loader';
import {RentTableV6} from './rent_table/RentTableV6'
import firebase from 'firebase/compat/app'
import { doc, setDoc } from "firebase/firestore"; 


export const RentCalculator = () => {
    const [data, setData] = useState([])

    const {auth, firestore} = useContext(Context)

        const initialFieldValues = {
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        korespondentName: '',
        agreementNumber: '',
        aremeentDate: '',
        monthPayment: '',
    }
    let [incomeData, setIncomeData] = useState(initialFieldValues)
    
    const [user] = useAuthState(auth)

    const [dbData, loading] = useCollectionData(
        firestore.collection('users').doc(user.uid).collection("agreements")
    )
    useEffect(() => {
        setData(dbData)
    }, [dbData]);

    const sendData = async (obj) => {
        const timestamp =  String(Date.now())
        await setDoc(doc(firestore.collection('users').doc(user.uid).collection('agreements'), timestamp), obj);
    }

    if (loading) {
        return <Loader/>
    }


    const handleInputChange = e => {
        let {name, value} = e.target
        setIncomeData({
            ...incomeData,
            [name]: value
        })
    }
    const onButtonClick = (e) => {
        sendData(incomeData)
        setIncomeData(initialFieldValues)
    }

    return (
        <div className={classes.container}>
            <div>
                <input 
                    type="text"
                    placeholder="Назва орендодавця"
                    className={classes.input_view}
                    value={incomeData.korespondentName}
                    name='korespondentName'
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <input 
                    type="text"
                    placeholder="№ Договору"
                    className={classes.input_view}
                    value={incomeData.agreementNumber}
                    name='agreementNumber'
                    onChange={handleInputChange}
                    autoComplete="off"
               
                />
                <input 
                    type="date"
                    placeholder="дата договору"
                    className={classes.input_view}
                    value={incomeData.aremeentDate}
                    name='aremeentDate'
                    onChange={handleInputChange}

                />
                <input 
                    type="number"
                    placeholder="місячний платіж"
                    className={classes.input_view}
                    value={incomeData.monthPayment}
                    name='monthPayment'
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <button 
                    className={classes.add_button}
                    onClick={onButtonClick}
                >
                    Додати договір
                </button>
            </div>
            <RentTableV6 data={data} />
        </div>
    )

}


