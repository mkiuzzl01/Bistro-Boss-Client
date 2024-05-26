import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosCommon from "../hooks/useAxiosCommon";
import daisyui from "daisyui";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosCommon = useAxiosCommon();

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
        const unsubscribe = onAuthStateChanged(auth, async currentUser=>{
            setUser(currentUser);

            if(currentUser){
                const userInfo = {email:currentUser.email}
                try {
                    const {data} = await axiosCommon.post('/jwt',userInfo)
                    // console.log(data);
                    localStorage.setItem('Token',data.token);
                } catch (error) {
                    console.log(error.message);
                }

            }else{
                localStorage.removeItem('Token')
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[axiosCommon])

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