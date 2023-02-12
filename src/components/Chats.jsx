import React from "react";

export default function Chats(props) {

    return(
        <div className="chat-container">
            {props.data.map(value => <div >
                <fieldset style={{color: "white"}} className={value.uid === props.uid ? "send" : "receive"}>
                    <legend>{value.name}</legend>
                <p>
                    {value.text}
                </p>
                </fieldset>
            </div>)}
        </div>
    )
}
