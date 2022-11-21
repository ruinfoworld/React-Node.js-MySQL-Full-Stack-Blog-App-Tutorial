import { upload } from "@testing-library/user-event/dist/upload";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useLocation } from "react-router-dom";
import Category from "./Category";

const Write = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [desc, setDesc] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();
  const upload = async () => {
    try {
      const formInfo = new FormData();
      formInfo.append("file", file);

      const res = await axios.post("/upload/", formInfo);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    state
      ? await axios.put(`/posts/${state.id}`, {
          title: title,
          desc: desc,
          img: file ? imgUrl : "",
          cat: cat,
        })
      : await axios.post(`/posts/`, {
          title: title,
          desc: desc,
          img: file ? imgUrl : state.img,
          cat: cat,
          created: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });

    navigate("/");
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={desc}
            onChange={setDesc}
          />
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
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>
              {state?.title ? "Update" : "Publish"}
            </button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <Category clabel="Art" cname="art" setCat={setCat} cat={cat} />
          <Category
            clabel="Science"
            cname="science"
            setCat={setCat}
            cat={cat}
          />
          <Category
            clabel="Technology"
            cname="technology"
            setCat={setCat}
            cat={cat}
          />
          <Category clabel="Cinema" cname="cinema" setCat={setCat} cat={cat} />
          <Category clabel="Design" cname="design" setCat={setCat} cat={cat} />
          <Category clabel="Food" cname="food" setCat={setCat} cat={cat} />
        </div>
      </div>
    </div>
  );
};

export default Write;
