import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({cat}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchPosts();
    }, [cat])

    // const posts = [
    //     {
    //         id : 1,
    //         title : "Post 1",
    //         desc : "Post 1 Description",
    //         img: "http://localhost:3000/static/media/logo.1ce361e9c401ffa2ea81.png"
    //     },
    //     {
    //         id : 1,
    //         title : "Post 2",
    //         desc : "Post 2 Description",
    //         img: "http://localhost:3000/static/media/logo.1ce361e9c401ffa2ea81.png"
    //     },
    //     {
    //         id : 1,
    //         title : "Post 3",
    //         desc : "Post 3 Description",
    //         img: "http://localhost:3000/static/media/logo.1ce361e9c401ffa2ea81.png"
    //     },
    //     {
    //         id : 1,
    //         title : "Post 4",
    //         desc : "Post 4 Description",
    //         img: "http://localhost:3000/static/media/logo.1ce361e9c401ffa2ea81.png"
    //     }
    // ]

    return(
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt=""/>
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu;