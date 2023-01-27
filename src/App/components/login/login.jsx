import React, { useContext } from 'react'
import { Context } from '../../../index'
import firebase from 'firebase/compat/app';
import { doc, setDoc } from "firebase/firestore";
import classes from '../header/header.module.scss';
import loginLogo from '../header/login.png';



export const Login = () => {

    const {auth, firestore} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        // eslint-disable-next-line
        const {user} = await auth.signInWithPopup(provider)


        //записываем пользователя в БД
        await setDoc(doc(firestore, "users", user.uid), {
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email: user.email,
            phoneNumber: user.phoneNumber
        });

    

    }

return (
    <div style={{textAlign: 'center'}}>
        <p style={{ fontSize: 40 }}>Ласкаво просимо!</p>
        <p style={{ fontSize: 20, paddingBottom: 20 }}>Для того щоб користуватись усіма можливостями сайту необхідно зареєструватись/увійти до ресурсу</p>
        
        <button
            className={classes.login_button}
            style={{width: 150, height: 45}}
            onClick={login}>
            LOGIN
            <img className={classes.img_log} src={loginLogo}alt='login_img'/>
        </button>
    </div>
)
}