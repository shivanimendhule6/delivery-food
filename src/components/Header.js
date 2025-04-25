import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() =>{
const [btnNameReact, setBtnNameReact] = useState('Logout');
const onlineStatus = useOnlineStatus();
return(
    <div className="header"> 
        <div className="logo-container">
            <img src={ LOGO_URL } alt="App Logo" className="logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status : { onlineStatus? "✅" : "🔴" }</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact US</Link></li>
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