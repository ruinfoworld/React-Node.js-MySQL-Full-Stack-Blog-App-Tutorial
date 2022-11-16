import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";
    db.query(q,[req.query.cat], (error, data) => {
        if(error) return res.status(500).json(error);
        res.status(200).json(data);
    })
}

export const getPost = (req,res) => {
    const q = "SELECT p.id, u.`username`, p.`title`, p.`desc`, p.`img`,u.`img` as userImage, p.`created`,p.`cat` FROM users u JOIN posts p ON p.uid = u.id where p.id = ? ";

    db.query(q, [req.params.id], (err , data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data[0]);
    })

}

export const addPost = (req,res) => {
    res.json("From the Controller!!!!");
}

export const deletePost = (req,res) => {

    const token = req.cookies.access_token;
    if(!token) return res.status(500).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(403).json('Token is not valid!')

        const q = "DELETE FROM posts WHERE id = ? AND uid = ?";
        db.query(q,[req.params.id, userInfo.id], (err, data) => {
            if(err) return res.status(403).json("You can delete your post only!");

            return res.json("Post has been deleted!");
        })
    })
}

export const updatePost = (req,res) => {
    res.json("From the Controller!!!!");
} 