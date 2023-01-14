import React, { useContext } from 'react'
import logo from './logo.png';
import logoutLogo from './logoutBtn.png';
import loginLogo from './login.png';
import classes from './header.module.scss'
import { Context } from "../../../index";
import { useAuthState } from 'react-firebase-hooks/auth'
/* import firebase from 'firebase/compat/app'
import { doc, setDoc } from "firebase/firestore";  */
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/constRoutes';

export const Header = () => {

    const {auth, /* firestore */} = useContext(Context)
    const [user] = useAuthState(auth)

/*     const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log('user =>', user);
        //записываем пользователя в БД
        await setDoc(doc(firestore, "users", user.uid), {
            displayName: user.displayName,
            photoURL: user.photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email: user.email,
            phoneNumber: user.phoneNumber
        });
    } */


    return (
        <header className={classes['App-header']}>
            <div className={classes.container}>
                <div className={classes.logo_conteiner}>
                    <img 
                    src={logo} 
                    className={classes["App-logo"]} 
                    alt="UAbuh-logo" 
                    />
                    <p>Accounting Calculator</p>
                </div>
                <div>
                    {user ?
                        <div>
                            <span className={classes.user_name}>
                                {user.displayName}
                            </span>
                            <button 
                                className={classes.login_button} 
                                onClick={()=> auth.signOut()}
                            >Вийти
                            <img className={classes.img_log} src={logoutLogo} alt='logout_img'
                            />
                            </button>
                        </div>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <button 
                                /* onClick={login}  */
                                className={classes.login_button}
                            >
                                Увійти
                            <img className={classes.img_log} src={loginLogo}alt='login_img'/>
                            </button>
                        </NavLink>
                    }
                </div>
            </div>
        </header>
    )
} 