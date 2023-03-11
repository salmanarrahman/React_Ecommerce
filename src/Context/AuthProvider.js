import React, {createContext, useEffect, useState} from 'react';
import app from '../Firebase/Firebase.init'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

 const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setloading] = useState(true)

    const createUser = (email,password) => {

        return createUserWithEmailAndPassword(auth,email,password)

    }

    const login = (email,password) => {

        return signInWithEmailAndPassword(auth, email, password);

    }
     const logout = () => {

         return signOut(auth);

     }


     useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
            setUser(currentUser)
           setloading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[])


    const authInfo = {

        user,
        loading,
        createUser,
        login,
        logout

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;