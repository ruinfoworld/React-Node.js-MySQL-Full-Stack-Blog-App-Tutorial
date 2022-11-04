import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username : "",
        email: "",
        password : ""
    });
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("auth/register", inputs);
            navigate("/login")
        }catch(err){
            console.log(err, "Error")
            setError(err.response.data);
        }
    }
    console.log(inputs,"dfasad")
    return (
        <div className="auth">
        <h1>Login</h1>
        <form>
            
            <input type="text" placeholder="Username" onChange={(e) => handleChange(e)} required name="username" value={inputs.username}/>
            <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)} required  value={inputs.email}/>
            <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} required  value={inputs.password}/>
            <button onClick={handleSubmit}>Register</button>
            {error && <p>{error}</p>}
            <span>Already have an account?  <Link to="/login">Login</Link></span>
        </form>
        </div>
    )
}

export default Register;