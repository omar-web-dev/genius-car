import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [status, setStatus] = useState()

    const createUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInEmailPassword = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth) 
      };
      

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, courantUser => {
            setUser(courantUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])


    const authInfo = {
        user,
        createUserEmailPassword,
        error,
        setError,
        singInEmailPassword,
        logOut,
        status,
        setStatus,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;