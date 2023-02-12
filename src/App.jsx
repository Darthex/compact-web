import React from "react";
import SignIn from "./components/SignIn.jsx";

import {initializeApp} from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import LogIn from "./components/LogIn.jsx";
import MainPage from "./components/MainPage.jsx";
import {useAuthState} from "react-firebase-hooks/auth";

export default function App() {
    const [bool, setBool] = React.useState(false)
    const [cred, setCred] = React.useState({
        name: "",
        email: "",
        password: ""
    })

    initializeApp({
        apiKey: "AIzaSyC80O-bbmUfmZ1KtVfSjL5SQZd-4ZAkhAQ",
        authDomain: "fir-2d336.firebaseapp.com",
        projectId: "fir-2d336",
        storageBucket: "fir-2d336.appspot.com",
        messagingSenderId: "852338299358",
        appId: "1:852338299358:web:3d5b40477224600481cd4f",
        measurementId: "G-8D68YR7Q2K"
    })

    const auth = getAuth()
    const uid = auth.currentUser
    const [user] = useAuthState(auth)

    function handleChange(e) {
        setCred(prevState => {
            return {
                ...prevState, [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit2() {
        signInWithEmailAndPassword(auth, cred.email, cred.password)
            .then(() => {
                console.log("LoggedIn")
                setCred(prevState => {
                    return {
                        name: "",
                        email: "",
                        password: ""
                    }
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    function handleSubmit() {
        createUserWithEmailAndPassword(auth, cred.email, cred.password)
            .then(() => { auth.currentUser &&
                updateProfile(auth.currentUser, {
                    displayName: cred.name
                })
            })
            .then((userCred) => {
                setCred(prevState => {
                    return {
                        name: "",
                        email: "",
                        password: ""
                    }
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    function handleNew() {
        setCred(prevState => {
                return {
                    name: "",
                    email: "",
                    password: ""
                }
            }
        )
        setBool(true)
    }

    function handleSignOut() {
        auth.currentUser && auth.signOut()
    }

    return (
        <div>
            {
                user ?
                    <MainPage signOut={handleSignOut} uid={uid} dName={auth.currentUser.displayName}/>
                    :
                    bool ?
                        <SignIn change={handleChange} submit={handleSubmit} name={cred.name} email={cred.email}
                                pass={cred.password}/>
                        :
                        <LogIn change={handleChange} submit={handleSubmit2} new={handleNew} email={cred.email}
                               pass={cred.password}/>
            }
        </div>
    )
}
