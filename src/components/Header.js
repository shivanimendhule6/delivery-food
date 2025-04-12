import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header =() =>{
const [btnNameReact, setBtnNameReact] = useState('Logout');
return(
    <div className="header"> 
        <div className="logo-container">
            <img src={ LOGO_URL } alt="App Logo" className="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>cart</li>
                <button className="loginBtn" onClick={() =>{
                    btnNameReact === 'Login'  ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                }}>{btnNameReact}</button>
            </ul>
        </div>
    </div>
);

};

export default Header;