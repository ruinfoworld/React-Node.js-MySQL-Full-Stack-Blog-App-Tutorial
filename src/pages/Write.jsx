import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";
import React, {useState} from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from "react-router-dom";

const Write = () => {
    const state = useLocation().state;
    const [title, setTitle] = useState(state?.title || "");
    const [desc, setDesc] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const upload = async () => {
        try{
            const formInfo = new FormData();
            formInfo.append("file", file);

            const res = await axios.post("/upload/", formInfo);
            return res.data;
        }catch(err){    
            console.log(err)
        }
    };
    const handleSubmit = async e => {
        e.preventDefault();
        const imgUrl = upload();
        state ? await axios.put(`/posts/${state.id}`, {
            title : title,
            desc : desc,
            img : file ? imgUrl : "",
            cat : cat
        }) : await axios.post(`/posts/`, {
            title : title,
            desc : desc,
            img : file ? imgUrl : "",
            cat : cat
        })
    }
    
    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={desc} onChange={setDesc} />
                </div>

            </div>
            <div className="menu">
                <div className="item">
                    <h1>Published</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display:"none"}} type="file" name="" id="file" onChange={(e) => setFile(e.target.files[0])}/>
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button onClick={handleSubmit}>{state?.title ? "Update" : "Publish" }</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" checked = {cat === 'art'} onChange={(e) => setCat(e.target.value)} name="cat" value="art" id="art"/>
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked = {cat === 'science'} onChange={(e) => setCat(e.target.value)} name="cat" value="science" id="Science"/>
                        <label htmlFor="Science">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked = {cat === 'technology'} onChange={(e) => setCat(e.target.value)} name="cat" value="technology" id="Technology"/>
                        <label htmlFor="Technology">Technology</label>
                        </div>
                    <div className="cat">
                        <input type="radio" checked = {cat === 'cinema'} onChange={(e) => setCat(e.target.value)} name="cat" value="cinema" id="Cinema"/>
                        <label htmlFor="Cinema">Cinema</label>
                    </div>    
                    <div className="cat">
                        <input type="radio" checked = {cat === 'design'} onChange={(e) => setCat(e.target.value)} name="cat" value="design" id="Design"/>
                        <label htmlFor="Design">Design</label>
                        </div>
                    <div className="cat">
                        <input type="radio" checked = {cat === 'food'} onChange={(e) => setCat(e.target.value)} name="cat" value="food" id="Food"/>
                        <label htmlFor="Food">Food</label>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Write;