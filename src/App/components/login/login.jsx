import React, { useContext } from 'react'
import { Context } from '../../../index'
import firebase from 'firebase/compat/app';
import { doc, setDoc } from "firebase/firestore"; 



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
        <p style={{fontSize: 40}}>LOGIN PAGE</p>
        <button onClick={login}>Google Signin</button>
    </div>
)
}