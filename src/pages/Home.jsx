import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
    const [posts, setPosts] = useState([]);
    const cat  = useLocation().search;
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const response = await axios.get(`/posts${cat}`);
                setPosts(response.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchPosts();
    },[cat])
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
    return (
        <div className="home">
            <div className="posts">
                {posts && posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;