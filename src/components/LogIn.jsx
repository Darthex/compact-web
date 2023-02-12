import React from "react";
import logo from "../images/logofinal.png"

export default function LogIn(props) {
    return (
        <div className="page1">
            <section className="sign-in">
                <img src={logo} alt="" className="logo"/>
                <div className="section">
                    <input type="text" placeholder="email" className="input" onChange={props.change} name="email"
                           value={props.email} autoComplete="off"/>
                    <input type="text" placeholder="password" className="input" onChange={props.change} name="password"
                           value={props.pass} autoComplete="off"/>
                    <button className="submit-button input" onClick={props.submit}>Submit</button>
                    <button className="new--button" onClick={props.new}>New ?</button>
                </div>
            </section>
        </div>
    )
}
