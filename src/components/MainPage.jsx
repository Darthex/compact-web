import React from "react";
import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy
} from "firebase/firestore";
import Chats from "./Chats.jsx";
import sendButton from "../images/send.png"
import logout from "../images/logout.png"


export default function MainPage(props) {

    const db = getFirestore()
    const msgRef = collection(db, "messages")
    const [data, setData] = React.useState([])
    const [send, setSend] = React.useState('')

    function getUser() {

        onSnapshot(query(msgRef, orderBy('createdAt')), (snapshot) => {
            const items = []
            snapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setData(items)
        })
    }

    React.useEffect(() => {
        getUser()
    }, [])


    console.log("running")

    async function handleSubmit(e) {
        e.preventDefault()
        await addDoc(msgRef, JSON.parse(JSON.stringify({
            createdAt: Date.now(),
            text: send,
            uid: props.uid.uid,
            name: props.dName
        })))
        setSend('')
    }

    return (
        <div className="page2">
            <nav>
                <button onClick={props.signOut} className="sign-out"><img src={logout} alt="" className="send-image"/>
                </button>
            </nav>
            <Chats data={data} uid={props.uid.uid}/>
            <form onSubmit={handleSubmit} className="bottom-area">
                <input type="text" value={send} onChange={(e) => setSend(e.target.value)} className="message-field"
                       placeholder="Message"/>
                <button type="submit" className="send-button"><img src={sendButton} alt="" className="send-image"/>
                </button>
            </form>
        </div>
    )
}
