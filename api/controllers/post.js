import { db } from "../db.js";

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";
    db.query(q,[req.query.cat], (error, data) => {
        if(error) return res.json(error);
        res.status(200).json(data);
    })
}

export const getPost = (req,res) => {
    res.json("From the Controller!!!!");
}

export const addPost = (req,res) => {
    res.json("From the Controller!!!!");
}

export const deletePost = (req,res) => {
    res.json("From the Controller!!!!");
}

export const updatePost = (req,res) => {
    res.json("From the Controller!!!!");
} 