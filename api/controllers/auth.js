import bcrypt from "bcryptjs";
import {db} from "../db.js";

export const register = async (req,res) => {
    
    console.log(req);
    //Check Existing user
    const q = "SELECT * FROM users WHERE email = ? or username = ?";
    await db.query(q,[req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");
    });

    // Hash the passsord and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //INSERT A USER
    const insertQuery = "INSERT INTO users(username,email, password) VALUES(?)";
    const values = [
        req.body.username,
        req.body.email,
        hash
    ]
    await db.query(insertQuery,[values], (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json("User has been added successfully!!!!")
    })

}

export const login = (req,res) => {
    
}

export const logout = (req,res) => {
    
}