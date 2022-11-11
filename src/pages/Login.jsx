import React, { useState, useContext } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from "../context/authContext";

const Login = () => {
    const [inputs, setInputs] = useState({
        username : '',
        password : ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login(inputs)
            navigate("/");
        }catch(err){
            setError(err.response.data);
        }
    }
    return (
        <div className="auth">
        <h1>Login</h1>
        <form>
            
            <input type="text" name="username" placeholder="Username" required value={inputs.username} onChange={(e) => handleChange(e)}/>
            <input type="password" name="password" placeholder="Password" required value={inputs.password} onChange={(e) => handleChange(e)}/>
            <button onClick={handleSubmit}>Login</button>
            { error && <p>{error}</p>}
            <span>Don't you have an account?  <Link to="/register">Register</Link></span>
        </form>
        </div>
    )
}

export default Login;