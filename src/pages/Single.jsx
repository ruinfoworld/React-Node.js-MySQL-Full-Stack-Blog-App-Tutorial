import React, { useEffect, useState, useContext } from "react";
import EditImage from "../img/edit.png";
import DeleteImage from "../img/delete.png"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
    const [post, setPost] = useState({});
    const location = useLocation().pathname;    
    const postId = location.split("/")[2];

    const {currentUser} = useContext(AuthContext);
    const navigate  = useNavigate();
    useEffect(() => {
        const fetchPost = async () => {
            try{
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchPost();
    },[])


    const handleDelete = async () => {
        try{
            const res = await axios.delete(`/posts/${postId}`);
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="single">
            <div className="content">
                <img src={post?.img} alt=""/>
                <div className="user">
                    {post.userImage && <img src={post?.userImage} alt=""/>}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.created).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={EditImage} alt=""/>   
                        </Link>
                        <img onClick={handleDelete} src={DeleteImage} alt=""/>
                    </div>}
                </div>
                <h1>{post.title}</h1>
                {post.desc}
            </div>
            <Menu />
        </div> 
    )
}

export default Single;