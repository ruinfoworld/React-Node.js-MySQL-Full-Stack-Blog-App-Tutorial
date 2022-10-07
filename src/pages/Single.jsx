import React from "react";
import EditImage from "../img/edit.png";
import DeleteImage from "../img/delete.png"; 
import { Link } from "react-router-dom";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="http://localhost:3000/static/media/logo.1ce361e9c401ffa2ea81.png" alt=""/>
                <div className="user">
                    <img src="http://localhost:3000/static/media/logo.1ce361e9c401ffa2ea81.png" alt=""/>
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={EditImage} alt=""/>   
                        </Link>
                        <img src={DeleteImage} alt=""/>
                    </div>
                </div>
            </div>
            <div className="menu">m</div>
        </div> 
    )
}

export default Single;