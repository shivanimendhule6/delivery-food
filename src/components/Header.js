import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() =>{
const [btnNameReact, setBtnNameReact] = useState('Logout');
const onlineStatus = useOnlineStatus();
return(
    <div className="header flex justify-between p-2 mb-7 drop-shadow-lg items-center bg-orange-100">
        <div className="logo-container w-20">
            <img src={ LOGO_URL } alt="App Logo" className="logo"/>
        </div>
        <div className="nav-items">
            <ul className="flex gap-4 items-center">
                <li>Online Status : { onlineStatus? "✅" : "🔴" }</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact US</Link></li>
                <li>cart</li>
                <button className="loginBtn px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-400" onClick={() =>{
                    btnNameReact === 'Login'  ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                }}>{btnNameReact}</button>
            </ul>
        </div>
    </div>
);

};

export default Header;