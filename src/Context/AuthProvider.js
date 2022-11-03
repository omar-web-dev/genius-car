import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [error, setError] = useState()

    const createUserEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, courantUser => {
            console.log(courantUser)
            setUser(courantUser)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        createUserEmailPassword,
        error,
        setError
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;