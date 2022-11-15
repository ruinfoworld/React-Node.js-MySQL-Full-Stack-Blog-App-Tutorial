import { db } from "../db.js";

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";
    db.query(q,[req.query.cat], (error, data) => {
        if(error) return res.json(error);
        res.status(200).json(data);
    })
}

export const getPost = (req,res) => {
    const q = "SELECT u.`username`, p.`title`, p.`desc`, p.`img`,u.`img` as userImage, p.`created` FROM users u JOIN posts p ON p.uid = u.id where p.id = ? ";

    db.query(q, [req.params.id], (err , data) => {
        if(err) return res.json(err);
        return res.status(200).json(data[0]);
    })

}

export const addPost = (req,res) => {
    res.json("From the Controller!!!!");
}

export const deletePost = (req,res) => {
    const q = "DELETE FROM POST WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err);

        res.status(200).json("Post has been deleted successfully!!!!");
    })
}

export const updatePost = (req,res) => {
    res.json("From the Controller!!!!");
} 