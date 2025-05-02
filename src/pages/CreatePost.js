import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../utils/Editor";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null); 
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();

    if (!files || files.length === 0) {
      alert("Please select a file before submitting.");
      return;
    }

    
    console.log("Files:", files);

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);

    
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }
    
    const response = await fetch("https://thewondererspenbackend.onrender.com/post", {
      method: "POST",
      body: data,
      credentials: "include", 
    });

    if (response.ok) {
      setRedirect(true);
    } else {
      console.error("Error while creating post:", response.statusText);
    }
  }

  
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="create-post-container">
    <form onSubmit={createNewPost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input 
        type="file" 
        onChange={(ev) => setFiles(ev.target.files)} 
        accept="image/*" 
      />
      <Editor value={content} onChange={setContent} />
      <button style={{ marginTop: "5px" }}>Create post</button>
    </form>
    </div>
  );
}
