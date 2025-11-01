import React, { useState } from "react";
import { useCreatePostMutation } from "../../../redux/api/postsApi";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createPost] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content }).unwrap();
      alert("Post created successfully!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      alert("Failed to create post.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default CreatePost;
