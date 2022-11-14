import React, { useState } from "react";
import EditImage from "../img/edit.png";
import DeleteImage from "../img/delete.png"; 
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    const [post, setPost] = useState([]);
    const location = useLocation();
    console.log(location);

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
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus dolor sapien, ac sodales nibh pellentesque ut. </h1>
                    <p>Duis pulvinar turpis nec metus venenatis porta. Duis ultrices arcu fringilla, malesuada justo vel, accumsan augue. Nunc rhoncus metus a suscipit dapibus. Ut egestas tortor sed velit rutrum venenatis vel sed lorem. Sed suscipit viverra scelerisque. Duis quis fringilla justo. Pellentesque facilisis dolor et eros facilisis porttitor. Etiam faucibus mi nisi, ut elementum lectus posuere eget. Suspendisse hendrerit egestas massa. Nulla id nisi in elit dictum eleifend. Vestibulum gravida vehicula tellus. Etiam vestibulum odio a accumsan scelerisque. Morbi consequat euismod vestibulum. Cras quis luctus odio.</p>

                    <p>Cras rhoncus laoreet viverra. Donec rhoncus diam ornare finibus tristique. Curabitur et nibh erat. Curabitur ut magna sapien. Etiam sit amet ex vitae felis tristique congue eget vitae turpis. Maecenas eu nunc est. Quisque non interdum diam, id finibus est. Ut blandit odio eget urna aliquet, at tristique lacus volutpat. Mauris vitae quam at elit cursus placerat. Pellentesque quis ultricies ipsum. Nullam facilisis efficitur lorem, id sodales nulla viverra vel.</p>
                    
                    <p>Proin sit amet nisl sed ex consequat convallis sed vel odio. Aenean vitae interdum tellus, eget accumsan eros. Quisque blandit purus ac vehicula volutpat. Maecenas non ligula mi. Mauris egestas quis justo eu feugiat. Aliquam erat volutpat. Suspendisse scelerisque est et finibus consequat. Nam gravida leo vitae condimentum bibendum. Morbi a efficitur turpis. Aliquam massa dolor, rhoncus venenatis justo sit amet, rhoncus consectetur ex.</p>
            </div>
            <Menu />
        </div> 
    )
}

export default Single;