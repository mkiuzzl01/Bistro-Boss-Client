import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const loginUser = (email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const updateUser = (name,photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            if(currentUser){
                //get token store to cookies;
            }else{
                //do something
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const shareTools ={
        user,
        loading,
        createUser,
        loginUser,
        updateUser,
        logout,
        setUser,
        googleLogin
    }
    return (
        <div>
            <AuthContext.Provider value={shareTools}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;