import React, {useContext} from "react";
import logo from "../img/logo.png";
import {Link} from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {

    const {currentUser, logout} = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} className="logoimg" alt=""/>
                </div>
                <div className="links">
                    <Link to="/?cat=art" className="link"><h6>ART</h6></Link> 
                    <Link to="/?cat=science" className="link"><h6>Science</h6></Link> 
                    <Link to="/?cat=technology" className="link"><h6>Technology</h6></Link> 
                    <Link to="/?cat=cinema" className="link"><h6>Cinema</h6></Link> 
                    <Link to="/?cat=design" className="link"><h6>Design</h6></Link> 
                    <Link to="/?cat=food" className="link"><h6>Food</h6></Link> 
                    <span>{currentUser?.username}</span>
                    {currentUser ? <span onClick={logout}>logout</span> : <Link className="link" to="/login">Login</Link>}
                    <span className="write"><Link to="/write" className="link">Write</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;